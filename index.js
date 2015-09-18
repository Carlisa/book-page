window.buyBook = function () {
    document.querySelector(".single_add_to_cart_button").click();
};

window.addEventListener("load", function () {
   var messageEl = document.querySelector(".woocommerce-message");
   if (messageEl && ~messageEl.innerText.indexOf("was successfully added to your cart")) {
      location = "/checkout";
   }
});
