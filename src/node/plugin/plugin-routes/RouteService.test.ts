import { RouteService } from "./RouteService";
import { describe, test, expect } from "vitest";
import path from "path";
import { normalizePath } from "vite";

describe("RouteService", async () => {
  const testDir = normalizePath(path.join(__dirname, "fixtures"));
  const routeService = new RouteService(testDir);
  await routeService.init();

  test("conventional route service is testing...", () => {
    const routeMeta = routeService.getRouteData().map((item) => ({
      ...item,
      absolutePath: item.absolutePath.replace(testDir, "TEST_DIR"),
    }));
    expect(routeMeta).toMatchInlineSnapshot(`
      [
        {
          "absolutePath": "TEST_DIR/a.mdx",
          "routePath": "/a",
        },
        {
          "absolutePath": "TEST_DIR/guide/index.mdx",
          "routePath": "/guide/",
        },
      ]
    `);
  });

  test("generate route path code", async () => {
    expect(
      routeService.generateRoutesPath().replaceAll(testDir, "TEST_DIR")
    ).toMatchInlineSnapshot(`
      "
            import React from 'react';
            import loadable from '@loadable/component';
            const Route0 = loadable(() => import('TEST_DIR/a.mdx')); 
      const Route1 = loadable(() => import('TEST_DIR/guide/index.mdx')); 
            
            export const routes = [
              { path: '/a', element: React.createElement(Route0) },{ path: '/guide/', element: React.createElement(Route1) }
            ]
          "
    `);
  });
});
