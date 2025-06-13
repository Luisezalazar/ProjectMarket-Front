//Search id
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

//Inputs
const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const phoneInput = document.getElementById('phone')

//Load data for customer

const getCustomerById = async () => {
    try {
        const response = await fetch(`http://localhost:3000/api/customer/getCustomers/${id}`)
        const data = await response.json();

        nameInput.value = data.name
        emailInput.value = data.email
        phoneInput.value = data.phone

    } catch (error) {
        console.error("Error getting customer: ", error)
    }
}
getCustomerById();

//Update data
const customer = document.querySelector('#editForm')
customer.addEventListener('submit', async (e) => {
    e.preventDefault();
    const updateCustomer = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value
    }
    try {
        const response = await fetch(`http://localhost:3000/api/customer/updateCustomers/${id}`, {
            method: 'PUT',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json",
            },
            body:JSON.stringify(updateCustomer)
        })
        const result = await response.json();
        console.log("Customer saved: ", result)
        window.location.href = "seeCustomers.html"
    } catch (error) {
        console.error("Error updated", error)
    }
})
