array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

sum = 0;

for (i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log(`The sum of the array is ${sum}`);

ammountOfPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        ammountOfPositiveElements++;
    }
}

console.log(`The ammount of positive elements is ${ammountOfPositiveElements}`);

minElement = null;
indexOfMinElement = null;

for (i = 0; i < array.length; i++) {
    if (minElement > array[i]) {
        minElement = array[i];
        indexOfMinElement = array.indexOf(minElement);
    }
}

console.log(`Min element of the array : ${minElement} , it's index : ${indexOfMinElement + 1}`);

maxElement = null;
indexOfMaxElement = null;

for (i = 0; i < array.length; i++) {
    if (maxElement < array[i]) {
        maxElement = array[i];
        indexOfMaxElement = array.indexOf(maxElement);
    }
}

console.log(`Max element of the array : ${maxElement} , it's index : ${indexOfMaxElement + 1}`);

ammountOfNegativeElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        ammountOfNegativeElements++;
    }
}

console.log(`The ammount of negative elements is ${ammountOfNegativeElements}`);

ammountOfOddPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        ammountOfOddPositiveElements++;
    }
}

console.log(`The ammount of odd positive elements is ${ammountOfOddPositiveElements}`);

ammountOfEvenPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        ammountOfEvenPositiveElements++;
    }
}

console.log(`The ammount of even positive elements is ${ammountOfEvenPositiveElements}`);

sumOfEvenPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 === 0) {
        sumOfEvenPositiveElements += array[i];
    }
}

console.log(`The sum of even positive elements is ${sumOfEvenPositiveElements}`);

sumOfOddPositiveElements = 0;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] % 2 !== 0) {
        sumOfOddPositiveElements += array[i];
    }
}

console.log(`The sum of odd positive elements is ${sumOfOddPositiveElements}`);

multipleOfPositiveElements = null;

for (i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        multipleOfPositiveElements = multipleOfPositiveElements ? multipleOfPositiveElements * array[i] : array[i];
    }
}

console.log(`The multiple of positive elements is ${multipleOfPositiveElements}`);

maxElement = null;

for (i = 0; i < array.length; i++) {
    if (maxElement < array[i]) {
        maxElement = array[i];
    }
}

console.log(`Max element of the array : ${maxElement}`);

for (i = 0; i < array.length; i++) {
    if (maxElement > array[i]) {
        delete array[i];
    }
}

console.log(array);