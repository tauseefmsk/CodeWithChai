console.log("Start Macro")
setTimeout(()=>{
    console.log("Macro Task: SetTimeout");
},0);
console.log("End Macro")

//-------------------------
console.log("Start Micro");
Promise.resolve().then(()=>{
    console.log("Micro Task: Promise");
});

console.log("End Micro");
