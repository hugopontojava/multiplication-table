const input = document.querySelector('.numberValue')

function multiplication (num) {
  console.log('====================');
    for (i = 1; i <= 10; i ++) {
      num = input.value;
      const result = num * i;

      console.log(`${num} X ${i} =`, result);
    }
}

const btn = document.querySelector('.submitBtn')

btn.addEventListener('click', function () {
  multiplication();
  input.value = 1;
})

// show the multiplication table
const div = document.querySelector(('.tableResult'));
