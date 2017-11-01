var date = new Date(null);
    date.setSeconds(msg.payload.uptime); // specify value for SECONDS here
    msg.payload = date.toISOString().substr(11, 8);
return msg;