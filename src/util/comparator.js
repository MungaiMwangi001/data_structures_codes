/**
 * Initialaize the comparator object with a function 
 * 
 * if the function is not passed, it will use the default compare signs(<, > and ==)
 * 
 *  @param { Function } compareFn
 * 
 * */

class Comparator {
    constructor(compareFn) {
      if (compareFn) {
        this.compare = compareFn;
      }
    }


    /**
     * Default implementation for the compare function
     */

    compare(a,b) {
        if  (a === b) return 0;
        return a < b ? -1 : 1;
    }

    lessThan(a, b){
      return this.compare(a, b) < 0;
    }

    lessThanOrEqual(a, b) {
      return this.lessThan(a, b) || this.equal(a, b)
    }

    greaterThan(a,b ){
        return this.compare(a,b) > 0;
    }

    greaterThanOrEqualTo (a, b) {
       return this.greaterThan(a,b) || this.equal(a,b)
    }


    equal(a, b) {
      return this.compare(a, b) === 0;
    }

    /**
     * Revrese the comparison function to use the opposite logic, e.g: 
     * this.compare(a, b) => 1
     * this.reverse();
     * this.compare(a, b) => -1
     */

    revrse(){
      const originalCompareFn = this.compare;
      this.compare = (a, b) => originalCompareFn(b, a);
    }

}

module.exports = Comparator;