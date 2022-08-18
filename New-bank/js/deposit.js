document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputFielValueById('deposit-field');
    
    const depositTotal = getElementInnerTextById("deposit-total");
    const newDepositTotal = depositAmount + depositTotal;
    setElementInnerTextById('deposit-total', newDepositTotal);
    
    const balanceTotal = getElementInnerTextById('balance-total');
    const newBalanceTotal = balanceTotal + depositAmount;
    setElementInnerTextById('balance-total', newBalanceTotal);
})