function generatePassword() {
    // Initializes and sets length variable to 0
    var length = 0;
    // Loop that runs until the user has chosen a number between 8-128
    while (length < 8 || length > 128) {
        // Prompts for a desired password length, from 8-128 
        length = prompt("Enter your desired length of your password", "Between 8-128 Characters");
        // Alerts if the number isn't within the 8-128 range
        if (length < 8 || length > 128) {
            alert("Enter a number between 8 and 128");
        }
    }

    //prompting for the kind of characters the user would like to include
     var lowerCase = confirm("Would you like to include lower case letters?");
     var upperCase = confirm("Would you like to include upper case letters?");
     var symbols = confirm("Would you like to include symbols?");
     var numbers = confirm("Would you like to include numbers?");

    // Initializing the password variable
    var password = "";

    // Initializing the variable that will hold the randomly chosen character
    var character = "";

    // variables that track if a kind of character has been included in the password yet
    var includesSymbols = false;
    var includesLowerCase = false;
    var includesUpperCase = false;
    var includesNumbers = false;

    // Used https://stackoverflow.com/questions/1497481/javascript-password-generator as a reference
    // The case in which the user wants to include all types of characters
    if (lowerCase && upperCase && symbols && numbers) {
        // setting up a string with all of the valid characters
        var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
        console.log(charset.length)
        // loops over the charset string, with a random number between 0-85 correlating to a random character in the string
        for (var i = 0; i < length; i++) {
            var index = Math.floor(Math.random() * 86);
            // Checking to see what kind of character has been chosen
            if (index < 26) {
                includesLowerCase = true;
            } else if (index > 25 && index < 52) {
                includesUpperCase = true;
            } else if (index > 51 && index < 62) {
                includesNumbers = true;
            } else {
                includesSymbols = true;
            }

            // If a type of character hasn't been chosen for the password yet, the random number index will be narrowed to only include that character type
            if (i === (length - 4) && includesLowerCase === false) {
                index = Math.floor(Math.random() * 26);
                console.log(character)
            } else if (i === (length - 3) && includesUpperCase === false) {
                index = 26 + Math.floor(Math.random() * 26);
            } else if (i === (length - 2) && includesNumbers === false) {
                index = 52 + Math.floor(Math.random() * 10);
            } else if (i === (length - 1) && includesSymbols === false) {
                index = 62 + Math.floor(Math.random() * 24);
            } else {
                console.log(index)
            }

            // using the random index to choose the random character
            character = charset.charAt(index);
            // concatenating the character onto the password
            password = password + character;
        }
    // running through the same process as above, but without the numbers in the charset
    } else if (lowerCase && upperCase && symbols && !numbers) {
        var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@%+/\\'!#$^?:,(){}[]~-_.`");
        for (var i = 0; i < length; i++) {
            var index = Math.floor(Math.random() * 76);

            if (index < 26) {
                includesLowerCase = true
            } else if (index > 25 && index < 52) {
                includesUpperCase = true;
            } else {
                includesSymbols = true;
            }

            if (i == length - 3 && includesLowerCase == false) {
                index = Math.floor(Math.random() * 26);
            } else if (i == length - 2 && includesUpperCase == false) {
                index = 26 + Math.floor(Math.random() * 26);
            } else if (i == length - 1 && includesSymbols == false) {
                index = 52 + Math.floor(Math.random() * 24);
            }

            character = charset.charAt(index);
            password = password + character;

            }
    // Charset without symbols
    } else if (lowerCase && upperCase && !symbols && numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 62);

                if (index < 26) {
                    includesLowerCase = true;
                } else if (index > 25 && index < 52) {
                    includesUpperCase = true;
                } else {
                    includesNumbers = true;
                }

                if (i == length - 3 && includesLowerCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 2 && includesUpperCase == false) {
                    index = 26 + Math.floor(Math.random() * 26);
                } else if (i == length - 1 && includesNumbers == false) {
                    index = 52 + Math.floor(Math.random() * 10)
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without upper case
        } else if (lowerCase && !upperCase && symbols && numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyz1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 60);

                if (i == length - 3 && includesLowerCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 2 && includesNumbers == false) {
                    index = 26 + Math.floor(Math.random() * 10);
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 36 + Math.floor(Math.random() * 24);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without lower case letters
        } else if (!lowerCase && upperCase && symbols && numbers) {
            var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 60);

                if (index < 26) {
                    includesUpperCase = true;
                } else if (index > 25 && index < 36) {
                    includesNumbers = true;
                } else {
                    includesSymbols = true;
                }

                if (i == length - 3 && includesUpperCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 2 && includesNumbers == false) {
                    index = 26 + Math.floor(Math.random() * 10);
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 36 + Math.floor(Math.random() * 24);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without symbols or numbers
        } else if (lowerCase && upperCase && !symbols && !numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 52);

                if (index < 26) {
                    includesLowerCase = true;
                } else {
                    includesUpperCase = true;
                }

                if (i == length - 2 && includesLowerCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 1 && includesUpperCase == false) {
                    index = 26 + Math.floor(Math.random() * 26);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without upper case letters and numbers
        } else if (lowerCase && !upperCase && symbols && !numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyz@%+/\\'!#$^?:,(){}[]~-_.`");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 50);

                if (index < 26) {
                    includesLowerCase = true;
                } else {
                    includesSymbols = true
                }

                if (i == length - 2 && includesLowerCase == false) {
                    index = Math.floor(Math.random() * 26)
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 26 + Math.floor(Math.random() * 24);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without lower case letters or numbers
        } else if (!lowerCase && upperCase && symbols && !numbers) {
            var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ@%+/\\'!#$^?:,(){}[]~-_.`");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 50);

                if (index < 26) {
                    includesUpperCase = true;
                } else {
                    includesSymbols = true;
                }

                if (i == length - 2 && includesUpperCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 26 + Math.floor(Math.random() * 24);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without lower case letters or symbols
        } else if (!lowerCase && upperCase && !symbols && numbers) {
            var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 36);

                if (index < 26) {
                    includesUpperCase = true;
                } else {
                    includesNumbers = true;
                }

                if (i == length - 2 && includesUpperCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 1 && includesNumbers == false) {
                    index = 26 + Math.floor(Math.random() * 10);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without upper case or lower case letters
        } else if (!lowerCase && !upperCase && symbols && numbers) {
            var charset = ("1234567890@%+/\\'!#$^?:,(){}[]~-_.`");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 34);

                if (index < 10) {
                    includesNumbers = true;
                } else {
                    includesSymbols = true;
                }

                if (i == length - 2 && includesNumbers == false) {
                    index = Math.floor(Math.random() * 10);
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 10 + Math.floor(Math.random() * 24);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset without upper case letters or symbols
        } else if (lowerCase && !upperCase && !symbols && numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyz1234567890");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 36);

                if (index < 26) {
                    includesLowerCase = true;
                } else {
                    includesNumbers = true;
                }

                if (i == length - 2 && includesLowerCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 1 && includesNumbers == false) {
                    index = 26 + Math.floor(Math.random() * 10);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        // Charset that only includes numbers
        } else if (!lowerCase && !upperCase && !symbols && numbers) {
            var charset = ("1234567890");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 10);
                character = charset.charAt(index);
                password = password + character;
            }
        // Charset that only includes symbols
        } else if (!lowerCase && !upperCase && symbols && !numbers) {
            var charset = ("@%+/\\'!#$^?:,(){}[]~-_.`");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 24);
                character = charset.charAt(index);
                password = password + character;
            }
        // Charset that only includes upper case letters
        } else if (!lowerCase && upperCase && !symbols && !numbers) {
            var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 26);
                character = charset.charAt(index);
                password = password + character;
            }
        // Charset that only includes lower case letters
        } else if (lowerCase && !upperCase && !symbols && !numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyz");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 26);
                character = charset.charAt(index);
                password = password + character;
            }
        // If none of the character types are chosen, an alert will be shown
        } else {
            alert("Please allow at least one type of character")
        }
         
        console.log(password);
        // Displaying the password to the text area
        var passwordDisplay = document.querySelector("#password");
        console.log(passwordDisplay);

        passwordDisplay.value = password;
    }
    
    // Function to copy the password to the clipboard
    function copyToClipboard() {
        document.getElementById("password").select();
        document.execCommand("copy");
        document.getElementById("password").textcontent = "";
        alert("Copied your password");
      };
    