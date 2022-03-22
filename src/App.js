import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

function App() {
	const expensesSetup = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

  const[expenses, SetExpenses] = useState(expensesSetup);

  const expenseSubmitHandler = (submittedData)=>{
    SetExpenses((prevState)=>{
      return [submittedData, ...prevState]
    });
    // expenses.push(submittedData);
    // console.log(expenses);
    console.log(expenses);
  }


	return (
		<div className="App-header">
			{/* <h1>Lets Get Started 😎</h1> */}
      <NewExpense onExpenseSubmit={expenseSubmitHandler}></NewExpense>
      <Expenses expenses = {expenses}></Expenses>
		
		</div>
	);
}

export default App;
