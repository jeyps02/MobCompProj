import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

const Navbar: React.FC = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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
        style={[styles.navButton, isActive('LostAndFound') && styles.activeButton]}
        onPress={() => navigation.navigate('LostAndFound')}>
        <Icon name="weather-umbrella" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.navButton, isActive('DocumentRequest') && styles.activeButton]}
        onPress={() => navigation.navigate('DocumentRequest')}>
        <Icon name="file-document" size={30} color="#fff" /> 
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#004AAD',
    paddingVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#2165C1',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});

export default Navbar;
