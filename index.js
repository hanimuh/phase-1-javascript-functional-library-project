const myEach = (testArr, alert) => {
    for (let i = 0; i < testArr.length; i++) {
        alert(testArr[i]);
        return testArr;
    }
    }
    const myMap = (testArr, callback) => {
        let newArray = [];
        for (let i = 0; i < testArr.length; i++) {
            newArray.push(callback(testArr[i]));
        }
        return newArray;
    }
    const myReduce = (array, callback, initialValue) => {
        let accumulator = initialValue;
        for (let i = 0; i < array.length; i++) {
            accumulator = callback(accumulator, array[i]);
        }
        return accumulator;
    }
    const myFilter = (array, callback) => {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
    const myFind = (array, callback) => {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return array[i];
            }
        }
    }
    const mySome = (array, callback) => {
        for (let i = 0; i < array.length; i++) {
            if (callback(array[i])) {
                return true;
            }
        }
        return false;
    }
    const myEvery = (array, callback) => {
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i])) {
                return false;
            }
        }
        return true;
    }
    const myFlatten = (array) => {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            if (Array.isArray(array[i])) {
                newArray = newArray.concat(myFlatten(array[i]));
            } else {
                newArray.push(array[i]);
            }
        }
        return newArray;
    }
    const mySize = (array, size) => {
        let newArray = [];
        for (let i = 0; i < array.length; i += size) {
            newArray.push(array.slice(i, i + size));
        }
        return newArray;
    }
    const myFirst = (arr) => {
        return arr[0];
    }
    const myLast = (arr) => {
        return arr[arr.length - 1];
    }
    const myKeys = (obj) => {
        let newArray = [];
        for (let key in obj) {
            newArray.push(key);
        }
        return newArray;
    }
    const myValues = (obj) => {
        let newArray = [];
        for (let key in obj) {
            newArray.push(obj[key]);
        }
        return newArray;
    }