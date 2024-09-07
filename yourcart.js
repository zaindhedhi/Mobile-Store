let getData = localStorage.getItem('cartItems');
let cartItem = JSON.parse(getData);
// console.log(cartItem)

const div = document.querySelector("#phones");

let totalAmount = 0;
function renderItems() {
    totalAmount = 0
    div.innerHTML = "";
    // console.log(cartItem)
    if (cartItem === null) {
        console.log("no item found")
        div.innerHTML = "no item found"
        return
    }
    for (let i = 0; i < cartItem.length; i++) {
        totalAmount += cartItem[i].price * cartItem[i].quantity

        console.log(cartItem[i].price , cartItem[i].quantity)
        div.innerHTML += `
        <div class="card bg-light text-dark border border-dark border-4" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">Model : ${cartItem[i].brand} ${cartItem[i].model}</h5><hr  />
                <h5 > Quantity: <button class = "btn btn-primary" onclick="addQuantity(${i}) ">+</button> ${cartItem[i].quantity} <button class = "btn btn-primary" onclick="lessQuantity(${i})">-</button></h5>
                <h5 class="card-title">Price: ${cartItem[i].price}</h5>
                <button class = "btn btn-danger" onclick="deleteItem(${i})" >Delete</button>
                </div>
            </div>
        `
    }

    console.log(totalAmount);
    
}
renderItems()

function deleteItem (index){ 
    cartItem.splice (index , 1)
    
    
    renderItems()
    console.log (cartItem)
    localStorage.setItem ('cartItems' , JSON.stringify(cartItem))
}



function addQuantity(index) {
    console.log("quantity added" , index);
    cartItem[index].quantity += 1
    console.log(cartItem)
    renderItems()
}

function lessQuantity(index) {
    console.log("quantity less" , index)
    cartItem[index].quantity -= 1
    renderItems()
}

