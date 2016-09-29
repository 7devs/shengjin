module.exports = function(data){
    var event = data.event.toLowerCase(),
        eventKey = data.eventkey;
    var reConcent;
    switch(event){
        case'click':
        swicth(eventKey){
            case'menu1':
            reContent = 'menu1 clicked.';
            break;
            case'menu2':
            reContent = 'menu2 clicked.';
            break;
            default:
            reContent = '...';
        }
        break;
        default:
        reContent = event;
        break;

    }
    return reContent;
}
