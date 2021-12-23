document.addEventListener('DOMContentLoaded', function() {
    window.history.back();
    document.getElementById("button").addEventListener("click", function () {
        document.querySelector('.popup').classList.add("popup-open");
        history.pushState({page: 1}, "title 1", "?modal");
        try {
            inputs[0].value = localStorage.key(localStorage.length - 1);
            inputs[1].value = localStorage.getItem(localStorage.key(localStorage.length - 1));
        } finally {
            statusMessage.innerHTML = '';
            console.log(localStorage.length);
            console.log(localStorage.key(0), localStorage.getItem(localStorage.key(0)));
            e.preventDefault();
        }

    });

    document.querySelector(".close").addEventListener("click", function () {
        document.querySelector(".popup").classList.remove("popup-open");
        window.history.back();
    });

    let inputs = document.querySelectorAll('input[type=text], input[type=email]'),
        input = document.querySelector('input[type=submit]');

    input.addEventListener('click', function(event) {
        let key = inputs[0].value;
        let value = inputs[1].value;
        localStorage.setItem(key, value);

    });

    formcarry({
        form: "nDKm2bGilP",
        // id or the class name of the form element, only form element allowed
        // works with css selectors
        // # <= for id
        // . <= for class
        element: "#my-formcarry",
        extraData: {
            // add whatever you want
            screenSize: `${window.screen.width}x${window.screen.height}`,
            language: window.navigator.language,
        },
        // Success callback, you can show alert messages
        // or redirect the user in this function
        onSuccess: function (response) {
            alert("Данные успешно отправлены")
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].value = '';
            };
        },
        // Error callback, a good place to show errors 🗿
        onError: function (error) {
            alert(error)
        }
    });
});
