// data to map
const hairCareData = [
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/c/cc2e6cdWOWXX00000029a_1.jpg",
        id:201,
        originalPrice:999,
        name:"WOW Skin Science Red Onion Black Seed Shampoo(1000ml)",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/4/149e044NYBNDLP000017a_1.jpg",
        id:202,
        originalPrice:300,
        name:"L'Oreal Professionnel Absolut Repair Shampoo 300ml, Hair Mask 250gm & Hair Serum 90ml, Serie Expert"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/9/a92b8398001090222848_1b.jpg",
        id:203,
        originalPrice:659,
        name:"Herbal Essences Argan Oil Shampoo For Frizz - No Colourants (400ml)",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/e/e/ee9881b26493-H_8901030907807.jpg",
        id:204,
        originalPrice:2289,
        name:"Love Beauty & Planet Curry Leaves, Biotin & Mandarin Sulfate Free Shampoo (400ml)"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/a/cab55ccNYNYKBC001423_0.jpg",
        id:205,
        originalPrice:780,
        name:"WOW Skin Science Red Onion Black Seed Shampoo(1000ml)",
      },
      {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/c/cc2e6cdWOWXX00000029a_1.jpg",
        id:206,
        originalPrice:990,
        name:"WOW Skin Science Red Onion Black Seed Shampoo(1000ml)",
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/4/149e044NYBNDLP000017a_1.jpg",
        id:207,
        originalPrice:1200,
        name:"L'Oreal Professionnel Absolut Repair Shampoo 300ml, Hair Mask 250gm & Hair Serum 90ml, Serie Expert"
      },
    {
        img:"https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/a/9/a92b8398001090222848_1b.jpg",
        id:208,
        originalPrice:659,
        name:"Herbal Essences Argan Oil Shampoo For Frizz - No Colourants (400ml)",
      },
    
]

// append to this div
setTable(hairCareData);
var cartCountText = document.getElementById("cartCount");
var cartData = JSON.parse(localStorage.getItem("cart")) || [];
cartCountText.textContent=cartData.length;
function setTable(hairCareData) {
    let hairCareContainer = document.querySelector(".items");
    hairCareContainer.innerHTML = "";
    hairCareData.map((element, i) => {
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
        addToCart
      );
      hairCareContainer.append(mainDiv);
    })
}


var priceSort=document.getElementById("priceSort");
  priceSort.addEventListener("change", function(){
    if(this.value=="asc"){
      hairCareData.sort(function(a, b){
        var keyA = parseInt(a.afterDiscount);
        var keyB = parseInt(b.afterDiscount);
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      })
        setTable(hairCareData);
    }
    if(this.value=="dsc"){
      hairCareData.sort(function(a, b){
        var keyA = parseInt(a.afterDiscount);
        var keyB = parseInt(b.afterDiscount);
        if (keyA > keyB) return -1;
        if (keyA < keyB) return 1;
        return 0;
      })
      setTable(hairCareData);
    }
  })
