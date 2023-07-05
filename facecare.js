// data to map
const faceCareData = [
    {
        img:"https://images-static.nykaa.com/media/catalog/product/0/3/034f18d29360_H_8901030911682.jpg",
        id:201,
        originalPrice:325,
        discountedPrice:276,
        name:"Lakme 9 To 5 Wet & Dry Compact - 10 Ivory",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:202,
        originalPrice:1309,
        discountedPrice:113,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:203,
        originalPrice:1175,
        discountedPrice:999,
        name:"Lakme 9 To 5 Wet & Dry Compact - 10 Ivory",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"Lakme 9 To 5 Wet & Dry Compact - 10 Ivory",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
      },
      {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
      {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
      },
      {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"Green Tea Day Cream with SPF 30 PA++ for Hydration & 24 Hrs Moisture Lock - 50 ml",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
      {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:204,
        originalPrice:229,
        discountedPrice:195,
        name:"Milky Brew Coffee Face Scrub with Almond Milk for 24 Hrs Moisturization - 75 g - Natural & Vegan",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:205,
        originalPrice:399,
        discountedPrice:339,
        name:"SUGAR Matte As Hell Crayon Lipstick With Free Sharpener - 19 Emma Woodhouse (Earthy Brown)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090499590_01.jpg",
        id:206,
        originalPrice:448,
        discountedPrice:380,
        name:"Vitamin C & Coffee Sheet Mask for Dark Spots Reduction - 20g each - Pack of 3",
      },
]

// append to this div
setTable(faceCareData);
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
      var discountedPrice=document.createElement("span");
      var addToCart=document.createElement("button");
    //   addToCart.addEventListener("click", function(){
    //     cartData.push(element);
    //     localStorage.setItem("cart", JSON.stringify(cartData));
    //     cartCount=cartCount+1;
    //     cartCountText.textContent=cartCount;
    //   })
      
      imgData.src=element.img;
      nameData.textContent=element.name;
      originalPriceText.textContent = "MRP:"
      originalPrice.setAttribute("class", 'original')
      originalPrice.textContent = "₹"+element.originalPrice;
      originalPriceText.append(originalPrice);
      offPercentage.setAttribute("id", "off");
      offPercentage.textContent = "25% off";
      discountedPrice.textContent = "₹"+element.discountedPrice;
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
            var keyA = a.discountedPrice;
            var keyB = b.discountedPrice;
            if (keyA < keyB) return -1;
            if (keyA > keyB) return 1;
            return 0;
        })
        setTable(faceCareData);
    }
    if(this.value=="dsc"){
        faceCareData.sort(function(a, b){
            var keyA = a.discountedPrice;
            var keyB = b.discountedPrice;
            if (keyA > keyB) return -1;
            if (keyA < keyB) return 1;
            return 0;
        })
        setTable(faceCareData);
    }
  })
