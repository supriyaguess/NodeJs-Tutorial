const express =  require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");


const app = express();
const PORT = 8000;
//Middleware --Plugin
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req,res,next) => {
fs.appendFile(
    "log.txt", 
    `${Date.now()}: ${req.method}: ${req.path}\n`,
     (err,data) => {
     next(); 
    }
    );
    //console.log("Hello from middleware 1");
    //req.myUserName = "supriyasoni.dev"; 
    
});
app.use((req,res,next) => {
    console.log("Hello from middleware 2",req.myUserName);
    next();
});

//HTML Route
app.get('/users',(req,res) => {
    const html = `
    <ul>
       ${users.map(user => `<li>${user.first_name}</li>`).join("")}
    </ul>
    `;
    res.send(html);
});

//REST API Routes (JSON Response)
app.get("/api/users",(req,res) => {
    res.setHeader("X-MyNmae", "Supriya kumari");
    console.log(req.headers);
   return res.json(users);
});

app
   .route("/api/users/:id")
   .get((req,res) => {
     const id = Number(req.params.id);
     const user = users.find((user) => user.id === id);
     if(!user) return res.status(404).json({ error: "user not found"});
     return res.json(user);
})
.put((req,res) => {
    //Edit user with id
    return res.json({status: "Pending"})
})
.delete((req,res) => {
    //Delete user with id
    return res.json({status: "Pending"})
})


// CREATE USER
app.post("/api/users", (req, res) => {
    const body = req.body;
    if(
        !body || 
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender || 
        !body.job_title)
    {
        return res.status(400).json({ msg: 'All feilds are req..'});
}
    users.push({ ...body, id: users.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err,data) => {
        return res.status(201).json({ status: "success", id: users.length}); 
    });
   

   
});


app.patch("/api/users", (req,res) => {
    
    //TODO:changes in data of user
    return res.json({ status: "pending"});
});



app.listen(PORT, () => {
    console.log(`Server Started at PORT: ${PORT}`)
});