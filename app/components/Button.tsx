import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export const Button = ({ text, icon, bg, stroke = '#CDD1E0', onPress, isDark = false }: { text: string, icon?: ImageSourcePropType, onPress?: () => void, bg?: string, isDark?: boolean, stroke?: string }) => {
    return (
        <View style={style.view}>
            <TouchableOpacity style={{ ...style.button, backgroundColor: bg || 'white', borderColor: stroke }} onPress={onPress}>
                <Image source={icon} style={{ width: 32, height: 32 }}/>
                <Text style={{...style.text, color: isDark ? 'white' : 'black'}}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
        width: '100%',
    
    },
    text: {
        fontSize: 16,
        fontFamily: 'Manrope-ExtraBold'
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',

        borderWidth: 1,
        height: 45,
        width: '100%',
        borderRadius: 10,
    }
})