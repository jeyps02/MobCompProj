import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';
import { supabase } from '@lib/supabase';

const Login = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!email.includes('@')) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      // Check if email is verified
      if (data.user && !data.user.email_confirmed_at) {
        await supabase.auth.signOut();
        Alert.alert(
          "Email Not Verified",
          "Please verify your email before logging in.",
          [
            {
              text: "Resend Verification",
              onPress: () => resendVerificationEmail(email)
            },
            { 
              text: "OK",
              onPress: () => navigation.navigate('Register') 
            }
          ]
        );
        return;
      }

      navigation.replace('Announcements');
    } catch (error: any) {
      console.error('Login error:', error);
      
      let errorMessage = "Invalid email or password";
      if (error.message.includes("Invalid login credentials")) {
        errorMessage = "The email or password you entered is incorrect";
      } else if (error.message.includes("Email not confirmed")) {
        errorMessage = "Please verify your email first";
      }

      Alert.alert(
        "Login Failed",
        errorMessage,
        [
          { 
            text: "Reset Password", 
            onPress: () => handlePasswordReset(email) 
          },
          { text: "Try Again" }
        ]
      );
    } finally {
      setLoading(false);
    }
  };

  const resendVerificationEmail = async (email: string) => {
    try {
      const { error } = await supabase.auth.resend({
        type: 'signup',
        email,
        options: {
          emailRedirectTo: 'yourapp://login-verified' // Add your deep link
        }
      });

      if (error) throw error;

      Alert.alert(
        "Verification Sent",
        `We've resent the verification email to ${email}. Please check your inbox.`
      );
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.message || "Failed to resend verification email"
      );
    }
  };

  const handlePasswordReset = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'yourapp://reset-password' // Add your deep link
      });

      if (error) throw error;

      Alert.alert(
        "Password Reset Sent",
        `If ${email} is registered, you'll receive a password reset link.`
      );
    } catch (error: any) {
      Alert.alert(
        "Error",
        error.message || "Failed to send password reset"
      );
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#004AAD" />
          <Text style={styles.loadingText}>Signing in...</Text>
        </View>
      )}

      <Image 
        source={require('@assets/residensync.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.formContainer}>
        <Text style={styles.sectionTitle}>Email *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          editable={!loading}
        />

        <Text style={styles.sectionTitle}>Password *</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!loading}
        />

        <TouchableOpacity 
          style={styles.forgotPassword}
          onPress={() => handlePasswordReset(email)}
          disabled={loading || !email}
        >
          <Text style={[styles.forgotPasswordText, (!email || loading) && styles.disabledText]}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.loginButton, (loading || !email || !password) && styles.disabledButton]} 
          onPress={handleLogin}
          disabled={loading || !email || !password}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Log in</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.registerButton, loading && styles.disabledButton]}
          onPress={() => navigation.navigate('Register')}
          disabled={loading}
        >
          <Text style={styles.registerButtonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  loadingText: {
    marginTop: 10,
    color: '#004AAD',
    fontSize: 16,
  },
  logo: {
    width: '50%',
    height: 120,
    marginBottom: 40,
    alignSelf: 'center',
  },
  formContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    backgroundColor: '#F1F4FF',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 20,
    fontSize: 16,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#000',
    fontSize: 14,
  },
  disabledText: {
    opacity: 0.5,
  },
  buttonContainer: {
    marginTop: 16,
  },
  loginButton: {
    backgroundColor: '#004AAD',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#FF9149',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    opacity: 0.6,
  },
});

export default Login;