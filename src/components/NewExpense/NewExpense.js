import "./NewExpense.css";
import ExpenseContent from "./ExpenseContent";
import { useState } from "react";

const NewExpense = (props) => {

    const [showExpense, setShowExpense] = useState(false);

	const saveExpenseFormHandler = (savedExpenseData) => {
		const expenseData = {
			...savedExpenseData,
			id: Math.random().toString(),
		};
		props.onExpenseSubmit(expenseData);
	};

    const addButtonClickedHandler= ()=>{
        setShowExpense((preVal)=>  preVal !== true);
    }

	return (
		<div className="new-expense">
			<ExpenseContent showExpense={showExpense} onToggleContent={addButtonClickedHandler} onDataSave={saveExpenseFormHandler}/>
		</div>
	);
};

export default NewExpense;
