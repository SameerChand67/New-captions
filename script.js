const statusContainer = document.getElementById('status-container');

// Sample 20 categories with 15 real statuses each
const categories = [
  {
    name: "Birthday Wishes",
    statuses: [
      "Happy Birthday! 🎂 May your day be as amazing as you are!",
      "Wishing you endless joy and unforgettable memories today!",
      "On your special day, may all your dreams come true.",
      "Happy Birthday! Stay blessed always! 🎉",
      "Sending you smiles for every moment of your special day.",
      "Have a blast today and always!",
      "Another year older, wiser, and more fabulous!",
      "Hope your birthday is filled with love and laughter!",
      "Wishing you a birthday as sweet as cake!",
      "Cheers to another year of greatness!",
      "Blow the candles and make a wish! 🎂",
      "To a year full of blessings, laughter, and joy!",
      "Have a magical birthday filled with surprises!",
      "Celebrate big and enjoy every moment!",
      "Happy birthday to the most wonderful person I know!"
    ]
  },
  {
    name: "Good Morning",
    statuses: [
      "Good morning! Start your day with a smile 😊",
      "Rise and shine! ☀️",
      "Every morning is a fresh start. Make it count!",
      "May your day be filled with peace and positivity.",
      "Good morning! Be the reason someone smiles today.",
      "Wake up with determination, go to bed with satisfaction!",
      "New day, new blessings. Hello, sunshine!",
      "Good morning! Let your soul shine bright!",
      "Make today beautiful! 🌸",
      "Sending morning hugs and love 🌞",
      "Breathe in the morning calm. Exhale joy.",
      "Every sunrise brings a new hope.",
      "Smile—it’s a brand new day!",
      "Good morning! Keep moving forward.",
      "May your coffee be strong and your day be sweet!"
    ]
  },
  {
    name: "Love",
    statuses: [
      "You are the sunshine to my soul ❤️",
      "Falling for you every single day 💞",
      "Love isn't perfect, it's just real.",
      "Forever and always, it’s you. 💖",
      "You’re my today and all of my tomorrows.",
      "In your smile, I see something more beautiful than stars.",
      "Love is not what you say. Love is what you do.",
      "You complete me 💘",
      "My heart beats only for you.",
      "You + Me = ❤️",
      "Just a little reminder that I love you!",
      "I fell in love with you for a million reasons.",
      "You're my favorite notification. 💌",
      "Love is a language spoken by the heart.",
      "No matter where I go, I always find my way back to you."
    ]
  },
  {
    name: "Motivational",
    statuses: [
      "Believe you can, and you're halfway there.",
      "Stay positive, work hard, make it happen.",
      "Success is no accident. It's hard work and perseverance.",
      "Push yourself, because no one else will.",
      "Don’t watch the clock; do what it does—keep going.",
      "You are capable of amazing things!",
      "The best view comes after the hardest climb.",
      "Every day is a second chance.",
      "Dream big. Start small. Act now.",
      "Wake up with determination. Sleep with satisfaction.",
      "It always seems impossible until it’s done.",
      "Keep going. You’re getting there.",
      "You are stronger than you think.",
      "Chase your dreams with passion!",
      "Success starts with self-belief."
    ]
  },
  {
    name: "Good Night",
    statuses: [
      "Good night! Sweet dreams 🌙",
      "Sleep tight, and don’t let the bedbugs bite!",
      "May your dreams be filled with happiness 💫",
      "Time to rest your soul. Good night!",
      "The night is for rest, not worries.",
      "Close your eyes and feel the peace.",
      "Let the stars guide your dreams.",
      "Good night! Tomorrow is another beautiful day.",
      "Sleep well and recharge 🌌",
      "The night whispers peace. Listen to it.",
      "May you sleep like a baby tonight 💤",
      "Sending sleepy hugs your way!",
      "Rest now. You did your best today.",
      "Dream big tonight 🌠",
      "Good night! See you in dreamland!"
    ]
  },
  {
    name: "Friendship",
    statuses: [
      "Friends are the family we choose 💕",
      "True friends are never apart—maybe in distance but never in heart.",
      "Life is better with friends.",
      "A friend like you is a treasure.",
      "Thanks for being my partner in crime!",
      "You make my life brighter!",
      "Friendship is born at that moment when one says to another: 'You too?'",
      "Real friends are rare. I’m lucky to have you.",
      "You’re the peanut butter to my jelly!",
      "Here’s to laughs, memories, and forever friendships.",
      "Together, we are unstoppable.",
      "Thanks for always being there for me!",
      "Friendship = Love + Loyalty + Laughter",
      "We go together like coffee and mornings.",
      "Forever grateful for your friendship."
    ]
  },
  
  {
    name: "Festival Wishes",
    statuses: [
      "Wishing you a joyful Diwali filled with light ✨",
      "Eid Mubarak! May peace and blessings be with you 🌙",
      "Celebrate Holi with colors of happiness and love 🎨",
      "Merry Christmas! 🎄 Spread kindness and cheer!",
      "Happy New Year! 🎉 May your 2025 be amazing!",
      "Let’s light up lives this Diwali! 🪔",
      "Warm wishes on this blessed Eid!",
      "Joyful Navratri to you and your family 💃",
      "Celebrate Baisakhi with joy and dance!",
      "Sending Onam vibes your way 🌸",
      "Ganesh Chaturthi blessings to all! 🙏",
      "Happy Pongal! Celebrate harvest and hope 🌾",
      "May Durga Maa bless you this Navratri 🕉️",
      "Holi Hai! Let’s splash some love!",
      "Celebrate each festival with heart and soul ❤️"
    ]
  },
  {
    name: "Sad / Heartbreak",
    statuses: [
      "Tears are the words the heart can’t express 💔",
      "You broke my heart, but not my spirit.",
      "I smile outside, but I’m breaking inside.",
      "Sometimes silence hurts more than words.",
      "It hurts, but I’ll be okay someday.",
      "You were my once upon a time, not my happily ever after.",
      "From strangers to lovers to strangers again.",
      "Crying alone is better than fake company.",
      "I loved you. That was my mistake.",
      "Letting go is part of moving on.",
      "Pain teaches you who truly cares.",
      "I miss you more than words can say.",
      "Heartbreaks leave invisible scars.",
      "Love hurts when it’s not returned.",
      "Goodbye hurt more than I expected."
    ]
  },
  {
    name: "Funny",
    statuses: [
      "I’m not lazy, just on energy-saving mode 😴",
      "Sarcasm is my natural defense mechanism 😏",
      "I need a six-month vacation, twice a year 🌴",
      "My bed and I are perfect for each other 💕",
      "I speak fluent eye roll 🙄",
      "Why fall in love when you can fall asleep?",
      "Dear sleep, I’m sorry I cheated on you with my phone 😅",
      "Brains are awesome—I wish everybody had one 🧠",
      "Running late is my cardio 🏃",
      "I’m not short, I’m concentrated awesome!",
      "Born to express, not to impress 😎",
      "Password: Incorrect. Hint: Correct Password 😂",
      "Can I uninstall Mondays?",
      "Confidence level: Selfie with no filter 📸",
      "Life’s short. Smile while you still have teeth 🦷"
    ]
  },
  {
    name: "Life Lessons",
    statuses: [
      "Life is 10% what happens and 90% how you react.",
      "Difficult roads often lead to beautiful destinations.",
      "Inhale courage, exhale doubt.",
      "Be kind. Everyone is fighting a battle you don’t see.",
      "Mistakes are proof you're trying.",
      "Don’t let your past define your future.",
      "Happiness is a choice, not a result.",
      "The best project you’ll ever work on is you.",
      "You grow through what you go through.",
      "Time heals everything—just give it time.",
      "Surround yourself with good energy.",
      "One day or day one. You decide.",
      "Let go of what you can't control.",
      "Your mindset is everything.",
      "Progress, not perfection."
    ]
  },
  {
    name: "Anniversary / Engagement",
    statuses: [
      "Happy Anniversary to a perfect pair! 💑",
      "Still crushing on you every single day 💕",
      "One year down, forever to go 💍",
      "Engaged and loving every moment! 💎",
      "Your love story inspires us all ❤️",
      "From ‘Yes’ to ‘Forever’ 💍",
      "Years together, memories forever 🌸",
      "Here’s to many more years of togetherness!",
      "A love like yours is a blessing.",
      "Cheers to love, laughter, and happily ever after!",
      "You both define true love!",
      "Together is my favorite place to be.",
      "Wishing you more years of love and joy!",
      "Happy Engagement! May your bond grow stronger.",
      "Two hearts, one love story."
    ]
  },
  {
    name: "Attitude / Swagger",
    statuses: [
      "Born to stand out. Not to fit in 😎",
      "My attitude is based on how you treat me.",
      "I don’t chase dreams—I hunt them.",
      "Too glam to give a damn 💅",
      "I’m not bossy, I just know what you should be doing.",
      "Take me as I am, or watch me as I go 🚶",
      "Swagger on point 💯",
      "I’m not perfect, I’m original.",
      "Hustle in silence, let success make noise.",
      "Confidence level: 100%",
      "Legends don’t compete, they dominate.",
      "I don’t follow. I lead.",
      "I know who I am. Your opinion doesn’t matter.",
      "Don’t copy my style, create your own.",
      "Attitude is everything. Own it!"
    ]
  }

  // ... You can continue adding 14 more categories below with different themes like:
  // "Attitude", "Anniversary", "Sad Quotes", "Life", "Success", "Festival Wishes", "Self Love", "Couple Goals", etc.

];

