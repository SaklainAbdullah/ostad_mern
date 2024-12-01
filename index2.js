async function createProduct(){
    const body = {
        ProductNamme:"BUS",
        Qty:5
    }
    const res = await fetch("https://crud.teamrabbil.com/api/v1/CreateProduct",{
        method:"POST",
        headers: {'Content-TType':'application/json'},
        body: JSON.stringify(body)
    });
    const data = await res.json()
    console.log(data)
}
createProduct()