let url = "https://jsonplaceholder.typicode.com/todos/1";

let fetchResults = (url) => {
  fetch(url)
    .then((response) => {
      return response.json(); // Parse response body as JSON
    })
    .then((data) => {
      console.log(data); // Log parsed JSON data to the console
    })
    .catch((error) => {
      console.error(error); // Log any errors to the console
    });
};