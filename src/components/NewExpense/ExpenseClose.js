import './ExpenseForm.css'

const ExpenseClose = (props) => {
	return (
		<div className="new-expense__actions" style={{textAlign:'center'}}>
			<button onClick={props.onAddButtonClicked}>Add Expense</button>
		</div>
	);
};

export default ExpenseClose;
