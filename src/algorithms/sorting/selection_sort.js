const Comparator = require('./util/comparator')

/**
 * Selection sort algorithm O(n^2)
 * 
 * divide array into sorted and unsorted
 * find the smallest el from the unxorted and swap it with
 * the element at the beginning
 */
// i,j
//a = 4,5,1,3,2

const selectionSort = (a, comparatorFn) => {
    const comparator  =  new Comparator(comparatorFn)
    const n = a.length
    for (let  i  = 0; i < n - 1; i++){
        let min  = i; //[0]
        //compare the current element to an element that is smaller 
        // it in the array
        for  (let j = i + 1; j < n; j++){
                                        //4, 
            if (comparator.greaterThan(a[min],a[j])){
                min =  j; //index 2
            }
        }
        // 1 not equal 4
        if (min !== i) {
            const tmp = a[i];//4
            a[i] = a[min];//1
            a[min] = tmp;//4
        }
    }
    return a; //1,5,4,3,2

}

module.exports = selectionSort;