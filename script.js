
let elementsArray = document.querySelectorAll('button');
let place = document.getElementById("place");
let symbol = '&#128169;';
let lenght = 25;

elementsArray.forEach(function (elem) {
  elem.addEventListener("click", function (e) {
    switch (e.target.textContent) {

      case "triangle":

        let star = '';

        for (i = 1; i < (lenght + 1); i++) {
          for (j = 0; j < i; j++) {
            star += symbol + '&nbsp;';
          };
          star += '<br>';
        };

        place.innerHTML = star;
        break;
      case "pyramid":

        let star2 = '';

        for (i = 1; i < (lenght + 1); i++) {
          for (j = lenght; j > i; j--) {
            star2 += '&nbsp;';
          };
          for (k = 0; k < i; k++) {
            star2 += symbol + '&nbsp;';
          };
          star2 += '<br>';
        };

        place.innerHTML = star2;
        break;
      case "reversed-pyramid":

        let star3 = '';

        for (i = 0; i < lenght; i++) {
          for (k = 0; k < i; k++) {
            star3 += '&nbsp;';
          };
          for (j = lenght; j > i; j--) {
            star3 += symbol + '&nbsp;';
          };
          star3 += '<br>';
        };

        place.innerHTML = star3;
        break;
    }
  });
});

document.getElementById('clear').addEventListener('click', function () {
  place.innerHTML = '';
}
)