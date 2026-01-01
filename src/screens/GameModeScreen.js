import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const { width } = Dimensions.get('window');

const GameModeScreen = ({ navigation, route }) => {
  const { players = [] } = route.params || {};
  const [selectedMode, setSelectedMode] = useState(null);

  const gameModes = [
    { id: '1', title: 'THE WARM UP', description: 'Easy questions to get started', level: 'Beginner', color: '#10B981' },
    { id: '2', title: 'BRAIN BURNER', description: 'Medium difficulty challenges', level: 'Intermediate', color: '#F59E0B' },
    { id: '3', title: 'ULTIMATE CHALLENGE', description: 'Hardcore drinking challenges', level: 'Expert', color: '#EF4444' },
  ];

  const handleModeSelect = (mode) => {
    setSelectedMode(mode);
    setTimeout(() => {
      // Navigate to GameScreen with players AND mode data
      navigation.navigate('GameScreen', { 
        players: players,
        selectedMode: mode.title,
        level: mode.level
      });
    }, 300);
  };

  const renderModeCard = ({ item }) => (
    <TouchableOpacity
      style={[styles.modeCard, { borderColor: item.color }]}
      onPress={() => handleModeSelect(item)}
      activeOpacity={0.7}
    >
      <View style={[styles.modeHeader, { backgroundColor: item.color }]}>
        <Text style={styles.modeTitle}>{item.title}</Text>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{item.level}</Text>
        </View>
      </View>
      <View style={styles.modeContent}>
        <Text style={styles.modeDescription}>{item.description}</Text>
        <View style={styles.statsRow}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>50</Text>
            <Text style={styles.statLabel}>Cards</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>30s</Text>
            <Text style={styles.statLabel}>Timer</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>2x</Text>
            <Text style={styles.statLabel}>Streak</Text>
          </View>
        </View>
      </View>
      <View style={[styles.modeFooter, { backgroundColor: item.color + '20' }]}>
        <Text style={[styles.selectText, { color: item.color }]}>
          {selectedMode?.id === item.id ? 'SELECTED ✓' : 'SELECT MODE'}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../../assets/images/background.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.overlay} />
        
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>SELECT GAME MODE</Text>
            <Text style={styles.subtitle}>
              {players.length} players ready • Choose your challenge level
            </Text>
          </View>

          <FlatList
            data={gameModes}
            renderItem={renderModeCard}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.modesList}
            showsVerticalScrollIndicator={false}
          />

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Selected: {selectedMode ? selectedMode.title : 'None'}
            </Text>
            <TouchableOpacity
              style={[styles.backButton, !selectedMode && styles.disabledButton]}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.backButtonText}>BACK</Text>
            </TouchableOpacity>
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
    backgroundColor: 'rgba(15, 23, 42, 0.85)',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#8B5CF6',
    marginBottom: 10,
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 16,
    color: '#CBD5E1',
    textAlign: 'center',
    lineHeight: 22,
  },
  modesList: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  modeCard: {
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 20,
    borderWidth: 3,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 8,
  },
  modeHeader: {
    paddingVertical: 20,
    paddingHorizontal: 25,
    alignItems: 'center',
  },
  modeTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 1.5,
    textAlign: 'center',
    marginBottom: 10,
  },
  levelBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
  },
  levelText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  modeContent: {
    padding: 25,
  },
  modeDescription: {
    fontSize: 16,
    color: '#E2E8F0',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '600',
    letterSpacing: 1,
  },
  modeFooter: {
    paddingVertical: 15,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.1)',
  },
  selectText: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
  },
  footerText: {
    fontSize: 16,
    color: '#CBD5E1',
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#64748B',
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 10,
  },
  disabledButton: {
    opacity: 0.5,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});

export default GameModeScreen;
