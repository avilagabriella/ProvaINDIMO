import React from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import MaskInput from 'react-native-mask-input';

const { width, height } = Dimensions.get('screen');

const users = [
  { username: 'user1', pass: '123456' },
  
];

export default function LoginForm({ navigation }) {
  const [username, setUsername] = React.useState('user1');
  const [pass, setPass] = React.useState('123456');

  const validaUsuario = () => {
    const foundUser = users.find(user => user.username === username && user.pass === pass);
    if (foundUser) {
      navigation.navigate("OpcaoCal"); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulário de login</Text>
      <View style={styles.form}>
        {/* USERNAME */}
        <MaskInput
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setUsername(masked)}
          value={username}
          placeholder="Informe seu username"
        />
        {/* SENHA */}
        <MaskInput
          mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
          style={styles.textInput}
          onChangeText={(masked, unmasked) => setPass(masked)}
          value={pass}
          placeholder="Informe sua senha"
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={validaUsuario} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  form: {
    width: width,
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  textInput: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: '#DDA0DD',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  loginButton: {
    backgroundColor: '#E6E6FA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    color: '#DDA0DD',
    textAlign: 'center',
  },
});