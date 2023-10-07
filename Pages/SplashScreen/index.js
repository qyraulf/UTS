
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      {/* Tambahkan logo Anda di bawah ini */}
      <Image
        source={require('./assets/logo.png')} 
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 200, // Sesuaikan lebar dan tinggi logo sesuai preferensi Anda
    height: 200,
  },
});

export default SplashScreen;