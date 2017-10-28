if (msg.payload.commitmsg){
    msg.commitmsg = msg.payload.commitmsg;
}

msg.flowId = 'all';

return msg;