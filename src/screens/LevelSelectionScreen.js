import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
 SafeAreaView,
 StatusBar,
 ScrollView,
 Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const LevelSelectionScreen = ({ navigation, route }) => {
 const players = route.params?.players || [
  { id: 1, name: 'You', score: 0 },
  { id: 2, name: 'Alex', score: 0 },
  { id: 3, name: 'Sam', score: 0 },
  { id: 4, name: 'Taylor', score: 0 },
 ];

 const levels = [
  {
   id: 'easy',
   title: 'Easy Mode',
   subtitle: 'Chill & Fun',
   description: 'Simple challenges, lower points, perfect for beginners or casual play.',
   color: '#10B981',
   borderColor: '#34D399',
   darkColor: '#059669',
   icon: '',
   features: [
    '• Simple, fun challenges',
    '• Lower point values (5-15 pts)',
    '• Fewer physical activities',
    '• Perfect for beginners',
    '• Casual drinking pace'
   ],
   turnsPerPlayer: 5,
   cardSet: 'easy'
  },
  {
   id: 'normal',
   title: 'Normal Mode',
   subtitle: 'Balanced Challenge',
   description: 'Mix of creativity, trivia, and physical challenges. The classic experience.',
   color: '#3B82F6',
   borderColor: '#60A5FA',
   darkColor: '#1D4ED8',
   icon: '',
   features: [
    '• Balanced mix of challenges',
    '• Moderate point values (10-25 pts)',
    '• Some physical activities',
    '• Good for regular players',
    '• Standard drinking pace'
   ],
   turnsPerPlayer: 7,
   cardSet: 'normal'
  },
  {
   id: 'hard',
   title: 'Hard Mode',
   subtitle: 'Intense & Wild',
   description: 'Difficult challenges, high stakes, and wild dares. Not for the faint-hearted!',
   color: '#EF4444',
   borderColor: '#F87171',
   darkColor: '#DC2626',
   icon: '���',
   features: [
    '• Difficult challenges',
    '• High point values (15-30 pts)',
    '• More physical activities',
    '• Wild dares included',
    '• Fast drinking pace'
   ],
   turnsPerPlayer: 10,
   cardSet: 'hard'
  },
  {
   id: 'custom',
   title: 'Custom Mode',
   subtitle: 'Create Your Own',
   description: 'Mix and match from all card sets. Set your own rules and turn limits.',
   color: '#8B5CF6',
   borderColor: '#A78BFA',
   darkColor: '#7C3AED',
   icon: '⚙️',
   features: [
    '• Mix cards from all levels',
    '• Custom turn limit',
    '• Adjust point multipliers',
    '• Create unique rules',
    '• Full control'
   ],
   turnsPerPlayer: 8,
   cardSet: 'mixed'
  },
 ];

 const handleLevelSelect = (level) => {
  navigation.navigate('GameScreen', {
   players,
   level: level.id,
   turnsPerPlayer: level.turnsPerPlayer,
   cardSet: level.cardSet,
   levelName: level.title
  });
 };

 return (
  <SafeAreaView style={styles.container}>
   <StatusBar barStyle="light-content" backgroundColor="#0F0F23" />

   <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
     <Text style={styles.backButtonText}>← Back</Text>
    </TouchableOpacity>
    <Text style={styles.headerTitle}>Choose Level</Text>
    <View style={styles.playerCount}>
     <Text style={styles.playerCountText}>{players.length} players</Text>
    </View>
   </View>

   <ScrollView contentContainerStyle={styles.content}>
    <View style={styles.intro}>
     <Text style={styles.introTitle}>Select Your Challenge Level</Text>
     <Text style={styles.introText}>
      Each level offers different challenges, point values, and intensity.
      Choose based on your group's mood and experience!
     </Text>
    </View>

    {levels.map((level) => (
     <TouchableOpacity
      key={level.id}
      style={[styles.levelCard, { borderColor: level.borderColor }]}
      onPress={() => handleLevelSelect(level)}
     >
      <View style={styles.levelHeader}>
       <View style={styles.levelIconContainer}>
        <Text style={styles.levelIcon}>{level.icon}</Text>
       </View>
       <View style={styles.levelTitleContainer}>
        <Text style={[styles.levelTitle, { color: level.color }]}>
         {level.title}
        </Text>
        <Text style={styles.levelSubtitle}>{level.subtitle}</Text>
       </View>
      </View>

      <Text style={styles.levelDescription}>{level.description}</Text>

      <View style={styles.features}>
       {level.features.map((feature, index) => (
        <Text key={index} style={styles.featureText}>
         {feature}
        </Text>
       ))}
      </View>

      <View style={styles.levelFooter}>
       <View style={styles.turnsBadge}>
        <Text style={styles.turnsText}>{level.turnsPerPlayer} turns/player</Text>
       </View>
       <View style={[styles.selectButton, { backgroundColor: level.color }]}>
        <Text style={styles.selectButtonText}>Select</Text>
       </View>
      </View>
     </TouchableOpacity>
    ))}

    <View style={styles.note}>
     <Text style={styles.noteTitle}>Note:</Text>
     <Text style={styles.noteText}>
      You can always customize players by going back to the main menu.
      The game will remember your player setup.
     </Text>
    </View>
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
 playerCount: {
  backgroundColor: 'rgba(139, 92, 246, 0.2)',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: 'rgba(167, 139, 250, 0.3)',
 },
 playerCountText: {
  color: '#A78BFA',
  fontWeight: '600',
  fontSize: 14,
 },
 content: {
  padding: 20,
  paddingBottom: 40,
 },
 intro: {
  backgroundColor: 'rgba(167, 139, 250, 0.1)',
  padding: 16,
  borderRadius: 12,
  marginBottom: 24,
  borderWidth: 1,
  borderColor: 'rgba(167, 139, 250, 0.3)',
 },
 introTitle: {
  color: '#A78BFA',
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 8,
 },
 introText: {
  color: '#CBD5E1',
  fontSize: 14,
  lineHeight: 20,
 },
 levelCard: {
  backgroundColor: 'rgba(255,255,255,0.03)',
  borderRadius: 16,
  padding: 20,
  marginBottom: 20,
  borderWidth: 2,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 4,
 },
 levelHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
 },
 levelIconContainer: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: 'rgba(255,255,255,0.1)',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 12,
 },
 levelIcon: {
  fontSize: 24,
 },
 levelTitleContainer: {
  flex: 1,
 },
 levelTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 2,
 },
 levelSubtitle: {
  color: '#9CA3AF',
  fontSize: 14,
 },
 levelDescription: {
  color: '#CBD5E1',
  fontSize: 15,
  lineHeight: 22,
  marginBottom: 16,
 },
 features: {
  marginBottom: 20,
 },
 featureText: {
  color: '#9CA3AF',
  fontSize: 14,
  lineHeight: 20,
  marginBottom: 4,
 },
 levelFooter: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
 },
 turnsBadge: {
  backgroundColor: 'rgba(255,255,255,0.05)',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: 'rgba(255,255,255,0.1)',
 },
 turnsText: {
  color: '#CBD5E1',
  fontSize: 14,
  fontWeight: '600',
 },
 selectButton: {
  paddingHorizontal: 20,
  paddingVertical: 10,
  borderRadius: 12,
  borderWidth: 2,
  borderTopWidth: 1,
  borderLeftWidth: 1,
  borderRightWidth: 1,
  borderBottomWidth: 4,
  borderColor: 'rgba(255,255,255,0.2)',
  borderBottomColor: 'rgba(0,0,0,0.3)',
 },
 selectButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
 },
 note: {
  backgroundColor: 'rgba(59, 130, 246, 0.1)',
  padding: 16,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: 'rgba(59, 130, 246, 0.3)',
  marginTop: 10,
 },
 noteTitle: {
  color: '#3B82F6',
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 8,
 },
 noteText: {
  color: '#CBD5E1',
  fontSize: 14,
  lineHeight: 20,
 },
});

export default LevelSelectionScreen;
