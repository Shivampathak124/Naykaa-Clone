// add cart data to this div
let cartContainer = document.getElementById("cartContainer");

var cartData=JSON.parse(localStorage.getItem("cart")) || [];
var cartCount=cartData.length;
var cartCountText=document.getElementById("cartCount");
cartCountText.textContent=cartCount;

  var h2totalItem=document.createElement("h2");
  var h2totalAmount=document.createElement("h2");
  h2totalAmount.setAttribute("id", "totalAmount");
  h2totalItem.setAttribute("id", "totalItems");

  var h1coupon=document.createElement("h1");
  h1coupon.setAttribute("id","billAmount");
  
  h2totalItem.textContent="Total items in cart :" +cartCount;
  h1coupon.textContent="Billed Amount:0";
  h2totalAmount.textContent="Total amount:0";


  
    var bill=document.getElementById("billContainer");
    bill.append(h2totalItem);
    bill.append(h2totalAmount);
    bill.append(h1coupon);

    var totalPrice=0;
    var applyCoupon=document.querySelector("#applyCoupon");
    applyCoupon.addEventListener("click", function(){
        var coupon=document.getElementById("coupon");
        if(coupon.value=="Masai15"){
            var billAmount=totalPrice-((totalPrice*15)/100);
            h1coupon.textContent="Billed Amount:" + billAmount.toFixed();
        }
    })

cartData.map((element, index) => {
  var mainDiv=document.createElement("div");
  var imgData=document.createElement("img");
  var nameData=document.createElement("p");
  var originalPrice=document.createElement("p");
  var discountedPrice=document.createElement("p");
  var addToCart=document.createElement("button");
  totalPrice=totalPrice+ (+element.discountedPrice);
  addToCart.addEventListener("click", function(){
    // cartData=JSON.parse(localStorage.getItem("cart")) || [];
    event.target.parentNode.remove();
    cartData.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    cartCount=cartCount-1;
    cartCountText.textContent=cartCount;
    h2totalItem.textContent="Total items in cart :" +cartCount;
    totalPrice=totalPrice- (+element.discountedPrice);
    h2totalAmount.textContent="Total amount :" +totalPrice;
    h1coupon.textContent="Billed Amount:" + totalPrice;
    var coupon=document.getElementById("coupon");
        if(coupon.value=="Masai15"){
            var billAmount=totalPrice-((totalPrice*15)/100);
            h1coupon.textContent="Billed Amount:" + billAmount.toFixed();
        }
    })
  
  imgData.src=element.img;
  nameData.textContent=element.name;
  originalPrice.textContent=element.originalPrice;
  discountedPrice.textContent=element.discountedPrice;
  addToCart.textContent="Remove from Cart";

  mainDiv.append(imgData, nameData, originalPrice, discountedPrice, addToCart);
  cartContainer.append(mainDiv);
  h2totalAmount.textContent="Total amount :" +totalPrice;
  h1coupon.textContent="Billed Amount:" + totalPrice;

  
  


})
