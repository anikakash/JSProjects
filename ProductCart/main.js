document.addEventListener('DOMContentLoaded', function () {
    const colorItems = document.querySelectorAll('.colors ul li');
    const sizeItems = document.querySelectorAll('.size ul li');
    const amountElement = document.querySelector('.price .amount');

    let selectedColorPrice = null; 
    let selectedSizePrice = null; 


    function updatePrice() {
        if (selectedColorPrice === null && selectedSizePrice === null) {
            amountElement.textContent = '$100 ~ $200';
        } else {
            const basePrice = selectedColorPrice !== null ? selectedColorPrice : 100; 
            const sizePrice = selectedSizePrice !== null ? selectedSizePrice : 0; 
            const totalPrice = basePrice + sizePrice;
            amountElement.textContent = `$${totalPrice}`;
        }
    }


    colorItems.forEach(colorItem => {
        colorItem.addEventListener('click', function () {
            colorItems.forEach(item => item.classList.remove('selected'));
            this.classList.add('selected');
            selectedColorPrice = parseInt(this.getAttribute('data-price'));
            updatePrice();
        });
    });

    sizeItems.forEach(sizeItem => {
        sizeItem.addEventListener('click', function () {
            sizeItems.forEach(item => item.classList.remove('selected'));
            this.classList.add('selected');
            selectedSizePrice = parseInt(this.getAttribute('data-price'));
            updatePrice();
        });
    });
    updatePrice();
});
