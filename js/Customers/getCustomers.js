//Get customers for table
const getCustomers = async () => {
    const customerTable =  document.getElementById('customerTable')
    const request = new Request ('http://localhost:3000/api/customer/getCustomers', {
        method:'GET',
        headers: {"Content-Type": "application/json",}})
        try {
            const response = await fetch(request)
            const customers = await response.json();
            console.log(customers)
            customers.forEach(customer => {
                customerTable.insertAdjacentHTML("beforebegin",
                `
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.phone}</td>
                <td>
                <a href="editCustomers.html?id=${customer.id}"> <img class="icon" src="/img/boton-editar.png" alt=""></a>
                <a href="#" class="btn-icon" onclick="deleteCustomer(${customer.id})"><img class="icon" src="/img/eliminar.png"></a>
                </td>
                `)
            });
        } catch (error) {
            console.error("error: ", error)
        }
    }

getCustomers();

