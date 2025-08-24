  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar-manu a");
    const currentPage = window.location.pathname.split("/").pop(); // e.g. "Quizzes.html"

    links.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  });

const QUESTION_BANK = {
  painting: {
    title: "Painting Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Who painted the Mona Lisa?",
        options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Vincent van Gogh"],
        correctAnswer: "Leonardo da Vinci"
      },
      {
        q: "The Starry Night is a famous work by which painter?",
        options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Edvard Munch"],
        correctAnswer: "Vincent van Gogh"
      },
      {
        q: "Which Spanish painter is known for the painting 'Guernica'?",
        options: ["Salvador Dalí", "Pablo Picasso", "Diego Velázquez", "Francisco Goya"],
        correctAnswer: "Pablo Picasso"
      },
      {
        q: "What style of painting is Claude Monet famous for?",
        options: ["Cubism", "Impressionism", "Surrealism", "Baroque"],
        correctAnswer: "Impressionism"
      },
      {
        q: "Which artist is known for melting clocks in his paintings?",
        options: ["Salvador Dalí", "Paul Cézanne", "Edvard Munch", "Andy Warhol"],
        correctAnswer: "Salvador Dalí"
      }
    ]
  },

  music: {
    title: "Music Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Who is known as the 'King of Pop'?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Freddie Mercury"],
        correctAnswer: "Michael Jackson"
      },
      {
        q: "Which instrument has black and white keys?",
        options: ["Guitar", "Drums", "Piano", "Violin"],
        correctAnswer: "Piano"
      },
      {
        q: "What is the highest female singing voice?",
        options: ["Soprano", "Alto", "Tenor", "Bass"],
        correctAnswer: "Soprano"
      },
      {
        q: "Which band sang 'Hey Jude'?",
        options: ["The Rolling Stones", "The Beatles", "Pink Floyd", "Queen"],
        correctAnswer: "The Beatles"
      },
      {
        q: "In music, how many notes are there in a standard major scale?",
        options: ["5", "6", "7", "8"],
        correctAnswer: "7"
      }
    ]
  },
  theatre:{
    title: "Theatre Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Who is considered the greatest playwright in the English language?",
        options: ["William Shakespeare", "George Bernard Shaw", "Christopher Marlowe", "Oscar Wilde"],
        correctAnswer: "William Shakespeare"
      },
      {
        q: "What is the term for the part of a theatre where the audience sits?",
        options: ["Stage", "Orchestra", "Auditorium", "Backstage"],
        correctAnswer: "Auditorium"
      },
      {
        q: "Which ancient civilization is credited with the origins of Western theatre?",
        options: ["Roman", "Egyptian", "Greek", "Persian"],
        correctAnswer: "Greek"
      },
      {
        q: "In theatre, what does the term 'improvisation' mean?",
        options: ["Performing without a script", "Acting in silence", "Dancing on stage", "Following strict lines"],
        correctAnswer: "Performing without a script"
      },
      {
        q: "Which famous playwright wrote 'Waiting for Godot'?",
        options: ["Arthur Miller", "Tennessee Williams", "Samuel Beckett", "Harold Pinter"],
        correctAnswer: "Samuel Beckett"
      }
    ]
  },

   html: {
    title: "HTML Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "Home Tool Markup Language",
          "Hyperlinks and Text Markup Language",
          "High Text Machine Language"
        ],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        q: "Which HTML tag is used to define the largest heading?",
        options: ["<head>", "<h6>", "<h1>", "<heading>"],
        correctAnswer: "<h1>"
      },
      {
        q: "Which attribute is used to provide an image source in HTML?",
        options: ["alt", "src", "href", "link"],
        correctAnswer: "src"
      },
      {
        q: "Which tag is used to create a hyperlink in HTML?",
        options: ["<a>", "<link>", "<href>", "<url>"],
        correctAnswer: "<a>"
      },
      {
        q: "Which HTML element is used to insert a line break?",
        options: ["<break>", "<br>", "<lb>", "<newline>"],
        correctAnswer: "<br>"
      }
    ]
  },

  css: {
    title: "CSS Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What does CSS stand for?",
        options: [
          "Creative Style Sheets",
          "Colorful Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets"
        ],
        correctAnswer: "Cascading Style Sheets"
      },
      {
        q: "Which property is used to change the background color in CSS?",
        options: ["color", "bgcolor", "background-color", "background"],
        correctAnswer: "background-color"
      },
      {
        q: "Which CSS property is used to change the text size?",
        options: ["font-size", "text-style", "text-size", "font-weight"],
        correctAnswer: "font-size"
      },
      {
        q: "How do you make text bold in CSS?",
        options: ["font-weight: bold;", "style: bold;", "text-bold: true;", "font: bold;"],
        correctAnswer: "font-weight: bold;"
      },
      {
        q: "Which property is used to center text horizontally?",
        options: ["align", "text-align", "vertical-align", "justify"],
        correctAnswer: "text-align"
      }
    ]
  },

  javascript: {
    title: "JavaScript Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        correctAnswer: "Netscape"
      },
      {
        q: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "<!-- -->"],
        correctAnswer: "//"
      },
      {
        q: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "All of the above"],
        correctAnswer: "All of the above"
      },
      {
        q: "Which function is used to print something in the console?",
        options: ["print()", "log()", "console.log()", "echo()"],
        correctAnswer: "console.log()"
      },
      {
        q: "Which data type is NOT supported in JavaScript?",
        options: ["Undefined", "Boolean", "Integer", "Object"],
        correctAnswer: "Integer"
      }
    ]
  },

  python: {
    title: "Python Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Who developed Python programming language?",
        options: ["James Gosling", "Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup"],
        correctAnswer: "Guido van Rossum"
      },
      {
        q: "What is the correct file extension for Python files?",
        options: [".py", ".pt", ".pyt", ".python"],
        correctAnswer: ".py"
      },
      {
        q: "Which keyword is used to define a function in Python?",
        options: ["func", "function", "def", "define"],
        correctAnswer: "def"
      },
      {
        q: "Which of the following is NOT a Python data type?",
        options: ["List", "Dictionary", "Tuple", "Array"],
        correctAnswer: "Array"
      },
      {
        q: "Which function is used to get input from the user in Python?",
        options: ["scanf()", "cin", "input()", "read()"],
        correctAnswer: "input()"
      }
    ]
  },

    physics: {
    title: "Physics Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the unit of force?",
        options: ["Newton", "Joule", "Watt", "Pascal"],
        correctAnswer: "Newton"
      },
      {
        q: "What is the speed of light in vacuum?",
        options: ["3 × 10^8 m/s", "1.5 × 10^8 m/s", "3 × 10^6 m/s", "9.8 m/s²"],
        correctAnswer: "3 × 10^8 m/s"
      },
      {
        q: "Which law explains the relationship between current, voltage, and resistance?",
        options: ["Newton’s Law", "Ohm’s Law", "Faraday’s Law", "Hooke’s Law"],
        correctAnswer: "Ohm’s Law"
      },
      {
        q: "Which physical quantity is measured in Joules?",
        options: ["Force", "Energy", "Power", "Pressure"],
        correctAnswer: "Energy"
      },
      {
        q: "What causes tides on Earth?",
        options: ["Sunlight", "Moon’s gravity", "Earth’s rotation", "Winds"],
        correctAnswer: "Moon’s gravity"
      }
    ]
  },

  chemistry: {
    title: "Chemistry Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the chemical symbol of Gold?",
        options: ["Ag", "Au", "Gd", "Go"],
        correctAnswer: "Au"
      },
      {
        q: "pH value less than 7 indicates?",
        options: ["Neutral", "Basic", "Acidic", "Salty"],
        correctAnswer: "Acidic"
      },
      {
        q: "Which gas is released during photosynthesis?",
        options: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        correctAnswer: "Oxygen"
      },
      {
        q: "Which element is used in pencils?",
        options: ["Graphite", "Carbon", "Lead", "Silicon"],
        correctAnswer: "Graphite"
      },
      {
        q: "H2O is the chemical formula of?",
        options: ["Oxygen", "Hydrogen", "Water", "Hydrogen Peroxide"],
        correctAnswer: "Water"
      }
    ]
  },

    biology: {
    title: "Biology Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Chloroplast"],
        correctAnswer: "Mitochondria"
      },
      {
        q: "Which vitamin is produced when the skin is exposed to sunlight?",
        options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        correctAnswer: "Vitamin D"
      },
      {
        q: "What is the basic unit of life?",
        options: ["Atom", "Tissue", "Cell", "Organ"],
        correctAnswer: "Cell"
      },
      {
        q: "Which organ purifies blood in the human body?",
        options: ["Heart", "Kidney", "Lungs", "Liver"],
        correctAnswer: "Kidney"
      },
      {
        q: "Which pigment gives plants their green color?",
        options: ["Carotene", "Xanthophyll", "Chlorophyll", "Melanin"],
        correctAnswer: "Chlorophyll"
      }
    ]
  },

  currentAffairs: {
    title: "Current Affairs Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Which country hosted the 2024 Summer Olympics?",
        options: ["Japan", "France", "USA", "Germany"],
        correctAnswer: "France"
      },
      {
        q: "Who is the current Secretary-General of the United Nations (2025)?",
        options: ["Ban Ki-moon", "Kofi Annan", "Antonio Guterres", "Boutros Boutros-Ghali"],
        correctAnswer: "Antonio Guterres"
      },
      {
        q: "Which country recently launched the 'Digital Rupee' as a central bank digital currency?",
        options: ["India", "China", "USA", "UK"],
        correctAnswer: "India"
      },
      {
        q: "COP28 climate summit was held in which country?",
        options: ["UAE", "UK", "Brazil", "Qatar"],
        correctAnswer: "UAE"
      },
      {
        q: "Which company became the first to cross a $3 trillion market value?",
        options: ["Apple", "Microsoft", "Google", "Amazon"],
        correctAnswer: "Apple"
      }
    ]
  },

  geography: {
    title: "Geography Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the largest desert in the world?",
        options: ["Sahara", "Gobi", "Antarctic Desert", "Kalahari"],
        correctAnswer: "Antarctic Desert"
      },
      {
        q: "Which is the longest river in the world?",
        options: ["Nile", "Amazon", "Yangtze", "Mississippi"],
        correctAnswer: "Nile"
      },
      {
        q: "Mount Everest is located in which mountain range?",
        options: ["Andes", "Alps", "Himalayas", "Rockies"],
        correctAnswer: "Himalayas"
      },
      {
        q: "Which country has the most natural lakes?",
        options: ["Canada", "Russia", "USA", "India"],
        correctAnswer: "Canada"
      },
      {
        q: "Which continent is known as the ‘Dark Continent’?",
        options: ["South America", "Africa", "Australia", "Asia"],
        correctAnswer: "Africa"
      }
    ]
  },

   politics: {
    title: "Politics Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Who is known as the 'Father of the Nation' in India?",
        options: ["Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar", "Subhash Chandra Bose"],
        correctAnswer: "Mahatma Gandhi"
      },
      {
        q: "What type of government does the USA have?",
        options: ["Monarchy", "Federal Republic", "Dictatorship", "Confederation"],
        correctAnswer: "Federal Republic"
      },
      {
        q: "Which political ideology advocates for state ownership of resources?",
        options: ["Capitalism", "Communism", "Democracy", "Feudalism"],
        correctAnswer: "Communism"
      },
      {
        q: "Which country has the world’s oldest written constitution still in use?",
        options: ["UK", "USA", "France", "India"],
        correctAnswer: "USA"
      },
      {
        q: "Which global organization promotes peace and security among nations?",
        options: ["UN", "NATO", "EU", "ASEAN"],
        correctAnswer: "UN"
      }
    ]
  },

  algebra: {
    title: "Algebra Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the value of x in the equation 2x + 6 = 14?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4"
      },
      {
        q: "Simplify: (x + 3)(x + 2).",
        options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 3x + 2", "x² + 2x + 3"],
        correctAnswer: "x² + 5x + 6"
      },
      {
        q: "If x² = 49, what are the values of x?",
        options: ["7 only", "-7 only", "7 and -7", "0"],
        correctAnswer: "7 and -7"
      },
      {
        q: "Solve: 5x - 10 = 0",
        options: ["1", "2", "3", "4"],
        correctAnswer: "2"
      },
      {
        q: "Which of these is a linear equation?",
        options: ["y = 2x + 3", "x² + y² = 25", "x³ + 2 = 0", "xy = 5"],
        correctAnswer: "y = 2x + 3"
      }
    ]
  },

  geometry: {
    title: "Geometry Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the sum of the interior angles of a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        correctAnswer: "180°"
      },
      {
        q: "A square has a side length of 4 cm. What is its area?",
        options: ["8 cm²", "12 cm²", "16 cm²", "20 cm²"],
        correctAnswer: "16 cm²"
      },
      {
        q: "What is the name of a triangle with all sides equal?",
        options: ["Scalene", "Isosceles", "Equilateral", "Right-angled"],
        correctAnswer: "Equilateral"
      },
      {
        q: "The radius of a circle is 7 cm. What is its diameter?",
        options: ["7 cm", "14 cm", "21 cm", "28 cm"],
        correctAnswer: "14 cm"
      },
      {
        q: "What is the Pythagoras theorem formula?",
        options: ["a² + b² = c²", "a + b = c", "a² - b² = c²", "ab = c"],
        correctAnswer: "a² + b² = c²"
      }
    ]
  },

  statistics: {
    title: "Statistics Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the average of 2, 4, 6, 8, 10?",
        options: ["4", "5", "6", "7"],
        correctAnswer: "6"
      },
      {
        q: "Which measure represents the middle value in a dataset?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Median"
      },
      {
        q: "In a dataset, the most frequently occurring value is called?",
        options: ["Mean", "Median", "Mode", "Range"],
        correctAnswer: "Mode"
      },
      {
        q: "What is the probability of getting 'heads' in a single coin toss?",
        options: ["0", "0.25", "0.5", "1"],
        correctAnswer: "0.5"
      },
      {
        q: "What is the range of the numbers 3, 7, 10, 15?",
        options: ["7", "10", "12", "15"],
        correctAnswer: "12"
      }
    ]
  },

  grammar: {
    title: "Grammar Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "Choose the correct sentence:",
        options: ["She go to school.", "She goes to school.", "She going to school.", "She gone to school."],
        correctAnswer: "She goes to school."
      },
      {
        q: "Which is a proper noun?",
        options: ["city", "book", "London", "river"],
        correctAnswer: "London"
      },
      {
        q: "Fill in the blank: He ___ playing football.",
        options: ["is", "are", "was", "be"],
        correctAnswer: "is"
      },
      {
        q: "Which sentence is in past tense?",
        options: ["I eat an apple.", "I am eating an apple.", "I will eat an apple.", "I ate an apple."],
        correctAnswer: "I ate an apple."
      }
    ]
  },

  vocabulary: {
    title: "Vocabulary Quiz",
    timePerQuestion: 15,
    questions: [
      {
        q: "What is the synonym of 'happy'?",
        options: ["sad", "joyful", "angry", "upset"],
        correctAnswer: "joyful"
      },
      {
        q: "Choose the antonym of 'fast':",
        options: ["quick", "rapid", "slow", "speedy"],
        correctAnswer: "slow"
      },
      {
        q: "Which word means 'a place where books are kept'?",
        options: ["library", "school", "office", "market"],
        correctAnswer: "library"
      },
      {
        q: "Pick the correct spelling:",
        options: ["enviroment", "environment", "envirnment", "enviorment"],
        correctAnswer: "environment"
      }
    ]
  },

    comprehension: {
    title: "Comprehension Quiz",
    timePerQuestion: 20,
    questions: [
      {
        q: "Passage: 'Ali loves reading books every night.' — What does Ali love?",
        options: ["Playing", "Reading books", "Sleeping", "Writing"],
        correctAnswer: "Reading books"
      },
      {
        q: "Passage: 'The sun rises in the east and sets in the west.' — Where does the sun rise?",
        options: ["North", "South", "East", "West"],
        correctAnswer: "East"
      },
      {
        q: "Passage: 'Sara bought 3 apples and 2 bananas.' — How many fruits did she buy?",
        options: ["3", "5", "2", "4"],
        correctAnswer: "5"
      },
      {
        q: "Passage: 'The cat is under the table.' — Where is the cat?",
        options: ["On the table", "Beside the table", "Under the table", "Behind the table"],
        correctAnswer: "Under the table"
      }
    ]
  },

  worldHistory: {
    title: "World History Quiz",
    timePerQuestion: 20,
    questions: [
      {
        q: "Who was the first President of the United States?",
        options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswer: "George Washington"
      },
      {
        q: "Which war ended in 1945?",
        options: ["World War I", "World War II", "Cold War", "American Civil War"],
        correctAnswer: "World War II"
      },
      {
        q: "The Great Wall of China was built to protect against which group?",
        options: ["Mongols", "Romans", "Greeks", "Persians"],
        correctAnswer: "Mongols"
      },
      {
        q: "Which empire was ruled by Julius Caesar?",
        options: ["Greek Empire", "Roman Empire", "Persian Empire", "Ottoman Empire"],
        correctAnswer: "Roman Empire"
      },
      {
        q: "Which country was divided into East and West during the Cold War?",
        options: ["Germany", "France", "Italy", "Spain"],
        correctAnswer: "Germany"
      }
    ]
  },

   ancientHistory: {
    title: "Ancient History Quiz",
    timePerQuestion: 20,
    questions: [
      {
        q: "Which civilization built the pyramids?",
        options: ["Greek", "Egyptian", "Roman", "Mayan"],
        correctAnswer: "Egyptian"
      },
      {
        q: "Who was the famous king of Macedonia who conquered Persia?",
        options: ["Alexander the Great", "Cyrus the Great", "Darius I", "Augustus"],
        correctAnswer: "Alexander the Great"
      },
      {
        q: "The city of Athens is associated with which civilization?",
        options: ["Roman", "Greek", "Babylonian", "Indian"],
        correctAnswer: "Greek"
      },
      {
        q: "What writing system was used in ancient Mesopotamia?",
        options: ["Hieroglyphics", "Cuneiform", "Sanskrit", "Latin"],
        correctAnswer: "Cuneiform"
      },
      {
        q: "Which wonder of the world was located in Babylon?",
        options: ["Colossus of Rhodes", "Hanging Gardens", "Great Pyramid", "Temple of Artemis"],
        correctAnswer: "Hanging Gardens"
      }
    ]
  },

   modernHistory: {
    title: "Modern History Quiz",
    timePerQuestion: 20,
    questions: [
      {
        q: "Who was the leader of Nazi Germany during World War II?",
        options: ["Adolf Hitler", "Joseph Stalin", "Winston Churchill", "Benito Mussolini"],
        correctAnswer: "Adolf Hitler"
      },
      {
        q: "In which year did the French Revolution begin?",
        options: ["1776", "1789", "1815", "1848"],
        correctAnswer: "1789"
      },
      {
        q: "Which country first used the atomic bomb in war?",
        options: ["Germany", "Japan", "USA", "Russia"],
        correctAnswer: "USA"
      },
      {
        q: "Who was the first man to step on the moon?",
        options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
        correctAnswer: "Neil Armstrong"
      },
      {
        q: "When did the Berlin Wall fall?",
        options: ["1989", "1975", "1991", "1969"],
        correctAnswer: "1989"
      }
    ]
  },

  cricket: {
    title: "Cricket Quiz",
    timePerQuestion: 20,
    questions: [
      {
        q: "Who is known as the 'God of Cricket'?",
        options: ["Virat Kohli", "Ricky Ponting", "Sachin Tendulkar", "Brian Lara"],
        correctAnswer: "Sachin Tendulkar"
      },
      {
        q: "Which country won the first ICC Cricket World Cup in 1975?",
        options: ["India", "Australia", "West Indies", "England"],
        correctAnswer: "West Indies"
      },
      {
        q: "How many players are there in a cricket team?",
        options: ["10", "11", "12", "15"],
        correctAnswer: "11"
      },
      {
        q: "Which format of cricket is the shortest?",
        options: ["ODI", "Test", "T20", "First-class"],
        correctAnswer: "T20"
      },
      {
        q: "Who holds the record for the highest individual score in an ODI match?",
        options: ["Rohit Sharma", "Chris Gayle", "Martin Guptill", "Virender Sehwag"],
        correctAnswer: "Rohit Sharma"
      }
    ]
  },

  football: {
    title: "Football Quiz",
    timePerQuestion: 20,
    questions: [
      {
        q: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Brazil", "Italy", "Argentina"],
        correctAnswer: "Brazil"
      },
      {
        q: "Who is known as 'The King of Football'?",
        options: ["Diego Maradona", "Cristiano Ronaldo", "Pele", "Lionel Messi"],
        correctAnswer: "Pele"
      },
      {
        q: "How many players are there in a football team (on field)?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "11"
      },
      {
        q: "Which country hosted the 2018 FIFA World Cup?",
        options: ["Brazil", "Germany", "Russia", "Qatar"],
        correctAnswer: "Russia"
      },
      {
        q: "Who won the Ballon d'Or in 2021?",
        options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Kylian Mbappé"],
        correctAnswer: "Lionel Messi"
      }
    ]
  },

  olympics: {
    title: "Olympics Quiz",
    timePerQuestion: 20,
    questions: [
      {
        q: "In which year were the first modern Olympic Games held?",
        options: ["1896", "1900", "1924", "1936"],
        correctAnswer: "1896"
      },
      {
        q: "Which country has won the most Olympic gold medals overall?",
        options: ["China", "USA", "Russia", "UK"],
        correctAnswer: "USA"
      },
      {
        q: "The Olympic Games are held every how many years?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
      },
      {
        q: "What colors are the Olympic rings?",
        options: ["Blue, Black, Red, Green, Yellow", "Red, White, Blue, Green, Orange", "Black, White, Yellow, Red, Green", "Blue, Yellow, Green, Red, Orange"],
        correctAnswer: "Blue, Black, Red, Green, Yellow"
      },
      {
        q: "Which city hosted the 2021 Summer Olympics?",
        options: ["Tokyo", "Rio de Janeiro", "London", "Paris"],
        correctAnswer: "Tokyo"
      }
    ]
  },
};

