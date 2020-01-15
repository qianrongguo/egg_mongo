exports.keys = '12345';


exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
        '.tpl': 'nunjucks',
    },
};


exports.mongoose = {
    client: {
        url: 'mongodb://47.110.136.181： 27017/mydb',  //你的数据库地址，不要端口
        options: {
            useNewUrlParser: true,
        },
    }
}
