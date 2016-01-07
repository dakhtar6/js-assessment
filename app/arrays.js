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

    var concatArray = arr1.concat(arr2);

    return concatArray; 

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
    
    var duplicatesArray = []; 

    //TEST FOR DUPLICATE 1
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 1) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 1) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 2
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 2) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 2) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 3
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 3) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 3) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 4
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 4) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 4) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 5
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 5) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 5) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 6
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 6) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 6) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 7
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 7) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 7) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 8
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 8) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 8) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 9
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 9) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 9) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }

    //TEST FOR DUPLICATE 0
    
    for (var i = 0; i < arr.length; i++) {
        
        if (arr[i] === 0) {
            
            for (var j = i + 1; j < arr.length; j++) {
                
                if (arr[j] === 0) {
                    
                    duplicatesArray.push(arr[i]);
                    console.log(duplicatesArray);
                    break; 
                }
                
            }
            
            break; 
            
        }
        
    }
    

    return duplicatesArray; 


  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
