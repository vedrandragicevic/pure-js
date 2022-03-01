document.getElementById('test').addEventListener('click',function(e){
        e.preventDefault();

        // HIDE RESULTS
        document.getElementById('results').style.display = 'none';

        //SHOW LOADER IMAGE WHEN BUTTON IS CLICKED
        document.getElementById('loading').style.display = 'block';

        setTimeout(calculateResults, 2000);
    }
);


function calculateResults(){

   
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');

    const monthlyPayment = document.getElementById('monthy-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-INTEREST')


    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 /12;
    const calculatedPayments = parseFloat(years.value) * 12;


    // Compute monthly payments

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x-1);

    // CHECK IF MONTH IS FINITE
    if(isFinite(monthly)) {
  
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);

        // SHOW RESULTS
        document.getElementById('results').style.display = 'block';

        //HIDE LOADER IMAGE
        document.getElementById('loading').style.display = 'none';

    } else {
        showError('Please check your numbers!');
    }
}


// CREATE NEW DIV ELEMENT
function showError(error){
    // HIDE RESULTS
    document.getElementById('results').style.display = 'none';

    //HIDE LOADER IMAGE
    document.getElementById('loading').style.display = 'none';


    const errorDiv = document.createElement('div');

    // Get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // Add class
    errorDiv.className = 'alert alert-danger';

    // Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // Insert error above heading
    card.insertBefore(errorDiv, heading);

    // CLEAR ERROR AFTER 3 SECONDS (3000 miliseconds)
    setTimeout(clearError, 3000);

}

// REMOVE DIV THAT HAS CLASS ALERT AFTER 3 SECONDS
function clearError(){
    document.querySelector('.alert').remove();
}