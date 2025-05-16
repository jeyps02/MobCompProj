import React, { useState, useEffect } from 'react';
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

  // Calendar state
  const [currentDate, setCurrentDate] = useState(new Date(2021, 8, 19)); // Sept 19, 2021
  const [selectedDate, setSelectedDate] = useState(new Date(2021, 8, 19));
  
  // Get filtered events for selected date
  const filteredEvents = events.filter(event => {
    // In a real app, you would parse the date string and compare
    // For now, just check if it contains the day
    return event.date.includes(`Sept ${selectedDate.getDate()}`);
  });

  // Get month display info
  const getMonthData = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay(); // 0 = Sunday
    
    // Month name
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"];
    
    const monthDisplay = `${monthNames[month]} ${year}`;
    
    // Build calendar days
    const days = [];
    let week = Array(7).fill(null);
    
    // Fill in the offset
    for (let i = 0; i < startOffset; i++) {
      week[i] = null;
    }
    
    // Fill in the days
    for (let i = 1; i <= daysInMonth; i++) {
      const dayIndex = (i - 1 + startOffset) % 7;
      week[dayIndex] = i;
      
      if (dayIndex === 6 || i === daysInMonth) {
        days.push([...week]);
        week = Array(7).fill(null);
      }
    }

    return {
      monthDisplay,
      days
    };
  };

  const { monthDisplay, days } = getMonthData(currentDate);
  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Navigation handlers
  const goToPrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  // Day selection handler
  const handleDaySelect = (day: number | null) => {
    if (day !== null) {
      setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
    }
  };
  
  // Check if a day is selected
  const isSelectedDay = (day: number | null) => {
    if (day === null) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear()
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.contentContainer}>
        {/* Calendar Section */}
        <View style={styles.section}>
          <Text style={styles.header}>Barangay Calendar</Text>
          
          <View style={styles.calendarContainer}>
            <View style={styles.monthNavigation}>
              <TouchableOpacity onPress={goToPrevMonth}>
                <Text style={styles.navigationArrow}>{'<'}</Text>
              </TouchableOpacity>
              <Text style={styles.monthHeader}>{monthDisplay}</Text>
              <TouchableOpacity onPress={goToNextMonth}>
                <Text style={styles.navigationArrow}>{'>'}</Text>
              </TouchableOpacity>
            </View>
            
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
                      isSelectedDay(day) && styles.highlightedDay
                    ]}
                    onPress={() => handleDaySelect(day)}
                    disabled={day === null}
                  >
                    <Text style={[
                      styles.dayText,
                      isSelectedDay(day) && styles.highlightedDayText
                    ]}>
                      {day || ''}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>

        {/* Events Section */}
        <View style={styles.eventsSection}>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <View key={event.id} style={styles.eventCardContainer}>
                <View style={styles.eventCard}>
                  <Text style={styles.eventTitle}>{event.title}</Text>
                  <Text style={styles.eventDescription}>{event.description}</Text>
                  <View style={styles.eventDetailRow}>
                    <Text style={styles.eventDetail}>{event.date} at {event.time}</Text>
                  </View>
                  <Text style={styles.eventLocation}>{event.location}</Text>
                </View>
              </View>
            ))
          ) : (
            <View style={styles.noEventsContainer}>
              <Text style={styles.noEventsText}>No events for this day</Text>
            </View>
          )}
        </View>
      </ScrollView>
      
      {/* NavBar outside of ScrollView to span full width */}
      <View style={styles.navbarWrapper}>
        <NavBar activeScreen="Calendar" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    paddingBottom: 100, // Extra padding at bottom for navbar
  },
  section: {
    marginBottom: 30, // Reduced from 50
  },
  eventsSection: {
    marginBottom: 40, // Reduced from 115
    minHeight: 150,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  calendarContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  monthNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  navigationArrow: {
    fontSize: 18,
    color: '#777',
    paddingHorizontal: 10,
  },
  monthHeader: {
    fontSize: 18,
    fontWeight: '600',
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
  eventCardContainer: {
    marginBottom: 12,
  },
  eventCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
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
  noEventsContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    minHeight: 100, // Add minimum height similar to event cards
  },
  noEventsText: {
    fontSize: 16,
    color: '#666',
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

export default Calendar;