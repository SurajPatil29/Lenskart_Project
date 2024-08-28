const express = require("express")
const connectDB = require("./config/db")
const errorHandler = require("./middlewares/errorHandler.middleware")
const dotenv = require("dotenv").config()
const cors = require("cors")
const signUpRouter = require("./routes/signUp.router")
const logger = require("./middlewares/morgan.middleware")
const profileRouter = require("./routes/profile.router")
const eyeglassesRoute = require("./routes/eyeGlasses.route")
const screenglassesRoute = require("./routes/screenGlasses.route")
const kidsglassesRoute = require("./routes/kidsGlasses.route")
const homeRoute = require("./routes/home.routes")
const auth = require("./middlewares/authentication.middleware")
const cartRouter = require("./routes/cart.route")
const favouriteRouter = require("./routes/favourite.routes")
const searchRouter = require("./routes/search.route")

const app = express()

const PORT = process.env.PORT || 3020

app.use(express.json())
app.use(logger)
app.use(cors({
    origin: "*"
}))


app.use("/user", signUpRouter)
app.use("/profile", auth, profileRouter)
app.use("/eyeGlasses", auth, eyeglassesRoute)
app.use("/screenGlasses", auth, screenglassesRoute)
app.use("/kidsGlasses", auth, kidsglassesRoute)
app.use("/cart",auth, cartRouter)
app.use("/favourite", auth, favouriteRouter)
app.use("/home", homeRoute)
app.use("/search", searchRouter)






connectDB().then(() => {
    console.log("Connected to the database");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(error => {
    console.error(`Failed to connect to the database: ${error.message}`);
    process.exit(1); // Exit process if database connection fails
})


app.use((req, res, next) => { // invalid url
    const error = new Error("Resource not found");
    error.statusCode = 404;
    next(error);
})

app.use(errorHandler)
