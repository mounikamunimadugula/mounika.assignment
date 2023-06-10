const items = document.querySelectorAll('.item');
const container1 = document.querySelector('.container:nth-child(1)');
const container2 = document.querySelector('.container:nth-child(2)');
const resetButton = document.getElementById('resetButton');

let draggedItem = null;

// Adding event listeners for drag and drop
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

container1.addEventListener('dragover', dragOver);
container1.addEventListener('dragenter', dragEnter);
container1.addEventListener('dragleave', dragLeave);
container1.addEventListener('drop', dragDrop);

container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', dragDrop);

resetButton.addEventListener('click', resetContainers);

function dragStart(event) {
  draggedItem = this;
  setTimeout(() => (this.style.display = 'none'), 0);
}

function dragEnd() {
  setTimeout(() => (draggedItem.style.display = 'block'), 0);
  draggedItem = null;
}

function dragOver(event) {
  event.preventDefault();
}

function dragEnter(event) {
  event.preventDefault();
  this.classList.add('highlight');
}

function dragLeave() {
  this.classList.remove('highlight');
}

function dragDrop() {
  this.classList.remove('highlight');
  this.appendChild(draggedItem);
  draggedItem = null;
  showMessage('Item dropped successfully!');
}

function resetContainers() {
  container1.innerHTML = '';
  container2.innerHTML = '';

  items.forEach(item => {
    container1.appendChild(item);
  });

  showMessage('Containers reset successfully!');
}

function showMessage(message) {
  const messageBox = document.createElement('div');
  messageBox.innerText = message;
  document.body.appendChild(messageBox);
  setTimeout(() => {
    messageBox.remove();
  }, 2000);
}
