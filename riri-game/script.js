

const dialogueElement = document.getElementById('dialogue');
const choicesContainer = document.getElementById('choices-container');
const characterImage = document.getElementById('character-image');
const bgm = document.getElementById('bgm');
const startButton = document.getElementById('start-button');
const startContainer = document.getElementById('start-container');
const gameContainer = document.getElementById('game-container');

const story = [
    {
        dialogue: "ねえ、おぢ。りりと一緒にいてくれる？",
        image: "22f611dada3b0420027137446501a0546bde0b4b.webp",
        choices: [
            { text: "もちろん！", next: 1 },
            { text: "ごめん、ちょっと…", next: 2 }
        ]
    },
    {
        dialogue: "ほんと！？嬉しい！おぢ、だーいすき！",
        image: "3066e4c08e0ab77bd6112c159f6ab9122cbd586f.webp",
        choices: []
    },
    {
        dialogue: "そっか…。おぢは、りりのこと嫌いなんだ…。",
        image: "1c8fcc071d2a19912e267ec353c79cc6cc8ab500.webp",
        choices: []
    }
];

let currentStoryIndex = 0;

function showStory(index) {
    const currentStory = story[index];
    dialogueElement.textContent = currentStory.dialogue;
    characterImage.src = currentStory.image;

    choicesContainer.innerHTML = '';

    currentStory.choices.forEach(choice => {
        const button = document.createElement('button');
        button.classList.add('choice-button');
        button.textContent = choice.text;
        button.addEventListener('click', () => {
            if (choice.text === "もちろん！") {
                const audio = new Audio('音楽.mp3');
                audio.play();
            }
            currentStoryIndex = choice.next;
            showStory(currentStoryIndex);
        });
        choicesContainer.appendChild(button);
    });
}

startButton.addEventListener('click', () => {
    startContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    showStory(currentStoryIndex);
});


