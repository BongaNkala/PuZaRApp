import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
 SafeAreaView,
 StatusBar,
 Platform,
 Dimensions,
 ImageBackground,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isLargeScreen = width > 414;
const isTablet = width > 768;

const HomeScreen = ({ navigation }) => {
 return (
  <ImageBackground
   source={require('../../assets/images/homescreen.png')}
   style={styles.backgroundImage}
   resizeMode="cover"
  >
   <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

    {/* Dark overlay for better text readability */}
    <View style={styles.overlay} />

    {/* Main content */}
    <View style={styles.content}>
     {/* Header */}
     <View style={styles.header}>
      <Text style={styles.title}>PUZAR</Text>
      <Text style={styles.subtitle}>The Ultimate Party Game</Text>
     </View>

     {/* Buttons Container */}
     <View style={styles.buttonContainer}>
      <TouchableOpacity
       style={[styles.button, styles.createButton]}
       activeOpacity={0.85}
       onPress={() => navigation.navigate('PlayerSetupScreen')}
      >
       <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>ENTER PLAYERS</Text>
        <Text style={styles.buttonSubtext}>Set up player names and teams</Text>
       </View>
      </TouchableOpacity>

      <TouchableOpacity
       style={[styles.button, styles.joinButton]}
       activeOpacity={0.85}
       onPress={() => alert('Join game feature coming soon!')}
      >
       <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>JOIN GAME</Text>
        <Text style={styles.buttonSubtext}>Enter a game code</Text>
       </View>
      </TouchableOpacity>

      <TouchableOpacity
       style={[styles.button, styles.rulesButton]}
       activeOpacity={0.85}
       onPress={() => navigation.navigate('RulesScreen')}
      >
       <View style={styles.buttonContent}>
        <Text style={styles.buttonText}>GAME RULES</Text>
        <Text style={styles.buttonSubtext}>Learn how to play</Text>
       </View>
      </TouchableOpacity>
     </View>

     {/* Footer */}
     <View style={styles.footer}>
      <View style={styles.footerContent}>
       <Text style={styles.footerText}>Ready for some fun?</Text>
       <Text style={styles.footerSubtext}>Enter players or join a game to start</Text>
      </View>
     </View>
    </View>
   </SafeAreaView>
  </ImageBackground>
 );
};

const styles = StyleSheet.create({
 backgroundImage: {
  flex: 1,
  width: '100%',
  height: '100%',
 },
 container: {
  flex: 1,
 },
 overlay: {
  ...StyleSheet.absoluteFillObject,
  backgroundColor: 'rgba(15, 15, 35, 0.7)', // Dark overlay for readability
 },
 content: {
  flex: 1,
  paddingHorizontal: isTablet ? 40 : isSmallScreen ? 20 : 30,
  paddingTop: isTablet ? 60 : isSmallScreen ? 40 : 50,
  paddingBottom: isTablet ? 40 : isSmallScreen ? 20 : 30,
  justifyContent: 'space-between',
 },
 header: {
  alignItems: 'center',
  marginTop: isTablet ? 40 : isSmallScreen ? 20 : 30,
 },
 title: {
  color: '#8B5CF6',
  fontSize: isTablet ? 72 : isLargeScreen ? 64 : isSmallScreen ? 48 : 56,
  fontWeight: '900',
  letterSpacing: 3,
  marginBottom: 10,
  textShadowColor: 'rgba(0, 0, 0, 0.8)',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 10,
 },
 subtitle: {
  color: '#A78BFA',
  fontSize: isTablet ? 24 : isLargeScreen ? 20 : isSmallScreen ? 16 : 18,
  fontWeight: '600',
  letterSpacing: 1,
  textAlign: 'center',
  textShadowColor: 'rgba(0, 0, 0, 0.8)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 5,
  opacity: 0.95,
 },
 buttonContainer: {
  flex: 1,
  justifyContent: 'center',
  gap: isTablet ? 25 : isSmallScreen ? 15 : 20,
  marginTop: isTablet ? 40 : isSmallScreen ? 20 : 30,
 },
 button: {
  alignItems: 'center',
  justifyContent: 'center',
  paddingVertical: isTablet ? 25 : isSmallScreen ? 16 : 20,
  paddingHorizontal: isTablet ? 30 : isSmallScreen ? 20 : 25,
  borderRadius: 20,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 8 },
  shadowOpacity: 0.4,
  shadowRadius: 15,
  elevation: 12,
  borderWidth: 2,
  borderColor: 'rgba(255, 255, 255, 0.15)',
  backgroundColor: 'rgba(15, 15, 35, 0.85)', // Semi-transparent dark background
 },
 buttonContent: {
  alignItems: 'center',
 },
 createButton: {
  borderColor: '#8B5CF6',
  backgroundColor: 'rgba(139, 92, 246, 0.25)',
 },
 joinButton: {
  borderColor: 'rgba(255, 255, 255, 0.3)',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
 },
 rulesButton: {
  borderColor: 'rgba(245, 158, 11, 0.5)',
  backgroundColor: 'rgba(245, 158, 11, 0.15)',
 },
 buttonText: {
  color: '#FFF',
  fontSize: isTablet ? 22 : isSmallScreen ? 16 : 18,
  fontWeight: '800',
  letterSpacing: 1,
  marginBottom: 4,
  textShadowColor: 'rgba(0, 0, 0, 0.5)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 3,
 },
 buttonSubtext: {
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: isTablet ? 15 : isSmallScreen ? 12 : 13,
  fontWeight: '500',
  textAlign: 'center',
  textShadowColor: 'rgba(0, 0, 0, 0.5)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 2,
 },
 footer: {
  marginTop: 'auto',
  paddingTop: 20,
  borderTopWidth: 1,
  borderTopColor: 'rgba(255, 255, 255, 0.2)',
 },
 footerContent: {
  alignItems: 'center',
 },
 footerText: {
  color: '#FFF',
  fontSize: isTablet ? 20 : isSmallScreen ? 16 : 18,
  fontWeight: '700',
  marginBottom: 5,
  textShadowColor: 'rgba(0, 0, 0, 0.8)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 5,
 },
 footerSubtext: {
  color: 'rgba(255, 255, 255, 0.9)',
  fontSize: isTablet ? 16 : isSmallScreen ? 13 : 14,
  fontWeight: '500',
  textAlign: 'center',
  textShadowColor: 'rgba(0, 0, 0, 0.8)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 3,
 },
});

export default HomeScreen;
