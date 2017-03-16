function receivesAFunction(callback){
  return callback();
}

function returnsANamedFunction(){
  return function receivesAFunction(){
    return "Got it!"
  };
}

 function returnsAnAnonymousFunction(){

  return function(){
    return "here"
  };
}
