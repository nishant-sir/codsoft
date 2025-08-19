let input = document.getElementById('input');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === '=') {
      try {
        string = eval(string.replace('×','*').replace('÷','/'));
        input.value = string;
      } catch {
        input.value = "Error!";
        string = "";
      }
    } else if (e.target.innerHTML === 'A/C') {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML === 'Delete') {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
