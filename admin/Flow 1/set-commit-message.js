if (msg.commitmsg){
    msg.payload = '\"' + msg.commitmsg + '\"';
} else {
    msg.payload = '\"auto commit ' + (new Date()) + '\"';
}
return msg;