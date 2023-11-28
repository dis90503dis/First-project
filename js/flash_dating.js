var game = document.getElementById("game");
var gender = document.getElementById("gender");
var remark = document.getElementById("remark");
var btn = document.getElementById("btn");
var flashWaitContainer = document.getElementById("flashWaitContainer");
var username = document.getElementById("username");

btn.addEventListener("click", function () {
    flashWaitContainer.innerHTML = flashWaitContainer.innerHTML + `
        <div id="finding" class="finding">
            <div class="wait-name">于靖</div>
            <div class="solid"></div>
            <div class="flash-game">${game.value}</div>
            <div class="flash-gender">${gender.value}</div>
            <div class="flash-remark">${remark.value}</div>
        </div>`;
});
