//class b4
var div1 = document.createElement("div");
div1.setAttribute("id", "download");
var i8 = document.createElement("i")
i8.setAttribute("class", "fas fa-mobile-alt")
i8.setAttribute("id", "i8")
var h3 = document.createElement("span");
h3.setAttribute("class", "contact11")
h3.textContent = "EXPERIENCE THE NYKAA MOBILE APP";
var div11 = document.createElement("div");
div11.setAttribute("id", "app");
var div111 = document.createElement("div");
var img1 = document.createElement("img");
img1.setAttribute("src", "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfrWcSV8i_y1GhzqQGvXvtAH7DCzn8OG8bYBAo2VAsiFjxdbYX");
img1.setAttribute("class", "logo1");
div111.append(img1);
var div112 = document.createElement("div");
var img2 = document.createElement("img");
img2.setAttribute("src", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EYkzYEcqSlAwwN01LCeBBpOItSBOIplymKbOWhk4BvnFXmxg");
img2.setAttribute("class", "logo2")
div112.append(img2);
div11.append(div111, div112);
div1.append(i8, h3, div11);

var div2 = document.createElement("div");
div2.setAttribute("id", "news");
var i7 = document.createElement("i")
i7.setAttribute("class", "far fa-envelope")
i7.setAttribute("id", "i7")
p1 = document.createElement("span");
p1.setAttribute("class", "contact12")
p1.textContent = "GET SPECIAL DISCOUNT IN YOUR INBOX";
var in1 = document.createElement("input");
in1.setAttribute("type", "email");
in1.setAttribute("class", "in1");
in1.setAttribute("placeholder", " enter your email");
var in2 = document.createElement("input");
in2.setAttribute("value", "SEND");
in2.setAttribute("class", "in2");
in2.style.width = "50px"
div2.append(i7, p1, in1, in2)

var div3 = document.createElement("div");
div3.setAttribute("id", "query");
var i6 = document.createElement("i")
i6.setAttribute("class", "fas fa-phone-alt")
i6.setAttribute("id", "i6")
p3 = document.createElement("span");
p3.textContent = "FOR ANY HELP YOU MAY CALL US AT";
p3.setAttribute("class", "contact1")
p4 = document.createElement("p");
p4.setAttribute("class", "contact2")
p4.textContent = "1800-267-4444"
p5 = document.createElement("p");
p5.textContent = "(Monday to Saturday,8AM-10PM and Sunday, 10AM to 7PM))"
p5.setAttribute("class", "contact3");
div3.append(i6, p3, p4, p5)

document.querySelector(".b4").append(div2, div1, div3);

//class b5 
var div8 = document.createElement("div");
div8.setAttribute("class", "div8");
//div81
var div81 = document.createElement("div");
div81.setAttribute("class", "div81");

var div811 = document.createElement("img");
div811.setAttribute("class", "div811")
div811.setAttribute("src", "https://seeklogo.com/images/N/nykaa-logo-AA06314FB9-seeklogo.com.png");

var div812 = document.createElement("div");
div812.setAttribute("class", "div812");
var p18 = document.createElement("p");
p18.textContent = "Who are we?";
var p19 = document.createElement("p");
p19.textContent = "Careers";
var p20 = document.createElement("p");
p20.textContent = "Authenticity";
var p21 = document.createElement("p");
p21.textContent = "Press";
var p22 = document.createElement("p");
p22.textContent = "Testimonials";
var p23 = document.createElement("p");
p23.textContent = "Nykaa CSR";
var p24 = document.createElement("p");
p24.textContent = "Responsible Disclosure";
var p25 = document.createElement("p");
p25.textContent = "Investor Relations";
div812.append(p18, p19, p20, p21, p22, p23, p24, p25);
div81.append(div811, div812);


//div82
var div82 = document.createElement("div");
div82.setAttribute("class", "div82");

var div821 = document.createElement("div");
div821.textContent = "Help";
div821.setAttribute("class", "div821");

var div822 = document.createElement("div");
div822.setAttribute("class", "div812");
var p26 = document.createElement("p");
p26.textContent = "Contact Us";
var p27 = document.createElement("p");
p27.textContent = "Frequently asked questions";
var p28 = document.createElement("p");
p28.textContent = "Store Locator";
var p29 = document.createElement("p");
p29.textContent = "Cancellation & Return";
var p30 = document.createElement("p");
p30.textContent = "Shipping & Delivery";
var p31 = document.createElement("p");
p31.textContent = "Sell on Nykaa";
div822.append(p26, p27, p28, p29, p30, p31)
div82.append(div821, div822);

//div83
var div83 = document.createElement("div");
div83.setAttribute("class", "div83");

var div831 = document.createElement("div");
div831.textContent = "Inspire Me";
div831.setAttribute("class", "div831");

var div832 = document.createElement("div");
div832.setAttribute("class", "div812");
var p34 = document.createElement("p");
p34.textContent = "Beauty Book";
var p35 = document.createElement("p");
p35.textContent = "Nykaa TV";
var p36 = document.createElement("p");
p36.textContent = "Nykaa Network";
var p37 = document.createElement("p");
p37.textContent = "Buying Guides";
div832.append(p34, p35, p36, p37)
div83.append(div831, div832);


//div84

var div84 = document.createElement("div");
div84.setAttribute("class", "div84");

var div841 = document.createElement("div");
div841.textContent = "Quick Links";
div841.setAttribute("class", "div841");

var div842 = document.createElement("div");
div842.setAttribute("class", "div812");
var p42 = document.createElement("p");
p42.textContent = "Offer Zone";
var p43 = document.createElement("p");
p43.textContent = "New Launches";
var p44 = document.createElement("p");
p44.textContent = "NYKAA MAN";
var p45 = document.createElement("p");
p45.textContent = "Nykaa Fashion";
var p46 = document.createElement("p");
p46.textContent = "Nykaa Pro";
div842.append(p42, p43, p44, p45, p46)
div84.append(div841, div842);


//div85
var div85 = document.createElement("div");
div85.setAttribute("class", "div85");

var div851 = document.createElement("div");
div851.textContent = "Top Categories";
div851.setAttribute("class", "div851");

var div852 = document.createElement("div");
div852.setAttribute("class", "div812");
var p49 = document.createElement("p");
p49.textContent = "Makeup";
var p50 = document.createElement("p");
p50.textContent = "Skin";
var p51 = document.createElement("p");
p51.textContent = "Hair";
var p52 = document.createElement("p");
p52.textContent = "Bath & Body";
var p53 = document.createElement("p");
p53.textContent = "Appliances";
var p54 = document.createElement("p");
p54.textContent = "Mom and Baby";
var p55 = document.createElement("p");
p55.textContent = "WELLNESS";
var p56 = document.createElement("p");
p56.textContent = "Wellness";
var p57 = document.createElement("p");
p57.textContent = "Natural";
var p58 = document.createElement("p");
p58.textContent = "Luxe";
div852.append(p49, p50, p51, p52, p53, p54, p55, p56, p57, p58)
div85.append(div851, div852);
div8.append(div81, div82, div83, div84, div85)
document.querySelector(".b5").append(div8)


//class b6
var div7 = document.createElement("div");
div7.setAttribute("class", "div7");
var div71 = document.createElement("div");
div71.setAttribute("class", "div71");
var div711 = document.createElement("div");
var img3 = document.createElement("img");
img3.setAttribute("src", "https://adn-static2.nykaa.com/media/wysiwyg/2021/Free-shipping.svg");
img3.setAttribute("id", "img3");
div711.append(img3);
var div712 = document.createElement("div");
var p10 = document.createElement("p");
p10.textContent = "FREE SHIPPING"
p10.setAttribute("class", "p10");
var p11 = document.createElement("p")
p11.setAttribute("class", "p11")
p11.textContent = "for orders above ₹299";
div712.append(p10, p11);
div71.append(div711, div712);


var div72 = document.createElement("div");
div72.setAttribute("class", "div72")
var div721 = document.createElement("div");
var img4 = document.createElement("img");
img4.setAttribute("src", "https://adn-static2.nykaa.com/media/wysiwyg/2021/return_accepted.svg");
img4.setAttribute("id", "img4");
div721.append(img4);
var div722 = document.createElement("div");
var p12 = document.createElement("p");
p12.setAttribute("class", "p10")
p12.textContent = "EASY RETURNS"
var p13 = document.createElement("p");
p13.setAttribute("class", "p11")
p13.textContent = "15 Day Return Policy";
div722.append(p12, p13);
div72.append(div721, div722);

var div73 = document.createElement("div");
div73.setAttribute("class", "div73");
var div731 = document.createElement("div");
var img5 = document.createElement("img");
img5.setAttribute("src", "https://adn-static2.nykaa.com/media/wysiwyg/2021/Authenticity.svg");
img5.setAttribute("id", "img5");
div731.append(img5);
var div732 = document.createElement("div");
var p14 = document.createElement("p");
p14.setAttribute("class", "p10")
p14.textContent = "AUTHENTIC PRODUCTS";
var p15 = document.createElement("p")
p15.setAttribute("class", "p11")
p15.textContent = "Products Sourced Directly"
div732.append(p14, p15);
div73.append(div731, div732);

var div74 = document.createElement("div");
div74.setAttribute("class", "div74");
var div741 = document.createElement("div");
var img6 = document.createElement("img");
img6.setAttribute("src", "https://adn-static2.nykaa.com/media/wysiwyg/2021/Brands.svg");
img6.setAttribute("id", "img6");
div741.append(img6);
var div742 = document.createElement("div");
var p16 = document.createElement("p");
p16.setAttribute("class", "p10")
p16.textContent = "2400+ BRANDS"
var p17 = document.createElement("p")
p17.setAttribute("class", "p11")
p17.textContent = "1.2 Lakh+ Products"
div742.append(p16, p17);
div74.append(div741, div742);

var div75 = document.createElement("div");
div75.setAttribute("class", "div75");
var p18 = document.createElement("p");
p18.setAttribute("class", "p12")
p18.textContent = "SHOW US SOME LOVE❤️ ON SOCIAL MEDIA";
var p19 = document.createElement("div");
var i1 = document.createElement("i")
i1.setAttribute("class", "fab fa-instagram")
i1.setAttribute("id", "i1")
var i2 = document.createElement("i")
i2.setAttribute("class", "fab fa-facebook")
i2.setAttribute("id", "i1")
var i3 = document.createElement("i")
i3.setAttribute("class", "fab fa-youtube-square")
i3.setAttribute("id", "i1")
var i4 = document.createElement("i")
i4.setAttribute("class", "fab fa-twitter-square")
i4.setAttribute("id", "i1")
var i5 = document.createElement("i")
i5.setAttribute("class", "fab fa-pinterest-square")
i5.setAttribute("id", "i1")
p19.append(i1, i2, i3, i4, i5)
div75.append(p18, p19);
div7.append(div71, div72, div73, div74, div75);
document.querySelector(".b6").append(div7)


//class b7
div6 = document.createElement("div");
div6.setAttribute("id", "div6");
div61 = document.createElement("div");
div61.textContent = "TERMS & CONDITIONS"
div61.setAttribute("id", "div61");
div62 = document.createElement("div");
div62.textContent = "SHIPPING POLICY"
div62.setAttribute("id", "div62");
div63 = document.createElement("div");
div63.textContent = "CANCELLATION POLICY"
div63.setAttribute("id", "div63");
div64 = document.createElement("div");
div64.textContent = "PRIVACY POLICY";
div64.setAttribute("id", "div64");
div6.append(div61, div62, div63, div64);

p6 = document.createElement("p");
p6.textContent = "© 2023 Nykaa E-Retail Pvt. Ltd. All Rights Reserved";
p6.setAttribute("id", "p6");

document.querySelector(".b7").append(div6, p6);
