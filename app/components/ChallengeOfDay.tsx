import { Image, Text, View } from "react-native"

export const ChallengeOfDay = () => {
    return (
        <View   style={{ width: '100%', backgroundColor: '#171411', borderRadius: 10, padding: 16, marginTop: 16, paddingTop: 10, borderColor: '#FF4400', borderWidth: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 }}>
                <Image source={require("@/assets/images/icons/calendar.png")} style={{ width: 32, height: 32}}/>
                <View>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginTop: 8 }}>Desafio do dia</Text>
                    <Text style={{ color: '#999EA1', fontSize: 12, fontWeight: 'semibold', marginBottom: 8 }}>Desafie-se a adivinhar o local do dia</Text>
                </View>
            </View>
            <Image source={require("@/assets/images/espaco-de-atendimento 1.png")} />
        </View>
    )
}