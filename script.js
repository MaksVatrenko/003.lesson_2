const action = prompt('Введіть дію, яку потрібно виконати: add, sub, mult, div');
const a = prompt('Введіть перше число');
const b = prompt('Введіть друге число');

function condition(action, a, b) {
	return (
		['add', 'sub', 'mult', 'div'].includes(action) &&
		!isNaN(Number(a)) &&
		!isNaN(Number(b)) &&
		a.trim() !== '' &&
		b.trim() !== ''
	);
}

if (!condition(action, a, b)) {
	alert('Ви не виконали одну із цих умов: \n1) Потрібно ввести одну з цих дій: add, sub, mult, div \n2) Ввести число \n3) Не залишати поле пустим');
} else if (action === 'div' && +b === 0) {
	alert('Ділити на 0 не можна')
} else {
	const numA = +a;
	const numB = +b;

	let result;

	switch (action) {
		case 'add': result = `${numA} + ${numB} = ${numA + numB}`;
			break;
		case 'sub': result = `${numA} - ${numB} = ${numA - numB}`;
			break;
		case 'mult': result = `${numA} * ${numB} = ${numA * numB}`;
			break;
		case 'div': result = `${numA} / ${numB} = ${numA / numB}`;
			break;
	}

	alert(result)
}