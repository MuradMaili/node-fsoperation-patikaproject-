const fs=require('fs')
//create
 fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000} ', 'utf8', (err)=>{
     if(err) console.log(err)
     console.log("file success write")
 })
//read
 fs.readFile('password.txt','utf-8',(err,data)=>{
         if(err) console.log(err);
         console.log(data)
         console.log("file read")})
//option

fs.appendFile('app.js', 'console.log("salam")', 'utf8', (err)=>{
        if(err) console.log(err)
        console.log("file success changed")})

//delete
fs.unlink('app.js',(err)=>{
            if(err) console.log(err)
            console.log("file deleted")
        })