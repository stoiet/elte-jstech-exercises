
if (true) {
  const constantVariable = 'you can not change this';
  let blockScopeVariable = 'you can change this but can not see me';
  var variable = 'you can see me and change';

  // constantVariable += " extra";
  blockScopeVariable += " extra";
  variable += " extra";
}

// console.log(constantVariable);
// console.log(blockScopeVariable);
console.log(variable);
