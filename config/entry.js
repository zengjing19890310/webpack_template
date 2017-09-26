const path = require('path');
const fs = require('fs');
module.exports = {
    init : function (srcPath) {//入口配置
        let entry = {};
        //同步读取
        let files = fs.readdirSync(path.resolve(srcPath));
        if (files && files.length !== 0) {
            files.forEach(function (file, index) {
                entry[file] = path.resolve(srcPath, file, 'index.js');
            })
        }
        return entry;
    }
};