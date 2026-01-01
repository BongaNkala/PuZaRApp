import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Animated,
  Dimensions,
  Easing,
  StatusBar,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');
const isSmallScreen = width < 375;

const GameScreen = ({ navigation, route }) => {
  const { players = ['Player 1', 'Player 2'], selectedMode = 'CLASSIC', level = 'EASY' } = route.params || {};
  const [gameStarted, setGameStarted] = useState(false);

  // Animation values
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Pulsing animation for the circle
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const startGame = () => {
    setGameStarted(true);
    navigation.navigate('CardScreen', {
      players,
      selectedMode,
      level,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <ImageBackground
        source={require('../../assets/images/background.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        {/* Dark overlay */}
        <View style={styles.overlay} />

        {/* Main content with safe area padding */}
        <SafeAreaView style={styles.safeArea}>
          {/* Header with proper spacing */}
          <View style={styles.header}>
            <Text style={styles.gameTitle}>PUZAR</Text>
            <Text style={styles.gameText}>{selectedMode} • {level}</Text>
            <Text style={styles.playersCount}>{players.length} PLAYERS READY</Text>
          </View>

          {/* Main Content */}
          <View style={styles.content}>
            {/* Circle with Mode Info */}
            <View style={styles.circleSection}>
              <Animated.View
                style={[
                  styles.compactCircle,
                  {
                    transform: [{ scale: pulseAnim }],
                  },
                ]}
              >
                <Text style={styles.circleText}>PUZAR</Text>
              </Animated.View>

              <View style={styles.modeInfo}>
                <Text style={styles.modeTitle}>{selectedMode}</Text>
                <Text style={styles.modeLevel}>{level}</Text>
                <Text style={styles.playerCount}>{players.length} Players</Text>
              </View>
            </View>

            {/* Ready Section */}
            <View style={styles.readyBox}>
              <Text style={styles.readyTitle}>READY TO PLAY?</Text>
              <Text style={styles.readyText}>
                The game will start immediately. Make sure all players are ready!
              </Text>
            </View>

            {/* Quick Features */}
            <View style={styles.featuresRow}>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>• 30s Challenges</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>• Streak Bonuses</Text>
              </View>
              <View style={styles.featureItem}>
                <Text style={styles.featureText}>• Penalty Rounds</Text>
              </View>
            </View>

            {/* Stats */}
            <View style={styles.statsRow}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>150</Text>
                <Text style={styles.statLabel}>Cards</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>10s</Text>
                <Text style={styles.statLabel}>Timer</Text>
              </View>
              <View style={styles.statDivider} />
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>3</Text>
                <Text style={styles.statLabel}>Modes</Text>
              </View>
            </View>

            {/* Players List */}
            <View style={styles.playersContainer}>
              <Text style={styles.playersTitle}>PLAYERS</Text>
              <View style={styles.playersGrid}>
                {players.map((player, index) => (
                  <View key={index} style={styles.playerItem}>
                    <View style={styles.playerAvatar}>
                      <Text style={styles.avatarText}>
                        {player.charAt(0).toUpperCase()}
                      </Text>
                    </View>
                    <Text style={styles.playerName}>{player}</Text>
                  </View>
                ))}
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.startButton}
                onPress={startGame}
                activeOpacity={0.9}
              >
                <Text style={styles.startButtonText}>START GAME →</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.backButtonText}>← BACK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
  },
  safeArea: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 10 : 30,
    paddingBottom: 20,
  },
  gameTitle: {
    fontSize: 32,
    fontWeight: '900',
    color: '#8B5CF6',
    marginBottom: 10,
    textAlign: 'center',
  },
  gameText: {
    fontSize: 18,
    color: '#E2E8F0',
    marginBottom: 8,
    textAlign: 'center',
  },
  playersCount: {
    fontSize: 16,
    color: '#F59E0B',
    fontWeight: '700',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  circleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
    maxWidth: 350,
  },
  compactCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#F59E0B',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
    shadowColor: '#F59E0B',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
    borderWidth: 4,
    borderColor: 'white',
  },
  circleText: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
    letterSpacing: 2,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  modeInfo: {
    flex: 1,
  },
  modeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  modeLevel: {
    fontSize: 16,
    color: '#CBD5E1',
    marginBottom: 5,
  },
  playerCount: {
    fontSize: 14,
    color: '#F59E0B',
    fontWeight: '600',
  },
  readyBox: {
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 15,
    padding: 20,
    marginBottom: 25,
    width: '100%',
    maxWidth: 350,
    borderWidth: 1,
    borderColor: 'rgba(139, 92, 246, 0.3)',
  },
  readyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 10,
    textAlign: 'center',
  },
  readyText: {
    fontSize: 14,
    color: '#E2E8F0',
    textAlign: 'center',
    lineHeight: 20,
  },
  featuresRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
    width: '100%',
    maxWidth: 350,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    color: '#CBD5E1',
    textAlign: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 15,
    padding: 15,
    marginBottom: 25,
    width: '100%',
    maxWidth: 350,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#CBD5E1',
  },
  statDivider: {
    width: 1,
    height: 30,
    backgroundColor: 'rgba(139, 92, 246, 0.3)',
  },
  playersContainer: {
    width: '100%',
    maxWidth: 350,
    marginBottom: 25,
  },
  playersTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 15,
    textAlign: 'center',
  },
  playersGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  playerItem: {
    alignItems: 'center',
    marginHorizontal: 5,
    marginBottom: 10,
  },
  playerAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderWidth: 2,
    borderColor: 'rgba(139, 92, 246, 0.5)',
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#8B5CF6',
  },
  playerName: {
    fontSize: 12,
    color: '#E2E8F0',
    textAlign: 'center',
    maxWidth: 60,
  },
  buttonsContainer: {
    width: '100%',
    maxWidth: 350,
    gap: 15,
  },
  startButton: {
    backgroundColor: '#8B5CF6',
    borderRadius: 25,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1,
  },
  backButton: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E2E8F0',
  },
});

export default GameScreen;
