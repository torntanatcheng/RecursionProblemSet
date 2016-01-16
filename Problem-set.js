//RECURSION NOTES

function countDown(num) {
	if (num < 0) {
		return "done"
	}

	console.log(num)
	return countDown(num -= 1)
}

console.log(countDown(10))

//Create a recursive function that loops through an array and outputs the index

var box = ['teddy bear', 'water bottle', 'book']
function countDown(arr, count){
	if (count == undefined) {
		count = arr.length - 1
	}
	console.log(arr[count])
	if (count == 0) {
		return 'done'
	}
	return countDown(arr, count -=1)
}

//RECURSION PROBLEM SET
//Exercise 1:
//Write out the step-by-step execution flow of the above function until termination
function power(base, exponent) {
	if (exponent == 0)
		return 1;
	else 
		return base * power(base, exponent - 1);
}
console.log(power(2,3));
// -> 8

//-So in this example during the first iteration we get 2 times power(2, 2) which is 2 times 2 and the answer is 4. During the second iteration we get:
//-2 times 2 times power(2, 1).
//-Now this is exactly the same as: 2 times 2 times 2 and the result so far is 8.
//-Then in our last iteration the exponent reaches 0.
//-2 times 2 times 2 times power(2, 0)
//-Now when this happens our function returns 1 as in the case of our termination statement.
//-if(exponent == 0) return 1;
//-so the end result is: 2 times 2 times 2 times 1
//-Which is 8

//Exercise 2
//Modify the code to loop forward instead of backward.
//Console.log() the items in the array from first-to-last
//Cannot use array.reverse() method

var tools = ["computer", "books", "text editor"];

function countUp(arr, count) {
	if (count === undefined) {
		count = 0;
	}
	console.log(arr[count]);
	if (count === 2) {
		return "done"
	}
	return countUp(arr, count += 1);
}

countUp(tools)