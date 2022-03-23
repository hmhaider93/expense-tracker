import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState("2020");
	const unFilteredExpenses = props.expenses;
	const expenseFilterSelectHandler = (selectedYear) => {
		setSelectedYear(selectedYear);
	};

	const filteredExpenses = unFilteredExpenses.filter((expense) => {
		return expense.date.getFullYear().toString() === selectedYear;
	});

	return (
		<Card className="expenses">
			<ExpensesFilter
				setFilterValue={selectedYear}
				onExpenseFilterSelect={expenseFilterSelectHandler}
			/>
			{filteredExpenses.length > 0 ? filteredExpenses.map((expense) => (
				<ExpenseItem
					key={expense.id}
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
				/>
			)
			): <h2>Content not found</h2>
			}
		</Card>
	);
}

export default Expenses;
