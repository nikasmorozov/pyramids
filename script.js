
let elementsArray = document.querySelectorAll('button');
let place = document.getElementById("place");
let symbol = '&#9786;';
let lenght = document.getElementById('numero');

elementsArray.forEach(function (elem) {
  elem.addEventListener("click", function (e) {
      let output = '';
    switch (e.target.textContent) {

      case "triangle":{
        for (i = 1; i < (Number(lenght.value) + 1); i++) {
          for (j = 0; j < i; j++) {
            output += symbol + '&nbsp;';
          };
          output += '<br>';
        };
      }
        break;
      case "pyramid":{
        for (i = 1; i < (Number(lenght.value) + 1); i++) {
          for (j = Number(lenght.value); j > i; j--) {
            output += '&nbsp;';
          };
          for (k = 0; k < i; k++) {
            output += symbol + '&nbsp;';
          };
          output += '<br>';
        };
      }
        break;
      case "reversed-pyramid":{
        for (i = 0; i < Number(lenght.value); i++) {
          for (k = 0; k < i; k++) {
            output += '&nbsp;';
          };
          for (j = Number(lenght.value); j > i; j--) {
            output += symbol + '&nbsp;';
          };
          output += '<br>';
        };
      }
        break;
    }
   place.innerHTML = output;
  });
});

document.getElementById('clear').addEventListener('click', function () {
  place.innerHTML = '';
  lenght.value = '';
}
)