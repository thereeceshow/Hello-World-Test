function  newName() {
  let name = document.getElementById('name').innerText = prompt('What is your name')
}

document.getElementById('btn').addEventListener('click', newName)