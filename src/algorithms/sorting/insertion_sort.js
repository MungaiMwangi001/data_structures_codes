const Comparator = require('./util/comparator')

/**
 * sorting technique used by card players
 * in each pass the first element of the unsorted part is pickeed up 
 * transferred to the sorted sublist  and inserted at the appropriate place
 * 
 */
//5,2,4,6,1,3

const  insertionSort = (arr, comparatorFn) => {
    const comparator = new Comparator(comparatorFn);

    for (let i = 1, len = vector.length; i < len; i++){

        const aux = vector[i];//2
        let j = i;//1

                // 1> 0 && 2 < 5  arr[j-1] =arr[0]
        while(j > 0 && comparator.lessThan(aux,arr[j-1])){
            arr[j] = arr[j -1] //arr[j] =5 at index 1 el will be 5
            j--;
        }

        //
        arr[j]  = aux;

    }

    return arr;

}