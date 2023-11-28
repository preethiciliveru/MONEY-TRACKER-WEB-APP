// the form to submit event for expenses
document.getElementById('expenseForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    // description of the amount input values
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
  
    if (description && !isNaN(amount)) {
      //  new expense to the expenses-details section
      const expensesDetails = document.querySelector('.expenses-details');
      const expenseItem = document.createElement('div');
      expenseItem.classList.add('expense-item');
      expenseItem.innerHTML = `
        <h3>${description}</h3>
        <p>$${amount.toFixed(2)}</p>
      `;
      expensesDetails.appendChild(expenseItem);
  
      // updated total expenses
      const totalExpenseInput = document.getElementById('totalExpense');
      const currentTotalExpense = parseFloat(totalExpenseInput.value) || 0;
      const newTotalExpense = currentTotalExpense + amount;
      totalExpenseInput.value = newTotalExpense.toFixed(2);
  
      // input fields after adding expense
      document.getElementById('description').value = '';
      document.getElementById('amount').value = '';
    }
  });
  