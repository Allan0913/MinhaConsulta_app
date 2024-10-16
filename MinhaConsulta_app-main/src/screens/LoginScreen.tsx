import React, { useState } from 'react';
import { NativeBaseProvider, Box, Button, Input, Center, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator'; 
import { login } from '../api/auth'; 

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen = ({ navigation }: Props) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null); 

  const handleLogin = async () => {
    try {
      const token = await login(username, password);
      console.log('Token:', token);
      setErrorMessage(null); 
      
      navigation.navigate('ConsultationsList'); 
    } catch (err) {
      if (err instanceof Error) {
        setErrorMessage(err.message); 
      } else {
        setErrorMessage('Erro ao tentar realizar login.'); 
      }
    }
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} bg="white">
        <Box>
          <Input
            placeholder="Usuário"
            mb={4}
            value={username}
            onChangeText={setUsername}
          />
          <Input
            placeholder="Senha"
            mb={4}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Button onPress={handleLogin}>
            Entrar
          </Button>
          {errorMessage && (
            <Text color="red.500" mt={4}>
              {errorMessage}
            </Text>
          )}
          <Button onPress={() => navigation.navigate('SignUp')} mt={4}>
            Cadastrar
          </Button>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
