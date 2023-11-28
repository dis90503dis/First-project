var counterInput = document.getElementById('counter');
        function increment() {
            counterInput.value = parseInt(counterInput.value, 10) + 1;
            updateTotal();
        }
        function decrement() {
            var currentValue = parseInt(counterInput.value, 10);
            if (currentValue > 1) {
                counterInput.value = currentValue - 1;
                updateTotal();
            }
        }
        function displaySelectedValue() {
            var selectElement = document.getElementById('numericSelect');
            var selectedValue = parseInt(selectElement.value, 10);
            var displayElement = document.getElementById('selectedValue');
            displayElement.innerHTML = selectedValue + '幣/局';
            updateTotal();
        }
        function updateTotal() {
            var selectElement = document.getElementById('numericSelect');
            var selectedValue = parseInt(selectElement.value, 10);
            var quantity = parseInt(counterInput.value, 10);
            var totalValue = selectedValue * quantity;
            var totalElement = document.getElementById('totalValue');
            totalElement.innerHTML = '總價: ' + totalValue + ' 幣';
        }
