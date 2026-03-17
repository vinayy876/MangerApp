import React, { useState } from 'react';
import "./App.css";
const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({
    type: '',
    name: '',
    friend: '',
    date: '',
    currency: '',
    amount: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };
  const handleAddExpense = () => {
    if (newExpense.type && newExpense.name && newExpense.date && newExpense.currency && newExpense.amount) 
    {
      setExpenses([...expenses, newExpense]);
      setNewExpense({
        type: '',
        name: '',
        friend: '',
        date: '',
        currency: '',
        amount: '',
      });
    } else {
      alert('Please fill out all required fields.');
    }
  };
  return (
    <div className="expense-manager-container">
      <div className="header">
        <h1>Simple Expense Manager Project</h1>
      </div>
      <div className="form-container">
        <div className="form-row">
          <label>Type</label>
          <select name="type" value={newExpense.type} onChange={handleInputChange}>
            <option value="">--choose one--</option>
            <option value="Cash">Cash</option>
            <option value="Card">Card</option>
          </select>
          <label>Name</label>
          <input type="text" name="name" value={newExpense.name} onChange={handleInputChange} />
          <label>Date</label>
          <input type="date" name="date" value={newExpense.date} onChange={handleInputChange} /> 
        </div>
        <div className="form-row">
          <label>Currency</label>
          <select name="currency" value={newExpense.currency} onChange={handleInputChange}>
            <option value="">--choose one--</option>
            <option value="RS">RS</option>
            <option value="USD">USD</option>
          </select>
          <label>Amount</label>
          <input type="number" name="amount" value={newExpense.amount} onChange={handleInputChange} />
          <label>Friend</label>
          <input type="text" name="friend" value={newExpense.friend} onChange={handleInputChange} />
        </div>
        <button className="add-button" onClick={handleAddExpense}>Add a New Expense</button>
      </div>
      <div className="expense-table-container">
        <table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Name</th>
              <th>Friend</th>
              <th>Date</th>
              <th>Currency</th>
              <th>Amount</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.type}</td>
                <td>{expense.name}</td>
                <td>{expense.friend}</td>
                <td>{expense.date}</td>
                <td>{expense.currency}</td>
                <td>{expense.amount}</td>
                <td className="edit-buttons">
                  <button className="edit-btn">✏️</button>
                  <button className="delete-btn">🗑️</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
