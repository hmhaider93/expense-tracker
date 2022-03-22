import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const saveExpenseFormHandler = (savedExpenseData) => {
		const expenseData = {
			...savedExpenseData,
			id: Math.random().toString(),
		};
		props.onExpenseSubmit(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseForm={saveExpenseFormHandler} />
		</div>
	);
};

export default NewExpense;
