const dialogueElement = document.getElementById('dialogue');
const choicesContainer = document.getElementById('choices-container');
const characterImage = document.getElementById('character-image');
const bgm = document.getElementById('bgm');
const startButton = document.getElementById('start-button');
const startContainer = document.getElementById('start-container');
const gameContainer = document.getElementById('game-container');

const story = [
    // 第1章：邂逅
    {
        dialogue: "（歌舞伏町のバー。ざわめきの中、俺は一人で飲んでいた。そこに、彼女は現れた）",
        image: "サムネ.png",
        choices: [
            { text: "声をかける", next: 1 },
            { text: "見て見ぬふりをする", next: 2 }
        ]
    },
    {
        dialogue: "りり：「…なに？」",
        image: "初対面のりり.webp",
        bgm: "音楽.mp3",
        choices: [
            { text: "「一人で飲んでるのか？」", next: 3 },
            { text: "「隣、いいかな？」", next: 4 }
        ]
    },
    {
        dialogue: "（結局、俺は彼女にシャンパンを一杯おごった。それが、間違いの始まりだったのかもしれない）",
        image: "お酒.webp",
        choices: [
            { text: "第2章へ", next: 5 }
        ]
    },
    {
        dialogue: "りり：「別に。…あなたに関係ないでしょ」",
        image: "がぶり.webp",
        choices: [
            { text: "（気まずい沈黙が流れる）", next: 2 }
        ]
    },
    {
        dialogue: "りり：「…好きにすれば」",
        image: "スタンプ.webp",
        choices: [
            { text: "（彼女の隣に座る）", next: 2 }
        ]
    },
    // 第2章：取引となる心
    {
        dialogue: "（後日、りりから連絡があった）\nりり：「おじ、今日ちょっと時間ある？」",
        image: "契約.webp",
        choices: [
            { text: "「どうした？」", next: 6 },
            { text: "「悪い、今日は…」", next: 7 }
        ]
    },
    {
        dialogue: "（俺は彼女の壊れかけのスマホを見かねて、新しいものを送った）\nおぢ：「これ、別に気にしなくていいから」",
        image: "入金.webp",
        choices: [
            { text: "（りりは少し複雑な顔をしている）", next: 8 }
        ]
    },
    {
        dialogue: "りり：「そっか。じゃあいいや」\n（それ以来、彼女からの連絡は途絶えた）\n\n--- BAD END ---",
        image: "破滅.webp",
        choices: []
    },
    // 第3章：選択の夜
    {
        dialogue: "（りりの誕生日が近いことを知った俺は、ささやかなプレゼントを贈った）\nりり：「…なんで、こんなもの…」",
        image: "いっぱいのお金.webp",
        choices: [
            { text: "「誕生日、おめでとう」", next: 9 }
        ]
    },
    {
        dialogue: "りり：「…この関係、どう思ってる？」",
        image: "タイプ.webp",
        choices: [
            { text: "「大切に思っている」", next: 10 },
            { text: "「ただの遊びだ」", next: 11 },
            { text: "「俺にはわからない」", next: 12 }
        ]
    },
    // 第4章：それぞれの朝
    {
        dialogue: "りり：「…おぢ、私嬉しい！！今度またお酒奢ってね！！」\n\n--- TRUE END ---",
        image: "ギバーおぢ.webp",
        choices: []
    },
    {
        dialogue: "（ブロックされました）\n\n--- BAD END ---",
        image: "テイカーおぢ.webp",
        choices: []
    },
    {
        dialogue: "りり：「…そっか。そうだよね」\n（関係は続く。だが、俺たちの間にあったはずの何かは、もう消えてしまった）\n\n--- NORMAL END ---",
        image: "マッチャーおぢ.webp",
        choices: []
    }
];

let currentStoryIndex = 0;

function showStory(index) {
    if (!story[index]) {
        return;
    }
    const currentStory = story[index];
    dialogueElement.textContent = currentStory.dialogue;
    characterImage.src = currentStory.image;

    if (currentStory.bgm) {
        bgm.src = currentStory.bgm;
        bgm.play();
    }

    choicesContainer.innerHTML = '';

    if (currentStory.choices && currentStory.choices.length > 0) {
        currentStory.choices.forEach(choice => {
            const button = document.createElement('button');
            button.classList.add('choice-button');
            button.textContent = choice.text;
            button.addEventListener('click', () => {
                currentStoryIndex = choice.next;
                showStory(currentStoryIndex);
            });
            choicesContainer.appendChild(button);
        });
    }
}

startButton.addEventListener('click', () => {
    startContainer.style.display = 'none';
    gameContainer.style.display = 'block';
    showStory(currentStoryIndex);
});