import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
    <SafeAreaView style={styles.container}>
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
  );
};

export default AnnouncementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 16,
    color: '#fff',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#f4f6fb',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
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
});