let quizSlug = null;
let quizData = null;
let questions = [];
let currentIndex = 0;
let selectedIndex = null;
let score = 0;
let perQuestionTime = 15;
let answerGiven = [];
let timer = null;
let timeLeft = perQuestionTime;
let quizStartTime = null;

// DOM references
const elQuizTopic = document.getElementById('quiz-topic');
const elQuizTimer = document.getElementById('quiz-timer');
const elQuestionCount = document.getElementById('question-count');
const elQuestionText = document.getElementById('question-text');
const elPrevBtn = document.getElementById('previous-btn');
const elNextBtn = document.getElementById('next-btn');
const elExitBtn = document.getElementById('exit-btn');
const elProgressBar = document.getElementById('progress-bar');

const QUIZ_MAP = {};
for (const key in QUESTION_BANK) {
  QUIZ_MAP[key.toLowerCase()] = key;
}

function getQuizKeyFromURL() {
  const params = new URLSearchParams(window.location.search);
  return (params.get("quiz") || "").trim();
}

document.addEventListener("DOMContentLoaded", () => {
  const key = getQuizKeyFromURL().toLowerCase();
  const realKey = QUIZ_MAP[key] || null;
  quizSlug = realKey;

  if (realKey && QUESTION_BANK[realKey]) {
    quizData = QUESTION_BANK[realKey];
    questions = quizData.questions;
    elQuizTopic.textContent = quizData.title;
    quizStartTime = new Date();
    showQuestion();
  } else {
    elQuizTopic.textContent = "Quiz Topic";
  }
});

