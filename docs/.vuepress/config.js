module.exports = {
  title: 'Marlon\'s blog',
  description: '我的个人网站',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', {
      rel: 'manifest',
      href: '/photo.jpg'
    }],
    ['link', {
      rel: 'apple-touch-icon',
      href: '/photo.jpg'
    }],
  ],
  serviceWorker: true, // 是否开启 PWA
  base: '/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    nav: [ // 导航栏配置
      {
        text: 'php',
        link: '/php/'
      },
      {
        text: 'mysql',
        link: '/mysql/'
      },
      {
        text: 'vue',
        link: '/vue/'
      },
      {
        text: 'js',
        link: '/js/'
      },
      {
        text: 'html',
        link: '/html/'
      }
      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: {
      '/php/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'PHP程序员的技术成长规划'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // 回退(fallback)侧边栏配置
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
    
  }
};