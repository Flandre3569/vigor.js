import { expect, test } from "vitest";

test("add", () => {
  expect(1 + 1).toBe(2);
  // 保存快照
  expect("map".slice(1)).toMatchSnapshot();
  // 内联
  expect("map".slice(1)).toMatchInlineSnapshot('"ap"');
});
