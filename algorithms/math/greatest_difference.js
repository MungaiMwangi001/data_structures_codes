/**
 * Find the greatest difference  between two numbers  in a set
  
 * @param { number[]} numbers
 * @returns {number}
 * 
 *numbers = [1,2,3,0,4]
 
*/

const greatestDifference = (numbers) => {
    let index = 0;
    let number;//1
    let largest =  numbers[0];//1
    let smallest = numbers[0];//1

    for (index; index < numbers.length, index++;){
        number= numbers[index];        

        if(number > largest){ largest = number};
        if(number < smallest) { smallest = number};

    }
    return largest - smallest;

};

module.exports = greatestDifference;

