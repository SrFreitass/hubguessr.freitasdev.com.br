import { Button } from "@/app/components/Button";
import { auth } from "@/lib/firebase.config";
import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleEmailPasswordRegister = async () => {
        setLoading(true);
        setError('');
        
        try {
            if (!email || !password) {
                throw new Error('Email e senha são obrigatórios');
            }
            
            if (password.length < 6) {
                throw new Error('A senha deve ter pelo menos 6 caracteres');
            }
            
            await createUserWithEmailAndPassword(auth, email, password);
            router.push("/");
        } catch (err: any) {
            setError("Erro ao criar conta. Verifique seu email e senha.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#0A0300', padding: 16 }}>
            <Image 
                source={require("@/assets/images/logos/hubguessr-logo.png")}
                style={{ transform: 'scale(0.3)', height: 72 }}
                alt="Hubguessr Logo"
            />
            <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>Criar uma conta no app</Text>
            <Text style={{ color: '#999EA1', fontSize: 12, fontWeight: 'semibold', textAlign: 'center', maxWidth: 300, marginBottom: 24 }}>
                Crie uma conta para começar a adivinhar os lugares do Senac Hub Academy
            </Text>

            <TextInput
                style={{ 
                    backgroundColor: '#1E1E1E', 
                    color: 'white', 
                    width: '100%', 
                    padding: 12, 
                    borderRadius: 8,
                    marginBottom: 12
                }}
                placeholder="Email"
                placeholderTextColor="#999EA1"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            
            <TextInput
                style={{ 
                    backgroundColor: '#1E1E1E', 
                    color: 'white', 
                    width: '100%', 
                    padding: 12, 
                    borderRadius: 8,
                    marginBottom: 20
                }}
                placeholder="Senha"
                placeholderTextColor="#999EA1"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            
            {error ? <Text style={{ color: '#ff6b6b', marginBottom: 14, width: '100%' }}>{error}</Text> : null}

            <Button 
                text={loading ? "Criando conta..." : "Criar conta"} 
                onPress={handleEmailPasswordRegister}
                bg="#FF4400"
                stroke="#FF4400"
                isDark
            />
            
           
            <Text style={{ color: '#999EA1', fontSize: 12, fontWeight: 'semibold', textAlign: 'center', maxWidth: 300, marginTop: 16 }}>
                Já possui uma conta? <Text onPress={() => router.push("/auth/login")} style={{ color: '#4B8DF8', fontWeight: 'bold' }}>Entre</Text>
            </Text>
        </View>
    )
}