document.getElementById('exchange-form').addEventListener('submit', function(e){
    document.getElementById('results').style.display='none';

    document.getElementById('loading').style.display='block';

    setTimeout(calculateResults, 2000);

    e.preventDefault();
     
});

function calculateResults(){    

    var e = document.getElementById('currency');
    const curr = e.value;
    const amount = document.getElementById('amountFrom').value;

    const result = document.getElementById('amountTo');
    const amountFrom = Number(amount);

    let calculatedAmount;

    if (curr === "USD"){
        console.log('USD');
        calculatedAmount = amountFrom * 0.77;
    } 
    else if (curr == 'GBP'){
        calculatedAmount = amountFrom * 0.59;
    }
    else {
        calculatedAmount = amountFrom * 1.05479;
    }
    
    if (isFinite(calculatedAmount)){
        result.value = calculatedAmount.toFixed(5);
        document.getElementById('results').style.display='block';
        document.getElementById('loading').style.display='none';

    }else{
        showError('Check your entry');
    }
} 

function showError(error){
    const errorDiv = document.createElement('div');
    const card = document.querySelector('.card-block');
    const heading = document.querySelector('.header');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    card.insertBefore(errorDiv, heading);

    setTimeout(clearError, 3000);

}

function clearError(){
    document.querySelector('.alert').remove(); 
}