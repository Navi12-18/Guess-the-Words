const wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to a indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]

// Javascript Code

const inputs = document.querySelector(".guess_blocks");
const resetBtn = document.querySelector(".reset");
const hintJs = document.querySelector(".hint-section span");
const typingInput = document.querySelector(".typing_input");
const wrongLetters = document.querySelector(".wrong_letters span");
const guesses = document.querySelector(".guesses span");

let word, guess,correct = [],incorrect = [];

function randomWord()
{
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    let hint = ranObj.hint;
    guess = 8,correct = [],incorrect = [];
    console.log(word);
    console.log(hint);
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type = "text" disabled>`;
    }

    hintJs.innerText = hint;
    inputs.innerHTML = html;
    guesses.innerText = guess;
    wrongLetters.innerText = incorrect;
}

function initGame(e) {
    let key = e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrect.includes(`${key}`) && !correct.includes(key))
    {
        console.log(key);
        if(word.includes(key))
        {
            for(let i = 0;i<word.length;i++)
            {
                if(word[i] === key)
                {
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        }else
        {
            guess--;
            incorrect.push(`${key}`);
        }
        guesses.innerText = guess;
        wrongLetters.innerText = incorrect;
    }
    typingInput.value = "";

    
    if(correct.length === word.length)
        {
            alert("Congrats");
            randomWord();
        } 
        else if(guess < 1)
        {
            alert("GAME OVER");
            for(let i = 0;i<word.length;i++)
                {
                        inputs.querySelectorAll("input")[i].value = word[i];
                }
            wrongLetters.innerText = "";
        }
}


typingInput.addEventListener("input", initGame);
resetBtn.addEventListener("click", randomWord);
document.addEventListener("keydown",()=>typingInput.focus());
inputs.addEventListener("click", ()=> typingInput.focus());