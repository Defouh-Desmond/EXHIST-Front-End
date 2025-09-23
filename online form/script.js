const phoneInput = document.querySelector("#phone");

// Initialize intl-tel-input
const iti = window.intlTelInput(phoneInput, {
    initialCountry: "cm",
    separateDialCode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@19.2.20/build/js/utils.js"
});

// function to get the elements
function getting(id) {
    return document.getElementById(id);
}

// getting the elements
const myForm = getting("myForm")
let errorDiv = document.querySelectorAll(".error")
// set submit to be true
let valid = true;

// form validation
myForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const userName = getting("name").value.trim();
    const email = getting("email").value.trim();
    const dob = getting("dob").value;


    // name validation
    if (userName === "" || !userName.match(/^[a-zA-Z\s]+$/)) {
        errorDiv[0].innerHTML = "Please Enter a valid full name.";
    }else{
        errorDiv[0].innerHTML = "";
        valid = true;
    }

    // email validation
    if (email === "" || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errorDiv[1].innerHTML = "Please Enter a valid full email.";
    }else{
        errorDiv[1].innerHTML = "";
        valid = true;
    }

    // date of birth validation
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (!dob) {
        errorDiv[3].innerHTML = "Please enter your date of birth"
        valid = false;
    } else if (age < 18) {
        errorDiv[3].innerHTML = "You must be at least 18 years old";
        valid = false;
    }else{
        errorDiv[3].innerHTML = "";
        valid = true;
    }

    // gender
    const genderChecked = document.querySelector('input[name="gender"]:checked');
    // conditions
    if (!genderChecked) {
        errorDiv[4].innerHTML = "Please select your gender"
        valid = false;
    }else{
        errorDiv[4].innerHTML = "";
        valid = true;
    }

    // street 1
    const street1 = getting("street1").value.trim();
    if (street1 === "") {
        errorDiv[5].innerHTML = "Enter your street 1 address";
        valid = false;
    }else{
        errorDiv[5].innerHTML = "";
        valid = true;
    }

    // street 2
    const street2 = getting("street2").value.trim();
    if (street2 === "") {
        errorDiv[6].innerHTML = "Enter your street 2 address";
        valid = false;
    }else{
        errorDiv[6].innerHTML = "";
        valid = true;
    }

    // country verification
    const countrySelect = document.getElementById("country");
    if (countrySelect.value === "Country") {
        errorDiv[7].innerHTML = "Please select your country";
        valid = false;
    }else{
        errorDiv[7].innerHTML = "";
    }

    // street 1
    const city = getting("city").value.trim();
    if (city === "") {
        errorDiv[8].innerHTML = "Enter your city";
        valid = false;
    }else{
        errorDiv[8].innerHTML = "";
        valid = true;
    }

    // street 1
    const region = getting("region").value.trim();
    if (region === "") {
        errorDiv[9].innerHTML = "Enter your region";
        valid = false;
    }else{
        errorDiv[9].innerHTML = "";
        valid = true;
    }

    // street 1
    const postal = getting("postal").value.trim();
    if (postal === "") {
        errorDiv[10].innerHTML = "Enter your postal";
        valid = false;
    }else{
        errorDiv[10].innerHTML = "";
        valid = true;
    }
})