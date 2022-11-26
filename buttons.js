let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;

  try {
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
  }
  catch (error) {
    throw new ValidationError('Make sure the input is valid!');
  }
  finally {
    console.log('Successful computation!')
  }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

// Step 2
errorBtns[0].addEventListener('click', () => {
  console.log('Console Log Demo');
});
errorBtns[1].addEventListener('click', () => {
  console.error('Console Error Demo');
});
errorBtns[2].addEventListener('click', () => {
  console.count('Console Count Button');
});
errorBtns[3].addEventListener('click', () => {
  console.warn('Console Warn Button');
});
errorBtns[4].addEventListener('click', () => {
  const x = 5;
  const y = 90;
  const reason = 'x is expected to be equal y';
  console.assert(x === y, {x, y, reason});
});
errorBtns[5].addEventListener('click', () => {
  console.clear();
});
errorBtns[6].addEventListener('click', () => {
  console.dir(document.head);
});
errorBtns[7].addEventListener('click', () => {
  console.dirxml(document);
});
errorBtns[8].addEventListener('click', () => {
  console.group('Start of Group');
});
errorBtns[9].addEventListener('click', () => {
  console.groupEnd('End of Group');
});
errorBtns[10].addEventListener('click', () => {
  const classes = [
    {
      name: 'CSE 110',
      professor: 'Powell',
    },
    {
      name: 'CSE 101',
      professor: 'Jones',
      location: 'WLH 2001'
    },
    {
      name: 'CSE 100',
      location: 'Remote'
    }
  ];
  console.table(classes);
});
errorBtns[11].addEventListener('click', () => {
  console.time();
});
errorBtns[12].addEventListener('click', () => {
  console.timeEnd();
});
errorBtns[13].addEventListener('click', () => {
  const firstInStack = () => { secondInStack(); };
  const secondInStack = () => { thirdInStack(); };
  const thirdInStack = () => { fourtInStack(); };
  const fourtInStack = () => { console.trace(); };
  firstInStack();
});
errorBtns[14].addEventListener('click', () => {
  throw new Error('Error!');
});
// 14 buttons