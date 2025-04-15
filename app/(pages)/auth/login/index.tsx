import { Button } from "@/app/components/Button";
import { auth } from "@/lib/firebase.config";
import { router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    
    const handleLogin = async () => {
        try {
            setError("");
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (err: any) {
            setError("Erro ao entrar na conta. Verifique seu email e senha.");
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A0300', padding: 20 }}>
            <Image 
                source={require("@/assets/images/logos/hubguessr-logo.png")}
                style={{ transform: 'scale(0.3)', height: 72 }}
                alt="Hubguessr Logo"
            />
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Bem-vindo de volta 👋</Text>
            <Text style={{ color: '#999EA1', fontSize: 12, fontWeight: 'semibold' }}>Entre na sua conta criada no app</Text>
            <View style={{ height: 32 }} />
            
            <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={{ backgroundColor: '#1E1E1E', color: 'white', width: '100%', padding: 12, borderRadius: 8, marginBottom: 12 }}
                placeholderTextColor="#999EA1"
                autoCapitalize="none"
            />
            
            <TextInput
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{ backgroundColor: '#1E1E1E', color: 'white', width: '100%', padding: 12, borderRadius: 8, marginBottom: 20 }}
                placeholderTextColor="#999EA1"
            />
            
            {error ? <Text style={{ color: 'red', marginBottom: 10, fontFamily: 'Manrope-Regular' }}>{error}</Text> : null}

            <Button text="Entrar na sua conta" onPress={handleLogin} bg="#FF4400" isDark stroke="#FF4400" />
            
            <Text style={{ color: '#999EA1', fontSize: 12, fontWeight: 'semibold', textAlign: 'center', maxWidth: 300, marginTop: 16 }}>
                Ainda não tem uma conta? <Text onPress={() => router.push("/auth/register")} style={{ color: '#4B8DF8', fontWeight: 'bold' }}>Cadastrar</Text>
            </Text>
        </View>
    );
}