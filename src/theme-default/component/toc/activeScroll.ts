const NAV_HEIGHT = 60;

export function activeScroll() {
  const container = document.querySelector("#toc-container");
  const marker = document.querySelector("#toc-marker");

  if (!container) {
    return;
  }

  const setHeaderLink = () => {};
  window.addEventListener("scroll", setHeaderLink);

  // 最后的时候解除事件绑定，防止内存泄露
  return () => {
    window.removeEventListener("scroll", setHeaderLink);
  };
}

export function scrollToTarget(target: HTMLElement, isSmooth: boolean) {
  // getComputedStyle是拿到指定元素的计算属性，也就是拿到css样式里的数据，然后.paddingTop就获取到元素的上padding值。
  const targetPadding = parseInt(window.getComputedStyle(target).paddingTop, 10);
  // scrollY是返回文档在垂直方向已滚动的像素值。
  // getBoundingClientRect().top是返回元素距离可视窗口上方的距离。
  // NAV_HEIGHT本意是定义一个变量让其和nav的height值相同，nav是3.5rem，无法直接进行相减，因此我稍作了修改，改为了60像素。
  // scrollTo() 方法可以使界面滚动到给定元素的指定坐标位置。

  // 其实scrollY+getBoundingClientRect().top+targetpadding计算的就是一开始target元素距离顶端的height值。
  // 而需要移动的距离就是用这个值减去nav的height值。
  const targetTop =
    window.scrollY + target.getBoundingClientRect().top + targetPadding - NAV_HEIGHT;
  window.scrollTo({
    left: 0,
    top: targetTop,
    behavior: isSmooth ? "smooth" : "auto",
  });
}
