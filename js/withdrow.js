// add event withdraw

// 1. add event handler with the withdrow button
// 2. get the withdraw amount from the withdrow  input field 
// 2.5. also make sure to convert the input into a number by using parseFloat
// 3. Get previous withdraw total
// 4. Calculate total withdraw Amount
// 4-5. set total withdraw amount 
// 5.get the prevous blance total
// 6.Calculate new BlanceTotal 

// 7. Clear the input field

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('Withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid number')
        return;
    }

    // step-3 

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // step-5 
    const blanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = blanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBalanceTotalString);
    console.log(previousBlanceTotal);

    // step-7 
    withdrawField.value = '';
    if (newWithdrawAmount > previousBlanceTotal) {
        alert('Baper bank e tk nai');
        return;
    }
    // step-4 
    const currentWithdrawtotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawtotal;


    // step-6 
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotalElement.innerText = newBlanceTotal;

})