document.addEventListener('DOMContentLoaded', function() {
  let monthlyBudget = 0;
  let remainingBudget = 0;
  const expenses = [];

  const setBudgetBtn = document.getElementById('set-budget-btn');
  const addExpenseBtn = document.getElementById('add-expense-btn');
  const budgetForm = document.getElementById('monthly-budget');
  const expenseForm = document.getElementById('expense-form');
  const expenseTable = document.getElementById('expense-table');
  const expenseList = document.getElementById('expense-list');
  const remainingBudgetDisplay = document.getElementById('remaining-budget');

  setBudgetBtn.addEventListener('click', function(e) {
    e.preventDefault();
    monthlyBudget = parseFloat(budgetForm.value);
    remainingBudget = monthlyBudget;
    remainingBudgetDisplay.textContent = `$${remainingBudget.toFixed(2)}`;
    budgetForm.value = '';
  });

  addExpenseBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const category = document.getElementById('expense-category').value;
    const description = document.getElementById('expense-description').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);
    const date = document.getElementById('expense-date').value;

    const expense = {
      category: category,
      description: description,
      amount: amount,
      date: date
    };

    expenses.push(expense);

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${category}</td>
      <td>${description}</td>
      <td>$${amount.toFixed(2)}</td>
      <td>${date}</td>
    `;
    expenseList.appendChild(newRow);

    remainingBudget -= amount;
    remainingBudgetDisplay.textContent = `$${remainingBudget.toFixed(2)}`;

    document.getElementById('expense-category').value = '';
    document.getElementById('expense-description').value = '';
    document.getElementById('expense-amount').value = '';
    document.getElementById('expense-date').value = '';
  });
});