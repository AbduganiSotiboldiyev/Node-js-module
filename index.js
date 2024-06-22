const http = require("http")
const fs = require('fs')
const path = require("path")


// base information
// const server = http.createServer((req, res) => {
//     console.log(req.url)

//     res.write("<h1> Salom Abdugani </h1>")
//     res.write("<h1>Never give up ok ,  </h1>")

//     res.end()
// })

// server.listen(3000, () =>{
//     console.log("Server has been started on port :3000")
// })

// making small project

const server = http.createServer((req,res) =>{
    if(req.method === "GET") {
        // res.writeHead(200 , {"Content-Type" : "text/html"})

        if(req.url === "/"){
            fs.readFile(path.join(__dirname, "templates" , "index.html"), "utf-8" , (err,content) => {
                if(err) throw new err

                res.end(content)
            })
        }else if(req.url ==="/about") {
            fs.readFile(path.join(__dirname, "templates" , "about.html"), "utf-8" , (err,content) => {
                if(err) throw new err

                res.end(content)
            })
        }else if(req.url ==="/contact") {
            fs.readFile(path.join(__dirname, "templates" , "contacts.html"), "utf-8" , (err,content) => {
                if(err) throw new err

                res.end(content)
            })
        }else if(req.url === "/api/admin") {
        res.writeHead(200 , {"Content-Type" : "text/jsoon"})

            const admin = {name : "Abdugani", job : "freelancer", country : "Uzbekistan"}
            res.end(JSON.stringify(admin))
        }

    } else if(req.method === "POST") {

        const email = []

        req.on('data', (data) => {
           
            email.push(Buffer.from(data))
            
        })

        req.on('end', () => {
            const message = email.toString().split("=")[1]
            // console.log(message)
            res.end(`Email successfully added : ${message}` )
        })


    }
})

server.listen(3000, () => {
    console.log("Server has been started on port :3000")
})