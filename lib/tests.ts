import { getItem } from './getItem';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1: index of -1 should return last item of array, and array should not be modified:
let result = getItem(-1, arr);
if (result === 10 && arr.length === 10) console.log('test 1 passed');
else console.log('test 1 failed.');


// Test 2: index of 0 should return first item of array:
result = getItem(0, arr);
if (result === 1) console.log('test 2 passed');
else console.log('test 2 failed.');


// Test 3: positive index exceeding array's range should trigger error:
let triggeredError = false;
try{
	result = getItem(10, arr);
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 3 passed');
else console.log('test 3 failed.');


// Test 4: negative index exceeding array's range should trigger error:
triggeredError = false;
try{
	result = getItem(-11, arr);
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 4 passed');
else console.log('test 4 failed.');



// Test 5: if something other than integer is passed as index, it should trigger error:
triggeredError = false;
try{
	result = getItem(1.02, arr);
	console.log(result);
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 5 passed');
else console.log('test 5 failed.');


// Test 6: if something other than array is passed as second arg, it should trigger error:
triggeredError = false;
try{
	result = getItem(0, {1:0});
	console.log(result);
}
catch (e) {
	triggeredError = true;
}
if (triggeredError) console.log('test 6 passed');
else console.log('test 6 failed.');