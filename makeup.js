// data to map
const faceCareData = [
    {
        img:"https://images-static.nykaa.com/media/catalog/product/0/3/034f18d29360_H_8901030911682.jpg",
        id:201,
        originalPrice:325,
        name:"Lakme 9 To 5 Wet & Dry Compact - 10 Ivory",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/f/3/f39f16c8904330900776.jpg",
        id:202,
        originalPrice:909,
        name:"Kay Beauty Matte Blush - Sugar Candy(8.5gm)",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/6/c/6c55aafNYKAC00000106_01.jpg?tr=w-344,h-344,cm-pad_resize",
        id:203,
        originalPrice:849,
        name:"Nykaa Cosmetics Matte to Last Pore Minimizing Foundation - 06Y Medium (30ml)",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:204,
        originalPrice:229,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    
]

// append to this div
setTable(faceCareData);
var cartCountText = document.getElementById("cartCount");
var cartData = JSON.parse(localStorage.getItem("cart")) || [];
cartCountText.textContent=cartData.length;
function setTable(faceCareData) {
    let faceCareContainer = document.querySelector(".items");
    faceCareContainer.innerHTML = "";
    faceCareData.map((element, i) => {
      var mainDiv=document.createElement("div");
      var imgData=document.createElement("img");
      var nameData=document.createElement("p");
      var originalPriceText=document.createElement("span");
      var originalPrice=document.createElement("span");
      var offPercentage=document.createElement("span");
      var breakLine = document.createElement("br");
      var breakLine2 = document.createElement("br");
      var afterDiscount=0;
      var discountedPrice=document.createElement("span");
      var addToCart=document.createElement("button");
      addToCart.setAttribute("id", "addButton")
      addToCart.addEventListener("click", function(){
        var cartData = JSON.parse(localStorage.getItem("cart")) || [];
        cartData.push(element);
        localStorage.setItem("cart", JSON.stringify(cartData));
        cartCountText.textContent=cartData.length;
      })
      
      imgData.src=element.img;
      nameData.textContent=element.name;
      originalPriceText.textContent = "MRP:"
      originalPrice.setAttribute("class", 'original')
      originalPrice.textContent = "₹"+element.originalPrice;
      originalPriceText.append(originalPrice);
      offPercentage.setAttribute("id", "off");
      offPercentage.textContent = "5% off";
      afterDiscount=(element.originalPrice-(element.originalPrice*5)/100).toFixed();
      discountedPrice.textContent= "₹"+ afterDiscount;
      element.afterDiscount=afterDiscount;
      addToCart.textContent="Add to Cart";
    
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


var priceSort=document.getElementById("priceSort");
  priceSort.addEventListener("change", function(){
    if(this.value=="asc"){
        faceCareData.sort(function(a, b){
            var keyA = a.afterDiscount;
            var keyB = b.afterDiscount;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        })
        setTable(faceCareData);
    }
    if(this.value=="dsc"){
        faceCareData.sort(function(a, b){
            var keyA = a.afterDiscount;
            var keyB = b.afterDiscount;
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        })
        setTable(faceCareData);
    }
  })
