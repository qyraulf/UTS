import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';

function HomeScreen() {
  const navigation = useNavigation(); // Dapatkan objek navigasi

  const handleIcon1Click = () => {
    // Handle the left image click (Navigate to the 'Massage' screen)
    navigation.navigate('Massage'); // 'Massage' adalah nama rute halaman pesan
  };

  const handleEditProfileClick = () => {
    // Handle the Edit Profile button click (Navigate to the 'Profile' screen)
    navigation.navigate('Edit'); // 'Profile' adalah nama rute halaman profil
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        
        <View style={styles.headerTextContainer}>
          <Image
          source={require('./assets/back.png')} // Ganti dengan path gambar Anda
          style={styles.headerImage}
        />
          <Text style={styles.headerText}>Username</Text>
          <Image
            source={require('./assets/Verified.png')} // Ganti dengan path gambar Anda
            style={styles.headerVerifiedImage}
          />
        </View>
        
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={handleIcon1Click}>
            <Image
              source={require('./assets/chat.png')} // Replace with your left image
              style={styles.headerImage}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleTitikClick()}>
            <Image
              source={require('./assets/titik.png')} // Replace with your right image
              style={styles.headerImage}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile */}
      <View style={styles.profileContainer}>
        {/* Profile Image and Stats */}
        <View style={styles.imageStatsContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={require('./assets/Avatar.png')}
              style={styles.profileImage}
            />
          </View>

          {/* Post, Followers, and Following */}
          <View style={styles.statsContainer}>
            <View style={styles.statsItem}>
              <Text style={styles.statsNumber}>10</Text>
              <Text style={styles.statsText}>Posts</Text>
            </View>
            <View style={styles.statsItem}>
              <Text style={styles.statsNumber}>100</Text>
              <Text style={styles.statsText}>Followers</Text>
            </View>
            <View style={styles.statsItem}>
              <Text style={styles.statsNumber}>50</Text>
              <Text style={styles.statsText}>Following</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Edit and Share Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.editButton} onPress={handleEditProfileClick}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Share Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.shareButton}>
          {/* Replace the Text with an Image */}
          <Image
            source={require('./assets/icons8-profile.png')} // Replace with the path to your image
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    marginTop: 20, // Mengatur jarak dari atas
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerImage: {
    width: 25,
    height: 25,
    marginHorizontal: 8,
  },
  headerVerifiedImage: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  imageStatsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginRight: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60, // Make it half of the width and height for a circular image
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between', // This will evenly space the items
  },
  statsItem: {
    alignItems: 'center',
  },
  statsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statsText: {
    fontSize: 14,
    color: 'black', // Change text color to black
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  editButton: {
    flex: 1,
    marginRight: 8,
    backgroundColor: '#EFEFEF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
  },
  shareButton: {
    flex: 0.2,
    marginLeft: 8,
    backgroundColor: '#EFEFEF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
  },
  buttonText: {
    color: 'black', // Change text color to black
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Style for the Image in the Share Button
  buttonImage: {
    width: 24, // Adjust the width and height as needed
    height: 24,
  },
});

export default HomeScreen;