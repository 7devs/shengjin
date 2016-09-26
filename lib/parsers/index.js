module.exports = function(data){
    var msgType = data.msgtype;//提取消息类型
    var reContent;  //
    switch(msgType){
        case'text':
            reContengt = require('text-parser.js')(data.content);
        break;

        case'voice':
            reContent = require('voice-parser.js')(data.recognition);
        break;
        case'video':
        case'location':
        case'shortvideo':
        default:
            reContent = 'I have no idea.';
        break;
    }
    return reContent;
}