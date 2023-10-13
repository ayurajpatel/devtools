const express = require("express")
const cors = require("cors")
const app = express()
app.listen(8080)


const generate_password = (length)=>{    //receive length
    password = ''
    pattern = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789!@#$%^&*"
    for(let i=0; i<length; i++)
    {
        let index = Math.floor(Math.random()*pattern.length)
        password += pattern[index]
    }
    return password
}
app.use(cors()) //app ke andar se use fun ko call krna hai and cors ka object create
app.get('/generate-password',(req,res)=>{
    let {length} = req.query
    if(!length) length=8
    const password = generate_password(length)  //send length
       res.status(200).json({
        success : true,
        password
    })
})
