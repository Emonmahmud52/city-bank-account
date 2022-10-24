document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please Enter a valid number')
        return;
    }

    const previousWithdrawElement = document.getElementById('withdraw');
    const previousWithdrawAmountString = previousWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);

    
    const balanceField = document.getElementById("balance-total");
    const totalBalanceString = balanceField.innerText;
    const previoustotalBalance = parseFloat(totalBalanceString);

    if(newWithdrawAmount > previoustotalBalance){
        alert('You have no extra balance');
        return;
    }

    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawAmount;

    const currentTotalBalance = previoustotalBalance - newWithdrawAmount;
    balanceField.innerText = currentTotalBalance;

})