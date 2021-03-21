const divScreen = document.querySelector("#screen");
const btnCreateNumber = document.querySelector("#createNumber");
const btnCallNumber = document.querySelector("#callNumber");
const spanNewNumber = document.querySelector("#newNumber");
const spanQueue = document.querySelector("#queue");

let n = 0;
let queue = [];

btnCreateNumber.onclick = () => {
  n += 1;
  queue.push.call(queue, n); //或者queue.push(n),但是推荐使用call
  spanNewNumber.innerText = n;
  spanQueue.innerText = JSON.stringify(queue);
};

btnCallNumber.onclick = () => {
  if (queue.length === 0) {
    alert("别叫了");
    return;
  }
  const m = queue.shift.call(queue); //const m = queue.shift()
  divScreen.innerText = `请${m}号就餐`;
  spanQueue.innerText = JSON.stringify(queue);
};
