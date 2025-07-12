const fs = require("fs");
const path = require("path");

const dataFolder =path.join(__dirname,"data");

if(!fs.existsSync(dataFolder)){
    fs.mkdirSync(dataFolder);
    console.log("data folder created");
}
const filePath = path.join(dataFolder,'example.txt');
fs.writeFileSync(filePath,"hello form file.txt")
console.log("file created sussfully");

const readContentFromFile = fs.readFileSync(filePath,"utf8");
console.log('file content:', readContentFromFile)

fs.appendFileSync(filePath,'\nthis is a new line added to that fs');
console.log('new file content added')


const asyncFilePath = path.join(dataFolder,'async-example.txt');
fs.writeFile(asyncFilePath,'Hello, Async node js',(err)=>{
    if(err) throw err;
    console.log('Async file is crated successfully');
    fs.readFile(asyncFilePath,'utf8',(err,data)=>{
        if(err) throw err;
        console.log("Async file content:",data);
        
        fs.appendFile(asyncFilePath,'\nThis is a anotherline',(err)=>{
            if(err) throw err;
            console.log('new line added to async file ')
            fs.readFile(asyncFilePath,'utf8',(err,updateData)=>{
                if(err)throw err;
                console.log('update file content', updateData);
            })
        })
    });
});