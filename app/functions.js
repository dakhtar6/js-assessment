exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    //OPTION ONE - USE JS SPREAD
    return fn (...arr);

    //OPTION TWO - USE APPLY METHOD 
    // return fn.apply(null, arr); 
  },

  speak : function(fn, obj) {

    return fn.call(obj);

  },

  functionFunction : function(str) {



  },

  makeClosures : function(arr, fn) {

    // var newMakeClosures = function newMakeClosures () {

    //   var newArr = []; 

    //   arr.forEach(function (num) {
    //     newArr = newArr.concat(fn(num)); 
    //   }); 

    //   return newArr; 
    // }; 

    // return newMakeClosures();

  },

  partial : function(fn, str1, str2) {

  },

  useArguments : function() {

    

  },

  callIt : function(fn) {

  },

  partialUsingArguments : function(fn) {

  },

  curryIt : function(fn) {

  }
};
