const data = {
	name: 'mehmet',
	surname: 'seven'
};

const newData = {
	age: 25,
	...data
};

console.log(newData);