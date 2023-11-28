function displaySelectedValue() {
    var selectElement = document.getElementById('numericSelect');
    var selectedValue = selectElement.value;
    var displayElement = document.getElementById('selectedValue');
    document.getElementById("selectedValue").innerHTML = selectedValue + '幣/局';
}
var counterInput = document.getElementById('counter');
    function increment() {
        counterInput.value = parseInt(counterInput.value, 10) + 1;
    }
    function decrement() {
        var currentValue = parseInt(counterInput.value, 10);
        if (currentValue > 0) {
        counterInput.value = currentValue - 1;
        }
    }