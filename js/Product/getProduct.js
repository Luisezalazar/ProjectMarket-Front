const getProduct = async () => {
    const productTable = document.getElementById('productTable')
    const request = new Request('http://localhost:3000/api/product/getProducts', {
        method: 'GET',
        headers: { "Content-Type": "application/json", }
    })
    try {
        const response = await fetch(request)
        const product = await response.json();
        console.log(product)
        product.forEach(product => {
            productTable.insertAdjacentHTML("beforebegin",
                `
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.stock}</td>
                <td>
                <a href="editProducts.html?id=${product.id}"> <img class="icon" src="/img/avatar-de-usuario.png" alt=""></a>

                </td>
                `
            )
        })
    } catch (error) {
        console.error("error: ", error)
    }
}
getProduct();