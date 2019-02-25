import { getByIndexes } from './index';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = ['he', 'llo', 'bay', 'bayyyy'];

// Test 1: Make sure 0 and 1 gets first 2 items:
let result = getByIndexes([0, 1], arr);
if (arraysMatch(result, ['he', 'llo'])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 1A: Make sure the array wasn't modified:
if (arraysMatch(arr, ['he', 'llo', 'bay', 'bayyyy'])) console.log('test 1A passed');
else console.log('test 1A FAILED');


// Test 2: Make sure 4 and 5 gets the last 2 items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
result = getByIndexes([4, 5], arr);
if (arraysMatch(result, ['cc', 'aa'])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 2A: Make sure the array wasn't modified:
if (arraysMatch(arr, ['he', 'llo', 'zz', 'gg', 'cc', 'aa'])) console.log('test 2A passed');
else console.log('test 2A FAILED');



// Test 3: Make sure [-8, 3] gets correct items:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa', 'hh', 'oo'];
result = getByIndexes([-8, 3], arr);
if (arraysMatch(result, ['he', 'gg'])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 3A: Make sure the array wasn't modified:
if (arraysMatch(arr, ['he', 'llo', 'zz', 'gg', 'cc', 'aa', 'hh', 'oo'])) console.log('test 3A passed');
else console.log('test 3A FAILED');



// Test 4: Make sure -7 triggers error:
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
let errorTriggered = false;
try {
	getByIndexes([0, -7], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Make sure 6 triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	let x = getByIndexes([6], arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: Make sure non-array as first arg triggers error:
errorTriggered = false;
arr = ['he', 'llo', 'zz', 'gg', 'cc', 'aa'];
try {
	getByIndexes({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: Make sure non-array as second arg triggers error:
errorTriggered = false;
try {
	getByIndexes([1], {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 7 passed');
else console.log('test 7 FAILED');
