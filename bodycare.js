// data to map
const bodyCareData = [
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/6/56f3d9b8904134021189_1a.jpg",
    id: 201,
    originalPrice: 559,
    name: "Nykaa Naturals Onion & Fenugreek Hair Growth Paraben and Sulphate Free Shampoo",
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/a/fa60902NATAE0000086_1new.png",
    id: 202,
    originalPrice: 499,
    name: "Nykaa Wanderlust Shower Gel - Californian Almond Milk(300ml)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/7/e7f17166001159111856_01.jpg",
    id: 203,
    originalPrice: 435,
    name: "Lotus Organics Precious Brightening Face Wash(100gm)",
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/6/f6bd74bNYNIVOFF00003a_1.jpg",
    id: 204,
    originalPrice: 799,
    name: "Nivea Sunscreen With Spf 50+, Vit E, Pa+++, Uva & Uvb Protection- Instant & Waterproof(125ml)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/a/5aa014d8904245713973_1.jpg",
    id: 205,
    originalPrice: 899,
    name: "Nykaa Naturals Onion & Fenugreek Hair Growth Paraben and Sulphate Free Shampoo",
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/9/8904245708245_1.jpg",
    id: 202,
    originalPrice: 399,
    name: "Nykaa Wanderlust Shower Gel - Californian Almond Milk(300ml)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/0/6/06d7d68LOREA000000020_1.jpg",
    id: 203,
    originalPrice: 490,
    name: "Lotus Organics Precious Brightening Face Wash(100gm)",
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/b/7b997588906120580076_revd1.jpg",
    id: 204,
    originalPrice: 799,
    name: "Nivea Sunscreen With Spf 50+, Vit E, Pa+++, Uva & Uvb Protection- Instant & Waterproof(125ml)"
  }
]

setTable(bodyCareData);
var cartCountText = document.getElementById("cartOnNum");
var cartData = JSON.parse(localStorage.getItem("cart")) || [];
cartCountText.textContent = cartData.length;
function setTable(bodyCareData) {
  let bodyCareContainer = document.querySelector(".items");
  bodyCareContainer.innerHTML = "";
  bodyCareData.map((element, i) => {
    var mainDiv = document.createElement("div");
    var imgData = document.createElement("img");
    var nameData = document.createElement("p");
    var originalPriceText = document.createElement("span");
    var originalPrice = document.createElement("span");
    var offPercentage = document.createElement("span");
    var breakLine = document.createElement("br");
    var breakLine2 = document.createElement("br");
    var afterDiscount = 0;
    var discountedPrice = document.createElement("span");
    var addToCart = document.createElement("button");
    addToCart.setAttribute("id", "addButton")
    addToCart.addEventListener("click", function () {
      var cartData = JSON.parse(localStorage.getItem("cart")) || [];
      cartData.push(element);
      localStorage.setItem("cart", JSON.stringify(cartData));
      cartCountText.textContent = cartData.length;
    })

    imgData.src = element.img;
    nameData.textContent = element.name;
    originalPriceText.textContent = "MRP:"
    originalPrice.setAttribute("class", 'original')
    originalPrice.textContent = "₹" + element.originalPrice;
    originalPriceText.append(originalPrice);
    offPercentage.setAttribute("id", "off");
    offPercentage.textContent = "5% off";
    afterDiscount = (element.originalPrice - (element.originalPrice * 5) / 100).toFixed();
    discountedPrice.textContent = "₹" + afterDiscount;
    element.afterDiscount = afterDiscount;
    addToCart.textContent = "Add to Cart";

    mainDiv.append(
      imgData,
      nameData,
      originalPriceText,
      offPercentage,
      breakLine,
      discountedPrice,
      breakLine2,
      addToCart);

    bodyCareContainer.append(mainDiv);
  })
}

var priceSort = document.getElementById("priceSort");
priceSort.addEventListener("change", function () {
  if (this.value == "asc") {
    bodyCareData.sort(function (a, b) {
      var keyA = parseInt(a.afterDiscount);
      var keyB = parseInt(b.afterDiscount);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })
    setTable(bodyCareData);
  }
  if (this.value == "dsc") {
    bodyCareData.sort(function (a, b) {
      var keyA = parseInt(a.afterDiscount);
      var keyB = parseInt(b.afterDiscount);
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    })
    setTable(bodyCareData);
  }
})
