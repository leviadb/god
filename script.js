// Get the button element
const button = document.getElementById('redirect-button');

// Add a click event listener
button.addEventListener('click', () => {
    // Redirect to another page
    window.location.href = 'pageone.html'; // Change to your desired URL
});

function submitForm() {
    // Get the user's name from the input field
    var username = document.getElementById("username").value;
    
    // List of offensive words (this is just an example, you can expand the list)
    var forbiddenWords = ["offensiveword1", "offensiveword2", "badword1", "curseword", "slur1", "slur2", "hateword1",
    "hateword2", "racistterm", "sexistterm", "abusiveword", "discriminatoryterm", "violenceword",
    "drugterm", "alcoholterm", "terroristword", "extremistword", "illegalterm", "terroristphrase",
    "profanity", "explicitterm", "offensiveusername", "childabuse", "porn", "gore", "abuse", 
    "kill", "hate", "violence", "rape", "racism", "sexism", "bully", "troll", "selfharm", "suicide",
    "nazi", "pedophile", "murder", "terrorism", "explicitsex", "drugdealer", "criminal", "gore",
    "fag", "bitch", "asshole", "bastard", "douche", "cunt", "pussy", "nigger", "kike", "chink", 
    "spic", "gook", "wop", "redneck", "wanker", "slut", "whore", "tranny", "faggy", "motherfucker",
    "bastardized", "shithead", "prick", "twat", "cocksucker", "fucking", "tits", "buttsex", "anal",
    "fuckface", "bitchass", "dickhead", "cockhead", "douchebag", "asshat", "shitbag", "dickbag", "fuck",
    "shit", "boang", "bulok", "yawa", "peste", "pisti", "yati", "bayot",  
    "abnoy", 
    "bogo ka",  
    "pangit", 
    "gago",  
    "gahi kaayo",
    "maldito", 
    "buang",  
    "tanga",  
    "nagmamagaling",  
    "patay gutom",  
    "balasubas", 
    "tanga ka", 
    "mga bugoy",  
    "baho", 
    "buwisit", 
    "peste",  
    "guba", 
    "palpak", 
    "puta",  
    "putang ina mo", 
    "yawa",  
    "kalbaryo",  
    "habal-habal"
];
    
    // Check if the username contains any forbidden words
    for (var i = 0; i < forbiddenWords.length; i++) {
        if (username.toLowerCase().includes(forbiddenWords[i].toLowerCase())) {
            alert("Your name contains offensive language. Please choose another name.");
            return false; // Prevent form submission
        }
    }

    // If name is entered, redirect to another page with the name as a query string
    if (username) {
        // Redirect to another page (e.g., 'greet.html') and pass the name as a query parameter
        window.location.href = "pagetwo.html?name=" + encodeURIComponent(username);
        return false; // Prevent form submission to allow page redirect
    } 
    else {
        // Alert if no name is entered
        alert("Please enter your name.");
        return false;
    }
}

