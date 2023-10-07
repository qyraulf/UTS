import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';

function EditScreen() {
  const [isProfileUpdated, setProfileUpdated] = useState(false);
  const navigation = useNavigation();

  const handleChangeAccountType = () => {
    // Di sini Anda dapat menambahkan logika untuk mengubah tipe akun pengguna.
    // Misalnya, Anda dapat memanggil API server untuk mengubah tipe akun.
    // Setelah berhasil, Anda bisa mengatur state atau melakukan navigasi.

    // Simulasi perubahan tipe akun dan navigasi ke halaman Home:
    // setProfileUpdated(true);
    // navigation.navigate('Home');
  };

  const handleDonePress = () => {
    // Simulasikan penyimpanan profil ke server di sini.
    // Jika penyimpanan berhasil, atur state isProfileUpdated menjadi true.
    // Jika penyimpanan gagal, tampilkan pesan kesalahan.

    // Contoh penyimpanan berhasil:
    // setProfileUpdated(true);

    // Tampilkan dialog alert
    Alert.alert('Info', 'Profile updated successfully!', [
      {
        text: 'OK',
        onPress: () => {
          setProfileUpdated(true);
          // Kembali ke halaman sebelumnya (biasanya halaman Home)
          navigation.goBack();
        },
      },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('./assets/close.png')} // Ganti dengan path gambar Anda
              style={styles.headerImage}
            />
          </TouchableOpacity>
          <Text style={styles.headerText}>Edit Profile</Text>
        </View>
        <TouchableOpacity onPress={handleDonePress}>
          <Image
            source={require('./assets/done.png')} // Ganti dengan path gambar Anda
            style={styles.headerImageRight}
          />
        </TouchableOpacity>
      </View>

      {/* Informasi Profil */}
      <View style={styles.profileInfo}>
        {/* Tampilkan pesan jika profil telah diperbarui */}
        {isProfileUpdated && (
          <Text style={styles.profileUpdateText}>Profile updated successfully!</Text>
        )}

        {/* Foto Profil */}
        <View style={styles.profileImageContainer}>
          <Image
            source={require('./assets/Avatar.png')}
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editProfileImage}>
            <Text style={styles.editProfileImageText}>Edit Picture</Text>
          </TouchableOpacity>
        </View>

        {/* Nama Pengguna */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.usernameInput}
            placeholder="Your Name"
            placeholderTextColor="#A0A0A0"
            underlineColorAndroid="transparent" // Membuat garis bawah menjadi transparan
          />
        </View>

        {/* Username */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <TextInput
            style={styles.bioInput}
            placeholder="Your Username"
            placeholderTextColor="#A0A0A0"
            underlineColorAndroid="transparent" // Membuat garis bawah menjadi transparan
          />
        </View>

        {/* Pronouns */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Pronouns</Text>
          <TextInput
            style={styles.bioInput}
            placeholder="Your Pronouns"
            placeholderTextColor="#A0A0A0"
            underlineColorAndroid="transparent" // Membuat garis bawah menjadi transparan
          />
        </View>

        {/* Bio */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Bio</Text>
          <TextInput
            style={styles.bioInput}
            placeholder="Your Bio"
            placeholderTextColor="#A0A0A0"
            underlineColorAndroid="transparent" // Membuat garis bawah menjadi transparan
          />
        </View>

        {/* Membuat jarak antara Bio dan Switch to Professional Account */}
        <View style={{ marginTop: 16 }}></View>

        {/* Button untuk perubahan tipe akun */}
        <TouchableOpacity style={styles.changeAccountTypeButton} onPress={handleChangeAccountType}>
          <Text style={styles.changeAccountTypeButtonText}>Switch to Professional Account</Text>
        </TouchableOpacity>

        {/* Membuat jarak antara Switch to Professional Account dan tombol tambahan */}
        <View style={{ marginTop: 16 }}></View>

        {/* Button tambahan pertama */}
        <TouchableOpacity style={styles.additionalButton} onPress={() => {/* Fungsi untuk tombol tambahan pertama */}}>
          <Text style={styles.additionalButtonText}>Personal information settings</Text>
        </TouchableOpacity>

        {/* Membuat jarak antara tombol tambahan pertama dan tombol tambahan kedua */}
        <View style={{ marginTop: 16 }}></View>

        {/* Button tambahan kedua */}
        <TouchableOpacity style={styles.additionalButton} onPress={() => {/* Fungsi untuk tombol tambahan kedua */}}>
          <Text style={styles.additionalButtonText}>Sign up for meta verified</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 16,
  },
  header: {
    backgroundColor: 'white',
    paddingTop: 30,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerImage: {
    width: 35,
    height: 35,
    marginRight: 8,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImageRight: {
    width: 35,
    height: 35,
  },
  profileInfo: {
    marginTop: 24,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  editProfileImage: {
    marginTop: 8,
  },
  editProfileImageText: {
    color: '#0095f6',
    fontSize: 14,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    color: '#A0A0A0',
  },
  usernameInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    fontSize: 16,
    paddingBottom: 8,
  },
  bioInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#A0A0A0',
    fontSize: 16,
    paddingBottom: 8,
    textAlignVertical: 'top',
  },
  // Gaya untuk button perubahan tipe akun
  changeAccountTypeButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginTop: 8,
    paddingVertical: 8,
    alignItems: 'left',
  },
  changeAccountTypeButtonText: {
    color: '#0095f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Garis pemisah
  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginVertical: 16,
  },
  // Gaya untuk button tambahan
  additionalButton: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'left',
  },
  additionalButtonText: {
    color: '#0095f6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditScreen;
