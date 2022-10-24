document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please Enter a valid number')
        return;
    }
    const previousDepositElement = document.getElementById('deposit');
    const previousDepositAmountString = previousDepositElement.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);

    const currentDepositAmount = previousDepositAmount + newDepositAmount;
    previousDepositElement.innerText = currentDepositAmount;

    const balanceField = document.getElementById("balance-total");
    const totalBalanceString = balanceField.innerText;
    const previoustotalBalance = parseFloat(totalBalanceString);

    const currentTotalBalance = previoustotalBalance + newDepositAmount;
    balanceField.innerText = currentTotalBalance;

})