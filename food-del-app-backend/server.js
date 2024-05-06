import express from "express"
import cors from "cors"



// app config
export const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})