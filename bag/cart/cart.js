
// var cart = [
//   {
//     img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/4/149e044NYLOPROF00001a_1.jpg",
//     desc: "Product 1",
//     min: 50,
//     max: 100
//   },
//   {
//     img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/4/149e044NYLOPROF00001a_1.jpg",
//     desc: "Product 2",
//     min: 75,
//     max: 150
//   },
//   {
//     img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/4/149e044NYLOPROF00001a_1.jpg",
//     desc: "Product 3",
//     min: 60,
//     max: 120
//   }
// ];



let cartt = JSON.parse(localStorage.getItem("cart"))

let maxprice=0;
let minprice=0;
let data = document.querySelector("#maindata")
// console.log(cart[0].price)
let totalprice = document.querySelector("#totalprice")
let sum = 0
let shopingbag = document.querySelector("#shopingbag")
shopingbag.innerText = "Shoping bag" + " " + "(" + cartt.length + ")"

// This is main function 
let max = 0
cartt.forEach(function (ele, index) {
  maxprice=maxprice+ ele.originalPrice;
  minprice=minprice+ +ele.afterDiscount;
 
  ele.min = +ele.min
  ele.max = +ele.max
  max += ele.max
 



  sum += ele.min
  let body = document.createElement("div")
  body.setAttribute("class", "body")
  let body1 = document.createElement("div")
  body1.setAttribute("class", "body1")
  let body2 = document.createElement("div")
  body2.setAttribute("class", "body2")

  let image = document.createElement("img")
  image.src = ele.img

  image.setAttribute("class", "image")
  let Name = document.createElement("h6")
  Name.innerText = ele.name;
  Name.setAttribute("class", "name")
  let btn = document.createElement("img")
  btn.addEventListener("click", function () {
    //fn(ele, index)
  localStorage.clear();
    console.log(cartt.splice(index,1))
   
   localStorage.setItem("cart",JSON.stringify(cartt))
   alert("Delte One Product")
   window.location.reload()
  })

  btn.src = "https://cdn-icons-png.flaticon.com/128/5974/5974771.png"
  btn.setAttribute("class", "delete")
  // This is two div in body2

  let qntdiv = document.createElement("div")
  qntdiv.setAttribute("id", "qnt")
  let prcdiv = document.createElement("div")
  prcdiv.setAttribute("id", "prc")
  // This is plus
  let plus = document.createElement("p")
  plus.innerText = "Quantity"
  plus.setAttribute("class", "Quantity")
  // This is quantity
  let Quantity = document.createElement("p")
  Quantity.innerText = ":"
  Quantity.setAttribute("class", "semiclone")

  // This is minus 
  let minus = document.createElement("p")
  minus.innerText = "1˅"
  minus.setAttribute("class", "num")
  // price 

  if (ele.max == undefined) {
    var omrp = ""
  }
  else {
    omrp = "₹" + ele.max
  }
  let mrp = document.createElement("p")
  mrp.innerText = ele.originalPrice;
  mrp.setAttribute("class", "mrp")
  let price = document.createElement("p")
  price.innerText = "₹" + ele.afterDiscount;
  price.setAttribute("class", "price")


  // These are append
  prcdiv.append(mrp, price)
  qntdiv.append(plus, Quantity, minus)
  body1.append(image, Name, btn)
  body2.append(qntdiv, prcdiv)
  body.append(body1, body2)
  data.append(body)
});
// console.log(mrpf)
totalprice.innerText = "₹" + sum

//this is delete Function
function fn(ele, index) { 
  event.preventDefault()
  //console.log(cartt.splice(index, 1))
  cartt.splice(index, 1);

  // localStorage.setItem("cart", JSON.stringify(product))

  localStorage.setItem("data", JSON.stringify(cartt))

  //window.location.reload();
  // console.log(cart)
}
// var removeButtons = document.querySelectorAll(".delete");
// removeButtons.forEach(function (button, index) {
//   button.addEventListener("click", function () {
//     fn(cartt[index], index);
//     console.log(cartt)
//   });
// });
// description 
// Calculate the discounted amount based on the coupon code
function calculateDiscountedAmount(total, couponCode) {
  if (couponCode === "DISCOUNT15") {
    return total - total * 0.15; // 15% discount
  }
  return total;
}
//console.log(maxprice-minprice);
let totaldisount=0;
// Get the elements for displaying the totals
var totalbag = document.querySelector(".totalbagf");
totalbag.innerText = "₹" + maxprice.toFixed(0); // Display total without decimal places
var bagdiscount = document.querySelector(".discountbagf");
bagdiscount.innerText = (maxprice - minprice ).toFixed(0); // Display total without decimal places
var subtotal = document.querySelector(".totalsubf");
subtotal.innerText = (minprice).toFixed(0); // Display total without decimal places
var discount = document.querySelector(".offdiscount");
discount.innerText=`- ₹${totaldisount}`;
var charge = document.querySelector(".chargef");
charge.innerText = "Free";
var grandtotal2 = document.querySelector(".grandtotal2f");
grandtotal2.innerText = "₹" + (minprice).toFixed(0); // Display total without decimal places

// Calculate the discounted amount based on the coupon code
function calculateDiscountedAmount(total, couponCode) {
  if (couponCode === "DISCOUNT15") {
   totaldisount=minprice-(total - total * 0.15).toFixed(0);
   discount.innerText=`- ₹${totaldisount}`;
   document.getElementById("totalprice").innerText = "₹" +( minprice-totaldisount);
  localStorage.setItem("GrandTotal" ,minprice-totaldisount)
  localStorage.setItem("discount",totaldisount)
 
    return (total - total * 0.15).toFixed(0); // 15% discount
  }
  return total;
}

// Apply coupon code logic when the Apply Coupon button is clicked
var applyCouponButton = document.getElementById("applyCouponButton");
applyCouponButton.addEventListener("click", function () {
  var couponCode = document.getElementById("couponCode").value;
  var discountedAmount = calculateDiscountedAmount((minprice-100), couponCode);
  grandtotal2.innerText = "₹" + discountedAmount;
  document.getElementById("grandtotal").innerText = "Grand Total";
  //document.getElementById("totalprice").innerText = "₹" + ((discountedAmount).toFixed(0));
});
document.getElementById("totalprice").innerText = "₹" +( minprice-totaldisount);
localStorage.setItem("GrandTotal",minprice)
localStorage.setItem("discount",totaldisount)
localStorage.setItem("subtotal",((minprice).toFixed()));
let proceed=document.querySelector(".proceed");
proceed.addEventListener("click",function(){
 if(minprice==0){
 alert("Add Poduct!")
 window.location.href="../../haircare.html"
 }
 else{
  window.location.href="./address.html";
 }
})
const backButton = document.getElementById('back');
        backButton.addEventListener('click', () => {event.preventDefault()
            const referrerPage = localStorage.getItem('referrerPage');
            if (referrerPage) {
            
                window.location.href = `../../${referrerPage}`;
              
            } else {
                // If referrerPage is not set, go to a default page
                window.location.href =" ../../index.html";
            }
        });