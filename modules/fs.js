const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "template"), err => {
//     if(err) throw new Error()
//     console.log("File was created successfully")
// })


fs.writeFile(path.join(__dirname, "template", "plan.txt" ), "You have to work and study hard", err => {
    if(err) throw new Error()
    console.log("Plan was created successfully")
})

fs.appendFile(path.join(__dirname ,"template",  "plan.txt"), " for being successfull son, husband, brother and father", err => {
    console.log(err)
    if(err) throw new Error()

    console.log("New plan added successfully")
})


//************************* */ first way to read file **************************************//
// fs.readFile(path.join(__dirname, "template", "plan.txt"), (err,data) => {
//     if(err) throw new Error()

//     console.log(Buffer.from(data).toString())
// })

//************************* */ second way to read file **************************************//

fs.readFile(path.join(__dirname, "template", "plan.txt" ),'utf-8', (err,data) => {
    if(err) throw new Error()
    console.log(data)
})
