import React, { useState, useEffect } from 'react';
import { BackHandler } from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  Alert,
  Modal,
} from 'react-native';
import gameCards from '../data/gameCards';
import funChores from '../data/funChores';

const { width, height } = Dimensions.get('window');

const CardScreen = ({ navigation, route }) => {
  const { players = [], selectedMode = 'THE WARM UP', level = 'EASY' } = route.params || {};
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [cards, setCards] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [playerTurns, setPlayerTurns] = useState({});
  const [totalTurns, setTotalTurns] = useState(0);
  const [showChoreModal, setShowChoreModal] = useState(false);
  const [currentChore, setCurrentChore] = useState(null);
  const [chorePlayerIndex, setChorePlayerIndex] = useState(null);
  const [choresAssigned, setChoresAssigned] = useState([]);
  const [drinkSummons, setDrinkSummons] = useState([]);
  const [showDrinkModal, setShowDrinkModal] = useState(false);
  const [currentDrinkSummon, setCurrentDrinkSummon] = useState(null);
  
  const TURNS_PER_PLAYER = 7;
  const CHORE_FREQUENCY = 3;
  const DRINK_SUMMON_FREQUENCY = 4;
  // Function to replace {targetPlayer} with random player name
  const getCardTextWithPlayer = (card, currentPlayerIdx) => {
    if (!card || !card.text) return '';
    
    // Check if card has {targetPlayer} placeholder
    if (card.text.includes('{targetPlayer}')) {
      // Check if players array exists and has enough players
      if (!players || !Array.isArray(players) || players.length < 2) {
        return card.text;
      }
      
      // Get current player (could be string or object)
      const currentPlayer = players[currentPlayerIdx];
      if (!currentPlayer) return card.text;
      
      // Get other players (exclude current player)
      const otherPlayers = players.filter((_, idx) => idx !== currentPlayerIdx);
      
      if (otherPlayers.length > 0) {
        // Select random player
        const randomIndex = Math.floor(Math.random() * otherPlayers.length);
        const targetPlayer = otherPlayers[randomIndex];
        
        // Extract player name (handle both string and object)
        let playerName = 'another player';
        if (typeof targetPlayer === 'string') {
          playerName = targetPlayer;
        } else if (targetPlayer && typeof targetPlayer === 'object') {
          // Try different possible property names
          playerName = targetPlayer.name || targetPlayer.playerName || 
                       targetPlayer.username || targetPlayer.displayName || 
                       'another player';
        }
        
        // Replace placeholder with player name
        return card.text.replace(/{targetPlayer}/g, playerName);
      }
    }
    
    return card.text;
  };

  useEffect(() => {
    const totalCardsNeeded = players.length * TURNS_PER_PLAYER;
    const modeCards = gameCards.getRandomCardsByMode(selectedMode, totalCardsNeeded);
    setCards(modeCards);
    
    const initialTurns = {};
    players.forEach((_, index) => {
      initialTurns[index] = 0;
    });
    setPlayerTurns(initialTurns);
    setTotalTurns(0);
    setChoresAssigned([]);
    setDrinkSummons([]);
  }, [selectedMode, players])

    // Handle Android back button
  useEffect(() => {
    const backAction = () => {
      if (currentCardIndex > 0) {
        // If not on first card, go to previous card
        setCurrentCardIndex(currentCardIndex - 1);
        return true;
      } else {
        // If on first card, navigate back to GameScreen
        Alert.alert("Exit Game?", "Do you want to exit to the main menu?", [
          { text: "Continue Playing", onPress: () => null, style: "cancel" },
          { text: "Exit to Menu", onPress: () => navigation.goBack() }
        ]);
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [currentCardIndex, navigation]);
;

  useEffect(() => {
    if (totalTurns > 0 && totalTurns % CHORE_FREQUENCY === 0) {
      assignFunChore();
    }
  }, [totalTurns]);

  useEffect(() => {
    if (totalTurns > 0 && totalTurns % DRINK_SUMMON_FREQUENCY === 0) {
      summonDrinkChallenge();
    }
  }, [totalTurns]);

  const assignFunChore = () => {
    let randomPlayerIndex;
    do {
      randomPlayerIndex = Math.floor(Math.random() * players.length);
    } while (randomPlayerIndex === currentPlayerIndex && players.length > 1);
    
    const randomChore = funChores.getRandomChore();
    setCurrentChore(randomChore);
    setChorePlayerIndex(randomPlayerIndex);
    setShowChoreModal(true);
    
    setChoresAssigned(prev => [...prev, {
      player: players[randomPlayerIndex],
      chore: randomChore.text,
      turn: totalTurns
    }]);
  };

  const summonDrinkChallenge = () => {
    if (players.length < 2) return;
    
    let summonerIndex;
    do {
      summonerIndex = Math.floor(Math.random() * players.length);
    } while (summonerIndex === currentPlayerIndex && players.length > 1);
    
    let targetIndex;
    do {
      targetIndex = Math.floor(Math.random() * players.length);
    } while (targetIndex === summonerIndex && players.length > 1);
    
    const drinkSummon = {
      summoner: players[summonerIndex],
      target: players[targetIndex],
      turn: totalTurns,
      completed: false
    };
    
    setCurrentDrinkSummon(drinkSummon);
    setShowDrinkModal(true);
    setDrinkSummons(prev => [...prev, drinkSummon]);
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    
    const updatedTurns = { ...playerTurns };
    updatedTurns[currentPlayerIndex] = (updatedTurns[currentPlayerIndex] || 0) + 1;
    setPlayerTurns(updatedTurns);
    
    const newTotalTurns = totalTurns + 1;
    setTotalTurns(newTotalTurns);
    
    const maxTurns = players.length * TURNS_PER_PLAYER;
    if (newTotalTurns >= maxTurns) {
      showGameCompleteModal();
      return;
    }
    
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      const nextPlayerIndex = (currentPlayerIndex + 1) % players.length;
      setCurrentPlayerIndex(nextPlayerIndex);
    }
  };

  const showGameCompleteModal = () => {
    let choreSummary = "";
    if (choresAssigned.length > 0) {
      choreSummary = "\n\nSOUTH AFRICAN FUN CHORES:\n";
      choresAssigned.forEach((assignment, index) => {
        choreSummary += (index + 1) + ". " + assignment.player + ": " + assignment.chore + "\n\n";
      });
    }
    
    let drinkSummary = "";
    const completedDrinks = drinkSummons.filter(d => d.completed);
    if (completedDrinks.length > 0) {
      drinkSummary = "\n\nDRINK SUMMONS COMPLETED:\n";
      completedDrinks.forEach((summon, index) => {
        drinkSummary += (index + 1) + ". " + summon.summoner + " downed " + summon.target + "'s drink\n";
      });
    }
    
    const pendingDrinks = drinkSummons.filter(d => !d.completed);
    if (pendingDrinks.length > 0) {
      drinkSummary += "\nPENDING DRINK SUMMONS:\n";
      pendingDrinks.forEach((summon, index) => {
        drinkSummary += (index + 1) + ". " + summon.summoner + " still needs to down " + summon.target + "'s drink!\n";
      });
    }
    
    Alert.alert(
      "Game Complete!",
      "All players completed " + TURNS_PER_PLAYER + " turns each!" + choreSummary + drinkSummary,
      [
        {
          text: "Back to Menu",
          onPress: () => navigation.navigate('HomeScreen')
        },
        {
          text: "Play Again",
          onPress: () => navigation.navigate('GameScreen', { players, selectedMode, level })
        }
      ]
    );
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const markDrinkCompleted = () => {
    if (currentDrinkSummon) {
      const updatedSummons = drinkSummons.map(summon => 
        summon.turn === currentDrinkSummon.turn ? { ...summon, completed: true } : summon
      );
      setDrinkSummons(updatedSummons);
      setCurrentDrinkSummon({ ...currentDrinkSummon, completed: true });
    }
    setShowDrinkModal(false);
  };

  const currentCard = cards[currentCardIndex];
  const currentPlayer = players[currentPlayerIndex] || 'Player';
  const currentPlayerTurn = (playerTurns[currentPlayerIndex] || 0) + 1;
  const totalCards = cards.length;
  const pendingDrinkSummons = drinkSummons.filter(d => !d.completed).length;

  if (cards.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading game cards...</Text>
          <Text style={styles.loadingSubtext}>{players.length} players × {TURNS_PER_PLAYER} turns = {players.length * TURNS_PER_PLAYER} cards</Text>
          <Text style={styles.loadingSubtext}>65 South African fun chores available</Text>
          <Text style={styles.loadingSubtext}>Drink summons every {DRINK_SUMMON_FREQUENCY} turns</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={showChoreModal}
        onRequestClose={() => setShowChoreModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>SOUTH AFRICAN FUN CHORE!</Text>
            
            <View style={styles.chorePlayerBadge}>
              <Text style={styles.chorePlayerName}>
                {players[chorePlayerIndex] || 'Player'}
              </Text>
              <Text style={styles.chorePlayerLabel}>has been chosen!</Text>
            </View>
            
            <View style={styles.choreCard}>
              <Text style={styles.choreText}>{currentChore?.text}</Text>
              
              <View style={styles.choreDetails}>
                <View style={styles.choreTypeBadge}>
                  <Text style={styles.choreTypeText}>{currentChore?.type.toUpperCase()}</Text>
                </View>
                <View style={styles.choreDifficultyBadge}>
                  <Text style={styles.choreDifficultyText}>
                    {currentChore?.difficulty.toUpperCase()}
                  </Text>
                </View>
              </View>
              
              <Text style={styles.choreDuration}>
                Duration: {currentChore?.duration}
              </Text>
            </View>
            
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => setShowChoreModal(false)}
            >
              <Text style={styles.modalButtonText}>CONTINUE GAME</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showDrinkModal}
        onRequestClose={() => setShowDrinkModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.drinkModalContent}>
            <Text style={styles.drinkModalTitle}>DRINK SUMMON!</Text>
            
            <View style={styles.drinkSummonBadge}>
              <Text style={styles.drinkSummonText}>
                {currentDrinkSummon?.summoner || 'Player'}
              </Text>
              <Text style={styles.drinkSummonLabel}>MUST DOWN</Text>
              <Text style={styles.drinkTargetText}>
                {currentDrinkSummon?.target || 'Player'}'s DRINK!
              </Text>
            </View>
            
            <View style={styles.drinkRules}>
              <Text style={styles.drinkRule}>• Finish the entire drink</Text>
              <Text style={styles.drinkRule}>• No sipping - bottoms up!</Text>
              <Text style={styles.drinkRule}>• Target chooses the drink</Text>
              <Text style={styles.drinkRule}>• Must be completed now</Text>
            </View>
            
            <View style={styles.drinkModalButtons}>
              <TouchableOpacity
                style={styles.drinkCompleteButton}
                onPress={markDrinkCompleted}
              >
                <Text style={styles.drinkCompleteButtonText}>DRINK COMPLETED</Text>
              </TouchableOpacity>
              
              <TouchableOpacity
                style={styles.drinkSkipButton}
                onPress={() => setShowDrinkModal(false)}
              >
                <Text style={styles.drinkSkipButtonText}>CONTINUE (REMIND LATER)</Text>
              </TouchableOpacity>
            </View>
            
            <Text style={styles.drinkModalNote}>
            </Text>
          </View>
        </View>
      </Modal>

      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Text style={styles.modeText}>{selectedMode}</Text>
          <Text style={styles.turnCounter}>Turn {totalTurns + 1} of {totalCards}</Text>
        </View>
        
        <View style={styles.playerTurnInfo}>
          <View style={styles.currentPlayerBadge}>
            <Text style={styles.currentPlayerText}>{currentPlayer}'s Turn</Text>
            <Text style={styles.turnNumber}>Turn {currentPlayerTurn} of {TURNS_PER_PLAYER}</Text>
          </View>
        </View>
        
        <View style={styles.featuresIndicator}>
          {choresAssigned.length > 0 && (
            <Text style={styles.featureText}>
              {choresAssigned.length} SA Chore(s)
            </Text>
          )}
          {pendingDrinkSummons > 0 && (
            <Text style={styles.drinkSummonIndicator}>
              {pendingDrinkSummons} Drink Summon(s) Pending
            </Text>
          )}
        </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardText}>{getCardTextWithPlayer(currentCard, currentPlayerIndex)}</Text>
          
          <View style={styles.cardInfo}>
            <View style={styles.cardTypeBadge}>
              <Text style={styles.cardTypeText}>{currentCard.type.toUpperCase()}</Text>
            </View>
            <View style={styles.difficultyBadge}>
              <Text style={styles.difficultyText}>{currentCard.difficulty.toUpperCase()}</Text>
            </View>
          </View>
          
          {showAnswer ? (
            <View style={styles.answerContainer}>
              <Text style={styles.answerLabel}>ANSWER:</Text>
              <Text style={styles.answerText}>{currentCard.answer}</Text>
              
              {currentCard.hint && (
                <View style={styles.hintContainer}>
                  <Text style={styles.hintLabel}>HINT:</Text>
                  <Text style={styles.hintText}>{currentCard.hint}</Text>
                </View>
              )}
              
              <View style={styles.penaltyContainer}>
                <Text style={styles.penaltyLabel}>PENALTY:</Text>
                <Text style={styles.penaltyText}>{currentCard.penaltyShots} SHOT(S)</Text>
              </View>
            </View>
          ) : (
            <View style={styles.hiddenAnswer}>
              <Text style={styles.hiddenText}>Answer hidden...</Text>
              <Text style={styles.showHint}>Tap below to reveal answer and penalty</Text>
            </View>
          )}
        </View>
      </View>

      <View style={styles.controls}>
        {!showAnswer ? (
          <TouchableOpacity 
            style={styles.showButton} 
            onPress={handleShowAnswer}
            activeOpacity={0.8}
          >
            <Text style={styles.showButtonText}>REVEAL ANSWER & PENALTY</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={handleNextCard}
            activeOpacity={0.8}
          >
            <Text style={styles.nextButtonText}>NEXT TURN →</Text>
          </TouchableOpacity>
        )}
        
        <View style={styles.secondaryButtons}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>END GAME</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.featuresButton}
            onPress={() => {
              let featureList = "GAME FEATURES:\n\n";
              
              if (choresAssigned.length > 0) {
                featureList += "SOUTH AFRICAN FUN CHORES:\n";
                choresAssigned.forEach((assignment, index) => {
                  featureList += (index + 1) + ". " + assignment.player + ": " + assignment.chore + "\n\n";
                });
              }
              
              if (drinkSummons.length > 0) {
                featureList += "\nDRINK SUMMONS:\n";
                drinkSummons.forEach((summon, index) => {
                  const status = summon.completed ? "(Completed)" : "(Pending)";
                  featureList += (index + 1) + ". " + summon.summoner + " → " + summon.target + " " + status + "\n";
                });
              }
              
              if (choresAssigned.length === 0 && drinkSummons.length === 0) {
                featureList += "No features activated yet!";
              }
              
              Alert.alert("Game Features", featureList);
            }}
          >
            <Text style={styles.featuresButtonText}>VIEW FEATURES</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0F172A',
    padding: 20,
  },
  loadingText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  loadingSubtext: {
    color: '#94A3B8',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 5,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#8B5CF6',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F59E0B',
    marginBottom: 20,
    textAlign: 'center',
  },
  chorePlayerBadge: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  chorePlayerName: {
    color: '#8B5CF6',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  chorePlayerLabel: {
    color: '#E2E8F0',
    fontSize: 16,
  },
  choreCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 25,
    alignItems: 'center',
  },
  choreText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 24,
  },
  choreDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
    gap: 10,
  },
  choreTypeBadge: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  choreTypeText: {
    color: '#8B5CF6',
    fontSize: 12,
    fontWeight: 'bold',
  },
  choreDifficultyBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  choreDifficultyText: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: 'bold',
  },
  choreDuration: {
    fontSize: 14,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  modalButton: {
    backgroundColor: '#10B981',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  drinkModalContent: {
    backgroundColor: '#1E293B',
    borderRadius: 20,
    padding: 25,
    width: '90%',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#DC2626',
  },
  drinkModalTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#DC2626',
    marginBottom: 20,
    textAlign: 'center',
  },
  drinkSummonBadge: {
    backgroundColor: 'rgba(220, 38, 38, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginBottom: 25,
    width: '100%',
    borderWidth: 2,
    borderColor: '#DC2626',
  },
  drinkSummonText: {
    color: '#DC2626',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  drinkSummonLabel: {
    color: '#E2E8F0',
    fontSize: 18,
    marginBottom: 10,
  },
  drinkTargetText: {
    color: '#F59E0B',
    fontSize: 24,
    fontWeight: 'bold',
  },
  drinkRules: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    width: '100%',
  },
  drinkRule: {
    color: '#E2E8F0',
    fontSize: 14,
    marginBottom: 8,
  },
  drinkModalButtons: {
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    marginBottom: 15,
  },
  drinkCompleteButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 15,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
  },
  drinkCompleteButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drinkSkipButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    paddingVertical: 15,
    borderRadius: 15,
    flex: 1,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
  drinkSkipButtonText: {
    color: '#E2E8F0',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  drinkModalNote: {
    color: '#94A3B8',
    fontSize: 12,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  header: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  modeText: {
    color: '#8B5CF6',
    fontSize: 20,
    fontWeight: 'bold',
  },
  turnCounter: {
    color: '#E2E8F0',
    fontSize: 14,
    fontWeight: '600',
    backgroundColor: 'rgba(255,255,255,0.1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  playerTurnInfo: {
    alignItems: 'center',
    marginBottom: 10,
  },
  currentPlayerBadge: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  currentPlayerText: {
    color: '#8B5CF6',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  turnNumber: {
    color: '#F59E0B',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  featureText: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  drinkSummonIndicator: {
    color: '#DC2626',
    fontSize: 12,
    fontWeight: '600',
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: 20,
    padding: 25,
    width: width * 0.9,
    minHeight: height * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  cardText: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
    lineHeight: 32,
  },
  cardInfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 25,
    gap: 10,
  },
  cardTypeBadge: {
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  cardTypeText: {
    color: '#8B5CF6',
    fontSize: 12,
    fontWeight: 'bold',
  },
  difficultyBadge: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#F59E0B',
  },
  difficultyText: {
    color: '#F59E0B',
    fontSize: 12,
    fontWeight: 'bold',
  },
  answerContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'rgba(139, 92, 246, 0.1)',
    borderRadius: 15,
    width: '100%',
    alignItems: 'center',
  },
  answerLabel: {
    fontSize: 14,
    color: '#8B5CF6',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerText: {
    fontSize: 28,
    color: '#1F2937',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  hintContainer: {
    backgroundColor: 'rgba(245, 158, 11, 0.1)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    width: '100%',
  },
  hintLabel: {
    fontSize: 14,
    color: '#F59E0B',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  hintText: {
    fontSize: 16,
    color: '#6B7280',
    fontStyle: 'italic',
  },
  penaltyContainer: {
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  penaltyLabel: {
    fontSize: 14,
    color: '#DC2626',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  penaltyText: {
    fontSize: 24,
    color: '#DC2626',
    fontWeight: 'bold',
  },
  hiddenAnswer: {
    marginTop: 30,
    alignItems: 'center',
  },
  hiddenText: {
    fontSize: 18,
    color: '#6B7280',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  showHint: {
    fontSize: 14,
    color: '#8B5CF6',
    textAlign: 'center',
  },
  controls: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  showButton: {
    backgroundColor: '#8B5CF6',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#8B5CF6',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  showButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#10B981',
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backButton: {
    backgroundColor: '#DC2626',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresButton: {
    backgroundColor: 'rgba(139, 92, 246, 0.2)',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8B5CF6',
  },
  featuresButtonText: {
    color: '#8B5CF6',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardScreen;
