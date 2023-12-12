// document.getElementsByClassName("main_title")[0].style.color="red";
const products = document.getElementById("products");

const button = document.getElementById("main-action-button");
button.onclick = function () {
    products.scrollIntoView({behavior: "smooth"});
}

let links = document.querySelectorAll(".menu_item>a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function (){
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

let buttons = document.getElementsByClassName("product_button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function (){
        document.getElementById("order").scrollIntoView({behavior: "smooth"});
    }
}

let burger = document.getElementById("burger");
let name = document.getElementById("name");
let phone = document.getElementById("phone");
document.getElementById("order-action").onclick = function (){
    let hasError = false;
    [burger, name, phone].forEach(item => {
        if(!item.value){
            item.parentElement.style.background = 'red';
            hasError = true;
        } else {
            item.parentElement.style.background = '';
        }
    });
    if(!hasError){
        [burger, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ!")
    }
}


let prices = document.getElementsByClassName("products_item_price")
document.getElementById("change-currency").onclick = function (e){
    let currentCurrency = e.target.innerText;

    let newCurrency = "$";
    let coefficient = 1;

    if(currentCurrency === "$"){
        newCurrency = "₽";
        coefficient = 93.75;
    } else if (currentCurrency === "₽"){
        newCurrency = "BYN";
        coefficient = 3;
    }  else if (currentCurrency === 'BYN') {
        newCurrency = '€';
        coefficient = 0.9;
    }   else if (currentCurrency === '€') {
        newCurrency = '¥';
        coefficient = 6.9;
    }
    e.target.innerText = newCurrency;
    for(let i = 0; i < prices.length; i++){
        prices[i].innerText = +(prices[i].getAttribute("data-base-price") * coefficient).toFixed(1) + " " + newCurrency;
    }


}









