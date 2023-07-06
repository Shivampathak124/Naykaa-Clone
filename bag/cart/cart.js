// Sample data
var cart = [
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/4/149e044NYLOPROF00001a_1.jpg",
    desc: "Product 1",
    min: 50,
    max: 100
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/4/149e044NYLOPROF00001a_1.jpg",
    desc: "Product 2",
    min: 75,
    max: 150
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/1/4/149e044NYLOPROF00001a_1.jpg",
    desc: "Product 3",
    min: 60,
    max: 120
  }
];

var data = document.querySelector("#maindata");
var totalprice = document.querySelector("#totalprice");
var sum = 0;
var shopingbag = document.querySelector("#shopingbag");
shopingbag.innerText = "Shopping bag" + " " + "(" + cart.length + ")";

// This is main function
var max = 0;
cart.forEach(function (ele, index) {
  ele.min = +ele.min;
  ele.max = +ele.max;
  max += ele.max;

  sum += ele.min;
  var body = document.createElement("div");
  body.setAttribute("class", "body");
  var body1 = document.createElement("div");
  body1.setAttribute("class", "body1");
  var body2 = document.createElement("div");
  body2.setAttribute("class", "body2");

  var image = document.createElement("img");
  image.src = ele.img;
  image.setAttribute("class", "image");
  var Name = document.createElement("h6");
  Name.innerText = ele.desc;
  Name.setAttribute("class", "name");
  var btn = document.createElement("img");
  btn.addEventListener("click", function () {
   fn(ele, index);
  });

  btn.src =
    "https://cdn-icons.flaticon.com/png/128/3405/premium/3405244.png?token=exp=1651745346~hmac=7e9f77b6f20ddbad608f269593ac8192";
  btn.setAttribute("class", "delete");
  // This is two div in body2

  var qntdiv = document.createElement("div");
  qntdiv.setAttribute("id", "qnt");
  var prcdiv = document.createElement("div");
  prcdiv.setAttribute("id", "prc");
  // This is plus
  var plus = document.createElement("p");
  plus.innerText = "Quantity";
  plus.setAttribute("class", "Quantity");
  // This is quantity
  var Quantity = document.createElement("p");
  Quantity.innerText = ":";
  Quantity.setAttribute("class", "semiclone");

  // This is minus
  var minus = document.createElement("p");
  minus.innerText = "1˅";
  minus.setAttribute("class", "num");
  // price

  var omrp;
  if (ele.max == undefined) {
    omrp = "";
  } else {
    omrp = "₹" + ele.max;
  }
  var mrp = document.createElement("p");
  mrp.innerText = omrp;
  mrp.setAttribute("class", "mrp");
  var price = document.createElement("p");
  price.innerText = "₹" + ele.min;
  price.setAttribute("class", "price");

  // These are append
  prcdiv.append(mrp, price);
  qntdiv.append(plus, Quantity, minus);
  body1.append(image, Name, btn);
  body2.append(qntdiv, prcdiv);
  body.append(body1, body2);
  data.append(body);
});

totalprice.innerText = "₹" + sum;

// This is delete Function
function fn(ele, index) {
  cart.splice(index, 1);

  localStorage.setItem("data", JSON.stringify(cart));

  window.location.reload();
}

// Other code for calculating totals and displaying them

var totalbag = document.querySelector(".totalbagf");
totalbag.innerText = "₹" + max;
var bagdiscount = document.querySelector(".discountbagf");
bagdiscount.innerText = (max - sum) - 100;
var subtotal = document.querySelector(".totalsubf");
subtotal.innerText = max - (max - sum) + 100;
var discount = document.querySelector(".offdiscount");
discount.innerText = -100;
var charge = document.querySelector(".chargef");
charge.innerText = "Free";
var grandtotal2 = document.querySelector(".grandtotal2f");

grandtotal2.innerText = "₹ " + sum;

var couponCodeElement = document.getElementById("couponCode");
couponCodeElement.addEventListener("input", applyCoupon);

var applyCouponButton = document.createElement("applyCouponButton");
applyCouponButton.textContent = "Apply Coupon";
applyCouponButton.addEventListener("click", applyCoupon);

// Append the "Apply Coupon" button to the document
var couponContainer = document.getElementById("couponContainer");
couponContainer.appendChild(applyCouponButton);

function applyCoupon() {
  var couponCode = couponCodeElement.value;

  // Apply coupon code logic here
  if (couponCode === "Shivam15") {
    var totalAmount = calculateTotalAmount(cart);
    var discountedAmount = totalAmount - totalAmount * 0.15; // 15% discount

    // Update the bill amount in the HTML
    var billAmountElement = document.getElementById("billAmount");
    billAmountElement.textContent = "₹" + discountedAmount;
  }
}

function calculateTotalAmount(cart) {
  var total = 0;
  cart.forEach(function (item) {
    total += item.min;
  });
  return total;
}

var back = document.querySelector("#back");
back.addEventListener("click", function () {
  // console.log("fldjks")
  // back.innerText
});
