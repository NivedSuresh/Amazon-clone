
let productsHTML='';

products.forEach((product)=>{
    productsHTML +=`<div class="product-container col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
    <div class="product-image-container">
      <img class="product-image"
        src="${product.image}">
    </div>

    <div class="product-name limit-text-to-2-lines ">
      ${product.name}
    </div>

    <div class="product-rating-container">
      <img class="product-rating-stars"
        src="images/ratings/rating-${product.rating.stars * 10}.png">
      <div class="product-rating-count link-primary">
        ${product.rating.count}
      </div>
    </div>

    <div class="product-price">
      $${(product.priceCents/100).toFixed(2)}
    </div>

    <div class="product-quantity-container">
      <select  class="js-quantity-selector-${product.id}">
        <option selected value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>

    <div class="product-spacer"></div>

    <div class="added-to-cart">
      <img src="images/icons/checkmark.png">
      Added
    </div>

    <button class="add-to-cart-button button-primary js-add-to-cart" 
    data-product-id="${product.id}">
      Add to Cart
    </button>
  </div>`
});

document.querySelector('.products-grid-js').innerHTML=productsHTML;
document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
  button.addEventListener('click',()=>{
    let productId=button.dataset.productId;
    let matchingItem;
    let selectQuantity=Number(document.querySelector(`.js-quantity-selector-${productId}`).value);
    cart.forEach((item)=>{
      if(productId === item.productId){
        matchingItem=item;
      }
    });
    if(matchingItem){
      matchingItem.quanity+=selectQuantity;
    }
    else{
     cart.push({
      productId:productId,
      quanity: selectQuantity
    })
    }
    let cartQuantity=0;
    cart.forEach((item)=>{
      cartQuantity+=item.quanity;
    })
    document.getElementById("cart-quantity").innerHTML=cartQuantity;
  })
})