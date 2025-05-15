import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import NavBar from '@components/Navbar';

type DocumentRequest = {
  id: string;
  requestId: number;
  documentType: string;
  purpose: string;
  dateRequested: string;
  fee: string;
  status: 'Pending' | 'Processing' | 'Released';
  dateReleased: string;
};

const DocumentRequestsScreen = () => {
  const requests: DocumentRequest[] = [
    {
      id: '1',
      requestId: 503,
      documentType: 'Barangay Clearance',
      purpose: 'For employment',
      dateRequested: 'April 9, 2025',
      fee: 'Php 50.00',
      status: 'Pending',
      dateReleased: '--',
    },
    {
      id: '2',
      requestId: 502,
      documentType: 'Certificate of Indigency',
      purpose: 'For educational assistance',
      dateRequested: 'March 28, 2025',
      fee: 'Php 50.00',
      status: 'Processing',
      dateReleased: '--',
    },
    {
      id: '3',
      requestId: 501,
      documentType: 'Cedula',
      purpose: 'For business clearance',
      dateRequested: 'March 15, 2025',
      fee: 'Php 250.00',
      status: 'Released',
      dateReleased: 'March 18, 2025',
    },
  ];

  const getStatusColor = (status: DocumentRequest['status']) => {
    switch (status) {
      case 'Pending':
        return '#FFA500';
      case 'Processing':
        return '#1E90FF';
      case 'Released':
        return '#32CD32';
      default:
        return '#666';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Document Requests</Text>
      
      <ScrollView style={styles.requestsContainer}>
        {requests.map((request) => (
          <View key={request.id} style={styles.requestCard}>
            <Text style={styles.requestId}>Request ID: {request.requestId}</Text>
            <Text style={styles.documentType}>{request.documentType}</Text>
            <Text style={styles.purpose}>{request.purpose}</Text>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date Requested:</Text>
              <Text style={styles.detailValue}>{request.dateRequested}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Fee:</Text>
              <Text style={styles.detailValue}>{request.fee}</Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Status:</Text>
              <Text style={[styles.detailValue, { color: getStatusColor(request.status) }]}>
                {request.status}
              </Text>
            </View>
            
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>Date Released:</Text>
              <Text style={styles.detailValue}>{request.dateReleased}</Text>
            </View>
            
            {request.id !== requests[requests.length - 1].id && (
              <View style={styles.divider} />
            )}
          </View>
        ))}
      </ScrollView>
      <NavBar activeScreen="DocumentRequest" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  requestsContainer: {
    flex: 1,
  },
  requestCard: {
    marginBottom: 16,
  },
  requestId: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  documentType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#333',
  },
  purpose: {
    fontSize: 16,
    color: '#444',
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginTop: 16,
  },
});

export default DocumentRequestsScreen;