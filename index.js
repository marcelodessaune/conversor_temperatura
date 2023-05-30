var celsiusInput = document.getElementById("celsiusInput");
    var celsiusValue = document.getElementById("celsiusValue");
    var fahrenheitInput = document.getElementById("fahrenheitInput");
    var fahrenheitValue = document.getElementById("fahrenheitValue");
    var kelvinInput = document.getElementById("kelvinInput");
    var kelvinValue = document.getElementById("kelvinValue");
    var resultado = document.getElementById("resultado");

    celsiusInput.addEventListener("input", atualizarConversao);
    fahrenheitInput.addEventListener("input", atualizarConversao);
    kelvinInput.addEventListener("input", atualizarConversao);

    function atualizarConversao() {
      var celsius = parseFloat(celsiusInput.value);
      var fahrenheit = parseFloat(fahrenheitInput.value);
      var kelvin = parseFloat(kelvinInput.value);

      if (isNaN(celsius) || isNaN(fahrenheit) || isNaN(kelvin)) {
        resultado.textContent = "Digite temperaturas válidas.";
        resultado.style.backgroundColor = "white"; 
        return;
      }
      celsiusValue.textContent = celsius;
      fahrenheitValue.textContent = fahrenheit;
      kelvinValue.textContent = kelvin;

      resultado.textContent = "Celsius: " + celsius + " °C, Fahrenheit: " + fahrenheit + " °F, Kelvin: " + kelvin + " K";
  if (celsius >= 25) {
    document.body.style.backgroundColor = "red";
  } else if (celsius < 15) {
    document.body.style.backgroundColor = "blue";
  } else {
    document.body.style.backgroundColor = "white";
  }

}