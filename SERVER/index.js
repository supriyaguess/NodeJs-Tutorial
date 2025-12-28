//const http = require("http");

const express = require("express");

const app = express();

app.get('/',(req,res) => {
    return res.send("Hello from Home Page");
});

app.get('/about', (req,res) => {
   return res.send("Hello from About Page" + 
    " hey " + 
    req.query.name +
     " you are " +
    req.query.age
);
});
app.listen(8000, () => console.log("Server Started!"));

//NODEJS EXPRESS just a framework internally http is used
/*function myHandler(req, res) {
  if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    
  
    fs.appendFile("log.txt",log, (err,data) => {
       switch (myUrl.pathname) {
        case "/":
            if(req.method === "GET") res.end("HomePage");
            break;
        case "/about":
            const username = myUrl.query.myname 
            res.end(`Hi, ${username}`);
           
            break;
        
        case '/search':
            const search  = myUrl.query.search_query;
            res.end("Here are your results for " + search);  
        
        case '/signup':
            if(req.method === "GET") res.end("This is a signup Form");
            else if(req.method === "POST") {
                //DB Query
                res.end("Sucess");
            }
        default:
            res.end("404 Not Found");
       }
    });
}

const myServer = http.createServer(app);

myServer.listen(8000, () => console.log("Server Started!"));*/
