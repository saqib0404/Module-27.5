document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawAmount = getInputFielValueById('withdraw-field');

    const withdrawTotal = getElementInnerTextById("Withdraw-total");
    const newWithdrawTotal = withdrawTotal + withdrawAmount;
    
    const balanceTotal = getElementInnerTextById('balance-total');
    if(balanceTotal < withdrawAmount){
        alert('Not Enough Money SON!!');
        return;
    }
    const newBalanceTotal = balanceTotal - withdrawAmount;
    
    setElementInnerTextById('Withdraw-total', newWithdrawTotal);
    setElementInnerTextById('balance-total', newBalanceTotal);
})