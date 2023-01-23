export default {
    themeConfig: {
        nav:[
            { text: 'HTML代码',link: '/guide/' },
            { text: '我叫文章归类2',link:'/config/'},
            { text: 'box test',link:'/frontend/'}
        ],
        sidebar: {
            '/guide/': [
                {
                    text:'HTML代码',
                    items: [
                        {text: '单行文本垂直对齐样式代码',link: '/guide/'},
                        {text: 'HTML基础代码',link: '/guide/one'},
                        {text: '设计Gecko渐变',link: '/guide/two'},
                    ]
                }
            ],
            '/config/': [
                {
                    text:'我叫文章归类2',
                    items: [
                        {text: 'Index',link: '/config/'},
                        {text: 'One',link: '/config/three'},
                        {text: 'Two',link: '/config/four'},
                    ]
                }
            ],
            '/frontend/': [
                {
                    text:'box test',
                    items: [
                        {text: 'Index',link: '/frontend/'},
                    ]
                }
            ],
        },
        siteTitle: 'Ineter-B_HIP的博客',
        Title: 'Ineter-B_HIP Blog',
        logo: 'https://cdn.retiehe.com/cached-7585debcceb568f4ec16db9c982c1a54/bbstar-xin/New2.0.png'
    },
};