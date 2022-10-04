const path = require('path');

// 获取文件拓展名
const fpath = '/a/b/c/index.html';
const fext = path.extname(fpath);
console.log(fext);