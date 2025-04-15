import { StyleSheet, Text } from 'react-native';

import { auth } from '@/lib/firebase.config';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Button } from '../components/Button';
import { ChallengeOfDay } from '../components/ChallengeOfDay';
import { Ranking } from '../components/Ranking';

export default function HomeScreen() {
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);

  const getUserLogged = () => {
    const user = auth.currentUser;

    if (!user) {
      console.log("User not logged in");
      router.push('/auth/login');
      return;
    }

    setIsLogged(false);
    setName(user?.displayName as string);
    setEmail(user?.email as string);
    setPhoto(user?.photoURL as string);
    setIsLogged(true);
    setLoading(false);
  }

  useEffect(() => {
    getUserLogged();
  }, [])

  return (
    <View style={{ flex: 1, backgroundColor: '#0A0300', justifyContent: 'flex-start', alignItems: 'flex-start', paddingTop: 16, paddingHorizontal: 16 }}>
      <Image 
            source={require("@/assets/images/logos/hubguessr-logo.png")}
            style={{ alignSelf: 'center',transform: 'scale(0.3)', height: 72 }}
            alt="Hubguessr Logo"
        />
        <View style={{ justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', gap: 8, marginTop: 16 }}>
          <Image 
            source={{ uri: 'https://github.com/srfreitass.png' }}
            style={{ width: 48, height: 48, borderRadius: 32, marginBottom: 8 }}
          />
          <View>
            <Text style={{ color: 'white', fontSize: 20, fontFamily: 'Manrope-ExtraBold' }}>Olá, Freitasdev 👋</Text>
            <Text style={{ color: '#999EA1', fontSize: 12, fontFamily: 'Manrope-Semibold' }}>freitas@freitasdev.com.br</Text>
          </View>
        </View>
        <View style={{ height: 16}}/>

        <Button isDark stroke='#FF4400' bg='#171411' text='Jogar agora' onPress={() => router.push('/game/1')} icon={require("@/assets/images/icons/game.png")}/>        
        
        <View style={{ height: 8}}/>

        <ChallengeOfDay/>

        <Ranking />
      
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
