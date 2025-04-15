import { BlurView } from "expo-blur";
import React, { useEffect, useState } from "react";
import { GestureResponderEvent, Image, Pressable, Text, View } from "react-native";
import ConfettiCannon from 'react-native-confetti-cannon';

const GameScreen = () => {
    const [counter, setCounter] = useState(30);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    const [correctAnswer, setCorrectAnswer] = useState({ x: 581.33056640625, y: 371.14453125});
    const [isCorrect, setIsCorrect] = useState(false);
    const [pointer, setPointer] = useState({ x: 0, y: 0 });
    const [isResponding, setIsResponding] = useState(false);

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
        setPointer({ x, y });

        if(x >= correctAnswer.x - 20 && x <= correctAnswer.x + 20 && y >= correctAnswer.y - 20 && y <= correctAnswer.y + 20) {
            clearInterval(intervalId!);
            setIsResponding(false);
            setIsCorrect(true);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', backgroundColor: '#0A0300'  }}>
            <View style={{ marginTop: 10, height: 5, width: '95%', backgroundColor: 'rgba(255, 255, 255, 0.4)', borderRadius: 10 }}>
                <View style={{ height: 5, width: isResponding ? '50%' : '25%', backgroundColor: '#FF4400', borderRadius: 10 }} />
            </View>
            <Pressable style={{ width: '95%', height: '95%' }} onPress={() => setIsResponding(true)}>
                <Image 
                    source={require("@/assets/images/places/test.png")}
                    style={{ width: '100%', height: '100%', borderRadius: 20, marginTop: 16 }}
                />
                {
                    isResponding && (
                        <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                            <BlurView intensity={100} tint="dark" style={{ position: 'absolute', height: '105%', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 20, filter: 'blur(10)' }}>
                            </BlurView>
                            <Pressable onPress={markTheMap} style={{ position: 'absolute', transform: 'scale(0.5)' }}>
                                <Image 
                                    source={require("@/assets/images/maps/675px-Split_Top_Down_View.png")}
                                />
                                {pointer.x !== 0 && pointer.y !== 0 && <View style={{ position: 'absolute', width: 16, height: 16, borderRadius: 5, backgroundColor: '#FF4400', left: pointer.x - 5, top: pointer.y - 5 }} />}
                            </Pressable>
                        </View>
                    )
                }
                {
                    isCorrect && 
                    <View style={{ position: 'absolute', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <BlurView intensity={100} tint="dark" style={{ position: 'absolute', height: '105%', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)', borderRadius: 20, filter: 'blur(10)' }}>
                            <Text style={{ color: 'green', fontSize: 24, fontFamily: 'Manrope-ExtraBold' }}>Você acertou!</Text>
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Manrope-ExtraBold' }}>Você acertou em {counter} segundos</Text>
                            <Text style={{ color: 'white', fontSize: 16, fontFamily: 'Manrope-ExtraBold' }}>Você ganhou {10 * (counter + 1)} pontos!</Text>
                            <ConfettiCannon count={100} origin={{x: -10, y: 0}} />
                        </BlurView>
                    </View>
                }
            </Pressable>
            <View
                style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 52, height: 52, borderRadius: 10, backgroundColor: '#FF4400', bottom: 24, right: 24 }}
            >
                <Text style={{ color: '#fff', fontFamily: 'Manrope-ExtraBold', fontSize: 20 }}>{counter}</Text>
            </View> 

            <View
                style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', width: 52, height: 52, borderRadius: 10, backgroundColor: '#FF4400', bottom: 24, left: 24 }}
            >
                <Text style={{ color: '#fff', fontFamily: 'Manrope-ExtraBold', fontSize: 20 }}>
                    1/5
                </Text>
            </View> 


            
        </View>
    )
}

export default GameScreen;