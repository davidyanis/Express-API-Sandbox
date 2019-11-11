// Make a request for a user with a given ID
function increase() {
  // code
  axios.get('http://localhost:3000/api')
  .then(function (response) {
    // handle success
    console.log(response);
    document.getElementById("counter").innerHTML = response.data.counter
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}

