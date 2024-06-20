const http = require("http")


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
        res.writeHead(200 , {"Content-Type" : "text/html"})
        res.end(`
            <h2> Send Email</h2>
            <form method = "post" action = "/" >
                <input name="email" type ="email" placeholder= "Enter your email">
                <button type = "submit">Send  email </button>
            </form>
        `)
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