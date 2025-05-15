import React, { useEffect, useState } from "react";
import { View, StyleSheet, Animated } from "react-native";
import { useRouter } from "expo-router";
import Logo from "@/components/Logo"; 
import { ThemedText } from "@/components/ThemedText";

const SplashScreen: React.FC = () => {
  const router = useRouter();
  const [opacity] = useState(new Animated.Value(1));
  const [progressWidth] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progressWidth, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        router.replace("/Announcements"); 
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity }]}>
      <View style={styles.logoContainer}>
        <Logo style={styles.logo} />
        <ThemedText type="title" style={styles.title}>
          Barangay Hub
        </ThemedText>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBackground}>
          <Animated.View
            style={[
              styles.progressBar,
              {
                width: progressWidth.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0%", "100%"],
                }),
              },
            ]}
          />
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    alignItems: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
  title: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "bold",
  },
  progressContainer: {
    marginTop: 24,
    width: "80%",
  },
  progressBackground: {
    height: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#4a90e2",
    borderRadius: 4,
  },
});

export default SplashScreen;
