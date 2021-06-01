/*const data = {
	name: 'mehmet'
};

const data2= {
	surname: 'seven',
	age: 25
};

const data3 = {
	age: 30
};

const result = Object.assign({}, data, data2, data3);
*/

const data = {
	info: {
		name: 'mehmet',
		surname: 'seven'
	}
};
const data2 = JSON.parse(JSON.stringify(data));

data2.info.name = 'ahmet';

console.log('data:', data);
console.log('data2:', data2);
