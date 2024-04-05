import React, { useState } from 'react';
import { StatusBar, Image, TouchableOpacity, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [isDay, setIsDay] = useState(true);

  const toggleDayNight = () => {
    setIsDay(!isDay);
  };

  const getGreeting = () => {
    return isDay ? 'color' : 'no color';
  };

  const getBackgroundColor = () => {
    return isDay ? '#E6E6FA' : '#E6E6FA';
  };

  const handleButtonClick = () => {
    toggleDayNight(); 
  };

  return (

    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>

      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>

      
        <Image 
          source={isDay ? require('../assets/lotus2.png') : require('../assets/lotus.png')}
          style={styles.icon}
        />

      </TouchableOpacity>

    
      <TouchableOpacity onPress={handleButtonClick} style={styles.toggleButton}>
        <Text style={styles.buttonText}>Plim!</Text> 
      </TouchableOpacity>

      {/* //botao para modificar texto */}
      <TouchableOpacity onPress={toggleDayNight} style={styles.toggleButton}>
        <Text style={styles.greeting}>{getGreeting()}</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  toggleButton: {

    marginBottom: 15,
  },

  buttonText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#DDA0DD',
    top: 150,
    backgroundColor: '#E6E6FA',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderColor: '#fff',
    marginTop: 10,
    marginHorizontal: 5,
  },

  icon: {
    width: 200,
    height: 200,
  },

  greeting: {
    fontSize: 54,
    fontWeight: 'bold',
  },

});