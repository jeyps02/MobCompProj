import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Lost and Found items</Text>
        
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'all' && styles.activeTab]}
            onPress={() => setActiveTab('all')}
          >
            <Text style={[styles.tabText, activeTab === 'all' && styles.activeTabText]}>All</Text>
          </TouchableOpacity>
          
          <View style={styles.tabDivider} />
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'found' && styles.activeTab]}
            onPress={() => setActiveTab('found')}
          >
            <Text style={[styles.tabText, activeTab === 'found' && styles.activeTabText]}>Found</Text>
          </TouchableOpacity>
          
          <View style={styles.tabDivider} />
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'lost' && styles.activeTab]}
            onPress={() => setActiveTab('lost')}
          >
            <Text style={[styles.tabText, activeTab === 'lost' && styles.activeTabText]}>Lost</Text>
          </TouchableOpacity>
        </View>

        <ScrollView 
          style={styles.itemsContainer}
          contentContainerStyle={styles.scrollContent}
        >
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <View key={item.id} style={styles.itemCard}>
                <Text style={styles.itemHeader}>
                  {item.type === 'found' ? 'ITEM FOUND BY:' : 'ITEM LOST BY:'}
                </Text>
                
                <View style={styles.userInfoContainer}>
                  <View style={styles.avatarCircle} />
                  <View style={styles.userInfo}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDateTime}>
                      {item.time} | {item.date}
                    </Text>
                  </View>
                </View>
                
                <Text style={styles.itemDescription}>{item.description}</Text>
                
                {}
                <View style={styles.imagePlaceholder} />
                
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Contact</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={styles.reportButton}>
                    <Text style={styles.reportButtonText}>Report</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.noItemsCard}>
              <Text style={styles.noItemsText}>No items to display</Text>
            </View>
          )}
          
          <View style={styles.bottomSpacer} />
        </ScrollView>
      </View>
      
      {/* FIXED NAVBAR: Moved outside all nested views with stronger styling */}
      <View style={styles.navbarContainer}>
        <NavBar activeScreen="LostAndFound" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 12,
    paddingTop: 12,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    alignSelf: 'flex-start',
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  activeTab: {
    fontWeight: 'bold',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  tabDivider: {
    width: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 8,
    alignSelf: 'center',
    height: '80%',
  },
  itemsContainer: {
    flex: 1,
    width: '100%', 
  },
  scrollContent: {
    paddingBottom: 120, // Match with bottomSpacer height
    alignItems: 'center',
  },
  itemCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12, 
    borderWidth: 1,
    borderColor: '#ddd',
    width: '96%',
    maxWidth: 500, 
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
  userInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDateTime: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },
  itemDescription: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
    lineHeight: 20,
  },
  imagePlaceholder: {
    width: '100%',
    height: 160, 
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 12, 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactButton: {
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    backgroundColor: '#3377ff',
    borderRadius: 4,
    flex: 1,
    alignItems: 'center',
    marginRight: 8,
  },
  reportButton: {
    paddingVertical: 6, 
    paddingHorizontal: 12, 
    backgroundColor: '#3377ff',
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
  navbarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 56,
    backgroundColor: '#0052cc',
    zIndex: 9999,
    elevation: 8, // Android elevation
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderTopWidth: 1,
    borderTopColor: 'rgba(0,0,0,0.1)',
  },
  bottomSpacer: {
    height: 120, // Much larger to ensure proper spacing
  },
  emptyScrollContent: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 300,
  },
  noItemsCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    width: '96%',
    maxWidth: 500,
    alignItems: 'center',
  },
  noItemsText: {
    fontSize: 16,
    color: '#666',
  },
});

export default LostAndFoundScreen;