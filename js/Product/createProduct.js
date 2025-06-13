//Product
const products = document.querySelector('#products')
products.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value
    const price = parseInt( document.getElementById('price').value)
    const stock = parseInt(document.getElementById('stock').value)

    const request = new Request('http://localhost:3000/api/product/createProduct', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, price, stock
        })

    })

    try {
        const response = await fetch(request);
        const result = await response.json();
        console.log(result)
    } catch (error) {
        console.error("Error al crear producto:", error);
    }

})