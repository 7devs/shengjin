var conf = require('../config.js'),
    wechat = require('../wechat.js');
module.exports = function(data){
    //event 类型
    var event = data.event.toLowerCase(),
        eventKey = data.eventkey;
    var reConcent;
    switch(event){
        case'click':
        switch(eventKey){
            case'menu1':
            reContent = 'menu1 clicked.';
            break;
            case'menu2':
            reContent = 'menu2 clicked.';
            wechat.sendByTemplate(data.fromusername, conf.wechat.template.test,{
                content:{
                    color:'#ff0000',
                    value:'测试内容。'
                }
            });
            break;
            default:
            reContent = '...';
        }
        break;
        case'pic_sysphoto':
        case'scancode_push':
        default:
        console.log(data);
        reContent = JSON.stringify(data);
        break;

    }
    return reContent;
}
