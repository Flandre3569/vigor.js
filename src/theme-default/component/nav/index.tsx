export function Nav() {
  return (
    <header relative="~" w="full">
      <div flex="~" justify="between" items="center" className="px-8 h-14">
        <div>
          <a href="/" className="w-full h-full text-1rem font-semibold flex items-center" hover="opacity-60">vigor.js</a>
      </div>
      <div flex="~">
        <div>普通菜单</div>
        <div>主题切换按钮</div>
        <div>github连接</div>
      </div>
      </div>
    </header>
  )
}