import * as React from 'react';
import { Text, View, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const conversationData = [
  {
    id: '1',
    username: 'Reymond',
    message: 'Halo! Bagaimana kabarmu?',
    profileImage: require('./assets/Avatar.png'),
  },
  {
    id: '2',
    username: 'Sania',
    message: 'Sedang Apa Hari Ini??',
    profileImage: require('./assets/Avatar.png'),
  },
  {
    id: '3',
    username: 'Kania',
    message: 'Apakah Anda sibuk hari ini??',
    profileImage: require('./assets/Avatar.png'),
  },
  // Tambahkan percakapan lain di sini
];

function Message({ navigation }) {
  const handleBackPress = () => {
    // Tambahkan logika navigasi ke halaman Home di sini
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Image
            source={require('./assets/back.png')} // Ganti dengan path gambar Anda
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Message</Text>
      </View>

      {/* Kolom Pencarian */}
      <TextInput
        style={styles.searchInput}
        placeholder="Cari pesan..."
        placeholderTextColor="#A0A0A0"
      />

      {/* Daftar Percakapan */}
      <FlatList
        data={conversationData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.conversationItem}>
            <Image source={item.profileImage} style={styles.profileImage} />
            <View style={styles.messageContent}>
              <Text style={styles.username}>{item.username}</Text>
              <Text style={styles.lastMessage}>{item.message}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white', // Warna latar belakang header
    paddingTop: 30, // Mengatur padding atas
    paddingLeft: 16, // Menambahkan padding kiri
    alignItems: 'center', // Mengatur teks ke tengah horizontal
    flexDirection: 'row', // Untuk menyusun komponen horizontal
  },
  headerText: {
    color: 'black', // Warna teks header
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8, // Menambahkan margin kiri dari teks "Massage"
  },
  backButton: {
    padding: 8, // Menambahkan padding untuk area tombol
  },
  headerImage: {
    width: 25,
    height: 25,
  },
  searchInput: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    margin: 16,
    borderRadius: 8,
    fontSize: 16,
  },
  conversationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Membuat gambar profil menjadi bulat
    marginRight: 16,
  },
  messageContent: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    color: '#555',
  },
});

export default Message;