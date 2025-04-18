import React, { useEffect, useState } from "react";
import { GestureResponderEvent, Image, Pressable, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";

export default function GameScreen() {
    const [challenges, setChallenges] = useState([
        ...shuffleChallenges(),
    ]);
    const [counter, setCounter] = useState(30);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState({ x: 411, y: 254});
    const [isCorrect, setIsCorrect] = useState(false);
    const [pointer, setPointer] = useState({ x: 0, y: 0 });
    const [isResponding, setIsResponding] = useState(false);
    const [currentChallenge, setCurrentChallenge] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000);

        setIntervalId(interval);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (counter <= 0) {
            clearInterval(intervalId!);
            setIsResponding(true);
            setCounter(0);
        }
    }, [counter]);

    useEffect(() => {
        if(isResponding) {
            clearInterval(intervalId!);
        }

    }, [isResponding]);

    const markTheMap = (e: GestureResponderEvent) => {
        const { locationX, locationY } = e.nativeEvent;;
        const x = locationX;
        const y = locationY;

        console.log(`x: ${x}, y: ${y}`);
        console.log('teste')
        setPointer({ x, y });
    }

    const handleConfirm = () => {
        if(
            pointer.x >= correctAnswer.x - 20 &&
            pointer.x <= correctAnswer.x + 20 && 
            pointer.y >= correctAnswer.y - 20 && 
            pointer.y <= correctAnswer.y + 20
        ) {
            setIsResponding(false);
            setIsCorrect(true);
        }
    }

    const handleNextChallenge = () => {
        setCurrentChallenge((prev) => prev + 1);
        setCounter(30);
        setIsCorrect(false);
        setPointer({ x: 0, y: 0 });
        setChallenges((prev) => {
            const newChallenges = [...prev];
            newChallenges.shift();
            return newChallenges;
        });
        setCorrectAnswer(challenges[1].correctAnswer);
        setIsResponding(false);
        setIntervalId(setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000));
    }
    
    return (
        <View className="flex-1 justify-center items-center">
            <TouchableWithoutFeedback className="relative" onPress={() => setIsResponding(true)} style={{ width: '100%', height: '100%' }}>
                <Image 
                    source={require(challenges[currentChallenge - 1].placeSrc)}
                    style={{ width: '100%', height: '100%' }}
                    alt="World Map"
                />
            </TouchableWithoutFeedback>

            {
                isResponding ?
                <View className="absolute w-full h-full justify-center items-center">
                            <View className="w-full h-full bg-black/90"></View>
                            <Pressable onPress={markTheMap} className="absolute">
                                <Image 
                                    source={require(challenges[currentChallenge - 1].mapSrc)}
                                    className="w-[500px] h-[500px]"
                                />
                                
                                {pointer.x !== 0 && pointer.y !== 0 && <View className="absolute w-3 h-3 rounded bg-[#FF4400]" style={{ left: pointer.x - 5, top: pointer.y - 5 }} />}
                            </Pressable>
                        </View>
                : null
            }


            <View className="absolute left-6 bottom-6 justify-center items-center bg-[#FF4400] rounded-xl size-[4rem]">
                <Text className="text-white font-bold text-2xl text-center">
                    {currentChallenge}/5
                </Text>
            </View>

            {
                pointer.x > 0 && pointer.y > 0 && !isCorrect ?
                  <TouchableOpacity className="absolute bg-[#FF4400] rounded-xl h-16 w-2/3 justify-center items-center bottom-6" onPress={handleConfirm}>
                    <Text className="text-white font-bold text-2xl text-center">
                        Confirmar
                    </Text>
                  </TouchableOpacity>
                : null
            }

            {
                isCorrect ?
                <View className="absolute w-full h-full justify-center items-center z-20 bg-black/90">
                    <Text className="text-white font-bold text-3xl text-center">Você acertou!</Text>
                    <Text className="text-zinc-400 font-semibold text-xl text-center">Você ganhou 100 pontos!</Text>
                    <TouchableOpacity className="bg-[#FF4400] rounded-xl h-14 w-2/3 justify-center items-center mt-4" onPress={handleNextChallenge}>
                        <Text className="text-white font-bold text-2xl text-center">
                            Próximo desafio
                        </Text>
                    </TouchableOpacity>
                </View>
                : null
            }

            <View className="absolute right-6 bottom-6 justify-center items-center bg-[#FF4400] rounded-xl size-[4rem]">
                <Text className="text-white font-bold text-2xl text-center">
                    {counter}
                </Text>
            </View>
        </View>
    )

    
}