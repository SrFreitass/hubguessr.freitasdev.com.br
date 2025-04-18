import { Link } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function HowToPlay() {
    return (
        <View className="flex-1 justify-start items-center bg-[#0A0300]">
            <Image
                source={require("@/assets/images/bg.png")}
                className="absolute w-full h-full"
            />

            <TouchableOpacity className="rounded-xl h-16 w-[90%] justify-center items-center border border-[#FF4400] mt-10">
                <Link href="/how-to-play">
                    <Text className="text-white text-xl font-bold mt-10">
                    Como jogar?
                    </Text>
                </Link>
            </TouchableOpacity>

            <View className="gap-4 mt-10 self-start w-[90%] m-auto">
                <Text className="text-white text-lg font-bold">
                    1 - Toque na tela para abrir o mapa
                </Text>
                <Text className="text-white text-lg font-bold">
                    2 - Clique no mapa a localização que você que está!
                </Text>
                <Text className="text-white text-lg font-bold">
                    3 - Clique em confirmar
                </Text>
                <Text className="text-white text-lg font-bold">
                    4 - Depois de confirmar, você verá se acertou ou não!
                </Text>
                <Text className="text-white text-lg font-bold">
                    5 - Você pode jogar quantas vezes quiser!
                </Text>
            </View>

             <View className="absolute left-6 bottom-6 justify-center items-center bg-[#FF4400] rounded-xl size-[4rem]">
                <Link href="/">
                    <Text className="text-white font-bold text-2xl text-center">
                        🔙
                    </Text>
                </Link>
            </View>
        </View>
    )
}