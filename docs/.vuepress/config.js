module.exports = {
  base:'/',
  title: '学习笔记',
  description: 'Just playing around',
  themeConfig: {
	displayAllHeaders: true,
    sidebar: [
      {
        title: 'Java基础',   // 必要的
        path: '/java/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: true, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
		{
			title:"lambda表达式",
			path: '/java/lambda/'
		}
        ]
      }//,
      //{
      //  title: 'Group 2',
      //  children: [ /* ... */ ],
      //  initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      //}
    ]
  }
}