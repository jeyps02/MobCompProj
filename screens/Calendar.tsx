import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import NavBar from '@components/Navbar';

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
};

const Calendar = () => {
  // Sample data
  const events: Event[] = [
    {
      id: '1',
      title: 'Earthquake Drill',
      description: 'Practice for disaster preparedness',
      date: 'Sept 19',
      time: '9:30 AM',
      location: 'Village 1',
    },
    {
      id: '2',
      title: 'Basketball League',
      description: 'Semifinals: Team A v.s. Team B',
      date: 'Sept 19',
      time: '5:30 PM',
      location: 'Main covered court',
    },
  ];

  // Calendar data for September 2021
  const month = 'September 2021';
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const days = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, null, null, null, null],
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Calendar Section */}
      <View style={styles.section}>
        <Text style={styles.header}>Barangay Calendar</Text>
        
        <Text style={styles.monthHeader}>{month}</Text>
        
        {/* Weekday headers */}
        <View style={styles.weekDaysContainer}>
          {weekDays.map((day) => (
            <Text key={day} style={styles.weekDay}>{day}</Text>
          ))}
        </View>
        
        {/* Calendar days */}
        {days.map((week, weekIndex) => (
          <View key={`week-${weekIndex}`} style={styles.weekRow}>
            {week.map((day, dayIndex) => (
              <TouchableOpacity 
                key={`day-${weekIndex}-${dayIndex}`} 
                style={[
                  styles.dayCell, 
                  day === 19 && styles.highlightedDay // Highlight Sept 19
                ]}
              >
                <Text style={[
                  styles.dayText,
                  day === 19 && styles.highlightedDayText
                ]}>
                  {day || ''}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      {/* Events Section */}
      <View style={styles.section}>
        {events.map((event) => (
          <View key={event.id}>
            <View style={styles.eventCard}>
              <Text style={styles.eventTitle}>{event.title}</Text>
              <Text style={styles.eventDescription}>{event.description}</Text>
              <View style={styles.eventDetailRow}>
                <Text style={styles.eventDetail}>{event.date} at {event.time}</Text>
              </View>
              <Text style={styles.eventLocation}>{event.location}</Text>
            </View>
            {event.id !== events[events.length - 1].id && (
              <View style={styles.divider} />
            )}
          </View>
        ))}
      </View>
      <NavBar activeScreen="Calendar" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  monthHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#444',
    textAlign: 'center',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  weekDay: {
    width: 40,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
    color: '#666',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 8,
  },
  dayCell: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
    color: '#333',
  },
  highlightedDay: {
    backgroundColor: '#007AFF',
  },
  highlightedDayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  eventCard: {
    paddingVertical: 12,
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  eventDescription: {
    fontSize: 16,
    color: '#444',
    marginBottom: 8,
  },
  eventDetailRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  eventDetail: {
    fontSize: 14,
    color: '#666',
  },
  eventLocation: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 12,
  },
});

export default Calendar;