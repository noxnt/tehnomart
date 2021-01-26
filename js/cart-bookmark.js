let top_menu_bookmark = document.querySelector('.top-menu-bookmark'); // bookmark
    top_menu_cart = document.querySelector('.top-menu-cart'); // cart
    modal_cart = document.querySelector('.modal-cart');
    modal_close_button = document.querySelector('.modal-close-button'); // close modal
    modal_close_button2 = document.querySelector('.continue-shopping'); // close modal (continue)

let product_bookmark = document.querySelectorAll('.product-bookmark');
    product_buy = document.querySelectorAll('.product-buy');

product_bookmark.forEach(function (entry) {
  entry.addEventListener("click", function() {
    if (top_menu_bookmark.classList.contains('bookmark-value-active')) {
      console.log('уже активно');
    } else {
      top_menu_bookmark.classList.add('bookmark-value-active');
    }
  });
});

product_buy.forEach(function (entry) {
  entry.addEventListener("click", function() {
    modal_cart.classList.add('modal-cart-active');
    if (top_menu_cart.classList.contains('cart-value-active')) {
      console.log('already red');
    } else {
      top_menu_cart.classList.add('cart-value-active');
    }
  });
});

// Modal cart
modal_close_button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_cart.classList.remove('modal-cart-active');
});

modal_close_button2.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal_cart.classList.remove('modal-cart-active');
});