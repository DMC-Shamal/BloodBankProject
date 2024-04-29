const express = require("express")
const cors = require("cors")
const app = express()
const userRouter = require("./routes/user")
const hospitalRouter = require("./routes/Hospital")
const donorRouter = require("./routes/donors");
const needblood= require("./routes/needblood");


app.use(cors("*"))
app.use(express.json())


app.use("/user", userRouter)

app.use("/Hospital", hospitalRouter)
app.use("/donors", donorRouter)
app.use("/needblood",needblood);

app.listen(3000, "0.0.0.0", () => {
  console.log("Server started on port 3000")
})