function calc() {
    let pattern = /^[0-9]+$/;
    let text = 'Some1 text with 4 words and 1 plus ^0^';
    let price = document.getElementsByName("price")[0],
        count = document.getElementsByName("num")[0],
        result = document.getElementById("res"),
        priceSum = 0,
        countSum = 0,
        totalResult = 0;

    console.log(price.value, count.value);

    if (pattern.test(price.value) && pattern.test(count.value)) {
        result.innerHTML = price.value * count.value;
    } else {
        alert("Некорректное заначение")
    }
    return false;
}

window.addEventListener('DOMContentLoaded', function(event) {
    console.log("DOM fully loaded and parsed");
    let b = document.getElementById("button1");
    b.addEventListener("click", calc);
});
