// ================== sig form onclick ==================
const sig = document.querySelector("#sig");
const sigbtn = document.querySelector(".section5 button");
const sigForm = document.querySelector(".sig-form-onclick");
sigbtn.addEventListener("click", () => {
      sigForm.style.display = "flex";
      body.style.overflow = "hidden";
});
sig.addEventListener("click", () => {
      sigForm.style.display = "none";
      body.style.overflow = "scroll";
});

// ================== tax form onclick ==================
var body = document.querySelector("html body");
var h6 = document.querySelector(".tax-form-content h6 ");
var taxForm = document.querySelector(".tax-form");
var formClose = document.querySelector(".form-close");
var taxBtn = document.querySelector(".sec4-top2 button");
taxBtn.addEventListener("click", function () {
      taxForm.style.display = "flex";
      body.style.overflow = "hidden";

});
formClose.addEventListener("click", function () {
      taxForm.style.display = "none";
      body.style.overflow = "scroll";
});
h6.addEventListener("click", function () {
      taxForm.style.display = "none";
      body.style.overflow = "scroll";
});