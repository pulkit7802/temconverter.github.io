function convert() {
    // Get the input value
    var celsius = document.getElementById("celsius").value;

    // Convert Celsius to Fahrenheit
    var fahrenheit = celsius * 1.8 + 32;

    // Display the result
    document.getElementById("result").innerHTML = celsius + " degrees Celsius = " + fahrenheit + " degrees Fahrenheit.";
}