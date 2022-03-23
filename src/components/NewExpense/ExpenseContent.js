import ExpenseClose from "./ExpenseClose";
import ExpenseForm from "./ExpenseForm";

const ExpenseContent = (props) => {
	if (props.showExpense === false) {
		return <ExpenseClose onAddButtonClicked={props.onToggleContent} />;
	} else
		return (
			<ExpenseForm
				onSaveExpenseForm={props.onDataSave}
				onCancelButtonClicked={props.onToggleContent}
			/>
		);
};

export default ExpenseContent;
