let counter = 3

let countdown = document.getElementById("countdown")
if (countdown != null) {
    countdown.textContent = counter
    setInterval(function () {
        if (counter == 0) { 
            window.location.href = "troll.html";

        } else {

            counter--
            document.getElementById("countdown").textContent = counter
        }
    }, 1000)
}