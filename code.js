function validateStrings() {
    let continueLoop = true;

    while (continueLoop) {
        // prompts the user to enter a string
        let userInput = prompt("Enter a string to check if it's a palindrome:");

        if (userInput) {
            //removing spaces and converting to lowercase for comparison
            let cleanedString = userInput.replace(/\s+/g, '').toLowerCase();
            let reversedString = cleanedString.split('').reverse().join('');

            //checking if the cleaned string is a palindrome
            if (cleanedString === reversedString) {
                alert(`"${userInput}" is a palindrome!`);
            } else {
                alert(`"${userInput}" is not a palindrome.`);
            }
        } else {
            alert("You entered an empty string. Please try again.");
        }

        // asking the user if they want to continue
        continueLoop = confirm("Do you want to check another palindrome?");

    }

    // thank you msg
    alert("Thank you for using the palindrome checker!");
}