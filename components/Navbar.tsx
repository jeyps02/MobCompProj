import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Navbar: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const isActive = (screenName: string) => route.name === screenName;

  return (
    <View style={styles.navbar}>

      <TouchableOpacity
        style={[styles.navButton, isActive('Announcements') && styles.activeButton]}
        onPress={() => navigation.navigate('Announcements')}>
        <Icon name="bullhorn" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, isActive('Calendar') && styles.activeButton]}
        onPress={() => navigation.navigate('Calendar')}>
        <Icon name="calendar" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, isActive('Profile') && styles.activeButton]}
        onPress={() => navigation.navigate('Profile')}>
        <Icon name="account" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, isActive('Lost and Found') && styles.activeButton]}
        onPress={() => navigation.navigate('Lost and Found')}>
        <Icon name="weather-umbrella" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, isActive('Document Requests') && styles.activeButton]}
        onPress={() => navigation.navigate('Document Requests')}>
        <Icon name="file-document" size={30} color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#6200EE',
    paddingVertical: 10,
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#3700B3',
    borderRadius: 5,
    paddingHorizontal: 15,
  },
});

export default Navbar;
