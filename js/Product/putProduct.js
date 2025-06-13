//Search Id
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

//Inputs

const nameInput = document.getElementById('name')
const priceInput = document.getElementById('price')
const stockInput = document.getElementById('stock')


// Load data for product

const getProductById = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/product/getProducts/${id}`)
        const data = await response.json();

        nameInput.value = data.name
        priceInput.value = data.price
        stockInput.value = data.stock

    } catch (error) {
        console.error("Error getting product", error)
    }
}
getProductById();

// Update data
const products = document.querySelector('#editForm')
products.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updatedProduct = {
        name: nameInput.value,
        price: parseFloat(priceInput.value),
        stock: parseInt(stockInput.value)
    }

    try {
        const response = await fetch(`http://localhost:3000/api/product/updateProducts/${id}`, {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct)
        });
        const result = await response.json();
        console.log("Product Saved: ", result)
        window.location.href = "seeProducts.html";
    } catch (error) {
        console.error("Error updated", error)
    }
})