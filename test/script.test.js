const calc = require('../public/script')
global.console = {
  log: jest.fn()
}

document.body.innerHTML = `
    <div>
  <main class="calcGrid">
    <div class="screen">
    </div>        
      <button class="twoSpots" id="acBtn">AC</button>        
      <button>DEL</button>        
      <button>÷</button>        
      <button>7</button>
      <button>8</button>
      <button>9</button>        
      <button>x</button>        
      <button>4</button>
      <button>5</button>
      <button>6</button>        
      <button>+</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>        
      <button class="twoSpots">=</button>
  </main>
  </div>
  <footer class="bottom">&copy;2021 Agile Development Team </footer>
  `;

test('replacement of operations', () => {
  expect(calc.opConvert('5+8x9÷5')).toBe('5+8*9/5');
});

test('test eval', () => {
  const inputScreen = document.querySelector('.screen');
  calc.specAction('5+8', '=')

  expect(inputScreen.innerHTML).toBe('13');
});

test('test error', () => {
  const inputScreen = document.querySelector('.screen');
  calc.specAction('5++8', '=')

  expect(inputScreen.innerHTML).toBe('Syntax Error');
});

test('test DEL', () => {
  const inputScreen = document.querySelector('.screen');

  calc.specAction('589', 'DEL');
  expect(console.log).toHaveBeenCalledWith('58');

});

test('test AC', () => {
  const inputScreen = document.querySelector('.screen');
  calc.specAction('5+8', 'AC')

  expect(inputScreen.innerHTML).toBe('');
});