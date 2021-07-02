//even-odd-reporter
for (let i = 0; i <= 20; i++) {
  if (i % 2 ===0){
      console.log (i+ 'is even');
  } else {
      console.log ('i+ is odd');
  };

//multiplication-tables

const multiplier = 9;
for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log (multiplier + '*' + i + '=' + result);
  };

// bonus
for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let i = 0; i <= 10; i++) {
        let result = multiplier * i;
        console.log (multiplier + '*' + i + '=' + result);
    }
  };

  //grade-assigner

  const assignGrade = function (score){
    if (score >90){
        return 'A';
    } else if (score >80) {
        return 'B';
    } else if (score >70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else { 
        return 'F';
    }
};
for (let i = 75; i<=100; i++){
    console.log ('for' + i + 'you get a' +assignGrade(i));
};
