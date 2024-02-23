// Naive UI
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver  } from 'unplugin-vue-components/resolvers'

export default {
    plugins: [
        Components({
            dirs: ['/'],
            include: [/\.vue$/, /\.md$/],
            resolvers: [NaiveUiResolver ({ sideEffect: true })]
        })
    ],
    ssr: { noExternal: ['naive-ui', 'vueuc'] },
    css: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
}