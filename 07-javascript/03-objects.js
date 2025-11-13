let result = {};

const insertItem = (key, value) => {
  // Insert the property with key and value into result
  result[key] = value;
  return key;
};

const deleteItem = (key) => {
  // Remove the property with key from result
  delete result[key];
  return key;
};

const lookupItem = (key) => {
  // Return the value from result associated with key, or a message if it doesn't exist
  if (result.hasOwnProperty(key)) {
    return result[key];
  } else {
    return 'Item does not exist';
  }
};

const printItems = () => {
  // Return a string of the keys in result, separated by commas
  return Object.keys(result).join(', ');
};

// Testing
insertItem('hello', 'world');
insertItem('lorem', 'ipsum');
insertItem('sit', 'amet');
console.log(printItems());
// expected: 'hello, lorem, sit' (order may vary)
console.log(lookupItem('lorem'));
// expected: 'ipsum'

deleteItem('lorem');
console.log(printItems());
// expected: 'hello, sit' (order may vary)
console.log(lookupItem('lorem'));
// expected: 'Item does not exist'
