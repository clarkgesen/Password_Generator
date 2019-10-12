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

     var lowerCase = confirm("Would you like to include lower case letters?");
     var upperCase = confirm("Would you like to include upper case letters?");
     var symbols = confirm("Would you like to include symbols?");
     var numbers = confirm("Would you like to include numbers?");

    // Initializing the password variable
    var password = "";

    // Initializing the variable that will be used as an ASCII character code
    var character = "";

    var includesSymbols = false;
    var includesLowerCase = false;
    var includesUpperCase = false;
    var includesNumbers = false;

    // Used https://stackoverflow.com/questions/1497481/javascript-password-generator as a reference
    if (lowerCase && upperCase && symbols && numbers) {
        var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@%+/\\'!#$^?:,(){}[]~-_.");
        console.log(charset.length)
        for (var i = 0; i < length; i++) {
            var index = Math.floor(Math.random() * 85);
            if (index < 26) {
                includesLowerCase = true;
            } else if (index > 25 && index < 52) {
                includesUpperCase = true;
            } else if (index > 51 && index < 62) {
                includesNumbers = true;
            } else {
                includesSymbols = true;
            }

            if (i === (length - 4) && includesLowerCase === false) {
                index = Math.floor(Math.random() * 26);
                console.log(character)
            } else if (i === (length - 3) && includesUpperCase === false) {
                index = 26 + Math.floor(Math.random() * 26);
            } else if (i === (length - 2) && includesNumbers === false) {
                index = 52 + Math.floor(Math.random() * 10);
            } else if (i === (length - 1) && includesSymbols === false) {
                index = 62 + Math.floor(Math.random() * 23);
            } else {
                console.log(index)
            }


            character = charset.charAt(index);
            password = password + character;
        }
    } else if (lowerCase && upperCase && symbols && !numbers) {
        var charset = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@%+/'!#$^?:,(){}[]~-_.");
        for (var i = 0; i < length; i++) {
            var index = Math.floor(Math.random() * 75);

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
                index = 52 + Math.floor(Math.random() * 23);
            }

            character = charset.charAt(index);
            password = password + character;

            } 
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
        } else if (lowerCase && !upperCase && symbols && numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyz1234567890@%+/\'!#$^?:,(){}[]~-_.");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 59);

                if (i == length - 3 && includesLowerCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 2 && includesNumbers == false) {
                    index = 26 + Math.floor(Math.random() * 10);
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 36 + Math.floor(Math.random() * 23);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        } else if (!lowerCase && upperCase && symbols && numbers) {
            var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@%+/\'!#$^?:,(){}[]~-_.");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 59);

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
                    index = 36 + Math.floor(Math.random() * 23);
                }

                character = charset.charAt(index);
                password = password + character;
            }
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
        } else if (lowerCase && !upperCase && symbols && !numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyz@%+/\'!#$^?:,(){}[]~-_.");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 49);

                if (index < 26) {
                    includesLowerCase = true;
                } else {
                    includesSymbols = true
                }

                if (i == length - 2 && includesLowerCase == false) {
                    index = Math.floor(Math.random() * 26)
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 26 + Math.floor(Math.random() * 23);
                }

                character = charset.charAt(index);
                password = password + character;
            }
        } else if (!lowerCase && upperCase && symbols && !numbers) {
            var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ@%+/\'!#$^?:,(){}[]~-_.");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 49);

                if (index < 26) {
                    includesUpperCase = true;
                } else {
                    includesSymbols = true;
                }

                if (i == length - 2 && includesUpperCase == false) {
                    index = Math.floor(Math.random() * 26);
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 26 + Math.floor(Math.random() * 23);
                }

                character = charset.charAt(index);
                password = password + character;
            }
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
        } else if (!lowerCase && !upperCase && symbols && numbers) {
            var charset = ("1234567890@%+/\'!#$^?:,(){}[]~-_.");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 33);

                if (index < 10) {
                    includesNumbers = true;
                } else {
                    includesSymbols = true;
                }

                if (i == length - 2 && includesNumbers == false) {
                    index = Math.floor(Math.random() * 10);
                } else if (i == length - 1 && includesSymbols == false) {
                    index = 10 + Math.floor(Math.random() * 23);
                }

                character = charset.charAt(index);
                password = password + character;
            }
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
        } else if (!lowerCase && !upperCase && !symbols && numbers) {
            var charset = ("1234567890");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 10);
                character = charset.charAt(index);
                password = password + character;
            }
        } else if (!lowerCase && !upperCase && symbols && !numbers) {
            var charset = ("@%+/\'!#$^?:,(){}[]~-_.");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 23);
                character = charset.charAt(index);
                password = password + character;
            }
        } else if (!lowerCase && upperCase && !symbols && !numbers) {
            var charset = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 26);
                character = charset.charAt(index);
                password = password + character;
            }
        } else if (lowerCase && !upperCase && !symbols && !numbers) {
            var charset = ("abcdefghijklmnopqrstuvwxyz");
            for (var i = 0; i < length; i++) {
                var index = Math.floor(Math.random() * 26);
                character = charset.charAt(index);
                password = password + character;
            }
        } else {
            alert("Please allow at least one type of character")
        }
         
        console.log(password);

        var passwordDisplay = document.querySelector("#password");

        passwordDisplay.setAttribute("placeholder", password);
    }
    
    
    function copyToClipboard() {
        document.getElementById("password").select();
        document.execCommand("copy");
        document.getElementById("password").textcontent = "";
        alert("Copied your password");
      };
    