// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme"
import vitepressMusic from 'vitepress-plugin-music'
import 'vitepress-plugin-music/lib/css/index.css'

const playlist = [
  {
    name: '蓝雨',
    author: 'Jacky',
    file: '../../assets/musics/蓝雨.mp3',
  },
  {
    name: '挪威的森林',
    author: 'Jennie',
    file: '../../assets/musics/挪威的森林.mp3',
  },
  {
    name: '突然的自我 (Live)',
    author: 'Jennie',
    file: '../../assets/musics/突然的自我 (Live).mp3',
  },
]

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressMusic(playlist)
  }
}