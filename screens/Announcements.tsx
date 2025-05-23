import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '@components/Navbar';

const announcements = [
  {
    id: 1,
    time: '8:00 AM | Jan 10, 2025',
    title: 'Electricity outage',
    message:
      'Mula sa Meralco, magkakaroon ng Temporary Electric Power Interruption sa ating barangay sa January 16 at 17, 2025 mula 11:30 PM - 1:30 AM',
  },
  {
    id: 2,
    time: '8:00 AM | Jan 10, 2025',
    title: 'Electricity outage',
    message:
      'Mula sa Meralco, magkakaroon ng Temporary Electric Power Interruption sa ating barangay sa January 16 at 17, 2025 mula 11:30 PM - 1:30 AM',
  },
];

const AnnouncementsScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.contentContainer}>
        <Text style={styles.header}>Announcements</Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {announcements.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
              <View style={styles.imagePlaceholder} />
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>

      {}
      <View style={styles.navbarWrapper}>
        <NavBar activeScreen="Announcements" />
      </View>
    </View>
  );
};

export default AnnouncementsScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 30,
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 70,
  },
  card: {
    backgroundColor: '#F1F4FF',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
  },
  time: {
    fontSize: 12,
    color: '#333',
    marginBottom: 4,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  message: {
    fontSize: 13,
    color: '#333',
    marginBottom: 8,
  },
  imagePlaceholder: {
    height: 100,
    backgroundColor: '#d3d3d3',
    borderRadius: 4,
  },
  navbarWrapper: {
    width: '100%',
    backgroundColor: '#0052cc',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
