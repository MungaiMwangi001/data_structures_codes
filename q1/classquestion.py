
import random

class RandomizedSet:
    def __init__(self):
        # Hash map to store element-to-index mapping
        self.value_to_index = {}
        # List to store elements
        self.values = []

    def insert(self, val):
        """
        Inserts a value into the set. Returns True if the value was not already present.
        """
        if val in self.value_to_index:
            return False
        # Add the value to the end of the list
        self.values.append(val)
        # Store its index in the hash map
        self.value_to_index[val] = len(self.values) - 1
        return True

    def remove(self, val):
        """
        Removes a value from the set. Returns True if the value was present.
        """
        if val not in self.value_to_index:
            return False
        # Get the index of the value to be removed
        index_to_remove = self.value_to_index[val]
        # Get the last element in the list
        last_element = self.values[-1]
        
        # Move the last element to the position of the element to remove
        self.values[index_to_remove] = last_element
        self.value_to_index[last_element] = index_to_remove
        
        # Remove the last element from the list
        self.values.pop()
        # Delete the value from the hash map
        del self.value_to_index[val]
        return True

    def get_random(self):
        """
        Returns a random element from the set.
        """
        if not self.values:
            return None
        # Use random.choice to select a random element
        return random.choice(self.values)
