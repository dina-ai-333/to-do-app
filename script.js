function dodajOpravilo() {
  const input = document.getElementById('taskInput');
  const task = input.value.trim();
  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  li.addEventListener('click', () => {
    li.remove();
  });

  document.getElementById('taskList').appendChild(li);
  input.value = '';
}
function pozdrav() {
    console.log("Pozdrav iz main veje");
    console.log("Pozdrav iz konflikt-veje");
}
console.log("Non-fast-forward sprememba v main veji");
