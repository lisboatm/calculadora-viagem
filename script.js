function calculateCost() {
    var distance = parseFloat(document.getElementById('distance').value);
    var fuelPrice = parseFloat(document.getElementById('fuelPrice').value);
    var fuelConsumption = parseFloat(document.getElementById('fuelConsumption').value);

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:8080/gasto-viagem?distancia=100&preco=5&consumo=10' + distance + '&preco=' + fuelPrice + '&consumo=' + fuelConsumption, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            document.getElementById('totalCost').value = response.custoTotal.toFixed(2);
        }
    };
    xhr.send();
}
