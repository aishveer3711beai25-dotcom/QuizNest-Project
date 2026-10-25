/* quiz-data.js - shared by index.html AND every page in /files (category pages, explore).
   The first part is the data that used to sit inside index.html (unchanged). */
/* =====================================================
   data.js  -  ALL quiz information lives here.
   To add or edit a quiz, edit this file only.

   Each quiz has:
     id, title, author, rating, category, image,
     publishedAt (placeholder date, used for "Newest first"),
     section ("recent" or "popular" -> which grid on the home page),
     questions: an array of
        { q: "question text",
          options: ["A", "B", "C", "D"],
          answer: 1 }          <- index of the correct option (0 = first)

   NOTE: the questions below are SAMPLE questions I wrote so the
   quiz player has something to play. Replace them with your own.
===================================================== */

const QUIZZES = [
  /* ---------- Recently Published ---------- */
  {
    id: 1, title: "Meet Your Maker Quiz", author: "MissPengywin", rating: 3.6,
    category: "entertainment", image: "images/image1.jpg", publishedAt: "2026-10-10", section: "recent",
    questions: [
      { q: "Who is credited with inventing the World Wide Web?", options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"], answer: 1 },
      { q: "Who started the Linux kernel project?", options: ["Dennis Ritchie", "Guido van Rossum", "Linus Torvalds", "James Gosling"], answer: 2 },
      { q: "Who created the Python programming language?", options: ["Brendan Eich", "Bjarne Stroustrup", "Larry Wall", "Guido van Rossum"], answer: 3 }
    ]
  },
  {
    id: 2, title: "Y2K Boy Bands", author: "CandyQueen", rating: 4.2,
    category: "entertainment", image: "images/image2.jpg", publishedAt: "2026-10-09", section: "recent",
    questions: [
      { q: "Which group released the 2000 hit \"Bye Bye Bye\"?", options: ["Backstreet Boys", "98 Degrees", "Boyzone", "NSYNC"], answer: 3 },
      { q: "Which NSYNC member later released the solo hit \"Cry Me a River\"?", options: ["Justin Timberlake", "JC Chasez", "Joey Fatone", "Lance Bass"], answer: 0 },
      { q: "Which group is known for \"I Want It That Way\"?", options: ["NSYNC", "O-Town", "Backstreet Boys", "LFO"], answer: 2 }
    ]
  },
  {
    id: 3, title: "European Countries", author: "Brittany", rating: 4.0,
    category: "geography", image: "images/image3.jpg", publishedAt: "2026-10-08", section: "recent",
    questions: [
      { q: "What is the capital of Spain?", options: ["Barcelona", "Madrid", "Lisbon", "Seville"], answer: 1 },
      { q: "Which European country is shaped like a boot?", options: ["Greece", "Spain", "Italy", "Portugal"], answer: 2 },
      { q: "Which city does the River Seine flow through?", options: ["Rome", "Berlin", "Vienna", "Paris"], answer: 3 }
    ]
  },
  {
    id: 4, title: "Guess the Anime", author: "RenDayNe", rating: 2.5,
    category: "entertainment", image: "images/image4.jpg", publishedAt: "2026-10-07", section: "recent",
    questions: [
      { q: "Which anime stars a pirate named Monkey D. Luffy?", options: ["Naruto", "Bleach", "One Piece", "Dragon Ball"], answer: 2 },
      { q: "What is Naruto's home village called?", options: ["Hidden Leaf Village", "Hidden Sand Village", "Hidden Mist Village", "Hidden Cloud Village"], answer: 0 },
      { q: "Which Studio Ghibli film features the forest spirit Totoro?", options: ["Spirited Away", "My Neighbor Totoro", "Ponyo", "Howl's Moving Castle"], answer: 1 }
    ]
  },
  {
    id: 5, title: "Plants vs Zombies", author: "Khai2007", rating: 3.6,
    category: "trivia", image: "images/image5.jpg", publishedAt: "2026-10-06", section: "recent",
    questions: [
      { q: "Which plant produces sun?", options: ["Peashooter", "Wall-nut", "Sunflower", "Cherry Bomb"], answer: 2 },
      { q: "Which plant explodes to destroy zombies in an area?", options: ["Cherry Bomb", "Sunflower", "Lily Pad", "Wall-nut"], answer: 0 },
      { q: "What do you spend to plant most plants?", options: ["Coins", "Sun", "Gems", "Seeds"], answer: 1 }
    ]
  },
  {
    id: 6, title: "Anime Soundtrack #2", author: "RenDayNe", rating: 2.8,
    category: "entertainment", image: "images/image6.jpg", publishedAt: "2026-10-05", section: "recent",
    questions: [
      { q: "Who composed the music for Cowboy Bebop?", options: ["Joe Hisaishi", "Hiroyuki Sawano", "Yoko Kanno", "Yuki Kajiura"], answer: 2 },
      { q: "Which composer scored most of Hayao Miyazaki's Studio Ghibli films?", options: ["Joe Hisaishi", "Yoko Kanno", "Kenji Kawai", "Shiro Sagisu"], answer: 0 },
      { q: "Which group performed Attack on Titan's first opening, \"Guren no Yumiya\"?", options: ["Yoasobi", "Radwimps", "Linked Horizon", "Aimer"], answer: 2 }
    ]
  },

  /* ---------- Popular Quizzes ---------- */
  {
    id: 7, title: "HTML Basics", author: "Admin", rating: 4.8,
    category: "trivia", image: "images/image7.jpg", publishedAt: "2026-09-20", section: "popular",
    questions: [
      { q: "Which tag creates the largest heading?", options: ["<h6>", "<head>", "<h1>", "<header>"], answer: 2 },
      { q: "Which attribute holds the destination of a link?", options: ["src", "href", "link", "target"], answer: 1 },
      { q: "Which tag inserts a line break?", options: ["<hr>", "<lb>", "<br>", "<break>"], answer: 2 }
    ]
  },
  {
    id: 8, title: "CSS Challenge", author: "CodingHub", rating: 4.7,
    category: "trivia", image: "images/image8.jpeg", publishedAt: "2026-09-15", section: "popular",
    questions: [
      { q: "Which property changes the colour of text?", options: ["font-color", "text-style", "color", "fg"], answer: 2 },
      { q: "Which symbol selects an element by class?", options: ["#", ".", "*", "&"], answer: 1 },
      { q: "Which property adds space OUTSIDE an element's border?", options: ["margin", "padding", "gap", "outline"], answer: 0 }
    ]
  },
  {
    id: 9, title: "JavaScript Quiz", author: "WebDev", rating: 4.9,
    category: "trivia", image: "images/image9.jpeg", publishedAt: "2026-09-10", section: "popular",
    questions: [
      { q: "Which keyword declares a constant?", options: ["let", "var", "const", "static"], answer: 2 },
      { q: "Which array method adds an item to the END?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },
      { q: "Which method turns a JSON string into an object?", options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "parseJSON()"], answer: 1 }
    ]
  },
  {
    id: 10, title: "Flexbox Master", author: "CSSPro", rating: 4.6,
    category: "trivia", image: "images/image10.jpeg", publishedAt: "2026-09-05", section: "popular",
    questions: [
      { q: "Which declaration turns an element into a flex container?", options: ["position: flex", "display: flex", "layout: flex", "flex: on"], answer: 1 },
      { q: "What does justify-content align items along?", options: ["The cross axis", "The z-axis", "The main axis", "Only the first item"], answer: 2 },
      { q: "What is the default value of flex-direction?", options: ["column", "row", "row-reverse", "column-reverse"], answer: 1 }
    ]
  },
  {
    id: 11, title: "Grid Layout", author: "John", rating: 4.8,
    category: "trivia", image: "images/image11.jpeg", publishedAt: "2026-09-01", section: "popular",
    questions: [
      { q: "Which declaration creates a grid container?", options: ["display: block-grid", "layout: grid", "display: grid", "grid: on"], answer: 2 },
      { q: "Which property defines the columns of a grid?", options: ["grid-columns", "grid-template-columns", "columns-grid", "grid-cols"], answer: 1 },
      { q: "What does the fr unit mean in CSS Grid?", options: ["A fixed pixel size", "A font ratio", "A fraction of the available space", "A frame rate"], answer: 2 }
    ]
  },
  {
    id: 12, title: "Responsive Design", author: "Alex", rating: 5.0,
    category: "trivia", image: "images/image12.jpeg", publishedAt: "2026-08-25", section: "popular",
    questions: [
      { q: "Which <meta> tag name helps pages scale properly on phones?", options: ["charset", "viewport", "description", "robots"], answer: 1 },
      { q: "Which CSS feature applies styles based on screen width?", options: ["@media queries", "@import", "@keyframes", "@font-face"], answer: 0 },
      { q: "A mobile-first approach usually uses which kind of media query?", options: ["max-width", "min-width", "print", "orientation only"], answer: 1 }
    ]
  }
];

/* ---------- NEW: category names + extra quiz info (difficulty, description) ---------- */
const CATEGORY_LABELS = {
  "art-literature": "Art & Literature", entertainment: "Entertainment",
  geography: "Geography", history: "History", languages: "Languages",
  "science-nature": "Science & Nature", sports: "Sports", trivia: "Trivia"
};

const QUIZ_EXTRA = {
  1:  { difficulty: "Medium", description: "The people behind the web, Linux and Python." },
  2:  { difficulty: "Easy",   description: "Y2K pop hits and the boy bands who sang them." },
  3:  { difficulty: "Easy",   description: "Capitals, shapes and rivers of Europe." },
  4:  { difficulty: "Medium", description: "Name the anime from its characters and worlds." },
  5:  { difficulty: "Easy",   description: "Plants, sun and zombies: the classic tower defence game." },
  6:  { difficulty: "Hard",   description: "Composers and bands behind famous anime music." },
  7:  { difficulty: "Easy",   description: "Tags and attributes every web page uses." },
  8:  { difficulty: "Medium", description: "Selectors, colours, margins and more in CSS." },
  9:  { difficulty: "Medium", description: "Constants, arrays and JSON in JavaScript." },
  10: { difficulty: "Medium", description: "Flex containers, axes and defaults." },
  11: { difficulty: "Medium", description: "Grid containers, columns and the fr unit." },
  12: { difficulty: "Easy",   description: "Viewport, media queries and mobile-first design." }
};
QUIZZES.forEach((q) => Object.assign(q, QUIZ_EXTRA[q.id]));

/* ---------- More questions (compact form: [question, [options], index of correct option]) ---------- */
const MORE_QUESTIONS = {
  3: [
    ["What is the capital of Germany?", ["Munich", "Berlin", "Hamburg", "Frankfurt"], 1],
    ["What is the capital of Poland?", ["Warsaw", "Krakow", "Gdansk", "Prague"], 0],
    ["Which country has Reykjavik as its capital?", ["Norway", "Ireland", "Iceland", "Finland"], 2],
    ["Which river flows through Budapest?", ["Vistula", "Danube", "Rhine", "Elbe"], 1],
    ["Which mountain range separates France and Spain?", ["Alps", "Carpathians", "Pyrenees", "Apennines"], 2],
    ["What is the capital of Portugal?", ["Porto", "Lisbon", "Faro", "Coimbra"], 1],
    ["Which is the smallest country in Europe by area?", ["Monaco", "Malta", "Vatican City", "San Marino"], 2],
    ["Which country is Stockholm the capital of?", ["Norway", "Denmark", "Finland", "Sweden"], 3],
    ["Which sea lies between Italy and the Balkan Peninsula?", ["Baltic Sea", "Adriatic Sea", "Black Sea", "North Sea"], 1],
    ["What is the capital of Austria?", ["Vienna", "Salzburg", "Zurich", "Bern"], 0],
    ["Which country is home to the Acropolis?", ["Turkey", "Italy", "Greece", "Bulgaria"], 2],
    ["Which river flows through London?", ["Thames", "Severn", "Seine", "Tyne"], 0]
  ],
  7: [
    ["Which tag defines a paragraph?", ["<p>", "<para>", "<pg>", "<text>"], 0],
    ["Which element creates an unordered (bulleted) list?", ["<ol>", "<ul>", "<li>", "<dl>"], 1],
    ["Which attribute gives alternative text for an image?", ["title", "alt", "src", "caption"], 1],
    ["Which tag creates a hyperlink?", ["<link>", "<a>", "<href>", "<url>"], 1],
    ["Which tag defines a table row?", ["<td>", "<th>", "<tr>", "<row>"], 2],
    ["Which declaration belongs at the very top of an HTML5 document?", ["<!DOCTYPE html>", "<html5>", "<?html?>", "<doctype>"], 0],
    ["Which tag sets the title shown in the browser tab?", ["<head>", "<title>", "<meta>", "<header>"], 1],
    ["Which element holds a page's main navigation links?", ["<navigate>", "<nav>", "<menu>", "<links>"], 1],
    ["Which input type creates a checkbox?", ["type=\"check\"", "type=\"checkbox\"", "type=\"tick\"", "type=\"box\""], 1],
    ["Which tag marks text as strongly important?", ["<strong>", "<bold>", "<heavy>", "<mark>"], 0],
    ["Which tag embeds an image?", ["<image>", "<img>", "<pic>", "<figure>"], 1],
    ["Which attribute opens a link in a new tab?", ["target=\"_blank\"", "rel=\"new\"", "open=\"tab\"", "window=\"_new\""], 0]
  ],
  8: [
    ["Which property sets the background colour?", ["bgcolor", "background-color", "color-bg", "back-color"], 1],
    ["Which property changes the size of text?", ["font-size", "text-size", "font-style", "text-scale"], 0],
    ["Which symbol selects an element by id?", [".", "#", "*", "@"], 1],
    ["Which position value places an element relative to its nearest positioned ancestor and removes it from normal flow?", ["static", "relative", "absolute", "sticky"], 2],
    ["Which property adds space INSIDE an element's border?", ["margin", "padding", "gap", "border-spacing"], 1],
    ["What does display: none do?", ["Makes the element transparent but keeps its space", "Hides the element and removes it from the layout", "Moves it off the screen only", "Shrinks it to zero height"], 1],
    ["Which property rounds the corners of an element?", ["corner-radius", "border-radius", "round-edge", "border-curve"], 1],
    ["Which pseudo-class styles an element while the mouse is over it?", [":active", ":focus", ":hover", ":visited"], 2],
    ["Which property aligns text horizontally?", ["text-align", "align-text", "font-align", "text-position"], 0],
    ["What does box-sizing: border-box do?", ["Width includes padding and border", "Removes the border", "Adds margin to the width", "Makes the box inline"], 0],
    ["Which property controls the stacking order of positioned elements?", ["stack-order", "z-index", "layer", "order"], 1],
    ["Which unit is relative to the root element's font size?", ["em", "rem", "px", "pt"], 1]
  ],
  9: [
    ["Which operator checks both value and type equality?", ["==", "=", "===", "!="], 2],
    ["What does typeof null return?", ["\"null\"", "\"object\"", "\"undefined\"", "\"number\""], 1],
    ["Which array method removes the LAST element?", ["pop()", "push()", "shift()", "splice()"], 0],
    ["Which keyword declares a block-scoped variable that can be reassigned?", ["var", "let", "const", "def"], 1],
    ["Which method selects an element by its id?", ["getElementById()", "querySelectorAll()", "getElement()", "findById()"], 0],
    ["What does Array.isArray([]) return?", ["false", "true", "\"array\"", "undefined"], 1],
    ["Which function converts a string to an integer?", ["parseInt()", "toInt()", "Number.string()", "int()"], 0],
    ["How do you write a single-line comment in JavaScript?", ["<!-- comment -->", "// comment", "# comment", "** comment"], 1],
    ["Which method attaches an event handler to an element?", ["addEventListener()", "onEvent()", "listen()", "attachClick()"], 0],
    ["What is the result of \"5\" + 3?", ["8", "\"53\"", "NaN", "an error"], 1],
    ["Which array method builds a new array by transforming every element?", ["forEach()", "map()", "filter()", "reduce()"], 1],
    ["Which method converts an object into a JSON string?", ["JSON.parse()", "JSON.stringify()", "JSON.toString()", "JSON.encode()"], 1]
  ]
};
Object.entries(MORE_QUESTIONS).forEach(([id, list]) => {
  const quiz = QUIZZES.find((q) => q.id === Number(id));
  list.forEach(([q, options, answer]) => quiz.questions.push({ q, options, answer }));
});

/* ---------- Questions for the other quizzes: [question, correct answer, [3 wrong answers]]
   The correct answer is placed at a random position when the page loads. ---------- */
const MORE_QUESTIONS_2 = {
  1: [
    ["Who created the JavaScript language?", "Brendan Eich", ["Douglas Crockford", "James Gosling", "Rasmus Lerdorf"]],
    ["Who created the Java language?", "James Gosling", ["Dennis Ritchie", "Bjarne Stroustrup", "Ken Thompson"]],
    ["Who created C++?", "Bjarne Stroustrup", ["Dennis Ritchie", "Guido van Rossum", "Larry Wall"]],
    ["Who created the C language?", "Dennis Ritchie", ["Ken Thompson", "Linus Torvalds", "Bjarne Stroustrup"]],
    ["Who created PHP?", "Rasmus Lerdorf", ["Yukihiro Matsumoto", "Rob Pike", "Anders Hejlsberg"]],
    ["Who created the Ruby language?", "Yukihiro Matsumoto", ["Guido van Rossum", "Larry Wall", "Brendan Eich"]],
    ["Who co-founded Apple with Steve Jobs?", "Steve Wozniak", ["Bill Gates", "Paul Allen", "Larry Page"]],
    ["Who co-founded Microsoft with Bill Gates?", "Paul Allen", ["Steve Ballmer", "Steve Wozniak", "Satya Nadella"]],
    ["Who created the Git version control system?", "Linus Torvalds", ["Guido van Rossum", "Tim Berners-Lee", "Richard Stallman"]],
    ["Who founded the GNU Project?", "Richard Stallman", ["Linus Torvalds", "Eric Raymond", "Ken Thompson"]],
    ["Who led the design of the C# language at Microsoft?", "Anders Hejlsberg", ["James Gosling", "Rob Pike", "Bjarne Stroustrup"]],
    ["Who is often called the first computer programmer?", "Ada Lovelace", ["Grace Hopper", "Margaret Hamilton", "Hedy Lamarr"]]
  ],
  2: [
    ["Which group released the hit \"Larger Than Life\"?", "Backstreet Boys", ["NSYNC", "98 Degrees", "O-Town"]],
    ["Which group had the hit \"Tearin' Up My Heart\"?", "NSYNC", ["Backstreet Boys", "Boyzone", "LFO"]],
    ["Which of these singers was a member of Backstreet Boys?", "Nick Carter", ["JC Chasez", "Joey Fatone", "Nick Lachey"]],
    ["Which group released \"The Hardest Thing\"?", "98 Degrees", ["NSYNC", "O-Town", "Westlife"]],
    ["Which boy band was Nick Lachey a member of?", "98 Degrees", ["NSYNC", "Backstreet Boys", "LFO"]],
    ["Which boy band included Chris Kirkpatrick and Lance Bass?", "NSYNC", ["Backstreet Boys", "98 Degrees", "Boyzone"]],
    ["Which group's 1997 hit is \"Everybody (Backstreet's Back)\"?", "Backstreet Boys", ["NSYNC", "Take That", "98 Degrees"]],
    ["Which Irish boy band released \"No Matter What\"?", "Boyzone", ["Westlife", "98 Degrees", "O-Town"]],
    ["Which group formed on the TV show Making the Band and released \"All or Nothing\"?", "O-Town", ["LFO", "NSYNC", "Boyzone"]],
    ["Which group's 2000 album was called \"No Strings Attached\"?", "NSYNC", ["Backstreet Boys", "98 Degrees", "O-Town"]],
    ["Which Backstreet Boys album came out in 1999?", "Millennium", ["Black & Blue", "Never Gone", "Unbreakable"]],
    ["Which group sang \"Summer Girls\"?", "LFO", ["O-Town", "98 Degrees", "Dream Street"]]
  ],
  4: [
    ["Which anime follows the pirate Monkey D. Luffy?", "One Piece", ["Bleach", "Naruto", "Fairy Tail"]],
    ["Which anime stars the ninja Naruto Uzumaki?", "Naruto", ["One Piece", "Bleach", "Black Clover"]],
    ["What is Goku's Saiyan birth name in Dragon Ball?", "Kakarot", ["Vegeta", "Raditz", "Bardock"]],
    ["Which anime features the Survey Corps fighting giant Titans?", "Attack on Titan", ["Demon Slayer", "Fire Force", "Seraph of the End"]],
    ["Which anime centres on Light Yagami and a supernatural notebook?", "Death Note", ["Code Geass", "Monster", "Tokyo Ghoul"]],
    ["Which anime features Tanjiro Kamado hunting demons?", "Demon Slayer", ["Jujutsu Kaisen", "Bleach", "Dororo"]],
    ["Which anime follows brothers Edward and Alphonse Elric?", "Fullmetal Alchemist", ["Soul Eater", "Magi", "D.Gray-man"]],
    ["Which anime follows Izuku Midoriya at U.A. High School?", "My Hero Academia", ["One Punch Man", "Mob Psycho 100", "Black Clover"]],
    ["Which anime features the bounty hunter Spike Spiegel?", "Cowboy Bebop", ["Trigun", "Outlaw Star", "Samurai Champloo"]],
    ["Which anime features Usagi Tsukino transforming into a guardian?", "Sailor Moon", ["Cardcaptor Sakura", "Fruits Basket", "Magic Knight Rayearth"]],
    ["In which Studio Ghibli film does Chihiro enter a spirit world?", "Spirited Away", ["Princess Mononoke", "Kiki's Delivery Service", "Ponyo"]],
    ["Which anime stars Ash Ketchum and his partner Pikachu?", "Pokemon", ["Digimon", "Yu-Gi-Oh!", "Beyblade"]]
  ],
  5: [
    ["Which plant fires peas at zombies?", "Peashooter", ["Sunflower", "Chomper", "Squash"]],
    ["Which plant is a tough barrier that blocks zombies?", "Wall-nut", ["Peashooter", "Cherry Bomb", "Lily Pad"]],
    ["Which plant swallows a zombie whole and then takes time to digest?", "Chomper", ["Squash", "Potato Mine", "Snow Pea"]],
    ["Which plant fires frozen peas that slow zombies down?", "Snow Pea", ["Peashooter", "Repeater", "Cabbage-pult"]],
    ["Which plant jumps on and flattens a zombie that gets close?", "Squash", ["Wall-nut", "Chomper", "Sunflower"]],
    ["Which plant explodes when a zombie steps on it?", "Potato Mine", ["Wall-nut", "Sunflower", "Lily Pad"]],
    ["Which zombie wears a traffic cone on its head?", "Conehead Zombie", ["Buckethead Zombie", "Newspaper Zombie", "Football Zombie"]],
    ["Which zombie vaults over the first plant it meets?", "Pole Vaulting Zombie", ["Conehead Zombie", "Dancing Zombie", "Flag Zombie"]],
    ["What do you collect and spend to plant new plants?", "Sun", ["Coins", "Seeds", "Water"]],
    ["Which company developed Plants vs. Zombies?", "PopCap Games", ["Nintendo", "Ubisoft", "Rovio"]],
    ["Which plant must be placed first before others can grow on water?", "Lily Pad", ["Wall-nut", "Squash", "Chomper"]],
    ["Which zombie carries a newspaper and gets angry when it is destroyed?", "Newspaper Zombie", ["Conehead Zombie", "Screen Door Zombie", "Football Zombie"]]
  ],
  6: [
    ["Which artist sang \"Blue Bird\", a Naruto Shippuden opening?", "Ikimono-gakari", ["Aimer", "YUI", "Eve"]],
    ["Who composed the music for Attack on Titan?", "Hiroyuki Sawano", ["Yoko Kanno", "Joe Hisaishi", "Kenji Kawai"]],
    ["Which singer performed \"Gurenge\", the Demon Slayer opening?", "LiSA", ["Aimer", "Eve", "YOASOBI"]],
    ["Which band performed \"The World\", the first Death Note opening?", "Nightmare", ["JAM Project", "DALI", "RADWIMPS"]],
    ["Who sang \"A Cruel Angel's Thesis\" from Neon Genesis Evangelion?", "Yoko Takahashi", ["Megumi Hayashibara", "LiSA", "Kenshi Yonezu"]],
    ["Which artist performed \"Unravel\", the Tokyo Ghoul opening?", "TK from Ling tosite sigure", ["Eve", "Nightmare", "RADWIMPS"]],
    ["Who sang \"Again\", the first opening of Fullmetal Alchemist: Brotherhood?", "YUI", ["LiSA", "Aimer", "Yoko Takahashi"]],
    ["Who performed \"Moonlight Densetsu\", the Sailor Moon theme?", "DALI", ["JAM Project", "Eve", "Nightmare"]],
    ["Who sang \"Cha-La Head-Cha-La\", the Dragon Ball Z opening?", "Hironobu Kageyama", ["Masatoshi Ono", "Eve", "TK"]],
    ["Which artist performed \"Kaikai Kitan\", a Jujutsu Kaisen opening?", "Eve", ["LiSA", "YOASOBI", "Aimer"]],
    ["Which group performed \"The Hero!!\", the One Punch Man opening?", "JAM Project", ["RADWIMPS", "Nightmare", "DALI"]],
    ["Which band made the soundtrack for the film Your Name?", "RADWIMPS", ["JAM Project", "Ikimono-gakari", "Nightmare"]]
  ],
  10: [
    ["Which property aligns flex items along the cross axis?", "align-items", ["justify-content", "flex-flow", "order"]],
    ["Which property lets flex items wrap onto new lines?", "flex-wrap", ["flex-flow", "flex-grow", "align-content: none"]],
    ["What does flex-direction: column do?", "Makes the main axis vertical", ["Makes items hidden", "Wraps items into columns of equal width", "Reverses the item order"]],
    ["Which property sets the space between flex items without using margins?", "gap", ["order", "flex-basis", "align-self"]],
    ["Which justify-content value puts equal space between items but none at the edges?", "space-between", ["space-around", "center", "flex-start"]],
    ["Which property lets a flex item grow to fill free space?", "flex-grow", ["flex-shrink", "flex-wrap", "order"]],
    ["Which property lets a flex item shrink when space is limited?", "flex-shrink", ["flex-grow", "flex-basis", "align-items"]],
    ["Which property sets the initial main size of a flex item?", "flex-basis", ["flex-flow", "align-self", "justify-items"]],
    ["Which property changes the visual order of a flex item?", "order", ["flex-flow", "z-index", "align-content"]],
    ["Which property overrides align-items for a single flex item?", "align-self", ["justify-self", "align-content", "order"]],
    ["Which shorthand combines flex-direction and flex-wrap?", "flex-flow", ["flex", "flex-basis", "align-flow"]],
    ["What is the default value of align-items on a flex container?", "stretch", ["center", "flex-start", "baseline"]]
  ],
  11: [
    ["Which property defines the rows of a grid?", "grid-template-rows", ["grid-rows", "row-template", "grid-row-size"]],
    ["Which property sets the space between grid cells?", "gap", ["grid-space", "cell-spacing", "margin-grid"]],
    ["What does repeat(3, 1fr) create?", "Three equal-width columns", ["Three fixed 1px columns", "One column repeated three times in height", "Three rows"]],
    ["Which property makes a grid item span several columns?", "grid-column", ["grid-span", "column-fill", "grid-width"]],
    ["Which function sets a minimum and maximum size for a track?", "minmax()", ["clamp-track()", "range()", "between()"]],
    ["Which property names areas in a grid container's layout?", "grid-template-areas", ["grid-areas-name", "grid-map", "area-template"]],
    ["Which keyword in repeat() creates as many columns as will fit?", "auto-fill", ["auto-grow", "fit-all", "fill-max"]],
    ["Which property places a grid item into a named area?", "grid-area", ["grid-place", "area-name", "grid-slot"]],
    ["Which property aligns items along the row axis inside their cells?", "justify-items", ["align-content", "flex-flow", "place-gap"]],
    ["What does grid-column: 1 / 3 do?", "Spans the item from line 1 to line 3 (two columns)", ["Places the item in column 13", "Makes the item one third wide", "Repeats the item three times"]],
    ["Which property sets the size of implicitly created rows?", "grid-auto-rows", ["grid-implicit-size", "grid-row-gap", "auto-rows-template"]],
    ["Which CSS layout system is designed for rows AND columns together?", "CSS Grid", ["Floats", "Inline-block", "Table-layout only"]]
  ],
  12: [
    ["What does width=device-width do in the viewport meta tag?", "Sets the page width to the device's screen width", ["Locks the page at 100 pixels", "Disables zooming", "Hides the page on desktops"]],
    ["Which CSS unit is relative to the viewport width?", "vw", ["rem", "pt", "ch"]],
    ["Which rule helps an image shrink to fit its container?", "max-width: 100%", ["min-width: 100%", "overflow: shrink", "display: fit"]],
    ["What is a breakpoint in responsive design?", "A screen width where the layout changes", ["A bug in the CSS", "A JavaScript pause", "A page break for printing"]],
    ["Which screens does @media (min-width: 768px) target?", "Screens 768px wide or wider", ["Screens exactly 768px wide", "Screens narrower than 768px", "Only printers"]],
    ["Which CSS layout modules are commonly used to build responsive layouts?", "Flexbox and Grid", ["Frames and tables", "Marquee and blink", "Applets and plugins"]],
    ["Which HTML element lets you offer different images for different screens?", "<picture>", ["<figure>", "<canvas>", "<frame>"]],
    ["Which <img> attribute lists several image files for the browser to choose from?", "srcset", ["altset", "multisrc", "imglist"]],
    ["Which CSS unit is relative to the parent element's font size?", "em", ["rem", "vh", "px"]],
    ["What does a mobile-first approach mean?", "Write base styles for small screens, then add styles for larger ones", ["Build the desktop site first", "Only support phones", "Use no CSS on desktops"]],
    ["Who coined the term \"responsive web design\" in 2010?", "Ethan Marcotte", ["Tim Berners-Lee", "Brendan Eich", "Jeffrey Zeldman"]],
    ["Which media feature detects a user's dark mode preference?", "prefers-color-scheme", ["dark-mode-only", "color-mode", "night-theme"]]
  ]
};
Object.entries(MORE_QUESTIONS_2).forEach(([id, list]) => {
  const quiz = QUIZZES.find((q) => q.id === Number(id));
  list.forEach(([q, right, wrong]) => {
    const options = [...wrong];
    options.splice(Math.floor(Math.random() * (options.length + 1)), 0, right); // random position for the correct answer
    quiz.questions.push({ q, options, answer: options.indexOf(right) });
  });
});

/* =====================================================
   CATEGORY QUIZZES  (the quizzes listed on files/<category>.html)

   HOW THIS WORKS
   1. CATEGORY_QUIZZES lists EVERY quiz shown on the category pages.
      A quiz is "Coming Soon" until it has a question bank below.
   2. CATEGORY_QUIZ_BANK holds the playable quizzes. Each one needs
      at least 15 questions in the compact form:
         [ "question", "correct answer", ["wrong 1", "wrong 2", "wrong 3"] ]
      The correct answer is shuffled into a random position at load time.
   3. To make a Coming Soon quiz playable later: add an entry to
      CATEGORY_QUIZ_BANK using the SAME id as in CATEGORY_QUIZZES.
      Nothing else needs to change: the Start Quiz button, the
      5 / 10 / 15 selector, the timer and ratings appear automatically.
===================================================== */

const CATEGORY_QUIZZES = [
  { id: "art-literature-classic-novels",  title: "Classic Novels Quiz",   author: "BookWormZ",    rating: 4.3, category: "art-literature", image: "images/artlit1.jpeg", href: "" },
  { id: "art-literature-famous-painters", title: "Famous Painters",       author: "ArtsyAnna",    rating: 4.1, category: "art-literature", image: "images/artlit2.jpg",  href: "" },
  { id: "art-literature-poetry-trivia",   title: "Poetry Trivia",         author: "VerseVix",     rating: 3.9, category: "art-literature", image: "images/artlit3.jpg",  href: "" },

  { id: "entertainment-2020s-movie-trivia", title: "2020s Movie Trivia",  author: "CinemaSam",    rating: 4.5, category: "entertainment",  image: "images/ent1.jpg",     href: "" },
  { id: "entertainment-pop-music-hits",     title: "Pop Music Hits",      author: "BeatDrop",     rating: 4.4, category: "entertainment",  image: "images/ent2.jpg",     href: "" },
  { id: "entertainment-celebrity-trivia",   title: "Celebrity Trivia",    author: "StarGaze",     rating: 3.8, category: "entertainment",  image: "images/ent3.jpeg",    href: "" },

  { id: "geography-capitals-of-the-world",  title: "Capitals of the World", author: "MapMaster",  rating: 4.6, category: "geography",      image: "images/geo1.jpg",     href: "" },
  { id: "geography-rivers-and-mountains",   title: "Rivers & Mountains",  author: "TerraTom",     rating: 4.0, category: "geography",      image: "images/geo2.jpg",     href: "" },
  { id: "geography-flags-quiz",             title: "Flags Quiz",          author: "GlobeTrekker", rating: 4.2, category: "geography",      image: "images/geo3.jpg",     href: "" },

  { id: "history-ancient-civilizations",    title: "Ancient Civilizations", author: "HistoryHana", rating: 4.3, category: "history",       image: "images/hist1.jpg",    href: "" },
  { id: "history-world-war-ii-facts",       title: "World War II Facts",  author: "ChronoChris",  rating: 4.7, category: "history",        image: "images/hist2.jpeg",   href: "" },
  { id: "history-historical-figures",       title: "Historical Figures",  author: "PastPete",     rating: 3.9, category: "history",        image: "images/hist3.jpeg",   href: "" },

  { id: "languages-common-french-phrases",  title: "Common French Phrases", author: "LinguaLee",  rating: 4.1, category: "languages",      image: "images/lang1.jpeg",   href: "" },
  { id: "languages-spanish-vocabulary",     title: "Spanish Vocabulary",  author: "PoliglotPia",  rating: 4.3, category: "languages",      image: "images/lang2.jpeg",   href: "" },
  { id: "languages-english-grammar-check",  title: "English Grammar Check", author: "GrammarGuru", rating: 3.7, category: "languages",     image: "images/lang3.jpeg",   href: "" },

  { id: "science-nature-human-body-basics", title: "Human Body Basics",   author: "BioBella",     rating: 4.5, category: "science-nature", image: "images/sci1.jpeg",    href: "" },
  { id: "science-nature-space-and-astronomy", title: "Space & Astronomy", author: "CosmicCody",   rating: 4.8, category: "science-nature", image: "images/sci2.jpg",     href: "" },
  { id: "science-nature-animal-kingdom",    title: "Animal Kingdom",      author: "WildWes",      rating: 4.2, category: "science-nature", image: "images/sci3.jpg",     href: "" },

  { id: "sports-football-legends",          title: "Football Legends",    author: "GoalGetter",   rating: 4.4, category: "sports",         image: "images/sport1.jpg",   href: "" },
  { id: "sports-olympic-history",           title: "Olympic History",     author: "TrackTara",    rating: 4.1, category: "sports",         image: "images/sport2.jpeg",  href: "" },
  { id: "sports-cricket-trivia",            title: "Cricket Trivia",      author: "WicketWiz",    rating: 4.6, category: "sports",         image: "images/sport3.jpg",   href: "" },

  { id: "trivia-general-knowledge-mix",     title: "General Knowledge Mix", author: "QuizQueen",  rating: 4.0, category: "trivia",         image: "images/triv1.jpg",    href: "" },
  { id: "trivia-random-facts-challenge",    title: "Random Facts Challenge", author: "FactFinder", rating: 3.8, category: "trivia",        image: "images/triv2.jpg",    href: "" },
  { id: "trivia-brain-teasers",             title: "Brain Teasers",       author: "PuzzlePro",    rating: 4.3, category: "trivia",         image: "images/triv3.jpg",    href: "" }
];

/* ---------- Playable category quizzes (15 questions each) ---------- */
const CATEGORY_QUIZ_BANK = {

  "art-literature-classic-novels": {
    difficulty: "Medium", description: "Famous novels and the authors who wrote them.",
    questions: [
      ["Who wrote \"Pride and Prejudice\"?", "Jane Austen", ["Charlotte Brontë", "Emily Brontë", "Mary Shelley"]],
      ["Who wrote \"Moby-Dick\"?", "Herman Melville", ["Nathaniel Hawthorne", "Mark Twain", "Jack London"]],
      ["Who wrote \"Great Expectations\"?", "Charles Dickens", ["Thomas Hardy", "George Eliot", "William Thackeray"]],
      ["Who wrote the dystopian novel \"1984\"?", "George Orwell", ["Aldous Huxley", "Ray Bradbury", "H. G. Wells"]],
      ["Who wrote \"To Kill a Mockingbird\"?", "Harper Lee", ["John Steinbeck", "F. Scott Fitzgerald", "Truman Capote"]],
      ["Who wrote \"The Great Gatsby\"?", "F. Scott Fitzgerald", ["Ernest Hemingway", "William Faulkner", "John Steinbeck"]],
      ["Who wrote \"Wuthering Heights\"?", "Emily Brontë", ["Charlotte Brontë", "Jane Austen", "George Eliot"]],
      ["Who wrote \"Frankenstein\"?", "Mary Shelley", ["Bram Stoker", "Jane Austen", "Robert Louis Stevenson"]],
      ["Who wrote \"War and Peace\"?", "Leo Tolstoy", ["Fyodor Dostoevsky", "Anton Chekhov", "Ivan Turgenev"]],
      ["Who wrote \"Crime and Punishment\"?", "Fyodor Dostoevsky", ["Leo Tolstoy", "Nikolai Gogol", "Maxim Gorky"]],
      ["Who wrote \"Don Quixote\"?", "Miguel de Cervantes", ["Gabriel García Márquez", "Federico García Lorca", "Jorge Luis Borges"]],
      ["Which character does the heroine of \"Jane Eyre\" fall in love with?", "Mr. Rochester", ["Mr. Darcy", "Heathcliff", "Mr. Knightley"]],
      ["Who wrote \"Les Misérables\"?", "Victor Hugo", ["Alexandre Dumas", "Gustave Flaubert", "Émile Zola"]],
      ["Which river do Huck and Jim travel down in \"The Adventures of Huckleberry Finn\"?", "The Mississippi River", ["The Missouri River", "The Ohio River", "The Hudson River"]],
      ["Who wrote \"Dracula\"?", "Bram Stoker", ["Mary Shelley", "Oscar Wilde", "Arthur Conan Doyle"]]
    ]
  },

  "art-literature-famous-painters": {
    difficulty: "Medium", description: "Great painters and their best-known masterpieces.",
    questions: [
      ["Who painted the \"Mona Lisa\"?", "Leonardo da Vinci", ["Michelangelo", "Raphael", "Sandro Botticelli"]],
      ["Who painted \"The Starry Night\"?", "Vincent van Gogh", ["Claude Monet", "Paul Cézanne", "Edvard Munch"]],
      ["Which artist painted \"The Persistence of Memory\" with its melting clocks?", "Salvador Dalí", ["Pablo Picasso", "René Magritte", "Joan Miró"]],
      ["Who painted \"Guernica\"?", "Pablo Picasso", ["Salvador Dalí", "Francisco Goya", "Diego Velázquez"]],
      ["Who painted the ceiling of the Sistine Chapel?", "Michelangelo", ["Raphael", "Donatello", "Titian"]],
      ["Who painted \"The Scream\"?", "Edvard Munch", ["Gustav Klimt", "Egon Schiele", "Wassily Kandinsky"]],
      ["Who painted \"Girl with a Pearl Earring\"?", "Johannes Vermeer", ["Rembrandt", "Frans Hals", "Jan van Eyck"]],
      ["Whose painting \"Impression, Sunrise\" gave Impressionism its name?", "Claude Monet", ["Edgar Degas", "Pierre-Auguste Renoir", "Édouard Manet"]],
      ["Who painted \"The Kiss\" with its famous gold decoration?", "Gustav Klimt", ["Egon Schiele", "Henri Matisse", "Marc Chagall"]],
      ["Which country was the painter Frida Kahlo from?", "Mexico", ["Spain", "Argentina", "Colombia"]],
      ["Who painted \"The Night Watch\"?", "Rembrandt", ["Johannes Vermeer", "Peter Paul Rubens", "Anthony van Dyck"]],
      ["Pablo Picasso and Georges Braque founded which art movement?", "Cubism", ["Fauvism", "Surrealism", "Dadaism"]],
      ["Who painted \"The Birth of Venus\"?", "Sandro Botticelli", ["Titian", "Caravaggio", "Giotto"]],
      ["Which painter is famous for his pop-art soup cans and celebrity portraits?", "Andy Warhol", ["Roy Lichtenstein", "Jackson Pollock", "Keith Haring"]],
      ["Which Dutch painter is famous for cutting off part of his own ear?", "Vincent van Gogh", ["Rembrandt", "Piet Mondrian", "Johannes Vermeer"]]
    ]
  },

  "geography-capitals-of-the-world": {
    difficulty: "Easy", description: "Name the capital city of countries around the globe.",
    questions: [
      ["What is the capital of Australia?", "Canberra", ["Sydney", "Melbourne", "Perth"]],
      ["What is the capital of Canada?", "Ottawa", ["Toronto", "Vancouver", "Montreal"]],
      ["What is the capital of Brazil?", "Brasília", ["Rio de Janeiro", "São Paulo", "Salvador"]],
      ["What is the capital of Japan?", "Tokyo", ["Kyoto", "Osaka", "Nagoya"]],
      ["What is the capital of Egypt?", "Cairo", ["Alexandria", "Giza", "Luxor"]],
      ["What is the capital of Kenya?", "Nairobi", ["Mombasa", "Kampala", "Addis Ababa"]],
      ["What is the capital of Turkey?", "Ankara", ["Istanbul", "Izmir", "Bursa"]],
      ["What is the capital of Argentina?", "Buenos Aires", ["Santiago", "Montevideo", "Lima"]],
      ["What is the capital of Thailand?", "Bangkok", ["Phuket", "Hanoi", "Chiang Mai"]],
      ["What is the capital of New Zealand?", "Wellington", ["Auckland", "Christchurch", "Sydney"]],
      ["What is the capital of Nigeria?", "Abuja", ["Lagos", "Kano", "Accra"]],
      ["What is the capital of Pakistan?", "Islamabad", ["Karachi", "Lahore", "Kabul"]],
      ["What is the capital of India?", "New Delhi", ["Mumbai", "Kolkata", "Chandigarh"]],
      ["What is the capital of Peru?", "Lima", ["Bogotá", "Quito", "La Paz"]],
      ["What is the capital of Norway?", "Oslo", ["Stockholm", "Bergen", "Copenhagen"]]
    ]
  },

  "geography-rivers-and-mountains": {
    difficulty: "Medium", description: "Major rivers, mountain ranges and peaks of the world.",
    questions: [
      ["Which river is generally considered the longest in Africa?", "The Nile", ["The Congo", "The Niger", "The Zambezi"]],
      ["What is the highest mountain above sea level?", "Mount Everest", ["K2", "Kangchenjunga", "Mount Kilimanjaro"]],
      ["Which river flows through Baghdad?", "The Tigris", ["The Euphrates", "The Jordan", "The Indus"]],
      ["Mont Blanc is part of which mountain range?", "The Alps", ["The Pyrenees", "The Andes", "The Carpathians"]],
      ["Which river carries the largest volume of water in the world?", "The Amazon", ["The Nile", "The Yangtze", "The Mississippi"]],
      ["What is the highest mountain in Africa?", "Mount Kilimanjaro", ["Mount Kenya", "Mount Toubkal", "Mount Cameroon"]],
      ["Into which body of water does the Ganges flow?", "The Bay of Bengal", ["The Arabian Sea", "The Bay of Biscay", "The Persian Gulf"]],
      ["Which mountain range runs along the western edge of South America?", "The Andes", ["The Rockies", "The Alps", "The Himalayas"]],
      ["Which river flows through Paris?", "The Seine", ["The Loire", "The Rhône", "The Garonne"]],
      ["What is the highest peak in North America?", "Denali", ["Mount Whitney", "Mount Logan", "Pico de Orizaba"]],
      ["Which river is known as the \"Yellow River\" in China?", "The Huang He", ["The Yangtze", "The Mekong", "The Pearl River"]],
      ["Which mountains traditionally mark the boundary between Europe and Asia in Russia?", "The Ural Mountains", ["The Caucasus", "The Altai Mountains", "The Carpathians"]],
      ["Which river carved the Grand Canyon?", "The Colorado River", ["The Columbia River", "The Rio Grande", "The Missouri River"]],
      ["What is the second-highest mountain in the world?", "K2", ["Kangchenjunga", "Lhotse", "Makalu"]],
      ["Which river flows through Delhi?", "The Yamuna", ["The Ganges", "The Sutlej", "The Godavari"]]
    ]
  },

  "history-ancient-civilizations": {
    difficulty: "Medium", description: "Egypt, Greece, Rome, Mesopotamia and other early civilizations.",
    questions: [
      ["Which civilization built the pyramids at Giza?", "The ancient Egyptians", ["The Mesopotamians", "The Romans", "The Maya"]],
      ["What was the writing system of ancient Sumer called?", "Cuneiform", ["Hieroglyphs", "Linear B", "Runes"]],
      ["Mohenjo-daro was a major city of which civilization?", "The Indus Valley Civilization", ["The Egyptian Civilization", "The Minoan Civilization", "The Aztec Empire"]],
      ["Which ancient Greek city-state was famous for its military training?", "Sparta", ["Athens", "Corinth", "Delphi"]],
      ["Who was the first emperor of Rome?", "Augustus", ["Julius Caesar", "Nero", "Constantine"]],
      ["The Rosetta Stone helped scholars decipher which writing?", "Egyptian hieroglyphs", ["Cuneiform", "Mayan glyphs", "Sanskrit"]],
      ["Which civilization built Machu Picchu?", "The Inca", ["The Aztec", "The Maya", "The Olmec"]],
      ["In which ancient city did democracy first develop?", "Athens", ["Rome", "Sparta", "Babylon"]],
      ["What is Hammurabi of Babylon famous for?", "One of the earliest written law codes", ["Founding the city of Rome", "Building the Great Wall", "Starting the Olympic Games"]],
      ["Which of the Seven Wonders of the Ancient World stood at Alexandria?", "The Lighthouse (Pharos)", ["The Hanging Gardens", "The Colossus of Rhodes", "The Mausoleum at Halicarnassus"]],
      ["Where was the Maya civilization based?", "Mesoamerica (Mexico and Central America)", ["The Andes mountains", "The Indus Valley", "The Nile Delta"]],
      ["Which Carthaginian general famously crossed the Alps with elephants?", "Hannibal", ["Scipio Africanus", "Pompey", "Xerxes"]],
      ["Which empire was founded by Cyrus the Great?", "The Persian (Achaemenid) Empire", ["The Roman Empire", "The Mongol Empire", "The Ottoman Empire"]],
      ["Ancient Egyptians made a paper-like writing material from which plant?", "Papyrus", ["Bamboo", "Cotton", "Flax seed"]],
      ["Which ruler unified China in 221 BCE and became its first emperor?", "Qin Shi Huang", ["Kublai Khan", "Han Wudi", "Sun Yat-sen"]]
    ]
  },

  "history-world-war-ii-facts": {
    difficulty: "Medium", description: "Key events, leaders and turning points of World War II.",
    questions: [
      ["Germany's invasion of which country in 1939 started World War II in Europe?", "Poland", ["France", "Czechoslovakia", "Austria"]],
      ["Who was the leader of Nazi Germany during World War II?", "Adolf Hitler", ["Benito Mussolini", "Otto von Bismarck", "Kaiser Wilhelm II"]],
      ["Which attack in December 1941 brought the United States into the war?", "The attack on Pearl Harbor", ["The Battle of Midway", "The invasion of Iwo Jima", "The Battle of Guadalcanal"]],
      ["In which region did the D-Day landings of 1944 take place?", "Normandy, France", ["Dunkirk, France", "Calais, France", "Marseille, France"]],
      ["Who was Britain's Prime Minister for most of World War II?", "Winston Churchill", ["Neville Chamberlain", "Clement Attlee", "Anthony Eden"]],
      ["Which two Japanese cities were hit by atomic bombs in 1945?", "Hiroshima and Nagasaki", ["Tokyo and Osaka", "Kyoto and Kobe", "Nagoya and Yokohama"]],
      ["In which year did World War II end?", "1945", ["1943", "1944", "1946"]],
      ["Germany, Italy and which other country formed the main Axis powers?", "Japan", ["The Soviet Union", "Spain", "Turkey"]],
      ["What was the code name for Germany's 1941 invasion of the Soviet Union?", "Operation Barbarossa", ["Operation Overlord", "Operation Sea Lion", "Operation Torch"]],
      ["In which city did Anne Frank and her family hide?", "Amsterdam", ["Berlin", "Warsaw", "Paris"]],
      ["Which forces mainly fought the 1940 Battle of Britain?", "The Royal Air Force and the German Luftwaffe", ["The British and German navies", "The US and Japanese air forces", "The Soviet and German armies"]],
      ["Churchill, Roosevelt and which other leader met at the Yalta Conference in 1945?", "Joseph Stalin", ["Charles de Gaulle", "Chiang Kai-shek", "Neville Chamberlain"]],
      ["Which city was the scene of a major turning-point battle in 1942-43 on the Eastern Front?", "Stalingrad", ["Warsaw", "Berlin", "Kharkiv"]],
      ["Which German cipher machine was famously decoded at Bletchley Park?", "Enigma", ["Typex", "Colossus", "Sigaba"]],
      ["Who was President of the United States when World War II began in 1939?", "Franklin D. Roosevelt", ["Harry Truman", "Herbert Hoover", "Woodrow Wilson"]]
    ]
  },

  "languages-common-french-phrases": {
    difficulty: "Easy", description: "Everyday French greetings and phrases for travellers.",
    questions: [
      ["What does \"Bonjour\" mean?", "Hello / Good day", ["Goodbye", "Thank you", "Please"]],
      ["What does \"Merci\" mean?", "Thank you", ["Please", "Sorry", "Excuse me"]],
      ["What does \"S'il vous plaît\" mean?", "Please", ["Thank you", "You're welcome", "Goodbye"]],
      ["What does \"Au revoir\" mean?", "Goodbye", ["Good morning", "Welcome", "Thank you"]],
      ["What does \"Comment allez-vous ?\" mean?", "How are you?", ["Where are you?", "What is your name?", "How old are you?"]],
      ["What does \"Je m'appelle...\" mean?", "My name is...", ["I am hungry", "I live in...", "I like..."]],
      ["What does \"Excusez-moi\" mean?", "Excuse me", ["Thank you very much", "Good night", "I don't know"]],
      ["What does \"Bonsoir\" mean?", "Good evening", ["Good morning", "Good night", "Goodbye"]],
      ["What does \"De rien\" mean?", "You're welcome", ["I'm sorry", "See you soon", "I don't understand"]],
      ["What does \"Je ne comprends pas\" mean?", "I don't understand", ["I don't know", "I don't like it", "I'm not hungry"]],
      ["What does \"Où est la gare ?\" mean?", "Where is the train station?", ["Where is the bakery?", "What time is it?", "Where is the airport?"]],
      ["What does \"L'addition, s'il vous plaît\" mean?", "The bill, please", ["The menu, please", "A table for two, please", "Water, please"]],
      ["What does \"Bonne nuit\" mean?", "Good night", ["Good evening", "Good luck", "Good morning"]],
      ["What does \"À bientôt\" mean?", "See you soon", ["See you yesterday", "Good evening", "Be careful"]],
      ["What does \"Parlez-vous anglais ?\" mean?", "Do you speak English?", ["Do you speak French?", "Where is England?", "Are you English?"]]
    ]
  },

  "languages-spanish-vocabulary": {
    difficulty: "Easy", description: "Essential Spanish words for beginners.",
    questions: [
      ["What does \"gracias\" mean?", "Thank you", ["Please", "Hello", "Sorry"]],
      ["What does \"hola\" mean?", "Hello", ["Goodbye", "Please", "Yes"]],
      ["What does \"agua\" mean?", "Water", ["Bread", "Milk", "Wine"]],
      ["What does \"casa\" mean?", "House", ["Car", "Cat", "Street"]],
      ["What does \"gato\" mean?", "Cat", ["Dog", "Bird", "Horse"]],
      ["What does \"perro\" mean?", "Dog", ["Cat", "Wolf", "Fish"]],
      ["What does \"rojo\" mean?", "Red", ["Blue", "Green", "Yellow"]],
      ["What number is \"cinco\"?", "Five", ["Four", "Six", "Seven"]],
      ["What does \"buenos días\" mean?", "Good morning", ["Good night", "Good evening", "Goodbye"]],
      ["What does \"libro\" mean?", "Book", ["Library", "Pen", "Paper"]],
      ["What does \"amigo\" mean?", "Friend", ["Enemy", "Brother", "Neighbour"]],
      ["What does \"leche\" mean?", "Milk", ["Cheese", "Butter", "Juice"]],
      ["What does \"por favor\" mean?", "Please", ["Sorry", "Thanks", "Maybe"]],
      ["What does \"adiós\" mean?", "Goodbye", ["Hello", "Welcome", "Thanks"]],
      ["What does \"manzana\" mean?", "Apple", ["Orange", "Banana", "Pear"]]
    ]
  },

  "science-nature-human-body-basics": {
    difficulty: "Easy", description: "Organs, bones, blood and how the human body works.",
    questions: [
      ["What is the largest organ of the human body?", "The skin", ["The liver", "The heart", "The lungs"]],
      ["How many bones does an adult human body have?", "206", ["212", "300", "180"]],
      ["Which organ pumps blood around the body?", "The heart", ["The lungs", "The kidneys", "The liver"]],
      ["Which gas from the air does the body need to breathe in?", "Oxygen", ["Carbon dioxide", "Nitrogen", "Hydrogen"]],
      ["Which blood cells carry oxygen?", "Red blood cells", ["White blood cells", "Platelets", "Plasma cells"]],
      ["Which part of the brain controls balance and coordination?", "The cerebellum", ["The cerebrum", "The hippocampus", "The pituitary gland"]],
      ["Which vitamin does the skin make when exposed to sunlight?", "Vitamin D", ["Vitamin C", "Vitamin A", "Vitamin B12"]],
      ["Where does most nutrient absorption take place?", "The small intestine", ["The stomach", "The large intestine", "The oesophagus"]],
      ["Which is the longest bone in the human body?", "The femur", ["The tibia", "The humerus", "The fibula"]],
      ["Which organs filter the blood and produce urine?", "The kidneys", ["The liver", "The lungs", "The spleen"]],
      ["How many chambers does the human heart have?", "Four", ["Two", "Three", "Five"]],
      ["What is the medical name for the windpipe?", "The trachea", ["The oesophagus", "The larynx", "The bronchus"]],
      ["Which coloured part of the eye controls the size of the pupil?", "The iris", ["The cornea", "The retina", "The lens"]],
      ["Which blood type is known as the universal red-cell donor?", "O negative", ["AB positive", "A positive", "B negative"]],
      ["What is the normal human body temperature, approximately?", "37 °C", ["30 °C", "42 °C", "25 °C"]]
    ]
  },

  "science-nature-space-and-astronomy": {
    difficulty: "Medium", description: "Planets, stars, galaxies and space exploration.",
    questions: [
      ["What is the closest star to Earth?", "The Sun", ["Proxima Centauri", "Sirius", "Betelgeuse"]],
      ["Which is the largest planet in our solar system?", "Jupiter", ["Saturn", "Neptune", "Uranus"]],
      ["Which planet is known as the Red Planet?", "Mars", ["Venus", "Mercury", "Jupiter"]],
      ["Who was the first person to walk on the Moon?", "Neil Armstrong", ["Buzz Aldrin", "Yuri Gagarin", "John Glenn"]],
      ["What is the name of the galaxy that contains our solar system?", "The Milky Way", ["Andromeda", "Triangulum", "The Whirlpool Galaxy"]],
      ["Which planet is best known for its prominent rings?", "Saturn", ["Mars", "Venus", "Mercury"]],
      ["How many planets are in our solar system?", "8", ["7", "9", "10"]],
      ["Who was the first human to travel into space?", "Yuri Gagarin", ["Alan Shepard", "Neil Armstrong", "John Glenn"]],
      ["Which planet is the hottest in our solar system?", "Venus", ["Mercury", "Mars", "Jupiter"]],
      ["About how long does sunlight take to reach Earth?", "About 8 minutes", ["About 8 seconds", "About 8 hours", "About 8 days"]],
      ["Which planet is farthest from the Sun?", "Neptune", ["Uranus", "Saturn", "Jupiter"]],
      ["Which country's Chandrayaan-3 mission landed near the Moon's south pole in 2023?", "India", ["China", "Japan", "Israel"]],
      ["What force keeps the planets in orbit around the Sun?", "Gravity", ["Magnetism", "Friction", "Static electricity"]],
      ["What is the largest moon of Saturn?", "Titan", ["Europa", "Ganymede", "Io"]],
      ["A light-year is a unit of what?", "Distance", ["Time", "Speed", "Brightness"]]
    ]
  },

  "sports-football-legends": {
    difficulty: "Medium", description: "Great players, clubs and moments from world football.",
    questions: [
      ["Which country won the 2022 FIFA World Cup?", "Argentina", ["France", "Brazil", "Croatia"]],
      ["Pelé represented which national team?", "Brazil", ["Argentina", "Portugal", "Uruguay"]],
      ["Which club did Lionel Messi play for before joining Paris Saint-Germain in 2021?", "FC Barcelona", ["Real Madrid", "Manchester City", "Inter Miami"]],
      ["Which country does Cristiano Ronaldo play international football for?", "Portugal", ["Spain", "Brazil", "Italy"]],
      ["Who scored the famous \"Hand of God\" goal in the 1986 World Cup?", "Diego Maradona", ["Pelé", "Zinedine Zidane", "Johan Cruyff"]],
      ["Which player has won the most Ballon d'Or awards?", "Lionel Messi", ["Cristiano Ronaldo", "Michel Platini", "Johan Cruyff"]],
      ["Zinedine Zidane led which national team to the 1998 World Cup title?", "France", ["Italy", "Brazil", "Germany"]],
      ["How many times has Brazil won the men's FIFA World Cup?", "5", ["4", "3", "6"]],
      ["Which country hosted the 2018 FIFA World Cup?", "Russia", ["Qatar", "Brazil", "Germany"]],
      ["Which Dutch legend is linked with \"Total Football\" and the number 14 shirt?", "Johan Cruyff", ["Marco van Basten", "Ruud Gullit", "Dennis Bergkamp"]],
      ["Which English club is nicknamed the \"Red Devils\"?", "Manchester United", ["Liverpool", "Arsenal", "Manchester City"]],
      ["How many players does each team have on the pitch in a football match?", "11", ["10", "9", "12"]],
      ["Goalkeeper Gianluigi Buffon spent most of his career at which Italian club?", "Juventus", ["AC Milan", "Inter Milan", "Roma"]],
      ["Who won the Golden Boot at the 2022 World Cup?", "Kylian Mbappé", ["Lionel Messi", "Olivier Giroud", "Julián Álvarez"]],
      ["Which Indian striker is the country's all-time leading international goalscorer?", "Sunil Chhetri", ["Bhaichung Bhutia", "I. M. Vijayan", "Sandesh Jhingan"]]
    ]
  },

  "sports-cricket-trivia": {
    difficulty: "Medium", description: "Rules, records and heroes of cricket.",
    questions: [
      ["How many players does a cricket team field at one time?", "11", ["9", "10", "12"]],
      ["How many legal balls are in a standard over?", "6", ["5", "8", "10"]],
      ["Which team won the first Cricket World Cup in 1975?", "West Indies", ["Australia", "England", "India"]],
      ["Who captained India to the 1983 Cricket World Cup title?", "Kapil Dev", ["Sunil Gavaskar", "MS Dhoni", "Sourav Ganguly"]],
      ["Which batter is nicknamed the \"Master Blaster\"?", "Sachin Tendulkar", ["Virat Kohli", "Rahul Dravid", "Brian Lara"]],
      ["How many runs are scored when the ball crosses the boundary without bouncing?", "6", ["4", "5", "8"]],
      ["What is it called when a bowler takes three wickets with three consecutive balls?", "A hat-trick", ["A triple wicket", "A maiden over", "A golden duck"]],
      ["Which country won the 2011 Cricket World Cup?", "India", ["Sri Lanka", "Pakistan", "Australia"]],
      ["How many overs does each team bat in a Twenty20 match?", "20", ["10", "25", "50"]],
      ["Who scored the first double century in men's One Day Internationals?", "Sachin Tendulkar", ["Virender Sehwag", "Rohit Sharma", "MS Dhoni"]],
      ["The Ashes series is played between England and which country?", "Australia", ["India", "South Africa", "New Zealand"]],
      ["Which London ground is known as the \"Home of Cricket\"?", "Lord's", ["The Oval", "Old Trafford", "Headingley"]],
      ["What is it called when a batter is dismissed without scoring?", "A duck", ["A goose", "A maiden", "A blank"]],
      ["Who captained India to the first T20 World Cup title in 2007?", "MS Dhoni", ["Virat Kohli", "Rahul Dravid", "Sourav Ganguly"]],
      ["Which bowler took the most wickets in Test cricket (800)?", "Muttiah Muralitharan", ["Shane Warne", "Anil Kumble", "James Anderson"]]
    ]
  }
};

/* ---------- Turn every question bank into a playable quiz ----------
   Playable category quizzes are added to QUIZZES (section "category"), so the
   existing quiz player in index.html (#/quiz/<id>) runs them with the 5 / 10 / 15
   selector, the 5 s / 10 s timer, scoring, results and star ratings.
   Section "category" keeps them OUT of the home page grids; they appear on their
   category page and on the Explore page. */
Object.entries(CATEGORY_QUIZ_BANK).forEach(([id, bank]) => {
  const meta = CATEGORY_QUIZZES.find((q) => q.id === id);
  if (!meta || !Array.isArray(bank.questions) || bank.questions.length < 15) return; // not ready -> stays Coming Soon
  QUIZZES.push({
    id: meta.id, title: meta.title, author: meta.author, rating: meta.rating,
    category: meta.category, image: meta.image, publishedAt: "2026-08-01", section: "category",
    difficulty: bank.difficulty || "", description: bank.description || "",
    questions: bank.questions.map(([q, right, wrong]) => {
      const options = [...wrong];
      options.splice(Math.floor(Math.random() * (options.length + 1)), 0, right);
      return { q, options, answer: options.indexOf(right) };
    })
  });
});
