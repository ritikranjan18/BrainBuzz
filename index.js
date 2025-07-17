const quizzes = {
            general: {
                title: "General Knowledge",
                questions: [
                    { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris", "Rome"], answer: "Paris" },
                    { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
                    { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific" },
                    { question: "Who wrote 'Romeo and Juliet'?", options: ["Dickens", "Shakespeare", "Austen", "Twain"], answer: "Shakespeare" },
                    { question: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "NaCl"], answer: "H2O" },
                ]
            },
            programming: {
                title: "Programming",
                questions: [
                    { question: "What does HTML stand for?", options: ["Hyper Tool Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"], answer: "Hyper Text Markup Language" },
                    { question: "Which language runs in a web browser?", options: ["Java", "C++", "Python", "JavaScript"], answer: "JavaScript" },
                    { question: "What does CSS stand for?", options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
                    { question: "Which company developed the Go language?", options: ["Microsoft", "Apple", "Google", "Amazon"], answer: "Google" },
                    { question: "What is the result of `2 + '2'` in JavaScript?", options: ["4", "22", "Error", "NaN"], answer: "22" },
                ]
            },
            database: {
                title: "Databases",
                questions: [
                    { question: "What does SQL stand for?", options: ["Stylish Question Language", "Stylesheet Query Language", "Structured Query Language", "Statement Question Language"], answer: "Structured Query Language" },
                    { question: "Which is a NoSQL database?", options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"], answer: "MongoDB" },
                    { question: "Which command is used to add new data into a database?", options: ["ADD NEW", "INSERT INTO", "UPDATE", "CREATE"], answer: "INSERT INTO" },
                    { question: "What is a primary key?", options: ["A large key", "The first key in a table", "A unique identifier for a record", "A foreign key"], answer: "A unique identifier for a record" },
                    { question: "What does CRUD stand for?", options: ["Create, Read, Update, Delete", "Connect, Read, Undo, Drop", "Create, Run, Utilize, Destroy", "Copy, Replicate, Update, Deny"], answer: "Create, Read, Update, Delete" },
                ]
            },
            science: {
                title: "Science",
                questions: [
                    { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"], answer: "Mitochondrion" },
                    { question: "What is the chemical symbol for Gold?", options: ["Ag", "Au", "Pb", "Fe"], answer: "Au" },
                    { question: "Which gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Carbon Dioxide" },
                    { question: "What force pulls objects toward the center of the Earth?", options: ["Magnetism", "Friction", "Gravity", "Tension"], answer: "Gravity" },
                    { question: "At what temperature Celsius and Fahrenheit are equal?", options: ["0", "-40", "100", "-273"], answer: "-40" },
                ]
            },
            history: {
                title: "History",
                questions: [
                    { question: "Who was the first President of the United States?", options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"], answer: "George Washington" },
                    { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: "1945" },
                    { question: "The ancient city of Rome was built on how many hills?", options: ["5", "7", "9", "12"], answer: "7" },
                    { question: "The Taj Mahal was built by which Mughal emperor?", options: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"], answer: "Shah Jahan" },
                    { question: "The Magna Carta was signed in which country?", options: ["France", "Germany", "Italy", "England"], answer: "England" },
                ]
            },
            movies: {
                title: "Movies",
                questions: [
                    { question: "Who directed the movie 'Jurassic Park'?", options: ["James Cameron", "George Lucas", "Steven Spielberg", "Christopher Nolan"], answer: "Steven Spielberg" },
                    { question: "Which movie won the first-ever Oscar for Best Picture?", options: ["The Artist", "Wings", "Sunrise", "Metropolis"], answer: "Wings" },
                    { question: "What is the highest-grossing film of all time (unadjusted for inflation)?", options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"], answer: "Avatar" },
                    { question: "In 'The Matrix', what is the main character's hacker name?", options: ["Morpheus", "Cypher", "Trinity", "Neo"], answer: "Neo" },
                    { question: "Which actor played James Bond in 'Dr. No'?", options: ["Roger Moore", "Sean Connery", "David Niven", "George Lazenby"], answer: "Sean Connery" },
                ]
            },
            sports: {
                title: "Sports",
                questions: [
                    { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Argentina", "Italy", "Brazil"], answer: "Brazil" },
                    { question: "How many players are on a basketball team on the court at one time?", options: ["5", "6", "7", "11"], answer: "5" },
                    { question: "In which sport would you perform a slam dunk?", options: ["Volleyball", "Basketball", "Tennis", "Badminton"], answer: "Basketball" },
                    { question: "What is the national sport of Canada?", options: ["Hockey", "Curling", "Lacrosse", "Baseball"], answer: "Lacrosse" },
                    { question: "Which athlete has won the most Olympic medals?", options: ["Usain Bolt", "Michael Phelps", "Larisa Latynina", "Paavo Nurmi"], answer: "Michael Phelps" },
                ]
            }
        };

        // --- DOM Elements ---
        const quizContainer = document.getElementById('quiz-container');
        const welcomeScreen = document.getElementById('welcome-screen');
        const startScreen = document.getElementById('start-screen');
        const categorySelection = document.getElementById('category-selection');
        const quizScreen = document.getElementById('quiz-screen');
        const resultScreen = document.getElementById('result-screen');
        
        const welcomeBtn = document.getElementById('welcome-btn');
        const backBtn = document.getElementById('back-btn');
        const nextBtn = document.getElementById('next-btn');
        const restartBtn = document.getElementById('restart-btn');
        
        const quizTitleEl = document.getElementById('quiz-title');
        const questionTextEl = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        
        const scoreTextEl = document.getElementById('score-text');
        const currentScoreEl = document.getElementById('current-score');
        const progressBarInner = document.getElementById('progress-bar-inner');
        const timerBarInner = document.getElementById('timer-bar-inner');

        // --- Quiz State ---
        let currentQuestionIndex = 0;
        let score = 0;
        let timer;
        const TIME_LIMIT = 10;
        let timeLeft = TIME_LIMIT;
        let quizData = [];

        // --- Initial Setup ---
        window.onload = () => {
             quizContainer.classList.add('active');
        };

        // --- Event Listeners ---
        welcomeBtn.addEventListener('click', showCategorySelection);
        categorySelection.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                const category = e.target.dataset.category;
                selectCategory(category);
            }
        });
        backBtn.addEventListener('click', goToCategories);
        nextBtn.addEventListener('click', nextQuestion);
        restartBtn.addEventListener('click', goToCategories);

        /**
         * Hides the welcome screen and shows the category selection.
         */
        function showCategorySelection() {
            welcomeScreen.classList.add('hidden');
            startScreen.classList.remove('hidden');
            startScreen.classList.add('fade-in');
        }

        /**
         * Selects a category and starts the quiz.
         */
        function selectCategory(category) {
            quizData = quizzes[category].questions;
            quizTitleEl.textContent = quizzes[category].title;
            startQuiz();
        }

        /**
         * Starts the quiz.
         */
        function startQuiz() {
            startScreen.classList.add('hidden');
            resultScreen.classList.add('hidden');
            quizScreen.classList.remove('hidden');
            quizScreen.classList.add('fade-in');
            
            currentQuestionIndex = 0;
            score = 0;
            showQuestion();
        }

        /**
         * Displays the current question and options.
         */
        function showQuestion() {
            resetState();
            const currentQuestion = quizData[currentQuestionIndex];
            
            questionTextEl.textContent = currentQuestion.question;
            questionTextEl.classList.add('fade-in');

            currentScoreEl.textContent = score;
            progressBarInner.style.width = `${((currentQuestionIndex) / quizData.length) * 100}%`;

            currentQuestion.options.forEach((option, index) => {
                const button = document.createElement('button');
                button.textContent = option;
                button.classList.add('option-btn', 'w-full', 'p-4', 'border-2', 'dark:border-slate-600', 'rounded-lg', 'text-left', 'text-slate-700', 'dark:text-slate-300', 'font-medium', 'hover:bg-indigo-100', 'dark:hover:bg-slate-700', 'hover:border-indigo-400', 'dark:hover:border-indigo-500');
                button.style.animationDelay = `${index * 100}ms`;
                button.classList.add('fade-in');
                button.addEventListener('click', selectAnswer);
                optionsContainer.appendChild(button);
            });

            startTimer();
        }

        /**
         * Resets the state for the next question.
         */
        function resetState() {
            clearInterval(timer);
            timeLeft = TIME_LIMIT;
            timerBarInner.style.transition = 'none';
            timerBarInner.style.width = '100%';
            timerBarInner.classList.remove('bg-yellow-500', 'bg-red-500');
            timerBarInner.classList.add('bg-green-500');

            void timerBarInner.offsetWidth; 
            timerBarInner.style.transition = `width ${TIME_LIMIT}s linear`;

            nextBtn.classList.add('hidden');
            questionTextEl.classList.remove('fade-in');
            while (optionsContainer.firstChild) {
                optionsContainer.removeChild(optionsContainer.firstChild);
            }
        }
        
        /**
         * Starts the countdown timer and updates the timer bar.
         */
        function startTimer() {
            timerBarInner.style.width = '0%';
            timer = setInterval(() => {
                timeLeft--;
                if (timeLeft < TIME_LIMIT / 2 && timeLeft > TIME_LIMIT / 4) {
                    timerBarInner.classList.remove('bg-green-500');
                    timerBarInner.classList.add('bg-yellow-500');
                } else if (timeLeft <= TIME_LIMIT / 4) {
                    timerBarInner.classList.remove('bg-yellow-500');
                    timerBarInner.classList.add('bg-red-500');
                }

                if (timeLeft <= 0) {
                    clearInterval(timer);
                    handleTimeUp();
                }
            }, 1000);
        }

        /**
         * Handles the user's answer selection.
         */
        function selectAnswer(e) {
            clearInterval(timer);
            timerBarInner.style.transition = 'none';
            const selectedBtn = e.target;
            const isCorrect = selectedBtn.textContent === quizData[currentQuestionIndex].answer;

            if (isCorrect) {
                selectedBtn.classList.add('correct');
                score++;
                currentScoreEl.textContent = score;
            } else {
                selectedBtn.classList.add('incorrect');
            }

            Array.from(optionsContainer.children).forEach(button => {
                if (button.textContent === quizData[currentQuestionIndex].answer) {
                    if(!isCorrect) button.classList.add('correct');
                }
                button.classList.add('disabled');
            });
            
            showNextButtonOrResult();
        }
        
        /**
         * Handles when the timer runs out.
         */
        function handleTimeUp() {
            Array.from(optionsContainer.children).forEach(button => {
                if (button.textContent === quizData[currentQuestionIndex].answer) {
                    button.classList.add('correct');
                }
                button.classList.add('disabled');
            });
            showNextButtonOrResult();
        }

        /**
         * Determines whether to show the next button or the final result screen.
         */
        function showNextButtonOrResult() {
             setTimeout(() => {
                 if (quizData.length > currentQuestionIndex + 1) {
                    nextBtn.classList.remove('hidden');
                } else {
                    showResult();
                }
            }, 1200);
        }

        /**
         * Loads the next question.
         */
        function nextQuestion() {
            currentQuestionIndex++;
            showQuestion();
        }

        /**
         * Displays the final score.
         */
        function showResult() {
            quizScreen.classList.add('hidden');
            resultScreen.classList.remove('hidden');
            resultScreen.classList.add('fade-in');
            scoreTextEl.textContent = `${score} / ${quizData.length}`;
            progressBarInner.style.width = '100%';
        }

        /**
         * Returns to the category selection screen.
         */
        function goToCategories() {
            clearInterval(timer);
            quizScreen.classList.add('hidden');
            resultScreen.classList.add('hidden');
            startScreen.classList.remove('hidden');
            startScreen.classList.add('fade-in');
            progressBarInner.style.width = '0%';
        }