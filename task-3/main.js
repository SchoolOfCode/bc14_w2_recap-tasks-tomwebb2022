// 👉 TASK 3.1 Using fetch, get a random cat image URL using the API URL: https://api.thecatapi.com/v1/images/search
async function getCatImage() {
    let response = await fetch('https://api.thecatapi.com/v1/images/search');
    let data = await response.json();
    let imgUrl = data[0].url;
    let catImg = document.getElementById('cat-here');
    catImg.src = imgUrl;
}
getCatImage();

createElement('Button');


