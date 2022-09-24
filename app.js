const input = document.querySelector('.numberValue');
const div = document.querySelector('.tableContainer');
const tableDiv = document.querySelector('.tableResult');

const btn = document.querySelector('.submitBtn')
btn.addEventListener('click', function (num) {
  if (input.value >= 1) {
    for (i = 1; i <= 10; i++) {
      num = input.value;
      const result = num * i;
      
      // if (tableDiv.children >= 0) {
        // ? tableDiv.replaceChildren()
      // }
      const p = document.createElement('p');
        tableDiv.appendChild(p);
      const tablePattern = document.createTextNode(`${num} X ${i} = ${result}`);
        p.appendChild(tablePattern);
        div.classList.remove('showContainer');
    } 
  } else {
      alert('Need to be a number higher then 0!');
    }
  input.value = 1;
})