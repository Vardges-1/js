function anun() {



    // tvyal pahi slaydi parametor
    let sliderIndex = 1;

    let slides = document.querySelectorAll(".slider-item");
    let prev = document.querySelector(".prev");
    let next = document.querySelector(".next");
    let dotsWrap = document.querySelector(".slider-dots");
    let dots = document.querySelectorAll(".dot");


    showSlides(sliderIndex)

    function showSlides(n) {
        //  es if-ov asumenq yete n hasela arten verchin sax nkarner@ teselenq hetenq frum eli arachini mot 
        // u vonc vorosheleynq arachin@ -1na etel nerqevnenq voroshel
        if (n > slides.length) {
            sliderIndex = 1;
        }

        // es if ov asumenq yete n poqra mekic uremn hetenq gnum amena verch@ etel voroshvuma slides.lengthov
        if (n < 1) {
            sliderIndex = slides.length
        }


        // takcnumem sax slidner@ vor heto vor@ petqa cuyc tam
        slides.forEach((item) => item.style.display = 'none');
        // tarberak forEach poxaren
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = "none";

        //    jnjumenq en knopken vor@ vor active vor heto inqners voroshenq vorna active
        dots.forEach((item) => item.classList.remove("dot-active"));


        // stex nshumenq en slid@ vor@ vor uzumenq cuyc ta vor sayt@ zagruzkaya linum arachi anqam
        // xienq anum -1 vor darna javascriptovi tiv u nshanakuma 1 hanac -1 = 0 etel arachin nkarna
        slides[sliderIndex - 1].style.display = "block";

        // dobavlyaet class activ
        dots[sliderIndex - 1].classList.add("dot-active");

    }
}

// functia katoraya uvelichivayet nash parametr sliderIndex i pouchayet porametr (n)
// vor arachenq sxmum miat avelanuma yev het miat pakasuma vercnumenq miat semc asac


///----- prostoy primer kogda mi perevorachivayem nashi slidi vperyod mi vstavlyaem -
// ----- vmesto (n) mek , heto mer slideIndex mekov avelacnumenq tak@ (sliderIndex += n) -
// ----- i vizivayem shpwSlides arten 2-ov vorpes orgument, u verevi amena glxavor (n)-i -
// ----- mech @ngumna 2 slide u mez cuyva talis 2 nkar@
function plusSlides(n) {
    // es mijocov mianqamic imanumenq sliderIndex znachenenian imanumenq vor slidna petq cuyc tal u kancumen showSlides function 
    // i novoye poluchonnoye znacheniya mi dobovlyaem kak orgument etoy functii
    showSlides(sliderIndex += n);
}

// eto functia opredelyaet tekushi slide i ustanavlivayet ego
// yerp chorord knopkenenq sxmumem (n) poxancvuma 4
function curentSlide(n) {
    // mer stexi (n) hetevabar 4 darnuma slideIndex jaranguma et 4 u amena verevi showlides zapuskayetca 4vov
    showSlides(sliderIndex = n);
}

// eto callback functia kogda mi najimayem nazad pri pomoshi fucntii mi otnimayem u nashego tekushego -
//  slide edenicu toist peremeshayemsya nazad
prev.addEventListener("click", function () {
    plusSlides(-1);
})

// nunyn@ anumenq arach gnalu het stex menq avelacnumenq 1 mer slid@ miatov avelacnumenq u arachenq gnum
next.addEventListener("click", function () {
    // karan 2 dnenq meki tex@ u erku hatov gnanq arach
    plusSlides(1);
});

// avelacnumenq dot vra addEventListener vor hetagayum taza knopkeq avelanan jarangen et functian for loopi shnorhiv
//  u qani vor ogragorcumenq dirgiravanie sobitiye dra hamarel petqa objekt sobiti event
dotsWrap.addEventListener("click", function (event) {
    // for loop voroshumenq te vor meki vraya ktoc exel
    // u vorpesi chisht sgenerirovat mer slidi hamar@ mer tochki hamari avelacnumenq lenghtic heto +1
    for (let i = 0; i < dots.length + 1; i++) {
        // stex menq ogragorcumenq delegirovaniya sobiti, -
        //  pri etom mi proveryaem tot elemnt katoruyu mi kliknuli na opredelyonie parametri u dra het mi ban anumenq
        
        // vonc karanq imananq vor knopkenenq sxmel iharke even targeti shnorhiv
        //  us classlist.containsi shnorhiv menq stugumenq vor knopken vor sxmelenq uni class dot
        // u mez eli usloviaya petq dra mech petqa imananq tochki hamar@
        // u [i - 1] arvuma nra hamar vor menq 4 knopkenq sxmumenq bayc eti js mech 3na
        //  u yte unenq 4 hat knopka bayc mer mot sksvuma 0 ic qani vor var i = 0
        //  i chtobi preobrazivat nashe znachenie katoriye mi poluchayem s js s znacheniayami katoriye logichni -
        // u nas po kalichestvu slidov mi zopuskayem nash cikl verevum (dots.length + 1) na odin raas bolshe -
        //  u hamapatasxanabar mer i [i-1] mechi havasar klini 4
        if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
            //  i uzpuskayem functiyu curentSlide i pishem vnyom (i)
            // i poetomu kogda mi clickoyem 4 tochku mi lovem 4 povtarenie cikla i peredayom v (i) chors a ne 3 kak zadumanno iznochalno v js
            curentSlide(i);
        }
    }
})
}