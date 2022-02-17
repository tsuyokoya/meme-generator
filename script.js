const h1 = document.querySelector('h1');
const body = document.querySelector('body');
const spans = document.querySelectorAll('span.color-change');
const url = document.querySelector('input[name="url"]');
const topText = document.querySelector('input[name="topText"]');
const bottomText = document.querySelector('input[name="bottomText"]');
const submitButton = document.querySelector('.submit-btn');
const memeDiv = document.querySelector('div.memes');


const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
}

const setColorOfSpans = () => {
  // for (let i = 0; i < spans.length; i++){
  //   let color = randomColor();
  //   spans[i].style.color = color;
  // }
  for(const span of spans){
    let color = getRandomColor();
    span.style.color = color;
  }
}

setInterval(setColorOfSpans,1000);

//Create meme upon submit
submitButton.addEventListener("click",(e) => {
  e.preventDefault();
  if(url.value !== ''){
    createMeme(url.value, topText.value.toUpperCase(), bottomText.value.toUpperCase());
  }
})

const createMeme = (url,top,bottom) => {
  const container = document.createElement('div');
  createMemeImage(url,container);
  addTextToMeme(top,bottom,container);
  const deleteBtn = createDeleteButton();
  container.append(deleteBtn);

  memeDiv.append(container);
}

const createMemeImage = (url,container) => {
  //Create image & container elements and append to container
  const img = document.createElement('img');

  container.classList.add('container');
  img.setAttribute('src',url);
  container.append(img);
  return img;
}

const addTextToMeme = (top,bottom,container) => {
  //Create text divs and append to container
  const topDiv = document.createElement('div');
  const bottomDiv = document.createElement('div');

  topDiv.innerText = top;
  bottomDiv.innerText = bottom;

  topDiv.classList.add('text','top');
  bottomDiv.classList.add('text','bottom');
  container.append(topDiv,bottomDiv);
}

const createDeleteButton = () => {
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete');
  deleteButton.innerText = 'X';
  return deleteButton;
}

//Remove meme when delete button clicked
memeDiv.addEventListener("click",(e) => {
  if(e.target.nodeName === "BUTTON"){
    let parentContainer = e.target.parentElement;
    parentContainer.remove();
  }
})

const createExampleMeme = () => {
  const exampleImgUrl = 'https://images.news18.com/ibnlive/uploads/2021/06/1623900306_untitled-design-2021-06-17t085747.057.png?impolicy=website&width=510&height=356';
  const exampleTopText = 'I AM DOGE';
  const exampleBottomText = 'NOT COIN...';
  createMeme(exampleImgUrl,exampleTopText,exampleBottomText);
}

createExampleMeme();