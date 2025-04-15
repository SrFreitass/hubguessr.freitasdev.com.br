import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";

export const Ranking = () => {
    const [players, setPlayers] = useState<{ name: string, score: number }[] | null>(null);
    
    const getPlayers = () => {


        setPlayers([
            {
                name: 'Freitasdev',
                score: 100,
            },
            {
                name: 'Lucas',
                score: 90
            },
            {
                name: 'Gabriel',
                score: 80
            }
        ]);
    }

    useEffect(() => {
        getPlayers()
    }, [])

    return (
        <View style={{ width: '100%', backgroundColor: '#171411', borderRadius: 10, padding: 16, marginTop: 16, paddingTop: 10, borderColor: '#FF4400', borderWidth: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Image source={require("@/assets/images/icons/ranking.png")} style={{ width: 32, height: 32}}/>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Manrope-ExtraBold', marginTop: 8 }}>Ranking</Text>
                    <Text style={{ color: '#999EA1', fontSize: 12, fontFamily: 'Manrope-Semibold', marginBottom: 8 }}>
                        A pontuação dos melhores jogadores!
                    </Text>
                </View>
            </View> 
            {
                players?.map(({ name, score }, index) => (
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }} key={index}> 
                        <Text style={{ color: 'white', fontFamily: 'Manrope-ExtraBold', fontSize: 16 }}>{index+1}° - {name}</Text>
                        <Text style={{ color: 'white', fontFamily: 'Manrope-ExtraBold', fontSize: 16 }}>{score}</Text>
                    </View>
                ))
            }
        </View>
    )
}