const express = require('express')
const router = express.Router()

var { products } = require('../data/products.json')

function generateUniqueId() {
    let unique = false;
    let newId;
    while (!unique) {
        newId = Math.floor(Math.random() * 10000) + 1;
        unique = !products.some(product => product.id === newId);
    }
    return newId;
}


router.get('/', async (req, res) => {
    try {
        const productArray = products
        if (!productArray) {
            return res.status(404).json({ error : "no products found"})
        }
        return res.status(200).json(productArray)
    } catch (error) {
        return res.status(500).json({error: "Internal error"})
    }
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(products)
    try {
        const product = await products.find(product => product.id == id)
        if (!product) {
            return res.status(404).json({ error : "no products found"})
        }
        return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(500).json({error : "server issue"})
    }
})

router.post('/', async (req, res) => {
    const { name, description, price } = req.body;

    try {
        const newId = generateUniqueId();

        let newEntry = {
            "name": name,
            "description": description,
            "price": price,
            "id": newId
        };

        products.push(newEntry); 

        return res.status(200).json(newEntry); 
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Server issue" });
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, description, price } = req.body;

    try {
        const productIndex = products.findIndex(product => product.id === Number(id));

        if (productIndex === -1) {
            return res.status(404).json({ error: "Product not found" });
        }

        const product = products[productIndex];
        product.name = name !== undefined ? name : product.name;
        product.description = description !== undefined ? description : product.description;
        product.price = price !== undefined ? price : product.price;

        return res.status(200).json(product);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Server issue" });
    }
});

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    console.log(products)
    try {
        const index = products.findIndex(product => product.id === Number(id));
        if (index === -1) {
            return res.status(404).json({ message: "Product not found" });
        }

        products.splice(index, 1);

        return res.status(200).json(products)

    } catch (error) {
        console.log(error)
        return res.status(500).json({error : "server issue"})
    }
})

module.exports = router;