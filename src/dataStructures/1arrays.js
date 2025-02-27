//Array - data structure that stores mutiple values  in a single variable 
// -in javascript arrays are Dynamic - can grow or shrink  in size
// - can store different data types
//- arrays are stored in a contiguous memory -allows fast access using indexing (O(1)
//- Contiguous memory means a sequence of memory addresses that are next to each other (without gaps).



//create an array in javascript
const array = [2, 5, 1, 9, 6, 7]; // JavaScript
//result - [ 2, 5, 1, 9, 6, 7 ]


//get element at index 4
array[4]; 
// result -  6

// insert to tail
array.push(4) //=> [2, 5, 1, 9,6, 7, 4]

//update values anywhere - example at index 8
array[8] = 3 //=> [ 2, 5, 1, 9, 6, 7, 4, <1 empty item>, 3 ]

//insert at head, changes evey index
array.unshift(0)
//result => [ 0, 2, 5, 1, 9, 6, 7, 4, <1 empty item>, 3 ]

//deleting -can change all the indexes
//on position 4, delete 2 items
array.splice(4, 2)
//[ 0, 2, 5, 1, 7, 4, <1 empty item>, 3 ]

//insert elements in the middle
array.splice(1, 0, 111)//at index 1 delete 0 elemnts  and insert 111 
//[ 0, 111, 2, 5, 1, 7, 4, <1 empty item>, 3 ]


//delete at the beginning of an arry
array.shift()
//[ 111, 2, 5, 1, 7, 4, <1 empty item>, 3 ]

//delete at the midle
array.splice(2,1)
//[ 111, 2, 1, 7, 4, <1 empty item>, 3 ]

//deleting  last element
array.pop(); 
//result - [ 111, 2, 1, 7, 4, <1 empty item> ]


console.log(array)