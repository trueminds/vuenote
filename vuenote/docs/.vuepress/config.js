module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        // logo: '/assets/img/logo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            },
            {text: 'External', link: 'http://google.com'}
        ],
        sidebar: 'auto'
    }
}