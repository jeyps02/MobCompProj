import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
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
  };

  const pets: Pet[] = [
    {
      id: '1',
      name: 'Whitey',
      type: 'Dog',
      breed: 'Labrador Retriever',
      age: '3 months old',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        <View style={styles.section}>
          <Text style={styles.header}>Profile</Text>
          
          <View style={styles.profileInfo}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{user.name}</Text>
            
            <Text style={styles.label}>Contact no:</Text>
            <Text style={styles.value}>{user.contactNo}</Text>
            
            <Text style={styles.label}>Address:</Text>
            <Text style={styles.value}>{user.address}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.header}>PET RECORDS</Text>
          
          {pets.map((pet) => (
            <View key={pet.id} style={styles.petCard}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petDetail}>{pet.type}</Text>
              <Text style={styles.petDetail}>{pet.breed}</Text>
              <Text style={styles.petDetail}>{pet.age}</Text>
            </View>
          ))}
          
          <TouchableOpacity style={styles.registerButton}>
            <Text style={styles.registerButtonText}>Register Pet</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      {/* NavBar outside of ScrollView to span full width */}
      <View style={styles.navbarWrapper}>
        <NavBar activeScreen="Profile" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 80, // Extra padding to prevent content hiding behind navbar
  },
  section: {
    marginBottom: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  profileInfo: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 16,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#333',
    marginBottom: 12,
  },
  petCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
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
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
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
    backgroundColor: '#0052cc', // Match your navbar background color
  }
});

export default ProfileScreen;