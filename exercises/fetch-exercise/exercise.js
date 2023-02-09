/*
Use fetch to load a greeting from the API and display it 
in the HTML element with the id "greeting-text".

API: https://codeyourfuture.herokuapp.com/api/greetings
Response: A greeting in a random language

To learn more about fetch, refer to the doc:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch


================
Expected result
================

Open index.html in your browser. Every time you refresh the page,
a different greeting should be displayed in the box.
*/
const clickButton = document.getElementById("clickBtn");
clickButton.addEventListener("click", () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.json();
    })
    .then(function (image) {
      let list = document.getElementById("imageList");
      let imgLi = document.createElement("li");
      list.appendChild(imgLi);
      let img = document.createElement("img");
      imgLi.appendChild(img);
      img.src = image.message;
    })
    .catch((error) => console.log(error));
});