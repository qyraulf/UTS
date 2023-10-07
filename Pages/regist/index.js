import {
    AppLogo,
  } from '../../assets'
  import {
    PrimaryButton
  } from '../../components'
  import { 
    View, 
    Text, 
    StyleSheet,
    Image,
    TextInput,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
  } from 'react-native';
  
  function RegisterScreen({ navigation }) {
  
    const onhandleLoginButton = () => {
      navigation.navigate('Login'); // Navigasi ke halaman login saat tombol "Sign Up" ditekan
    }
  
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <Image source={AppLogo} style={styles.logoTop} />
            <Text style={styles.bodyText}>Sign up to see photos and videos from your friends.</Text>
              
              <TextInput
                style={[styles.input, styles.textInput]}
                placeholder="Mobile Number or Email"
              />
  
              <TextInput
                style={[styles.input, styles.textInput]}
                placeholder="Full Name"
              />
  
              <TextInput
                style={[styles.input, styles.textInput]}
                placeholder="User Name"
              />
  
              <TextInput
                style={[styles.input, styles.textInput]}
                placeholder="Password"
                secureTextEntry={true}
              />
  
            <Text style={[styles.bodyText, styles.orText]}>OR</Text>
  
              <Text style={[styles.bodyText, styles.facebookText]}>
                Login with Facebook
              </Text>
  
              <PrimaryButton 
                style={styles.signupButton}
                onPress={onhandleLoginButton} // Mengubah fungsi yang dipanggil saat tombol "Sign Up" ditekan
                title="Sign up"
              />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    safeArea:{
      flex: 1,
      backgroundColor: 'white'
    },
    scrollView:{
      flexGrow: 1,
      justifyContent: 'center',
    },
    container:{
      flex: 1,
      margin: 35,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoTop:{
      alignSelf:'center',
      marginTop: 20
    },
    bodyText:{
      textAlign: 'center',
      fontSize:16,
      color:'#6E6E6E',
      marginBottom: 20,
    },
    textInput:{
      height: 40,
      borderWidth: 1,
      padding: 10,
      width: '100%',
      borderRadius: 8,
      borderColor: '#DADADA',
      backgroundColor:'#DADADA',
      marginBottom: 10,
    },
    orText:{
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
    },
    facebookText:{
      fontSize: 16,
      color: '#1156BD',
      marginBottom: 20,
    },
    signupButton:{
      backgroundColor: '#0085E5',
      borderRadius: 8,
      marginTop: 20,
      paddingVertical: 12,
      width: '100%',
      alignItems: 'center',
    },
  });
  
  export default RegisterScreen;
  