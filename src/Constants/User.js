const users = [

    {
        "name": "Mama",
        lastmessage: {
            time: "3:00pm",
            msgcnt: 2,
            message: "Everything is perfect. send me the money today !" // Updated to reflect 'me' (Emma) is the last recipient
        },
        id: 0,
        lastseen: "online",
        textmessages: [
            { "me": "hello emma ", timestamp: 1732561200000, "imgurl": null },
            { "user": "Hi Mama! How are you feeling today?", timestamp: 1732561260000, "imgurl": null },
            { "me": "I am feeling better, thank God. But I need to finalize the land payment today.", timestamp: 1732561380000, "imgurl": null },
            { "user": "Understood. I'm ready to send the funds.", timestamp: 1732561440000, "imgurl": null },
            { "me": "I forgot, can you please send me your momo number again?", timestamp: 1732561560000, "imgurl": null },
            { "user": "It's 237678901234. I also need the name on the account to confirm.", timestamp: 1732561620000, "imgurl": null },
            { "me": "The name of name of the momo is Agnes. Make sure you use that spelling.", timestamp: 1732561740000, "imgurl": null },
            { "user": "Okay, 237678901234, Name: Agnes. Funds are being transferred now. I'll send the screenshot.", timestamp: 1732561860000, "imgurl": null },
            { "me": "thanks dear", timestamp: 1732561920000, "imgurl": null },
            { "me": "wait, and dont forget to send the money for the land too, it's separate from the usual money!", timestamp: 1732562040000, "imgurl": null },
            { "user": "Yes, I included the land money in the total transfer, Mom. Please check your balance.", timestamp: 1732562100000, "imgurl": null },
            { "me": "Just received the alert! Thank you so much, my child.", timestamp: 1732562220000, "imgurl": null },
            { "user": "You're welcome, Mama. Let me know if everything is okay.", timestamp: 1732562340000, "imgurl": null },
            { "me": "Everything is perfect. send me the money today !", timestamp: 1732562400000, "imgurl": null }
        ],
        imgurl: "https://th.bing.com/th/id/OIP.Jghm6lt0SC-JZPIVay1yaAHaFg?w=226&h=180&c=7&r=0&o=5&pid=1.7"

    },
        {
        "name": "SCNC Leader",
        lastmessage: {
            time: "just now",
            msgcnt: 4,
            message: "The signal is 'Sunrise Echo'. We will broadcast it across all channels." // Updated to reflect 'user' (Emma) is the last sender
        },
        id: 10,
        lastseen: "online",
        imgurl:"data:image/jpeg;base64,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",
        textmessages: [
            { "me": "Emma, did you confirm the safety routes for the volunteers?", timestamp: 1732579200000 },
            { "user": "Confirmed, sir. Route B is compromised, so we're strictly using Route A and the alternative coastal path.", timestamp: 1732579260000, "imgurl": null },
            { "me": "Excellent. What is the final head count for the rally logistics team?", timestamp: 1732579380000, "imgurl": null },
            { "user": "We have 45 confirmed members for logistics and 15 assigned to media coordination.", timestamp: 1732579440000, "imgurl": null },
            { "me": "Good. Make sure the media team is briefed on the messaging protocol. No unapproved statements.", timestamp: 1732579560000, "imgurl": null },
            { "user": "Understood. The brief focuses on Unity and Non-Violence, per your instructions.", timestamp: 1732579620000, "imgurl": null },
            { "me": "And the security arrangements? Are the neighborhood watches ready?", timestamp: 1732579740000, "imgurl": null },
            { "user": "The local watch leaders have all been contacted. They will maintain a perimeter radius of 200 meters.", timestamp: 1732579800000, "imgurl": null, "imgurl": "/1.png" },
            { "me": "Any sign of counter-activity in the usual hotspots?", timestamp: 1732579920000, "imgurl": null },
            { "user": "A small group was sighted near the town hall, but they dispersed quickly after local engagement.", timestamp: 1732580040000, "imgurl": null },
            { "me": "Keep monitoring that location. Use the dedicated communication line if anything escalates.", timestamp: 1732580100000, "imgurl": null },
            { "user": "Will do. Switching to the encrypted channel for all tactical updates from now on.", timestamp: 1732580220000, "imgurl": null },
            { "me": "Have the distribution points for the leaflets been established?", timestamp: 1732580340000, "imgurl": null },
            { "user": "Yes, we have 5 primary drop points. Maps and schedules were sent out 30 minutes ago.", timestamp: 1732580400000, "imgurl": null },
            { "me": "Check that the manifestos are correctly bundled with the schedules. Accuracy is key.", timestamp: 1732580520000, "imgurl": null },
            { "user": "I personally supervised the bundling. Everything is sorted and ready for transport at 2 AM.", timestamp: 1732580640000, "imgurl": null },
            { "me": "Excellent work, Emma. Your attention to detail is invaluable.", timestamp: 1732580760000, "imgurl": null },
            { "user": "Thank you, sir. All systems are green for the morning operation.", timestamp: 1732580880000, "imgurl": null },
            { "me": "One last thing: confirm the signal for commencement.", timestamp: 1732580940000, "imgurl": null },
            { "user": "The signal is 'Sunrise Echo'. We will broadcast it across all channels.", timestamp: 1732581060000, "imgurl": null },
            { "me": "Affirmative. We mobilize at dawn.", timestamp: 1732581180000, "imgurl": null }
        ]
    },
    {
        "name": "Jeff bezos",
        lastmessage: {
            time: "00:09 am",
            msgcnt: 1,
            message: "Never! I'll be there... via satellite link from the Maldives. hello fellow billionare !" // Updated to reflect 'me' (Emma) is the last recipient
        },
        id: 1,
        lastseen: "last seen at 19:00 pm",
        textmessages: [
            { "me": "Emma, did you see the stock price today? Another successful quarter.", timestamp: 1732563600000, "imgurl": null },
            { "user": "Unbelievable, Jeff. The market loves chaos, and we deliver!", timestamp: 1732563660000, "imgurl": null },
            { "me": "Speaking of delivery, how's the new lunar warehouse concept?", timestamp: 1732563840000, "imgurl": null },
            { "user": "It's progressing. I'm having trouble sourcing zero-g coffee makers.", timestamp: 1732563960000, "imgurl": null },
            { "me": "I can hook you up with the guy who built the gravity control system for my yacht.", timestamp: 1732564080000, "imgurl": null },
            { "user": "A yacht with gravity control? Now I feel poor.", timestamp: 1732564140000, "imgurl": null },
            { "me": "Don't worry, you'll catch up soon. What time is the board call tomorrow?", timestamp: 1732564260000, "imgurl": null },
            { "user": "10:00 AM EST. Please don't be late again, the shareholders talk.", timestamp: 1732564320000, "imgurl": null },
            { "me": "Never! I'll be there... via satellite link from the Maldives. hello fellow billionare !", timestamp: 1732564440000, "imgurl": null }
        ],
        imgurl: "https://th.bing.com/th/id/OIP._lT3NKK_KV9nv4_HbGHsFgHaJL?w=141&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        "name": "ako doris ayuk",
        lastmessage: {
            time: "12:09 am",
            msgcnt: 2,
            message: "Talk soon! Did you get my last message about the music playlist?" // Updated to reflect 'me' (Emma) is the last recipient
        },
        id: 2,
        lastseen: "last seen yesterday",
        textmessages: [
            { "me": "hello emma how are you doing !", timestamp: 1732565400000, "imgurl": null },
            { "user": "Hi Doris! I'm doing really well, finally getting some rest after a hectic week. How about you?", timestamp: 1732565460000, "imgurl": null },
            { "me": "I'm good, just incredibly busy planning this surprise birthday party for Mike.", timestamp: 1732565640000, "imgurl": null },
            { "user": "A party? That sounds fun! Do you need help with anything?", timestamp: 1732565700000, "imgurl": null },
            { "me": "Actually, yes! Could you handle the decorations? You have such good taste.", timestamp: 1732565880000, "imgurl": null },
            { "user": "I'd love to! Send me the budget and the theme, and I'll start looking for ideas right away.", timestamp: 1732565940000, "imgurl": null },
            { "me": "Perfect! The budget is $200, and the theme is '90s nostalgia. Thanks so much!", timestamp: 1732566120000, "imgurl": null },
            { "user": "No problem at all. Talk soon!", timestamp: 1732566180000, "imgurl": null },
            { "me": "Talk soon! Did you get my last message about the music playlist?", timestamp: 1732566360000, "imgurl": null }
        ]
    },
    {
        "name": "Rose Bowel",
        lastmessage: {
            time: "12:09 pm",
            msgcnt: 2,
            message: "Lifesaver! send the code bro!" // Updated to reflect 'me' (Emma) is the last recipient
        },
        id: 3,
        textmessages: [
            { "user": "Hey Rose, the staging environment is down. Did you make any changes to the API keys?", timestamp: 1732567200000, "imgurl": null },
            { "me": "Shoot, I might have. I was trying to renew the security certificate.", timestamp: 1732567260000, "imgurl": null },
            { "user": "Okay, I need to log into the console immediately to check the configuration.", timestamp: 1732567380000, "imgurl": null },
            { "me": "Got it. I'm logging out now. Wait, I need a new 2FA code for you.", timestamp: 1732567440000, "imgurl": null },
            { "user": "Please hurry, the client is on the phone!", timestamp: 1732567560000, "imgurl": null },
            { "me": "Checking my SMS now... one moment.", timestamp: 1732567620000, "imgurl": null },
            { "user": "Thanks!", timestamp: 1732567680000, "imgurl": null },
            { "me": "It's 897651. Use it fast, it expires in 60 seconds.", timestamp: 1732567740000, "imgurl": null },
            { "user": "I'm in! Okay, I see the issue. You swapped the production and development keys.", timestamp: 1732567860000, "imgurl": null },
            { "me": "My bad, total rookie mistake.", timestamp: 1732567920000, "imgurl": null },
            { "user": "No worries, I'm rolling back the changes now.", timestamp: 1732567980000, "imgurl": null },
            { "me": "Lifesaver! send the code bro!", timestamp: 1732568040000, "imgurl": null }
        ]

    },
    {
        "name": "Michael Jordarn Paul Fred Jordan Tumel",
        lastmessage: {
            time: "2 mins ago",
            msgcnt: 0,
            message: "Can you help me to built a website for free ?" // Message content is the same, but sender is now 'me' (Emma)
        },
        id: 4,
        lastseen: "2 minutes ago",
        textmessages: [
            { "user": "Hello Michael, I saw your job posting for a new corporate website.", timestamp: 1732569000000, "imgurl": null },
            { "me": "Hi! Yes, I'm looking for a full-stack developer.", timestamp: 1732569060000, "imgurl": null },
            { "user": "I specialize in modern React/Node stacks. Can you describe the scope?", timestamp: 1732569180000, "imgurl": null },
            { "me": "It's a simple 5-page site: Home, About, Services, Team, Contact. With a basic CMS.", timestamp: 1732569240000, "imgurl": null },
            { "user": "That's a standard project. I charge competitive rates for a site of that size.", timestamp: 1732569360000, "imgurl": null },
            { "me": "I understand. Unfortunately, I'm a startup and bootstrapping everything.", timestamp: 1732569420000, "imgurl": null },
            { "user": "I can offer a reduced rate for non-profit/startup clients, but I can't work for free.", timestamp: 1732569540000, "imgurl": null },
            { "me": "Oh, I see. My budget is literally zero for development right now.", timestamp: 1732569600000, "imgurl": null },
            { "user": "I wish I could help, but my time is professional. Maybe try a website builder?", timestamp: 1732569720000, "imgurl": null },
            { "me": "I thought I'd ask a professional first. Can you help me to built a website for free ?", timestamp: 1732569840000, "imgurl": null }
        ]
    },
    {
        "name": "Fred Mark Junoir",
        lastmessage: {
            time: "yesterday",
            msgcnt: 9,
            message: "You too! Send the file and the extension of the code !" // Updated to reflect 'me' (Emma) is the last recipient
        },
        id: 5,
        lastseen: "online",
        textmessages: [
            { "me": "hello send the code ", timestamp: 1732570800000, "imgurl": null },
            { "user": "Hey Fred, I already pushed the new features to the main branch. Check the Git repo.", timestamp: 1732570860000, "imgurl": null },
            { "me": "I pulled the repo, but the functions for the user authentication aren't importing correctly.", timestamp: 1732570980000, "imgurl": null },
            { "user": "Are you running `npm install`? I added a new dependency in `package.json`.", timestamp: 1732571040000, "imgurl": null },
            { "me": "Ah, okay, doing that now. Wait, where is the initial database schema?", timestamp: 1732571160000, "imgurl": null },
            { "user": "That's separate. I sent the raw SQL file to your work email yesterday. Did you check?", timestamp: 1732571220000, "imgurl": null },
            { "me": "Let me look... Found it! Thanks. What extension did you use for the component files?", timestamp: 1732571340000, "imgurl": null },
            { "user": "I'm using `.tsx` since it's a TypeScript React project. Be sure your compiler is configured.", timestamp: 1732571400000, "imgurl": null },
            { "me": "Got it. Everything looks good now. Thanks for clarifying.", timestamp: 1732571520000, "imgurl": null },
            { "user": "Anytime. Happy coding!", timestamp: 1732571580000, "imgurl": null },
            { "me": "You too! Send the file and the extension of the code !", timestamp: 1732571700000, "imgurl": null }
        ],
        imgurl: "https://th.bing.com/th/id/OIP.LXkv_HqpRzSoTE9Y76ZVHwHaE7?w=246&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        "name": "Github",
        lastmessage: {
            time: "just now",
            msgcnt: 1,
            message: "your verification code is 0933 " // Message content is the same, but sender is now 'me' (Emma)
        },
        id: 6,
        textmessages: [
            { "me": "your verification code is 0992", timestamp: 1732572600000, "imgurl": null },
            { "me": "your verification code is 0992", timestamp: 1732572601000, "imgurl": null },
            { "me": "your verification code is 0992", timestamp: 1732572602000, "imgurl": null },
            { "me": "your verification code is 7765", timestamp: 1732572603000, "imgurl": null },
            { "me": "your verification code is 0933 ", timestamp: 1732572604000, "imgurl": null }
        ],
        imgurl: "https://th.bing.com/th/id/OIP.8SVgggxQcO5L6Dw_61ac4QHaEK?w=308&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        "name": "Client X",
        lastmessage: {
            time: "10:30 am",
            msgcnt: 5,
            message: "I'm glad to hear that." // Updated to reflect 'user' (Emma) is the last sender
        },
        id: 7,
        lastseen: "last seen 1 hour ago",
        textmessages: [
            { "user": "Good morning. I've sent the final proposal package.", timestamp: 1732573800000, "imgurl": null },
            { "me": "Thanks, Emma. I received it and I'm reviewing it now.", timestamp: 1732573920000, "imgurl": null },
            { "user": "Perfect. Let me know if you have any questions on the delivery timeline.", timestamp: 1732574040000, "imgurl": null },
            { "me": "I see you adjusted the scope in section 3. I reviewed the proposal and it looks better now.", timestamp: 1732574220000, "imgurl": null },
            { "user": "Yes, I clarified the integration steps based on our call last week.", timestamp: 1732574340000, "imgurl": null },
            { "me": "The total cost is acceptable, but the payment terms are a little aggressive.", timestamp: 1732574520000, "imgurl": null },
            { "user": "We can adjust the final payment milestone. How about 40/30/30 instead of 50/50?", timestamp: 1732574640000, "imgurl": null },
            { "me": "That works for us. I'm happy we found a compromise.", timestamp: 1732574820000, "imgurl": null },
            { "user": "I'm glad to hear that.", timestamp: 1732574940000, "imgurl": null },
            { "me": "Great! Let's schedule a meeting for next week to sign the contract.", timestamp: 1732575120000, "imgurl": null }
        ],
        imgurl: "https://th.bing.com/th/id/OIP.f-f06SgP-x9o0N-m2XW3tAHaFj?w=225&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        "name": "Developer Team",
        lastmessage: {
            time: "5 mins ago",
            msgcnt: 3,
            message: "Awesome. Send confirmation once it's complete." // Updated to reflect 'user' (Emma) is the last sender
        },
        id: 8,
        lastseen: "online",
        textmessages: [
            { "user": "Team, the database migration failed on Staging. What's the status on the hotfix?", timestamp: 1732575600000, "imgurl": null },
            { "me": "Sorry, Emma. We found a small data schema conflict.", timestamp: 1732575660000, "imgurl": null },
            { "user": "Is the production environment impacted?", timestamp: 1732575720000, "imgurl": null },
            { "me": "No, Pro is stable. We isolated the issue to the new `user_role` table.", timestamp: 1732575840000, "imgurl": null },
            { "user": "Okay, please prioritize that fix. I need this release out by EOD.", timestamp: 1732575900000, "imgurl": null },
            { "me": "Understood. We fixed the bug on the main branch, pushing the commit now.", timestamp: 1732576020000, "imgurl": null },
            { "user": "I see the commit! Running the automated tests now... they passed.", timestamp: 1732576140000, "imgurl": null },
            { "me": "Great job, thanks for the quick turnaround.", timestamp: 1732576200000, "imgurl": null },
            { "user": "No problem! We ran all the tests successfully on our end, too.", timestamp: 1732576320000, "imgurl": null },
            { "me": "Perfect. We are initiating the deployment to Production now.", timestamp: 1732576440000, "imgurl": null },
            { "user": "Awesome. Send confirmation once it's complete.", timestamp: 1732576500000, "imgurl": null },
            { "me": "The deployment is live, check the logs.", timestamp: 1732576560000, "imgurl": null }
        ],
        imgurl: "https://th.bing.com/th/id/OIP.1r9H59WkL1G9B3S5N-J3yAHaD_?w=318&h=180&c=7&r=0&o=5&pid=1.7"
    },
    {
        "name": "Sarah Connor",
        lastmessage: {
            time: "yesterday",
            msgcnt: 1,
            message: "Deal! No spoilers from my side." // Updated to reflect 'user' (Emma) is the last sender
        },
        id: 9,
        lastseen: "last seen 2 days ago",
        textmessages: [
            { "user": "Hey, what are you watching that has you so hooked?", timestamp: 1732577400000, "imgurl": null },
            { "me": "OMG! You have to start 'The Programmer's Life.' It's the final season!", timestamp: 1732577460000, "imgurl": null },
            { "user": "Oh, I heard about that. Is it worth the hype? I only have time for great shows.", timestamp: 1732577640000, "imgurl": null },
            { "me": "Absolutely. The plot twist in Episode 3 was insane. The director is a genius.", timestamp: 1732577760000, "imgurl": null },
            { "user": "Okay, you've convinced me. I'll download the first two episodes tonight.", timestamp: 1732577940000, "imgurl": null },
            { "me": "Awesome! But promise me you won't spoil anything if you finish before me.", timestamp: 1732578000000, "imgurl": null },
            { "user": "Deal! No spoilers from my side.", timestamp: 1732578120000, "imgurl": null },
            { "me": "Good. By the way, Did you watch the new episode yet? It dropped this morning.", timestamp: 1732578240000, "imgurl": null }
        ]
    },



]
export default users