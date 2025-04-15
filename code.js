function validateStrings() {
    let firstNameElement = document.getElementById("firstName");
    let lastNameElement = document.getElementById("lastName");
    let firstName = firstNameElement.value;
    let lastName = lastNameElement.value;

    console.log(firstName)
    console.log(lastName)

    let firstNameString = firstName;
    let lastNameString = lastName;

    let nameCombo = firstNameString + " " + lastNameString;

    console.log(nameCombo);

    if (nameCombo.length > 20)
    {
        alert("Your full name is greater than 20 characters");
        return;
    }

    let zipCodeElement = document.getElementById("zipCode");
    let zipCode = zipCodeElement.value;

    console.log(zipCode)

    if (zipCode.length > 5)
    {
        alert("Your zip code is greater than 5 characters");
        return;
    }

    console.log("Input validated!");

        alert("Congrats! You've unlocked the secret message!")
}