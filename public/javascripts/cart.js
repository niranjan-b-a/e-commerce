const cartBtn = document.querySelector('.cart-btn');

cartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const url = `/add-to-cart/${cartBtn.dataset.productid}`;
    fetch(url).then((res) => {
        if (res.status >= 200 && res.status <= 299) {
            let cartValue = document.querySelector('.cart-icon');
            cartValue.innerHTML = parseInt(cartValue.innerHTML) + 1;
        }
    })
        .catch(err => {
            console.log(err);
    })
})