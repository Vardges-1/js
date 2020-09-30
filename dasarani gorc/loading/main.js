var btn = document.querySelector(".puto")
var image = document.querySelector(".image")

btn.addEventListener("click", function esho() {
    image.style.visibility = "unset"
    setTimeout(esho => {

        image.style.visibility = "hidden"

    }, 3000);

})