const path = require('path');

// 获取文件名
const fpath = '/a/b/c/index.html';
const fullName = path.basename(fpath);
console.log(fullName);

// 移出文件拓展名
const nameWithoutExt = path.basename(fpath,'.html');
console.log(nameWithoutExt);
