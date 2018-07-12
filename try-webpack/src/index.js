// 文件引用 顺序打包文件 依赖
// require('./style.less')
require('./styles/normalize')
require('./styles/index')

// const a = 1;
// console.log(a)
const format =require('utils/format')
const {log} = require('./utils')

// log('hello world')
log(format('hello world'))
document.querySelector('.superman').style.display='block'
log(_.map([1,2,3],(item)=>item*2))