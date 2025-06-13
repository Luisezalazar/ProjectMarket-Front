const deleteCustomer = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/customer/deleteCustomers/${id}`, {
      method: 'DELETE',
    });
    const data = await response.json();
    console.log("Cliente eliminado:", data);

    
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }


  } catch (error) {
    console.error("Error al hacer el fetch:", error);
  }
};
deleteCustomer();