// Generate UI
function createStatusElement(text) {
  const wrapper = document.createElement('div');
  wrapper.className = 'status';

  const span = document.createElement('span');
  span.textContent = text;

  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  const copyBtn = document.createElement('button');
  copyBtn.textContent = 'Copy';
  copyBtn.onclick = () => {
    navigator.clipboard.writeText(text).then(() => alert('Status copied!'));
  };

  const shareBtn = document.createElement('button');
  shareBtn.textContent = 'Share';
  shareBtn.onclick = async () => {
    if (navigator.share) {
      await navigator.share({
        text
      });
    } else {
      alert('Sharing not supported in your browser. Please copy instead.');
    }
  };

  buttons.append(copyBtn, shareBtn);
  wrapper.append(span, buttons);
  return wrapper;
}

categories.forEach(cat => {
  const catDiv = document.createElement('div');
  catDiv.className = 'category';

  const heading = document.createElement('h2');
  heading.textContent = cat.name;
  catDiv.appendChild(heading);

  cat.statuses.forEach(status => {
    catDiv.appendChild(createStatusElement(status));
  });

  statusContainer.appendChild(catDiv);
});
document.getElementById("share-app").addEventListener("click", () => {
  const appLink = "https://yourusername.github.io/status-app"; // Replace with real link

  if (navigator.share) {
    navigator.share({
      title: "Sweet Status App",
      text: "Check out this awesome status app!",
      url: appLink
    }).catch(err => console.log("App share failed:", err));
  } else {
    navigator.clipboard.writeText(appLink).then(() => {
      alert("App link copied to clipboard!");
    });
  }
});
const CACHE_NAME = 'status-app-cache-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
