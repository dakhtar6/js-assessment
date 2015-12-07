exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {

    for (var i = 0, length = arr.length; i < length; i++) {
      if (arr[i] === item) {
        return i; 
      }
    }

    return -1; 
  },

  sum : function(arr) {

    var sum = 0; 

    for (var i = 0, length = arr.length; i < length; i++) {
      sum = sum + arr[i]; 
    }

    return sum; 

  },

  remove : function(arr, item) {

    for (var i = 0, length = arr.length; i < length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1); 
        i = i -1; 
      }
    }

    return arr; 

  },

  removeWithoutCopy : function(arr, item) {

    for (var i = 0, length = arr.length; i < length; i++) {
      if (arr[i] == item) {
        // arr.splice(i, i + 1); //THE i + 1 IS AD-HOC AND NOT A GOOD SOLUTION BUT PASSES THE TEST
          arr.splice(i, 1);
          i = i - 1;
      }
    }

    return arr; 
  },

  append : function(arr, item) {
      
    arr.push(item);  

    return arr; 

  },

  truncate : function(arr) {

    arr.pop();

    return arr;

  },

  prepend : function(arr, item) {

    arr.unshift(item);

    return arr; 

  },

  curtail : function(arr) {

    arr.shift();

    return arr;

  },

  concat : function(arr1, arr2) {

    var newArray = arr1.concat(arr2);

    return newArray; 

  },

  insert : function(arr, item, index) {

    arr.splice(index, 0, item); 

    return arr; 

  },

  count : function(arr, item) {

    var duplicateItems = []; 

    for (var i = 0, length = arr.length; i < length; i++) {

      if (arr[i] == item) {
          duplicateItem = arr.splice(i, 1);
          duplicateItems.push(duplicateItem); 
          i = i - 1;
      }
    }

    return duplicateItems.length; 

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
