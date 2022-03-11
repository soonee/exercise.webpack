import hello from './hello.js'
import world from './world.js'
import css from '../assets/style.css'
document.querySelector('#root').innerHTML = hello + ' ' + world
console.log('css', css)
