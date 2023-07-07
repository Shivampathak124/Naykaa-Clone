// var cart = JSON.parse(localStorage.getItem("data"));

// var rcart = document.querySelector("#cartDetail");

// function display(cartdata) {
//     cartdata.forEach(function (ele) {
//         var card = document.createElement("div");

//         var d1 = document.createElement("div");

//         var img = document.createElement("img");
//         img.src = ele.img;

//         var d2 = document.createElement("div");
//         var desc = document.createElement("p");
//         desc.innerText = ele.desc;

//         var price = document.createElement("p");
//         price.innerText = ele.min;

//         d1.append(img);
//         d2.append(desc, price);
//         card.append(d1, d2);

//         rcart.append(card);
//     });
// }

// // Display the cart details
// display(cart);

// // Add address details
// document.querySelector("form").addEventListener("submit", addDetail);
// var addArr = [];

// function addDetail(event) {
//     event.preventDefault();

//     var form = event.target;

//     if (
//         form.name.value === "" ||
//         form.mobile.value === "" ||
//         form.code.value === "" ||
//         form.address.value === ""
//     ) {
//         alert("Please fill all the required fields");
//     } else {
//         var addObj = {
//             name: form.name.value,
//             mobile: form.mobile.value,
//             code: form.code.value,
//             add: form.address.value,
//         };

//         addArr.push(addObj);
//         console.log(addArr);

//         localStorage.setItem("custAdd", JSON.stringify(addArr));
//         window.location.href = "payment.html";
//     }
// }

// // Calculate the cart sum
// function calculateCartSum() {
//     var total = 0;

//     if (cart && cart.length > 0) {
//         for (var i = 0; i < cart.length; i++) {
//             if (cart[i].min) {
//                 total += cart[i].min;
//             }
//         }
//     }

//     return total;
// }

// // Update the cart sum in the UI
// var cartSum = "Rs " + calculateCartSum();
// document.querySelector(".changing").innerText = cartSum;
// document.querySelector(".changing1").innerText = cartSum;
var cart = JSON.parse(localStorage.getItem("data"));

var rcart = document.querySelector("#cartDetail");

function display(cartdata) {
    cartdata.forEach(function (ele) {
        var card = document.createElement("div");

        var d1 = document.createElement("div");

        var img = document.createElement("img");
        img.src = ele.img;

        var d2 = document.createElement("div");
        var desc = document.createElement("p");
        desc.innerText = ele.desc;

        var price = document.createElement("p");
        price.innerText = ele.min;

        d1.append(img);
        d2.append(desc, price);
        card.append(d1, d2);

        rcart.append(card);
    });
}

// Display the cart details
display(cart);

// Add address details
document.querySelector("form").addEventListener("submit", addDetail);
var addArr = [];

function addDetail(event) {
    event.preventDefault();

    var form = event.target;

    if (
        form.name.value === "" ||
        form.mobile.value === "" ||
        form.code.value === "" ||
        form.address.value === ""
    ) {
        alert("Please fill all the required fields");
    } else {
        var addObj = {
            name: form.name.value,
            mobile: form.mobile.value,
            code: form.code.value,
            add: form.address.value,
        };

        addArr.push(addObj);
        console.log(addArr);

        localStorage.setItem("custAdd", JSON.stringify(addArr));
        window.location.href = "payment.html";
    }
}

// Calculate the cart sum
function calculateCartSum() {
    var total = 0;

    if (cart && cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].min) {
                total += cart[i].min;
            }
        }
    }

    return total;
}

// Update the cart sum in the UI
var cartSum = calculateCartSum();
document.querySelector(".changing").innerText = "Grand Total";
document.querySelector(".changing1").innerText = "₹" + cartSum.toFixed(0); // Display cart sum without decimal places

