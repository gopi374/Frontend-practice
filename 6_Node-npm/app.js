const fs = require("fs");

//read data from files
fs.readFile("example.txt",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(data)
    }
})

//create and write data in file
fs.writeFile("example2.txt","hello from app js node js file handling",(err)=>{
    if(err) throw err;

    console.log("file created succeesfully !!")
})

//append data in file
fs.appendFile("example.txt","\nNew line added",(err)=>{
    if(err) throw err;

    console.log("Data Appended");
})

//deleting file
// fs.unlink("example.txt", (err) => {
//     if (err) throw err;

//     console.log("File deleted");
// });

//checking file exist 
if (fs.existsSync("example.txt")) {
    console.log("File exists");
} else {
    console.log("File does not exist");
}

//creating Directory
fs.mkdir("myFolder", (err) => {
    if (err) throw err;

    console.log("Folder created");
});

//reading directory content
fs.readdir(".", (err, files) => {
    if (err) throw err;

    console.log(files);
});