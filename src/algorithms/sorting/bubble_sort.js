const Comparator = require('./util/comparator')


/****
 * Bubble sort 
 *  algorithm O(n^2)
 * divide array into soretd and unsorted 
 * smallest element is bubbled up from unsorted to sorted
 *  just swap adjeacent elements if in wrong order
 * 
 * a = 23, 78,45,8, 32,56 - compare the 32,56, already sorted
 *  -compare now 8, 32, alreday sorted
 * -compare  45,8 -we will buble up 8 takes the position of 45
 * new array 23,78,8,45,32,56
 * -compare 78, 8 - bubble up 8 to take 78 positio
 * new array 23, 8, 78,45,32,56
 * -compare now 23, 8, bubbble up 8 to take index[0]
 * new array - 8,23,78,45,32,56 
 * 
 */

//0, 1, 2, 3
//76,32,45,54
const bubbleSort = (a, comparatorFn) => {
    const comparator = new Comparator(comparatorFn);
    const n = a.length;
    let bound  = n-1; //4
    let check = false;

    for (let i = 0; i < n - 1; i++) {
        let newbound = 0;

        for(let j = 0; j < bound; j++){
            if(comparator.greaterThan(a[j],a[j+1])){
                const tmp = a[j];
                a[j]= a[j+1];
                a[ j + 1] = tmp;
                newbound = j;
                check = true;
            }
        }
        if(!check) return a;
        bound = newbound;
    }
    return a;
};
MediaSourceHandle.exports = bubbleSort;


function bubblesort2(a){
    for(let i =a.length-1;i > 0; i--){
        for (j = 0; j < i; j++){
            if (a[j] > a[j+1]){
                temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }

    return a
}



