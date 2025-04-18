import { Link } from "expo-router";
import { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

enum Dificulty {
  EASY,
  MEDIUM,
  HARD,
}

export default function Index() {
  const [dificulty, setDificulty] = useState(Dificulty.EASY);

  return (
    <View className="flex-1 justify-center items-center bg-[#0A0300]">
      <Image
        source={require("@/assets/images/bg.png")}
        className="absolute w-full h-full"
      />
      <Image
        source={require("@/assets/images/logo.png")}
        className="scale-[0.4]"
      />
      <TouchableOpacity className="bg-[#FF4400] rounded-xl h-16 w-2/3 justify-center items-center border">
        <Link href="/game">
          <Text className="text-white text-2xl font-bold mt-10">
            Jogar agora
          </Text>
        </Link>
      </TouchableOpacity>

      <View className="flex-row gap-4 justify-center items-center mt-4 w-2/3">
        <TouchableOpacity className={`border border-[#FF4400] h-16 flex-grow rounded-xl justify-center items-center ${dificulty === Dificulty.EASY ? "bg-[#FF4400]" : ""}`} onPress={() => setDificulty(Dificulty.EASY)}>
          <Text className="text-white text-xl font-bold">
          Fácil
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className={`border border-[#FF4400] h-16 flex-grow rounded-xl justify-center items-center ${dificulty === Dificulty.MEDIUM ? "bg-[#FF4400]" : ""}`} onPress={() => setDificulty(Dificulty.MEDIUM)}>
          <Text className="text-white text-xl font-bold">
          Médio
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className={`border border-[#FF4400] h-16 flex-grow rounded-xl justify-center items-center ${dificulty === Dificulty.HARD ? "bg-[#FF4400]" : ""}`} onPress={() => setDificulty(Dificulty.HARD)}>
          <Text className="text-white text-xl font-bold">
          Difícil
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="rounded-xl h-16 w-2/3 justify-center items-center border border-[#FF4400] mt-4">
        <Link href="/how-to-play">
          <Text className="text-white text-xl font-bold mt-10">
            Como jogar?
          </Text>
        </Link>
      </TouchableOpacity>
    </View>
  );
}
