//ref
let peopleDiv = document.getElementById("people");
let thatChatDiv = document.getElementById("people");

//obj
let chats = {
  "Alice": [
    {
      "timestamp": "2025-11-23T08:00:10Z",
      "sender": "User",
      "message": "Hi Alice, did you get the updated design file?"
    },
    {
      "timestamp": "2025-11-23T08:02:44Z",
      "sender": "Alice",
      "message": "Yep, I downloaded it this morning!"
    },
    {
      "timestamp": "2025-11-23T08:15:12Z",
      "sender": "User",
      "message": "Great. Let me know if anything needs adjusting."
    },
    {
      "timestamp": "2025-11-23T08:25:50Z",
      "sender": "Alice",
      "message": "Will do! Starting my review now."
    },
    {
      "timestamp": "2025-11-23T09:01:18Z",
      "sender": "Alice",
      "message": "Looks good so far. Only minor spacing issues."
    }
  ],

  "Bob": [
    {
      "timestamp": "2025-11-23T07:55:33Z",
      "sender": "User",
      "message": "Morning Bob, did you finish the draft report?"
    },
    {
      "timestamp": "2025-11-23T07:57:10Z",
      "sender": "Bob",
      "message": "Almost! I’m polishing the intro now."
    },
    {
      "timestamp": "2025-11-23T08:20:05Z",
      "sender": "User",
      "message": "Okay, send it over when ready."
    },
    {
      "timestamp": "2025-11-23T09:05:48Z",
      "sender": "Bob",
      "message": "Just emailed it! Let me know what you think."
    },
    {
      "timestamp": "2025-11-23T09:25:51Z",
      "sender": "User",
      "message": "Got it. I’ll review and send feedback soon."
    }
  ],

  "Charlie": [
    {
      "timestamp": "2025-11-23T08:10:21Z",
      "sender": "User",
      "message": "Hey Charlie, can you double-check the code snippet you sent?"
    },
    {
      "timestamp": "2025-11-23T08:13:40Z",
      "sender": "Charlie",
      "message": "Sure thing. What looked off?"
    },
    {
      "timestamp": "2025-11-23T08:19:52Z",
      "sender": "User",
      "message": "Line 42 throws an error when running the test script."
    },
    {
      "timestamp": "2025-11-23T08:33:05Z",
      "sender": "Charlie",
      "message": "Ah, that was a missing bracket. I’ll fix it and resend."
    },
    {
      "timestamp": "2025-11-23T08:55:18Z",
      "sender": "Charlie",
      "message": "Updated version sent. Should work now!"
    }
  ]
}

function peopleWindow(){
    // Az objektumból kiszedjük a kulcsokat: ["Alice", "Bob", "Charlie"]
    let h3 = document.createElement("h3");
    h3.classList.add("h3")
    h3.innerHTML = "Online"
    peopleDiv.append(h3)
    
    Object.keys(chats).forEach(name => {
    
        let personDiv = document.createElement("div");
        personDiv.classList.add("personDiv");
        peopleDiv.append(personDiv);

        let namep = document.createElement("p");
        namep.classList.add("namep");
        namep.innerHTML = name; // <-- Itt írjuk ki a nevet (Alice, Bob, Charlie)
        personDiv.append(namep);
    });
}

peopleWindow()