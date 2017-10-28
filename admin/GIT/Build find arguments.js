var commandArgs = "";
msg.payload.forEach(function(entry) {
   commandArgs += "! -name \""+entry.label+"\"* " 
});
msg.findArgs = commandArgs;
return msg;