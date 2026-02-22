var popupBox = document.querySelector(".pubup");
var pubup = document.querySelector(".popup-box");
var l = document.querySelector(".location");
var closeBtn = document.querySelector(".close-btn");

l.addEventListener("click", function() {
    popupBox.style.display = "block"
    pubup.style.display = "block"
});

closeBtn.addEventListener("click", function(){
    popupBox.style.display = "none"
    pubup.style.display = "none"
})