
// Exemplo, falta o mapa real e fotos reais
const challenges = {
    "easy": [
        {
            placeSrc: "",
            mapSrc: "",
            correctAnswer: {
                x: 0,
                y: 0,
            }
        }
    ],
    "medium": [
        {
            placeSrc: "",
            mapSrc: "",
            correctAnswer: {
                x: 0,
                y: 0,
            }
        }
    ],
    "hard": [
        {
            placeSrc: "",
            mapSrc: "",
            correctAnswer: {
                x: 0,
                y: 0,
            }
        }
    ]
}

const shuffleChallenges = (dificulty: keyof typeof challenges) => {
    const selectedChallenges: number[] = [];

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * challenges[dificulty].length);
        const challenge = randomIndex;

        if (selectedChallenges.includes(challenge)) {
            i--;
            continue;
        }

        selectedChallenges.push(challenge);
    }

    return selectedChallenges.map((challenge) => {
        return {
            placeSrc: challenges[dificulty][challenge].placeSrc,
            mapSrc: challenges[dificulty][challenge].mapSrc,
            correctAnswer: challenges[dificulty][challenge].correctAnswer,
        };
    });
}