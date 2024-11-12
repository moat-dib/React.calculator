import { useState } from 'react';
import styles from './/app.module.css';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operand2, setOperand2] = useState('');
	const [operation, setOperation] = useState('');
	const buttons = [
		'7',
		'8',
		'9',
		'C',
		'4',
		'5',
		'6',
		'1',
		'2',
		'3',
		'0',
		'-',
		'+',
		'=',
	];
	function buttonClick(e) {
		console.log(e.currentTarget.id);
		switch (e.currentTarget.id) {
			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
				if (operation === '')
					operand1 === '0'
						? setOperand1(e.currentTarget.id)
						: setOperand1(operand1 + e.currentTarget.id);
				else setOperand2(operand2 + e.currentTarget.id);
				break;
			case '+':
				if (operand2 === '') setOperation('+');
				break;
			case '-':
				if (operand2 === '') setOperation('-');
				break;
			case '=':
				operation === '+'
					? setOperand1(String(Number(operand1) + Number(operand2)))
					: setOperand1(String(Number(operand1) - Number(operand2)));
				setOperand2('');
				setOperation('');
				break;
			case 'C':
				setOperand1('0');
				setOperand2('');
				setOperation('');
				break;
			default:
				break;
		}
	}
	return (
		<div className={styles.calculator}>
			<div className={styles.calculatorOutput}>
				{operand1 + operation + operand2}
			</div>
			<div className={styles.calculatorKeys}>
				{buttons.map((button) => (
					<button
						id={button}
						className={
							styles.calculatorKey +
							' ' +
							(button === '=' && styles.calculatorKeyEnter) +
							' ' +
							((button === '+' || button === '-') &&
								styles.calculatorKeyOperator)
						}
						onClick={buttonClick}
					>
						{button}
					</button>
				))}
			</div>
		</div>
	);
};
