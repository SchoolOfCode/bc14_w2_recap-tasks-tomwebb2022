const button = document.querySelector('#myButton');
const imageContainer = document.querySelector('#imageContainer');

async function getCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await response.json();
    const imgUrl = data[0].url;
    const existingImage = imageContainer.querySelector('img');
    if (existingImage) {
      imageContainer.removeChild(existingImage);
    }
    const image = document.createElement('img');
    image.src = imgUrl;
    imageContainer.appendChild(image);
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener('click', getCatImage);
