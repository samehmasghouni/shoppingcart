var cart = [];

function addItem(itemid){
 var itemname = document.getElementById(itemid).getElementsByClassName("shop-item-title")[0].textContent;
 var itemimage = document.getElementById(itemid).getElementsByClassName("shop-item-image")[0].getAttribute('src');
 var itemprice = document.getElementById(itemid).getElementsByClassName("shop-item-price")[0].textContent;

 cart.push({name: itemname, img: itemimage, price: itemprice});
    var cartHTML = '';
    cart.forEach(function(item){
        cartHTML += `<div class="cart-row"><div class="cart-item cart-column">
            <img class="cart-item-image" src="${item.img}" width="100" height="100">
            <span class="cart-item-title">${item.name}</span>
        </div>
        <span class="cart-price cart-column">${item.price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    </div>`;
    });
    document.getElementsByClassName('cart-items')[0].innerHTML = cartHTML;
}