function talk(){
    var know = {
        "Hello" : "hye",
    "Who are you" : "Hello, Akshit here",
    "How are you" : "Good :)",
    "Your favourite Language is" : "My favorite Language is Punjabi",
    "ok" : "Thank You So Much ",
    "Bye" : "Okay! Will meet soon.."
    };
    var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
    if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
    }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
    }
    }