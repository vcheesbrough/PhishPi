if (msg.commitmsg){
    msg.payload = '\"' + msg.commitmsg + '\" '+msg.findArgs;
} else {
    msg.payload = '\"auto commit ' + (new Date()) + '\"'+msg.findArgs;
}
return msg;