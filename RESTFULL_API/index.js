
const express = require('express')
const users = require('./MOCK_DATA.json')
const fs = require("fs")
const app = express();
const PORT = 3000

// Middleware
app.use(express.urlencoded({extended:false}))

// i can create my own middleware

// app.use((req,res,next) => {
//   console.log("From Middle Ware-1")
//   req.userName = 'Tushar_29' // see one interesting thing
//   next() // means call the next function express will auto matically understand 
// })

// app.use((req,res,next) => {
//   console.log("From Middle Ware-2")
//   console.log(req.userName) // you can now access this req object , you just change something with req object that's why you get this.. like this same way middleware "app.use(express.urlencoded({extended:false}))" do change something with req obj because before use this req,body was "undefind"
//   next() 
// })

app.use((req,res,next) => {
  fs.appendFile("./log.txt",`\n ${Date.now()} ${req.method} : ${req.path}` , (err,data) =>{
    next()
  })
})

// Server Side Rendering => Rendering HTML Page
app.get("/users",(req,res) => {
    const data = `
      <ul>
      ${users.map(user => `<li> ${user.first_name}</li>`).join('')}
      </ul>
    `
    res.send(data);
})
// REST_API => sending json Data => Client Side Rendering

app.get("/api/users",(req,res)=>{
   return res.json(users);
})
//This is Important observe flow..
app.get("/api/users/:id",(req,res) => {
   const id = Number(req.params.id); // from req.params when something comes always in string please NOTE that => have to convert it in number
   const user = users.find((user) => user.id === id) 
   return res.send(user)
})

app.post("/api/users",(req,res) =>{

  const body = req.body
  console.log(body)  // without "app.use(express.urlencoded({extended:false}))" this middleware express dont know how to handel data that's why undefined 
  users.push({...body,id : users.length+1})

  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(error,respon) =>{
    return res.json({status:"Success",id:users.length})
  })
})

//Edit User
app.patch("/api/users/:id",(req,res)=>{
  const updatedUserDetails = req.body
   const id = Number(req.params.id)
    
   const userIndex = users.findIndex((user) => user.id == id)
   
   users[userIndex] = {...users[userIndex],...updatedUserDetails}

   fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(err,data)=>{
    return res.json({status:"Success"})
   })
})


//Delete user
app.delete("/api/users/:id",(req,res)=>{
  
  const id = Number(req.params.id)
   
  const userIndex = users.findIndex(user => user.id == id)
      
  users.splice(userIndex,1); // array.splice(startIndex, deleteCount, ...itemsToAdd)

  // users.filter((user) => user.id != userIndex)
    
  fs.writeFile("./MOCK_DATA.json",JSON.stringify(users),(data,err)=>{
    return res.json({Status:"Success",msg:`${id} th user deleted!`})
  })

  
})


app.listen(PORT,()=>{
    console.log(`app is started at ${PORT}`)
})