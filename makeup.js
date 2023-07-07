// data to map
const faceCareData = [
  {
    img: "https://images-static.nykaa.com/media/catalog/product/0/3/034f18d29360_H_8901030911682.jpg",
    id: 201,
    originalPrice: 325,
    name: "Lakme 9 To 5 Wet & Dry Compact - 10 Ivory",
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/3/f39f16c8904330900776.jpg",
    id: 202,
    originalPrice: 425,
    name: "Kay Beauty Matte Blush - Sugar Candy(8.5gm)",
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/6/c/6c55aafNYKAC00000106_01.jpg?tr=w-344,h-344,cm-pad_resize",
    id: 203,
    originalPrice: 650,
    name: "Nykaa Cosmetics Matte to Last Pore Minimizing Foundation - 06Y Medium (30ml)",
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
    id: 204,
    originalPrice: 750,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/s/i/sigma-beauty-most-wanted-set_2.jpg",
    id: 205,
    originalPrice: 855,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/3/d/3dhd-perfect-complexion-set_1.jpg",
    id: 206,
    originalPrice: 671,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/6/a6384c0SIGMA00000139_2.jpg",
    id: 207,
    originalPrice: 1120,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/b/abcdefg607710075641_1.jpg",
    id: 208,
    originalPrice: 2200,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/6/f6ce4c0SIGMA00000128_2.jpg",
    id: 209,
    originalPrice: 4580,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/b/fbfb096681619814747.jpg",
    id: 210,
    originalPrice: 967,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/a/5a8007aNUDES00000458_1.jpg",
    id: 211,
    originalPrice: 999,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
  {
    img: "https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/7/4/7417f3f607710812031_rv__1.jpg",
    id: 212,
    originalPrice: 2129,
    name: "SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
  },
]

// append to this div
setTable(faceCareData);
var cartCountText = document.getElementById("cartOnNum");
var cartData = JSON.parse(localStorage.getItem("cart")) || [];
cartCountText.textContent = cartData.length;
function setTable(faceCareData) {
  let faceCareContainer = document.querySelector(".items");
  faceCareContainer.innerHTML = "";
  faceCareData.map((element, i) => {
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

    faceCareContainer.append(mainDiv);
  })
}


var priceSort = document.getElementById("priceSort");
priceSort.addEventListener("change", function () {
  if (this.value == "asc") {
    faceCareData.sort(function (a, b) {
      var keyA = parseInt(a.afterDiscount);
      var keyB = parseInt(b.afterDiscount);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    })
    setTable(faceCareData);
  }
  if (this.value == "dsc") {
    faceCareData.sort(function (a, b) {
      var keyA = parseInt(a.afterDiscount);
      var keyB = parseInt(b.afterDiscount);
      if (keyA > keyB) return -1;
      if (keyA < keyB) return 1;
      return 0;
    })
    setTable(faceCareData);
  }
})
