
// Exemplo, falta o mapa real e fotos reais
const challenges = [
    {
        placeSrc: "https://example.com/challenge1.jpg",
        mapSrc: "https://example.com/map1.jpg",
        correctAnswer: { x: 100, y: 200 },
    },
    {
        placeSrc: "https://example.com/challenge2.jpg",
        mapSrc: "https://example.com/map2.jpg",
        correctAnswer: { x: 150, y: 250 },
    },
    {
        placeSrc: "https://example.com/challenge3.jpg",
        mapSrc: "https://example.com/map3.jpg",
        correctAnswer: { x: 200, y: 300 },
    }
]


const shuffleChallenges = () => {
    const selectedChallenges: number[] = [];

    for (let i = 0; i < 5; i++) {
        const randomIndex = Math.floor(Math.random() * challenges.length);
        const challenge = randomIndex;

        if (selectedChallenges.includes(challenge)) {
            i--;
            continue;
        }

        selectedChallenges.push(challenge);
    }

    return selectedChallenges.map((challenge) => {
        return {
            placeSrc: challenges[challenge].placeSrc,
            mapSrc: challenges[challenge].mapSrc,
            correctAnswer: challenges[challenge].correctAnswer,
        };
    });
}