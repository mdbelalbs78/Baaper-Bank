document.getElementById('btn-deposit').addEventListener('click', function () {
    // step-2: get the deposit amount from the deposit input field

    const depositField = document.getElementById('deposit-field');
    const newDepostiAmountString = depositField.value;
    const newDepostiAmount = parseFloat(newDepostiAmountString);


    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString)

    console.log(typeof PreviousDepositTotal)

    const currentDepositTotal = PreviousDepositTotal + newDepostiAmount;

    depositTotalElement.innerText = currentDepositTotal;

    // Blance current total 

    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBalanceTotalString);

    // sptep-6:current total Balance total 
    const currentBalanceTotal = previousBlanceTotal + newDepostiAmount;
    // set the balance total 
    blanceTotalElement.innerText = currentBalanceTotal;

        // step-7: Clear the deposit filed
        depositField.value = '';

})