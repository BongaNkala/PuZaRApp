import React, { useState } from 'react';
import {
 View,
 Text,
 StyleSheet,
 TextInput,
 TouchableOpacity,
 FlatList,
 SafeAreaView,
 Alert,
 Dimensions,
 ImageBackground,
 Animated,
 KeyboardAvoidingView,
 Platform,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const isSmallScreen = width < 375;

const PlayerSetupScreen = ({ navigation, route }) => {
 const [players, setPlayers] = useState(['Player 1', 'Player 2', '', '']);
 const [focusedInput, setFocusedInput] = useState(null);
 const fadeAnim = useState(new Animated.Value(0))[0];

 React.useEffect(() => {
  Animated.timing(fadeAnim, {
   toValue: 1,
   duration: 800,
   useNativeDriver: true,
  }).start();
 }, []);

 const handlePlayerChange = (text, index) => {
  const newPlayers = [...players];
  newPlayers[index] = text;
  setPlayers(newPlayers);
 };

 const addPlayerField = () => {
  if (players.length < 8) {
   const newPlayers = [...players, ''];
   setPlayers(newPlayers);
   
   // Animate the addition
   fadeAnim.setValue(0);
   Animated.timing(fadeAnim, {
    toValue: 1,
    duration: 300,
    useNativeDriver: true,
   }).start();
  } else {
   Alert.alert('Maximum Players', 'You can add up to 8 players maximum.');
  }
 };

 const removePlayerField = (index) => {
  if (players.length > 2) {
   const newPlayers = [...players];
   newPlayers.splice(index, 1);
   setPlayers(newPlayers);
  } else {
   Alert.alert('Minimum Players', 'You need at least 2 players to play.');
  }
 };

 const startGame = () => {
  const validPlayers = players.filter(name => name.trim() !== '');
  
  if (validPlayers.length < 2) {
   Alert.alert(
    'Not Enough Players',
    'Please add at least 2 players to start the game.',
    [{ text: 'OK', style: 'default' }]
   );
   return;
  }

  // Check for duplicate names
  const uniquePlayers = [...new Set(validPlayers)];
  if (uniquePlayers.length !== validPlayers.length) {
   Alert.alert(
    'Duplicate Names',
    'Please use unique names for each player.',
    [{ text: 'OK', style: 'default' }]
   );
   return;
  }

  // Navigate to GameModeScreen with players
  navigation.navigate('GameModeScreen', { players: validPlayers });
 };

 const renderPlayerInput = ({ item, index }) => (
  <Animated.View 
   style={[
    styles.playerCard,
    { 
     opacity: fadeAnim,
     transform: [{
      translateY: fadeAnim.interpolate({
       inputRange: [0, 1],
       outputRange: [50, 0]
      })
     }]
    }
   ]}
  >
   <View style={styles.cardHeader}>
    <View style={styles.playerNumber}>
     <Text style={styles.playerNumberText}>{index + 1}</Text>
    </View>
    <Text style={styles.playerLabel}>PLAYER {index + 1}</Text>
    {players.length > 2 && (
     <TouchableOpacity
      style={styles.removeButton}
      onPress={() => removePlayerField(index)}
      activeOpacity={0.7}
     >
      <Text style={styles.removeButtonText}>✕</Text>
     </TouchableOpacity>
    )}
   </View>

   <TextInput
    style={[
     styles.playerInput,
     focusedInput === index && styles.focusedInput,
     item.trim() !== '' && styles.filledInput
    ]}
    placeholder={`Enter name for Player ${index + 1}`}
    placeholderTextColor="#94A3B8"
    value={item}
    onChangeText={(text) => handlePlayerChange(text, index)}
    onFocus={() => setFocusedInput(index)}
    onBlur={() => setFocusedInput(null)}
    maxLength={20}
    autoCapitalize="words"
    returnKeyType={index === players.length - 1 ? "done" : "next"}
    blurOnSubmit={false}
   />

   {item.trim() !== '' && (
    <View style={styles.readyIndicator}>
     <Text style={styles.readyText}>✓ READY</Text>
    </View>
   )}
  </Animated.View>
 );

 const readyPlayers = players.filter(name => name.trim() !== '').length;

 return (
  <ImageBackground
   source={require('../../assets/images/background.jpg')}
   style={styles.backgroundImage}
   resizeMode="cover"
  >
   <SafeAreaView style={styles.container}>
    <View style={styles.overlay} />
    
    <KeyboardAvoidingView
     style={styles.content}
     behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
     {/* Header */}
     <View style={styles.header}>
      <Text style={styles.title}>SETUP PLAYERS</Text>
      <Text style={styles.subtitle}>Add 2-8 players to begin your adventure</Text>
      
      <View style={styles.statsContainer}>
       <View style={styles.statBox}>
        <Text style={styles.statNumber}>{readyPlayers}</Text>
        <Text style={styles.statLabel}>READY</Text>
       </View>
       <View style={styles.statDivider} />
       <View style={styles.statBox}>
        <Text style={styles.statNumber}>{players.length}</Text>
        <Text style={styles.statLabel}>TOTAL</Text>
       </View>
       <View style={styles.statDivider} />
       <View style={styles.statBox}>
        <Text style={styles.statNumber}>{8 - players.length}</Text>
        <Text style={styles.statLabel}>SLOTS LEFT</Text>
       </View>
      </View>
     </View>

     {/* Players List */}
     <FlatList
      data={players}
      renderItem={renderPlayerInput}
      keyExtractor={(item, index) => `player-${index}`}
      contentContainerStyle={styles.playersList}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={
       players.length < 8 ? (
        <TouchableOpacity
         style={styles.addPlayerButton}
         onPress={addPlayerField}
         activeOpacity={0.8}
        >
         <Text style={styles.addButtonIcon}>+</Text>
         <Text style={styles.addButtonText}>ADD ANOTHER PLAYER</Text>
         <Text style={styles.addButtonSubtext}>Up to 8 players total</Text>
        </TouchableOpacity>
       ) : null
      }
     />

     {/* Footer with Action Button */}
     <View style={styles.footer}>
      <View style={styles.footerInfo}>
       <Text style={styles.footerTitle}>
        {readyPlayers >= 2 ? 'READY TO CONTINUE!' : 'NEED MORE PLAYERS'}
       </Text>
       <Text style={styles.footerSubtitle}>
        {readyPlayers >= 2 
         ? `All set with ${readyPlayers} players!`
         : `Add ${2 - readyPlayers} more player${2 - readyPlayers === 1 ? '' : 's'} to continue`
        }
       </Text>
      </View>

      <TouchableOpacity
       style={[
        styles.continueButton,
        readyPlayers < 2 && styles.disabledButton
       ]}
       onPress={startGame}
       disabled={readyPlayers < 2}
       activeOpacity={0.8}
      >
       <Text style={styles.continueButtonText}>
        {readyPlayers >= 2 ? 'CONTINUE TO GAME MODE →' : 'ADD MORE PLAYERS'}
       </Text>
       <Text style={styles.continueButtonSubtext}>
        {readyPlayers >= 2 
         ? 'Select your challenge level next'
         : 'Minimum 2 players required'
        }
       </Text>
      </TouchableOpacity>
     </View>
    </KeyboardAvoidingView>
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
  backgroundColor: 'rgba(15, 23, 42, 0.85)',
 },
 content: {
  flex: 1,
  paddingHorizontal: isSmallScreen ? 15 : 20,
  paddingTop: 30,
  paddingBottom: 20,
 },
 header: {
  alignItems: 'center',
  marginBottom: 25,
 },
 title: {
  fontSize: isSmallScreen ? 28 : 32,
  fontWeight: '900',
  color: '#8B5CF6',
  marginBottom: 8,
  letterSpacing: 2,
  textAlign: 'center',
  textShadowColor: 'rgba(0, 0, 0, 0.5)',
  textShadowOffset: { width: 1, height: 1 },
  textShadowRadius: 3,
 },
 subtitle: {
  fontSize: isSmallScreen ? 14 : 16,
  color: '#CBD5E1',
  textAlign: 'center',
  marginBottom: 25,
  lineHeight: 22,
 },
 statsContainer: {
  flexDirection: 'row',
  backgroundColor: 'rgba(30, 41, 59, 0.7)',
  borderRadius: 15,
  padding: 15,
  width: '100%',
  borderWidth: 1,
  borderColor: 'rgba(255, 255, 255, 0.1)',
 },
 statBox: {
  flex: 1,
  alignItems: 'center',
 },
 statNumber: {
  fontSize: 24,
  fontWeight: '800',
  color: '#8B5CF6',
  marginBottom: 4,
 },
 statLabel: {
  fontSize: 12,
  color: '#94A3B8',
  fontWeight: '700',
  letterSpacing: 1,
 },
 statDivider: {
  width: 1,
  height: 30,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
 },
 playersList: {
  paddingBottom: 20,
 },
 playerCard: {
  backgroundColor: 'rgba(30, 41, 59, 0.9)',
  borderRadius: 18,
  padding: 20,
  marginBottom: 15,
  borderWidth: 2,
  borderColor: 'rgba(255, 255, 255, 0.1)',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 8,
  elevation: 6,
 },
 cardHeader: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 15,
 },
 playerNumber: {
  width: 36,
  height: 36,
  borderRadius: 18,
  backgroundColor: '#8B5CF6',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: 12,
 },
 playerNumberText: {
  color: 'white',
  fontSize: 18,
  fontWeight: '800',
 },
 playerLabel: {
  flex: 1,
  fontSize: 16,
  fontWeight: '700',
  color: '#E2E8F0',
  letterSpacing: 1,
 },
 removeButton: {
  width: 32,
  height: 32,
  borderRadius: 16,
  backgroundColor: 'rgba(239, 68, 68, 0.2)',
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: '#EF4444',
 },
 removeButtonText: {
  color: '#EF4444',
  fontSize: 16,
  fontWeight: 'bold',
 },
 playerInput: {
  backgroundColor: 'rgba(15, 23, 42, 0.8)',
  borderWidth: 2,
  borderColor: '#334155',
  borderRadius: 12,
  paddingHorizontal: 18,
  paddingVertical: 16,
  color: '#F1F5F9',
  fontSize: isSmallScreen ? 16 : 18,
  fontWeight: '500',
  marginBottom: 12,
 },
 focusedInput: {
  borderColor: '#8B5CF6',
  backgroundColor: 'rgba(139, 92, 246, 0.1)',
 },
 filledInput: {
  borderColor: '#10B981',
 },
 readyIndicator: {
  alignSelf: 'flex-start',
  backgroundColor: 'rgba(16, 185, 129, 0.2)',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: '#10B981',
 },
 readyText: {
  color: '#10B981',
  fontSize: 12,
  fontWeight: '800',
  letterSpacing: 1,
 },
 addPlayerButton: {
  backgroundColor: 'rgba(139, 92, 246, 0.15)',
  borderWidth: 2,
  borderColor: 'rgba(139, 92, 246, 0.4)',
  borderRadius: 18,
  padding: 25,
  alignItems: 'center',
  marginTop: 10,
  borderStyle: 'dashed',
 },
 addButtonIcon: {
  fontSize: 32,
  color: '#8B5CF6',
  fontWeight: '300',
  marginBottom: 8,
 },
 addButtonText: {
  color: '#8B5CF6',
  fontSize: 16,
  fontWeight: '800',
  letterSpacing: 1,
  marginBottom: 4,
 },
 addButtonSubtext: {
  color: 'rgba(139, 92, 246, 0.7)',
  fontSize: 13,
  fontWeight: '500',
 },
 footer: {
  marginTop: 'auto',
  paddingTop: 20,
  borderTopWidth: 1,
  borderTopColor: 'rgba(255, 255, 255, 0.2)',
 },
 footerInfo: {
  marginBottom: 20,
 },
 footerTitle: {
  fontSize: isSmallScreen ? 18 : 20,
  fontWeight: '800',
  color: '#8B5CF6',
  marginBottom: 6,
 },
 footerSubtitle: {
  fontSize: isSmallScreen ? 14 : 15,
  color: '#CBD5E1',
  lineHeight: 22,
 },
 continueButton: {
  backgroundColor: '#8B5CF6',
  borderRadius: 15,
  paddingVertical: 20,
  paddingHorizontal: 25,
  alignItems: 'center',
  shadowColor: '#8B5CF6',
  shadowOffset: { width: 0, height: 6 },
  shadowOpacity: 0.4,
  shadowRadius: 12,
  elevation: 10,
 },
 disabledButton: {
  backgroundColor: '#475569',
  shadowColor: 'transparent',
 },
 continueButtonText: {
  color: 'white',
  fontSize: isSmallScreen ? 16 : 18,
  fontWeight: '900',
  letterSpacing: 1.2,
  marginBottom: 6,
 },
 continueButtonSubtext: {
  color: 'rgba(255, 255, 255, 0.85)',
  fontSize: isSmallScreen ? 13 : 14,
  fontWeight: '500',
  textAlign: 'center',
 },
});

export default PlayerSetupScreen;
