// console.log("hello");
const art = require('ascii-art');

art.font('hello world', "Doom", (err, renderredText)=> {
    if(err) {
        return;
    }
    console.log(renderredText);
});