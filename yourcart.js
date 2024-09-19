let getData = localStorage.getItem('cartItems');
let arr = JSON.parse(getData);

const div = document.querySelector('#phones');
const newDiv = document.querySelector('#total') 
const found = document.querySelector('#found') 

let totalAmount = 0

function renderItem(){
    if(arr == ''){
        console.log(arr)
        found.innerHTML = 'No Items Found.....'
        return
    }

    for(let i = 0; i < arr.length; i++){
        totalAmount += arr[i].price * arr[i].quantity
        div.innerHTML += `
     <div class="card bg-light text-dark border  border-danger border-4" style="width: 18rem;">
     <img src="${arr[i].image}" class="card-img-top" style = "width: 280px; height: 250px" alt="logo">
            <div class="card-body">
                <h5 class="card-title">${arr[i].brand} ${arr[i].model}</h5><hr  />
                <h5 class="card-title h6">Camera: ${arr[i].camera}</h5>
                <h5>Quantity: <button class="btn btn-primary mt-2" onclick = "addQuantity(${i})">+</button> ${arr[i].quantity} <button class="btn btn-primary mt-2" onclick="lessQuantity(${i})">-</button></h5>
                <h5 class="card-title h6">Price: ${arr[i].price}</h5>
                <button class="btn btn-danger mt-2" onclick="remove(${i})">Delete Item</button>
            </div>
        </div>`

    }

    newDiv.innerHTML = `Your Total Bill is = ${totalAmount}`
}

renderItem()

function addQuantity (index){
    arr[index].quantity += 1;
    
    console.log(arr)
    renderItem()
}

function lessQuantity (index){
    if(arr[index].quantity === 0){
        arr.splice(index , 1)
    }

    arr[index].quantity -= 1;
    renderItem()
}

function remove(index){
    arr.splice(index , 1)
    div.innerHTML = ''
    totalAmount = 0
    renderItem()
}
