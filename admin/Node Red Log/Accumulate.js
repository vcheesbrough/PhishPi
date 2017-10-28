// Use a fn context variable to track
// the output lines
if ( msg.payload === false ) {
    // This lets us reset the log list
    // if we want to, just inject a false payload
    var lines = [];
} else {
    var lines = context.get('jrnlLines')|| [];

    // Add the new output TO THE START
    // so that the latest output is at the top
    // of the displayed page
    
    // BUT we only want to display ACTUAL
    // NR log output not all the other stuff
    // that the journal outputs. Actual NR log
    // output starts with a date (numeric)
    if ( isNaN(parseInt(msg.payload.substr(0,1))) ) {
        // Not numeric at start so not NR output
        // ignore
    } else {
        lines.unshift(msg.payload);
    }
    
    // # lines could get VERY large so cause memory
    // issues, limit to 200
    if ( lines.length > 200 ) {
        // too big so drop the last element
        lines.pop();
    }
}

// save the total output in the context var
context.set('jrnlLines',lines);

// output all the lines to the UI template
msg.payload = lines;

return msg;