document.addEventListener("DOMContentLoaded", function() {
    var nameButtons = document.querySelectorAll('#name-button-team button');
    var planButtons = document.querySelector('#plan-button-team');
    var planPrice = document.querySelector('.plan-price');
    nameButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            planButtons.innerHTML = '';
            switch (button.innerText) {
                case '原神':
                    planButtons.innerHTML = `
                        <button>標準模式 150幣/半小時</button>
                    `;
                    break;
                case '英雄聯盟':
                    planButtons.innerHTML = `
                        <button>標準模式 180幣/局</button>
                        <button>ARAM 200幣/局</button>
                        <button>Rank 250幣/局</button>
                    `;
                    break;
                case '永劫無間':
                    planButtons.innerHTML = `
                        <button>一般模式 100幣/局</button>
                        <button>積分模式 200幣/局</button>
                    `;
                    break;
                case '聯盟戰棋':
                    planButtons.innerHTML = `
                        <button>一般 150幣/局</button>
                        <button>雙人模式 150幣/局</button>
                    `;
                    break;
                default:
                    break;
            }
        });
    });
    planButtons.addEventListener('click', function(event) {
        if (event.target.tagName === 'BUTTON') {
            planPrice.textContent = '價格: ' + event.target.innerText;
        }
    });
});