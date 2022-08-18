document.getElementById('discount-btn').addEventListener('click', function(){
    const text = document.getElementById('pin');
    const textValue = text.value;
    text.value = '';
    if(textValue === "DOM"){
        const price = document.getElementById('my-price');
        const priceStr = price.innerText;
        const priceValue = parseFloat(priceStr);
        console.log(priceValue)
        
        const discount = 30 / 100;
        const discountPrice = priceValue * discount;
        price.innerText = discountPrice;
    }
    else{
        alert('Invalid Coupon');
        return;
    }
    text.setAttribute('disabled', true)
})