class RandomizedSet {
    constructor() {
      this.values = []; // Dynamic array to store the elements
      this.valueToIndex = new Map(); // Map to store value-to-index mapping
    }
  
    /**
     * Inserts a value to the set. Returns true if the value was not already present.
     * @param {number} val
     * @return {boolean}
     */
    insert(val) {
      if (this.valueToIndex.has(val)) {
        return false;
      }
      // Add the value to the end of the array
      this.values.push(val);
      // Map the value to its index
      this.valueToIndex.set(val, this.values.length - 1);
      return true;
    }
  
    /**
     * Removes a value from the set. Returns true if the value was present.
     * @param {number} val
     * @return {boolean}
     */
    remove(val) {
      if (!this.valueToIndex.has(val)) {
        return false;
      }
      // Get the index of the value to be removed
      const indexToRemove = this.valueToIndex.get(val);
      // Get the last element in the array
      const lastElement = this.values[this.values.length - 1];
      
      // Swap the last element with the element to remove
      this.values[indexToRemove] = lastElement;
      this.valueToIndex.set(lastElement, indexToRemove);
      
      // Remove the last element from the array
      this.values.pop();
      // Delete the value from the map      
      this.valueToIndex.delete(val);
      return true;
    }
  
    /**
     * Gets a random element from the set.
     * @return {number}
     */
    getRandom() {
      if (this.values.length === 0) {
        return null; // Return null if the set is empty
      }
      // Generate a random index and return the corresponding element
      const randomIndex = Math.floor(Math.random() * this.values.length);
      return this.values[randomIndex];
    }
  }
  