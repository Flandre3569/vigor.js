import { resolveConfig } from "./config";
import path from "path";
import fs from "fs-extra";
import compression from "compression";
import sirv from "sirv";
import polka from "polka";

// 默认运行服务器端口号
const DEFAULT_SERVER_PORT = 9999;

export async function preview(root: string, { port }: { port?: number }) {
  const config = await resolveConfig(root, "serve", "production");
  const listenPort = port ?? DEFAULT_SERVER_PORT;
  const outputDir = path.resolve(root, "build");
  const notFoundPage = fs.readFileSync(path.resolve(outputDir, "404.html"), "utf8");

  // 资源压缩
  const compress = compression();

  // 处理静态资源
  const serve = sirv(outputDir, {
    etag: true,
    maxAge: 31536000, // 一年
    immutable: true,
    setHeaders(res, pathname) {
      if (pathname.endsWith(".html")) {
        res.setHeader("Cache-Control", "no-cache");
      }
    },
  });

  const onNoMatch: polka.Options["onNoMatch"] = (req, res) => {
    res.statusCode = 404;
    res.end(notFoundPage);
  };

  polka({ onNoMatch })
    .use(compress, serve)
    .listen(listenPort, (err) => {
      if (err) {
        throw err;
      }
      console.log(`Preview server is running at http://localhost:${listenPort}`);
    });
}
