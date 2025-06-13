const deleteProduct = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/api/product/deleteProducts/${id}`, {
            method: 'DELETE',
        });
        const data = await response.json();
        console.log("Product eliminated: ", data)
        
        
    } catch (error) {
        console.error("Error fetch: ", error)

    }
}
deleteProduct();