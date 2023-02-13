import { test, expect } from "@playwright/test";

const siteUrl = "http://localhost:5174/";
// 开始e2e的测试
test("Verify that the page renders properly", async ({ page }) => {
  await page.goto(siteUrl);

  const res = await page.evaluate(async () => {
    const pageContent = document.body.innerText;
    return pageContent.includes("This");
  });

  expect(res).toBe(true);
});
