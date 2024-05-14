document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('transaction-form');
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const transactionList = document.getElementById('transaction-list');
    const totalDisplay = document.getElementById('total');
    let total = 0;
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const description = descriptionInput.value;
      const amount = parseFloat(amountInput.value);
  
      if (description.trim() === '' || isNaN(amount)) {
        alert('Please enter valid description and amount.');
        return;
      }
  
      const transaction = document.createElement('li');
      transaction.textContent = `${description}: $${amount.toFixed(2)}`;
      transactionList.appendChild(transaction);
  
      total += amount;
      totalDisplay.textContent = total.toFixed(2);
  
      descriptionInput.value = '';
      amountInput.value = '';
    });
  });
  