function startTimer() {
  clearInterval(timer);
  timeLeft = perQuestionTime;
  elQuizTimer.textContent = `Time: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    elQuizTimer.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      goNext();
    }
  }, 1000);
}

function showQuestion() {
  if (!questions.length) return;

  clearInterval(timer);
  startTimer();

  const qObj = questions[currentIndex];
  const correctIdx = qObj.options.indexOf(qObj.correctAnswer);

  elQuestionText.textContent = qObj.q;
  elQuestionCount.textContent = `Question ${currentIndex + 1} of ${questions.length}`;

  const progressPercent = (currentIndex / questions.length) * 100;
  elProgressBar.style.width = progressPercent + "%";

  const optionIds = ["option1", "option2", "option3", "option4"];

  qObj.options.forEach((optionText, idx) => {
    const optionEl = document.getElementById(optionIds[idx]);
    if (!optionEl) return;

    optionEl.textContent = optionText;
    optionEl.style.border = "";
    optionEl.classList.remove("selected", "correct", "wrong");

    optionEl.onclick = () => {
      clearInterval(timer);
      optionIds.forEach(id => document.getElementById(id).onclick = null);

      selectedIndex = idx;
      answerGiven[currentIndex] = optionText;

      if (idx === correctIdx) {
        optionEl.style.border = "3px solid green";
        optionEl.classList.add("correct");
        score++;
        setTimeout(goNext, 900);
      } else {
        optionEl.style.border = "3px solid red";
        optionEl.classList.add("wrong");
        const correctEl = document.getElementById(optionIds[correctIdx]);
        if (correctEl) {
          correctEl.style.border = "3px solid green";
          correctEl.classList.add("correct");
        }
        setTimeout(goNext, 1300);
      }
    };
  });

  elPrevBtn.disabled = currentIndex === 0;
  elNextBtn.disabled = currentIndex >= questions.length - 1;
}

function goNext() {
  clearInterval(timer);
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(timer);
  elProgressBar.style.width = "100%";
  elQuestionText.textContent = `Quiz Completed! Your score: ${score}/${questions.length}`;

  const optionIds = ["option1", "option2", "option3", "option4"];
  optionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
  elQuestionCount.textContent = "";
  elNextBtn.disabled = true;
  elPrevBtn.disabled = true;

  // Save history (no JSON)
  const endTime = new Date();
  const durationSec = Math.floor((endTime - quizStartTime) / 1000);
  const percentage = ((score / questions.length) * 100).toFixed(1);
  const date = new Date().toLocaleString();

  let count = localStorage.getItem("quizCount") || 0;
  count++;
  localStorage.setItem("quizCount", count);

  const record = `${quizData.title},${score}/${questions.length},${percentage}%,${durationSec}s,${date}`;
  localStorage.setItem(`quiz${count}`, record);
}

// Buttons
elPrevBtn.onclick = () => {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion();
  }
};
elNextBtn.onclick = () => {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion();
  } else {
    finishQuiz();
  }
};
elExitBtn.onclick = () => {
  window.location.href = "Quizzes.html";
};

