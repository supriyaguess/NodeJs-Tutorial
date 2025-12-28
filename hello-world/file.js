 const fs = require("fs");

//Syncc...
 // fs.writeFileSync("./test.txt", "Hey There");


 //Async
 //fs.writeFile("./test.txt","Hello world Async", (err) => {});

 //const result = fs.readFileSync("./contact.txt","utf-8");
 //console.log(result);
//async do not return any result means can't write const result = findf
//sync return result means can write const result = findf
// fs.readFile("./contact.txt","utf-8",(err,result) => {
//  if(err) {
//       console.log("Error",err);
//    } else {
 //      console.log(result);
   // }
 //});

// so it override if we write and read more than one input 
// so to deal with it we append also
fs.appendFileSync("./test.text",new Date().getDate().toLocaleString());
fs.appendFileSync("./test.text", `${Date.now()}hey there\n`);
fs.cpSync('./test.txt','./copy.txt');
fs.unlinkSync('./copy.txt');
console.log(fs.statSync('./test.txt'));
fs.mkdirSync("my-docss/a/b", { recursive: true});