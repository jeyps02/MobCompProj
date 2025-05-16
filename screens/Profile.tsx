import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import NavBar from '@components/Navbar';

type Pet = {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: string;
};

const ProfileScreen = () => {
  const user = {
    name: 'Angelo Quirino Lahoz',
    contactNo: '09123456789',
    address: '938 Aurora Blvd, Cubao, Quezon City, 1109 Metro Manila',
    profilePicture: 'https://via.placeholder.com/150', // Placeholder for profile picture
  };

  const pets: Pet[] = [
    {
      id: '1',
      name: 'Whitey',
      type: 'Dog',
      breed: 'Labrador Retriever',
      age: '3 months old',
    },
    {
      id: '2',
      name: 'Mittens',
      type: 'Cat',
      breed: 'Persian',
      age: '2 years old',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      {/* Screen Title */}
      <View style={styles.screenTitleContainer}>
        <Text style={styles.screenTitle}>Profile</Text>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Image source={{ uri: user.profilePicture }} style={styles.profilePicture} />
        <Text style={styles.profileName}>{user.name}</Text>
        <Text style={styles.profileContact}>{user.contactNo}</Text>
        <Text style={styles.profileAddress}>{user.address}</Text>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        {/* Pet Records Section */}
        <View style={styles.section}>
          <Text style={styles.headerTitle}>Pet Records</Text>

          {pets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petDetail}>{`Type: ${pet.type}`}</Text>
              <Text style={styles.petDetail}>{`Breed: ${pet.breed}`}</Text>
              <Text style={styles.petDetail}>{`Age: ${pet.age}`}</Text>
            </View>
          ))}

          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>+ Register New Pet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* NavBar */}
      <View style={styles.navbarWrapper}>
        <NavBar activeScreen="Profile" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f7f8fc',
  },
  screenTitleContainer: {
    backgroundColor: '#fff',
    padding: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  screenTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
    backgroundColor: '#fff', // White background
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 16,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#000',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  profileContact: {
    fontSize: 16,
    color: '#000',
    marginBottom: 4,
  },
  profileAddress: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    maxWidth: 250,
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 80, // To prevent overlap with navbar
  },
  section: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  petCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  petDetail: {
    fontSize: 16,
    color: '#444',
    marginBottom: 4,
  },
  registerButton: {
    backgroundColor: '#FF9149', // Matches the register button color from the Login screen
    width: 200, // Matches the width from the Login screen
    height: 50, // Matches the height from the Login screen
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 8,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navbarWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#0052cc',
  },
});

export default ProfileScreen;