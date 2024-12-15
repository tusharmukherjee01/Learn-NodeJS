
const fs = require('fs')

// fs.writeFileSync('./test.txt',"Hey Tushar!")  // (file name, what you want to write in file) 
// fs.writeFileSync('./test.txt',"Hello Tushar!")

// fs.writeFile('./test.txt',"Hey Tushar Async!",(err) => {})


// =>>> READ:
//sync.. read
//  const res = fs.readFileSync("./test.txt")
// const res = fs.readFileSync("./test.txt","utf-8") // from where and 2nd parameter is encoding techniq  means you file can be in many format it supposed to change in a standard format thats is why
//  console.log(res)
/*
What is UTF-8?
UTF-8 (Unicode Transformation Format - 8-bit) is a character encoding standard that represents text in a universal format, capable of encoding all possible characters in the Unicode standard.
It uses 1 to 4 bytes to encode characters:
1 byte for most English characters (ASCII-compatible).
2–4 bytes for other characters (e.g., special symbols, emojis, non-Latin scripts).
Why Use "utf-8"?
Readable Output: By specifying "utf-8", the file's contents are interpreted as human-readable text. Without it, you would get raw binary data (a Buffer object).
Cross-Language Compatibility: UTF-8 supports multiple languages and special characters, making it suitable for global applications.
Default Encoding for the Web: UTF-8 is widely used in web standards, making it a good default choice.
If "utf-8" were omitted, the output (res) would be a Buffer object instead of a string.
*/
//async.. read
// fs.readFile("./test.txt","utf-8",(err,res) =>{
//     if(err){
//         console.log("ERROR",err);
//     }
//     else{
//         console.log(res)
//     }
// })

//AppendFile :
// fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString())

// fs.copyFileSync("./test.txt","./copy.txt")

// fs.unlinkSync("./copy.txt")

// console.log(fs.statSync("./test.txt"))

// fs.mkdirSync("my-docs/a/b",{recursive:true})


//SYNC Vs ASYNC

// console.log(1)

// const res = fs.readFileSync("./test.txt","utf-8");

// console.log(res)

// console.log(2)


console.log(1)

 fs.readFile("./test.txt","utf-8",(res)=>{
    console.log(res)
 })

console.log(res)

console.log(2)