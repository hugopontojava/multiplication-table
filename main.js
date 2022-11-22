const input = document.querySelector('.numberValue');
const div = document.querySelector('.tableContainer');
const tableDiv = document.querySelector('.tableResult');
const btn = document.querySelector('.submitBtn');

function showResult(num, i, result) {
	const p = document.createElement("p");
	tableDiv.appendChild(p);
	const tablePattern = document.createTextNode(`${num} X ${i} = ${result}`);
	p.appendChild(tablePattern);
	div.classList.remove("showContainer");
}

btn.addEventListener("click", ({ num = input.value }) => {
	if (num >= 1) {
		for (i = 1; i <= 10; i++) {
      const result = num * i;
			if (tableDiv.childNodes.length === 10) {
        tableDiv.replaceChildren();
        showResult(num, i, result);
			} else {
				showResult(num, i, result);
			}
		}
	} else {
		alert("Need to be a number higher then 0.");
	}
	input.value = 1;
})