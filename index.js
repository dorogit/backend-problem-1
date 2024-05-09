const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const productsRouter = require('./routes/products')

app.use('/products', productsRouter)

//First Path
app.get("/", async (req, res) => {
    return res.json({ message: "Hello, Neel!" });
});
  
const start = async () => {
    try {
        app.listen(3000, () => console.log("Server started on port 3000"));
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};
  
start();