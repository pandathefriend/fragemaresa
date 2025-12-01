// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Liebe Rätselnden...",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Hurra!!! Rätsel gelöst ... oder doch nicht?",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['🕵🏼‍♀️', '🕵🏼‍♂️', '🕵🏼', '❔', '👀'],  // Heart emojis
        bears: ['💭', '🕵🏼‍♂️']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "habt ihr schon alle wichtigen Fragen des Abends beantwortet?",                                    // First interaction
            yesBtn: "Auf jeden Fall",                                             // Text for "Yes" button
            noBtn: "Ich denke schon",                                               // Text for "No" button
            secretAnswer: "Vielleicht doch nicht ..."           // Secret hover message
        },
        second: {
            text: "wie sehr könnte dich die Person neben dir nerven, wenn sie es wirklich probieren würde?",                          // For the love meter
            startText: "Curser bewegen um zu starten",                                   // Text before the percentage
            nextBtn: "Das ist meine finale Antwort!"                                         // Text for the next button
        },
        third: {
            text: "Mal ganz davon abgesehen ob ich eine Nervensäge bin oder nicht ... willst du dass ich deine Nervensäge bin?", // The big question!
            yesBtn: "Ja!",                                             // Text for "Yes" button
            noBtn: "Nein"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Langsam mache ich mir Gedanken ... 😨",  // Shows when they go past 5000%
        high: "So so ... eine Nervensäge bin ich also ... 😤",              // Shows when they go past 1000%
        normal: "Echt, so wenig? 🧸"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Jeeeeeiiiih, du machst mich zur glücklichsten Person überhaupt",
        message: "Ich hoffe du weißt wie unfassbar glücklich du mich machst, ich erzähle es dir aber gerne in aller Länge",
        emojis: "❤️💜"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#696FC7",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#6D94C5",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#393E46",     // Button color (should stand out against the background)
        buttonHover: "#393E46",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#F5EFE6"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "20s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "30px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: false,                     // Music feature is enabled
        autoplay: false,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.0                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
