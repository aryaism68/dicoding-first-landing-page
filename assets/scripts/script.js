function myPromo1() {
    let person = prompt(
        "PROMO CODE FOR CAKES\nDiscount 15%: AURELIA15CA.\n\nPlease enter your e-mail to receive our newsletter.",
        "aurelia.bakery@gmail.com"
    );
    if (person == null || person == "") {
    } else {
        alert("Thank you! Your e-mail has been recorded!");
    }
}

function myPromo2() {
    let person = prompt(
        "PROMO CODE FOR COOKIES\nDiscount 20%: AURELIA20CO.\n\nPlease enter your e-mail to receive our newsletter.",
        "aurelia.bakery@gmail.com"
    );
    if (person == null || person == "") {
    } else {
        alert("Thank you! Your e-mail has been recorded!");
    }
}

function myPromo3() {
    let person = prompt(
        "PROMO CODE FOR CUPCAKES\nDiscount 10%: AURELIA10CU.\n\nPlease enter your e-mail to receive our newsletter.",
        "aurelia.bakery@gmail.com"
    );
    if (person == null || person == "") {
    } else {
        alert("Thank you! Your e-mail has been recorded!");
    }
}

function myPromo4() {
    let person = prompt(
        "PROMO CODE FOR DONUTS\nDiscount 20%: AURELIA20DO.\n\nPlease enter your e-mail to receive our newsletter.",
        "aurelia.bakery@gmail.com"
    );
    if (person == null || person == "") {
    } else {
        alert("Thank you! Your e-mail has been recorded!");
    }
}

function myPromo5() {
    let person = prompt(
        "PROMO CODE FOR PASTRIES\nDiscount 15%: AURELIA15PA.\n\nPlease enter your e-mail to receive our newsletter.",
        "aurelia.bakery@gmail.com"
    );
    if (person == null || person == "") {
    } else {
        alert("Thank you! Your e-mail has been recorded!");
    }
}

let radios = document.querySelectorAll(".navigation-btn");
document.addEventListener("click", function (activeSlide) {
    if (activeSlide.target.classList.contains("navigation-btn")) {
        radios.forEach(function (radio) {
            radio.classList.remove("active");
        });
        activeSlide.target.classList.add("active");
    }
});