const arr = [{
    brand: 'Samsung',
    model: 'S20',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Xiomi',
    model: 'note10',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000
},
{
    brand: 'Infinix',
    model: 'z10',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
},
{
    brand: 'Tecno',
    model: 'spark10',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
},
{
    brand: 'Iphone',
    model: '14',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
},
{
    brand: 'Oppo',
    model: 'F11',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Vivo',
    model: 'y20',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
},
{
    brand: 'Samsung',
    model: 's50',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
}]

let getDataFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'))
console.log('localstorage data' , getDataFromLocalStorage);
cartItems = []

let div = document.querySelector('#phones');
for(let i = 0; i < arr.length; i++){
    div.innerHTML += `
     <div class="card bg-light text-dark border  border-danger border-4" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${arr[i].brand} ${arr[i].model}</h5><hr  />
                <h5 class="card-title h6">Camera: ${arr[i].camera}</h5>
                <h5 class="card-title h6">Ram: ${arr[i].ram}</h5>
                <h5 class="card-title h6">Rom: ${arr[i].rom}</h5>
                <h5 class="card-title h6">Price: ${arr[i].price}</h5>
                <button class="btn btn-primary mt-2" onclick="addToCart(${i})">Add to cart</button>
            </div>
        </div>`
}

function addToCart(index){
    if (cartItems.includes(arr[index])) {
        arr[index].quantity += 1;
    } else {
        arr[index].quantity = 1
        cartItems.push(arr[index]);
    }
    console.log(cartItems)
}

let yourcartBtn = document.querySelector('#yourcart-btn');

yourcartBtn.addEventListener ('click' , function(){
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    window.location = 'yourcart.html'
})
