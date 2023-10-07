import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { AppLogo } from '../../assets'; // Pastikan path impor benar
import PrimaryButton from '../../components/mybutton/primaryButton'; // Pastikan path impor benar

function LoginScreen({ navigation }) {
  const onhandleLoginButton = () => {
    navigation.navigate('Home'); // Ubah 'Home' menjadi 'HomeScreen' agar sesuai dengan nama rute Anda
  }

  const onhandleSignUp = () => {
    navigation.navigate('Register'); // Mengarahkan ke halaman RegisterScreen
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Image source={AppLogo} style={styles.logoTop} />
          
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.textInput]}
              placeholder="Phone number, email, or username"
              placeholderTextColor="#A0A0A0"
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.textInput]}
              placeholder="Password"
              placeholderTextColor="#A0A0A0"
              secureTextEntry={true} // Untuk mengubah input menjadi password
            />
          </View>

          <PrimaryButton 
            style={[styles.loginButton, { width: '100%' }]} 
            title="Sign In"
            onPress={onhandleLoginButton}
          />

          <View style={styles.bottomTextContainer}>
            <Text style={styles.bodyText}>
              Don't have an account? 
            </Text>
            <TouchableOpacity onPress={onhandleSignUp}>
              <Text style={[styles.bodyText, styles.signUpText]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoTop: {
    alignSelf: 'center',
    marginBottom:  75,
  },
  bodyText: {
    fontSize: 16,
    color: '#6E6E6E',
  },
  bottomTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Membuat jarak kanan dan kiri antara elemen-elemen dalam satu baris
    marginTop: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderColor: '#DADADA', // Warna border abu-abu
    borderRadius: 8,
    backgroundColor: '#DADADA', // Tambahkan border radius
  },
  textInput: {
    color: 'black', // Warna teks hitam
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#0085E5',
  },
  signUpText: {
    color: '#1156BD', // Warna teks Sign Up menjadi biru
  },
});

export default LoginScreen;
