import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
 SafeAreaView,
 StatusBar,
 ScrollView,
} from 'react-native';

const RulesScreen = ({ navigation }) => {
 return (
  <SafeAreaView style={styles.container}>
   <StatusBar barStyle="light-content" backgroundColor="#0F0F23" />

   <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
     <Text style={styles.backButtonText}>← Back</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>How to Play</Text>
    <View style={styles.placeholder} />
   </View>

   <ScrollView contentContainerStyle={styles.content}>
    <View style={styles.section}>
     <Text style={styles.sectionTitle}>Game Overview</Text>
     <Text style={styles.sectionText}>
      Party Challenge is a fun drinking game where players complete challenges or take drinks.
      Each turn, a player gets a challenge card. They can either complete the challenge to earn points,
      or choose to drink and pass the turn.
     </Text>
    </View>

    <View style={styles.section}>
     <Text style={styles.sectionTitle}>Game Flow</Text>
     <Text style={styles.listItem}>1. Choose your players (2-8 players)</Text>
     <Text style={styles.listItem}>2. Select a difficulty level</Text>
     <Text style={styles.listItem}>3. Players take turns in random order</Text>
     <Text style={styles.listItem}>4. Each turn: Complete challenge or Drink</Text>
     <Text style={styles.listItem}>5. Game ends after all turns are used</Text>
     <Text style={styles.listItem}>6. Player with most points wins!</Text>
    </View>

    <View style={styles.section}>
     <Text style={styles.sectionTitle}>Difficulty Levels</Text>
     <View style={styles.levelInfo}>
      <Text style={[styles.levelTitle, { color: '#10B981' }]}>Easy Mode</Text>
      <Text style={styles.levelText}>Simple challenges, fewer shots, perfect for beginners</Text>
     </View>
     <View style={styles.levelInfo}>
      <Text style={[styles.levelTitle, { color: '#3B82F6' }]}>Normal Mode</Text>
      <Text style={styles.levelText}>Balanced mix of challenges, standard drinking pace</Text>
     </View>
     <View style={styles.levelInfo}>
      <Text style={[styles.levelTitle, { color: '#EF4444' }]}>Hard Mode</Text>
      <Text style={styles.levelText}>Difficult challenges, more shots, for experienced players</Text>
     </View>
     <View style={styles.levelInfo}>
      <Text style={[styles.levelTitle, { color: '#8B5CF6' }]}>Custom Mode</Text>
      <Text style={styles.levelText}>Mix of all challenge types, customizable experience</Text>
     </View>
    </View>

    <View style={styles.section}>
     <Text style={styles.sectionTitle}>Scoring System</Text>
     <Text style={styles.sectionText}>
      • Complete challenge: Earn points shown on card
      • Choose to drink: No points, pass turn
      • Points range: 5-40 depending on difficulty
      • Winner: Player with highest score at game end
      • Losers: Take shots based on ranking
     </Text>
    </View>

    <View style={styles.section}>
     <Text style={styles.sectionTitle}>Safety First!</Text>
     <Text style={styles.sectionText}>
      • Drink responsibly
      • Know your limits
      • Stay hydrated with water
      • Never drink and drive
      • Look out for your friends
      • Non-alcoholic drinks are always an option
     </Text>
    </View>

    <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('HomeScreen')}>
     <Text style={styles.startButtonText}>Got it! Let's Play</Text>
    </TouchableOpacity>
   </ScrollView>
  </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#0F0F23',
 },
 header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderBottomColor: 'rgba(255,255,255,0.1)',
 },
 backButton: {
  padding: 8,
 },
 backButtonText: {
  color: '#A78BFA',
  fontSize: 16,
  fontWeight: '600',
 },
 headerTitle: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
 },
 placeholder: {
  width: 60,
 },
 content: {
  padding: 20,
  paddingBottom: 40,
 },
 section: {
  backgroundColor: 'rgba(255,255,255,0.03)',
  padding: 20,
  borderRadius: 12,
  marginBottom: 20,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.05)',
 },
 sectionTitle: {
  color: '#A78BFA',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 12,
 },
 sectionText: {
  color: '#CBD5E1',
  fontSize: 15,
  lineHeight: 22,
 },
 listItem: {
  color: '#CBD5E1',
  fontSize: 15,
  lineHeight: 24,
  marginBottom: 6,
  paddingLeft: 8,
 },
 levelInfo: {
  marginBottom: 12,
  paddingLeft: 8,
 },
 levelTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 4,
 },
 levelText: {
  color: '#9CA3AF',
  fontSize: 14,
  lineHeight: 20,
 },
 startButton: {
  backgroundColor: '#8B5CF6',
  paddingVertical: 18,
  borderRadius: 14,
  alignItems: 'center',
  borderWidth: 2,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 4,
  borderColor: '#A78BFA',
  borderBottomColor: '#7C3AED',
  marginTop: 20,
 },
 startButtonText: {
  color: '#fff',
  fontSize: 18,
  fontWeight: 'bold',
  textTransform: 'uppercase',
 },
});

export default RulesScreen;
