async function getProductListFromBackEnd() {
    let res = await fetch("https://crud.teamrabbil.com/api/v1/ReadProduct")
    let data = await res.json()
    console.log(data)
}

getProductListFromBackEnd()
