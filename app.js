const arr = [{
    brand: 'Samsung',
    model: 'S20',
    image: 'https://images-cdn.ubuy.co.in/633ffb857f54337866617eb5-samsung-galaxy-s20-ultra-5g-sm-g988b-ds.jpg',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Xiomi',
    model: 'note10',
    image: 'https://fdn.gsmarena.com/imgroot/news/21/03/redmi-note-10-in-for-review/phone/-1200w5/gsmarena_001.jpg',
    ram: 4,
    rom: 64,
    camera: '10 megapixel',
    price: 15000
},
{
    brand: 'Infinix',
    model: 'z10',
    image: 'https://cdn1.smartprix.com/rx-i7RCg1kry-w1200-h1200/7RCg1kry.jpg',
    ram: 2,
    rom: 16,
    camera: '5 megapixel',
    price: 15000
},
{
    brand: 'Tecno',
    model: 'spark10',
    image: 'https://media.wisemarket.com.pk/variant/inventory_99717.webp',
    ram: 12,
    rom: 512,
    camera: '25 megapixel',
    price: 15000
},
{
    brand: 'Iphone',
    model: '14',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHPC-SRPN-Pxe5IkWNhI4cgQ9b5BM8iCS7PQ&s',
    ram: 4,
    rom: 1024,
    camera: '30 megapixel',
    price: 15000
},
{
    brand: 'Oppo',
    model: 'F11',
    image: 'https://reviewit.pk/wp-content/uploads/2019/11/img_5707.jpg',
    ram: 8,
    rom: 256,
    camera: '20 megapixel',
    price: 15000
},
{
    brand: 'Vivo',
    model: 'y20',
    image: 'https://www.symbios.pk/image/cache/data/v/vivo-y20--500x500.jpg',
    ram: 4,
    rom: 64,
    camera: '8 megapixel',
    price: 15000
},
{
    brand: 'Samsung',
    model: 's50',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfyU7YC2ByY-FSXK4YUUImIYbuVIuU3ziPVg&s',
    ram: 50,
    rom: 1024,
    camera: '60 megapixel',
    price: 300000
}]

const getDataFromLocalStorage = JSON.parse(localStorage.getItem('cartItems'))
console.log('local Storage Data' , getDataFromLocalStorage)

cartItems = []
if(getDataFromLocalStorage != null){
    cartItems = getDataFromLocalStorage
}

let div = document.querySelector('#phones');
for(let i = 0; i < arr.length; i++){
    div.innerHTML += `
     <div class="card bg-light text-dark border  border-danger border-4" style="width: 18rem;">
     <img src="${arr[i].image}" class="card-img-top" style = "width: 280px; height: 250px" alt="logo">
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
    if(cartItems.includes(arr[index])){
        arr[index].quantity += 1
    }
    else{
    arr[index].quantity = 1
    cartItems.push(arr[index])
    }
    console.log(cartItems)

}

let checkOut = document.querySelector('#yourcart-btn')

checkOut.addEventListener('click' , function(){
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
    window.location = "yourCart.html"
})