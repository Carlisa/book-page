window.buyBook = function () {
    document.querySelector(".single_add_to_cart_button").click();
};

window.addEventListener("load", function () {
   if (~document.querySelector(".woocommerce-message").innerText.indexOf("was successfully added to your cart")) {
      location = "/checkout";
   }
});
