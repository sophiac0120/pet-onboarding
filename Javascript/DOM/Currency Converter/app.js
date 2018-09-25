document.getElementById('exchange-form').addEventListener('submit', calculateResults);

function calculateResults(el){    

    var e = document.getElementById('currency');
    const curr = e.value;
    const amount = document.getElementById('amountFrom').textContent;
    console.log(amount);
    const result = document.getElementById('amountTo');
    const amountFrom = Number(amount);
    console.log(amountFrom);
    let calculatedAmount;

    console.log(amountFrom);

    if (curr === "USD"){
        console.log('USD');
        calculatedAmount = amountFrom * 0.77;
    } 
    else if (curr == 'GBP'){
        calculatedAmount = amountFrom * 0.59;
    }
    else {
        calculatedAmount = amountFrom * 0.66;
    }
    console.log(calculatedAmount);
    if (isFinite(calculatedAmount)){
        result.value = calculatedAmount.toFixed(2);
    }else{
        showError('Check your entry');
    }

    e.preventDefault();

} 

function showError(error){
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card');
    const heading = document.querySelector('.header');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);

}

function clearError(){
    document.querySelector('.alert').remove; 
}