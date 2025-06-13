//Customers
const customers = document.querySelector('#customers')
customers.addEventListener('submit', async (e) => {
    e.preventDefault()
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const request = new Request('http://localhost:3000/api/customer/createCustomer', {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone })
    });

    try {
        const response = await fetch(request);
        const result = await response.json();
        console.log(result);
        alert("Create")
    } catch (error) {
        console.error("Error al crear cliente:", error);
    }
});


