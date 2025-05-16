import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import NavBar from '@components/Navbar';

type Item = {
  id: string;
  type: 'found' | 'lost';
  name: string;
  date: string;
  time: string;
  description: string;
};

const LostAndFoundScreen = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'found' | 'lost'>('all');

  const items: Item[] = [
    {
      id: '1',
      type: 'found',
      name: 'Kelly Jaudian',
      date: 'Apr 29, 2025',
      time: '11:21 AM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: '2',
      type: 'lost',
      name: 'Odella Abraham',
      date: 'Mar 02, 2025',
      time: '9:29 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(item => item.type === activeTab);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Lost and Found Items</Text>
        
        <View style={styles.tabsContainer}>
          {['all', 'found', 'lost'].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.activeTab]}
              onPress={() => setActiveTab(tab as 'all' | 'found' | 'lost')}
            >
              <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <ScrollView 
          style={styles.itemsContainer}
          contentContainerStyle={styles.scrollContent}
        >
          {filteredItems.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Text style={styles.itemHeader}>
                {item.type === 'found' ? 'ITEM FOUND BY:' : 'ITEM LOST BY:'}
              </Text>
              <View style={styles.userInfoContainer}>
                <View style={styles.avatarCircle} />
                <View>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDateTime}>
                    {`${item.time} | ${item.date}`}
                  </Text>
                </View>
              </View>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <View style={styles.imagePlaceholder}>
                <Text style={styles.imagePlaceholderText}>Image Placeholder</Text>
              </View>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.contactButton}>
                  <Text style={styles.contactButtonText}>Contact</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.reportButton}>
                  <Text style={styles.reportButtonText}>Report</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
      {/* NavBar is placed here to ensure it is always rendered */}
      <NavBar activeScreen="LostAndFound" />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  itemsContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
  },
  itemCard: {
    marginBottom: 16,
    backgroundColor: '#F1F4FF',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  itemHeader: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginRight: 12,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDateTime: {
    fontSize: 13,
    color: '#666',
  },
  itemDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 12,
  },
  imagePlaceholder: {
    width: '100%',
    height: 160,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagePlaceholderText: {
    color: '#666',
    fontStyle: 'italic',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#004AAD',
    borderRadius: 4,
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
  },
  reportButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#FF9149',
    borderRadius: 4,
    flex: 1,
    alignItems: 'center',
    marginLeft: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reportButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LostAndFoundScreen;