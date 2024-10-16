import React from 'react';
import { NativeBaseProvider, Box, Button, Center } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; // Certifique-se de importar isso

type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <Button onPress={() => navigation.navigate('Login')}>
            Ir para Login
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default WelcomeScreen;