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
      time: '11:01 AM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: '2',
      type: 'lost',
      name: 'Odella Abraham',
      date: 'Mar 02, 2025',
      time: '9:29 PM',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? items 
    : items.filter(item => item.type === activeTab);

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'all' && styles.activeTab]}
          onPress={() => setActiveTab('all')}
        >
          <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>All</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'found' && styles.activeTab]}
          onPress={() => setActiveTab('found')}
        >
          <Text style={[styles.tabText, activeTab === 'found' && styles.activeTabText]}>Found</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'lost' && styles.activeTab]}
          onPress={() => setActiveTab('lost')}
        >
          <Text style={[styles.tabText, activeTab === 'lost' && styles.activeTabText]}>Lost</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.itemsContainer}>
        {filteredItems.map((item) => (
          <View key={item.id} style={styles.itemCard}>
            <Text style={styles.itemHeader}>
              {item.type === 'found' ? 'ITEM FOUND BY:' : 'ITEM LOST BY:'}
            </Text>
            
            <Text style={styles.itemName}>{item.name}</Text>
            
            <Text style={styles.itemDateTime}>
              {item.time} | {item.date}
            </Text>
            
            <Text style={styles.itemDescription}>{item.description}</Text>
            
            <TouchableOpacity style={styles.reportButton}>
              <Text style={styles.reportButtonText}>Report</Text>
            </TouchableOpacity>
            
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
      <NavBar activeScreen="LostAndFound" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  itemsContainer: {
    flex: 1,
  },
  itemCard: {
    marginBottom: 16,
  },
  itemHeader: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  itemDateTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  itemDescription: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    lineHeight: 24,
  },
  reportButton: {
    alignSelf: 'flex-start',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 16,
  },
  reportButtonText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
});

export default LostAndFoundScreen;