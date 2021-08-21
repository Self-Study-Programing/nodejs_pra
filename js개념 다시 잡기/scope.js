function and(x) {
    return function print(y) {
      return x + ' and ' + y;
    };
  }
  
  const saltAnd = and('salt');
  console.log(saltAnd('pepper'));
  console.log(saltAnd('sugar'));