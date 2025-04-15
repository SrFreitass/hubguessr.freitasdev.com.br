import { Button } from "@/app/components/Button";
import { auth } from "@/lib/firebase.config";
import { router } from "expo-router";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Image, Text, View } from "react-native";

export default function RegisterScreen() {
    const handleAuth = async (provider: string) => {
        const githubProvider = new GithubAuthProvider();
        const googleProvider = new GoogleAuthProvider();

        if(provider === 'GITHUB') {
            await signInWithPopup(auth, githubProvider);
            router.push("/");
            return;
        }

        if(provider === 'GOOGLE') {
            await signInWithPopup(auth, googleProvider);
            router.push("/");
            return;
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A0300'  }}>
            <Image 
                source={require("@/assets/images/logos/hubguessr-logo.png")}
                style={{ transform: 'scale(0.3)', height: 72 }}
                alt="Hubguessr Logo"
            />
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Criar uma conta no app</Text>
            <Text style={{ color: '#999EA1', fontSize: 12, fontWeight: 'semibold', textAlign: 'center', maxWidth: 300 }}>
                Crie uma conta para começar a adivinhar os lugares do Senac Hub Academy
            </Text>
            <View style={{ height: 32 }} />
            <Button text="Github" onPress={() => handleAuth("GITHUB")} icon={require("@/assets/images/logos/github.png")}/>
            <View style={{ height: 12 }} />
            <Button text="Google" onPress={() => handleAuth("GOOGLE")} icon={require("@/assets/images/logos/google.png")}/>
            <Text style={{ color: '#999EA1', fontSize: 12, fontWeight: 'semibold', textAlign: 'center', maxWidth: 300, marginTop: 16 }}>
                Já possui uma conta? <Text onPress={() => router.push("/auth/login")} style={{ color: '#4B8DF8', fontWeight: 'bold' }}>Entre</Text>
            </Text>
        </View>
    )
}