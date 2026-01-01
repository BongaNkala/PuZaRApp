//  DRINKING GAME CARDS - PuZaR App
console.log("Game cards loading - no emojis");

const gameCards = {
 cards: [
  // ========== THE WARM UP (Beginner - 1-2 shots) ==========
  { id: 1, type: 'math', text: 'Solve: 3 + 7 × 2', answer: '17', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Remember PEMDAS!' },
  { id: 2, type: 'sequence', text: 'Next number: 2, 4, 6, 8, ?', answer: '10', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Even numbers' },
  { id: 3, type: 'word', text: 'Unscramble: O L W E H L', answer: 'HELLOW', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Greeting word' },
  { id: 4, type: 'drinking', text: 'Last person to touch their nose drinks 1 shot!', answer: 'QUICK', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Be fast!' },
  { id: 5, type: 'trivia', text: 'What color is a stop sign?', answer: 'RED', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Traffic color' },
  { id: 6, type: 'challenge', text: 'Do 10 push-ups or drink 2 shots!', answer: 'PUSHUPS', difficulty: 'medium', penaltyShots: 2, mode: 'THE WARM UP', category: 'physical', hint: 'Exercise option' },
  { id: 7, type: 'word', text: 'Name a drink starting with "B"', answer: 'BEER', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'drinks', hint: 'Popular alcoholic beverage' },
  { id: 8, type: 'logic', text: 'I follow you all day but disappear at night. What am I?', answer: 'SHADOW', difficulty: 'medium', penaltyShots: 2, mode: 'THE WARM UP', category: 'riddle', hint: 'Light creates me' },
  { id: 9, type: 'quick', text: 'QUICK! Last person to stand up drinks!', answer: 'FAST', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Move quickly!' }, 
  { id: 10, type: 'math', text: 'What is 50% of 100?', answer: '50', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Half' },
  
  // Additional 100 easy WARM UP cards (101-200)
  { id: 101, type: 'math', text: 'What is 2 + 2?', answer: '4', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Basic addition' },
  { id: 102, type: 'word', text: 'Unscramble: T A C', answer: 'CAT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Pet animal' },
  { id: 103, type: 'trivia', text: 'What color is the sun?', answer: 'YELLOW', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Bright color' },
  { id: 104, type: 'drinking', text: 'Last person to blink drinks 1 shot!', answer: 'QUICK', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Eye movement' },
  { id: 105, type: 'sequence', text: 'Next number: 1, 2, 3, 4, ?', answer: '5', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Counting' },
  { id: 106, type: 'word', text: 'Name a fruit starting with "A"', answer: 'APPLE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Red fruit' },
  { id: 107, type: 'math', text: 'What is 10 - 5?', answer: '5', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Subtraction' },
  { id: 108, type: 'logic', text: 'What has a face and two hands but no arms or legs?', answer: 'CLOCK', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Tells time' },
  { id: 109, type: 'quick', text: 'Last person to touch their ear drinks!', answer: 'FAST', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Body part' },
  { id: 110, type: 'trivia', text: 'How many days in a week?', answer: '7', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Week count' },
  { id: 111, type: 'word', text: 'Opposite of day', answer: 'NIGHT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Dark time' },
  { id: 112, type: 'math', text: 'What is 3 × 3?', answer: '9', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Multiplication' },
  { id: 113, type: 'drinking', text: 'Everyone wearing black drinks 1 shot!', answer: 'BLACK', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Color check' },
  { id: 114, type: 'sequence', text: 'Next letter: B, C, D, E, ?', answer: 'F', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Alphabet' },
  { id: 115, type: 'word', text: 'Animal that says "woof"', answer: 'DOG', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Pet' },
  { id: 116, type: 'trivia', text: 'What planet is known as the Red Planet?', answer: 'MARS', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Space' },
  { id: 117, type: 'math', text: 'What is 20 ÷ 4?', answer: '5', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Division' },
  { id: 118, type: 'quick', text: 'Last person to stand up drinks!', answer: 'STAND', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Get up' },
  { id: 119, type: 'word', text: 'Unscramble: G O D', answer: 'DOG', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Pet' },
  { id: 120, type: 'drinking', text: 'Person with shortest hair drinks 1 shot!', answer: 'HAIR', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Hair length' },
  { id: 121, type: 'math', text: 'What is 5 + 7?', answer: '12', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Addition' },
  { id: 122, type: 'trivia', text: 'What is the capital of France?', answer: 'PARIS', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'European city' },
  { id: 123, type: 'word', text: 'Name a color starting with "B"', answer: 'BLUE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Sky color' },
  { id: 124, type: 'sequence', text: 'Next number: 10, 20, 30, 40, ?', answer: '50', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Tens' },
  { id: 125, type: 'drinking', text: 'Last person to smile drinks 1 shot!', answer: 'SMILE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Happy face' },
  { id: 126, type: 'logic', text: 'What gets wetter as it dries?', answer: 'TOWEL', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Bathroom item' },
  { id: 127, type: 'math', text: 'What is 8 × 2?', answer: '16', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Multiplication' },
  { id: 128, type: 'quick', text: 'Last person to say "cheers" drinks!', answer: 'CHEERS', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Toast word' },
  { id: 129, type: 'word', text: 'Unscramble: R A T', answer: 'ART', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Creative work' },
  { id: 130, type: 'trivia', text: 'How many continents are there?', answer: '7', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Large land masses' },
  { id: 131, type: 'drinking', text: 'Everyone with glasses drinks 1 shot!', answer: 'GLASSES', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Eye wear' },
  { id: 132, type: 'math', text: 'What is 15 + 5?', answer: '20', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Addition' },
  { id: 133, type: 'word', text: 'Name a vegetable starting with "C"', answer: 'CARROT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Orange vegetable' },
  { id: 134, type: 'sequence', text: 'Next letter: X, Y, Z, ?', answer: 'A', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Alphabet loop' },
  { id: 135, type: 'logic', text: 'What has keys but can\'t open locks?', answer: 'PIANO', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Musical instrument' },
  { id: 136, type: 'quick', text: 'Last person to clap drinks!', answer: 'CLAP', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Hands together' },
  { id: 137, type: 'trivia', text: 'What is the largest ocean?', answer: 'PACIFIC', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Ocean name' },
  { id: 138, type: 'math', text: 'What is 100 ÷ 2?', answer: '50', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Half' },
  { id: 139, type: 'drinking', text: 'Person with birthday closest drinks 1 shot!', answer: 'BIRTHDAY', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Celebration' },
  { id: 140, type: 'word', text: 'Unscramble: N U R', answer: 'RUN', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Fast movement' },
  { id: 141, type: 'math', text: 'What is 9 - 4?', answer: '5', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Subtraction' },
  { id: 142, type: 'trivia', text: 'What is the fastest land animal?', answer: 'CHEETAH', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Big cat' },
  { id: 143, type: 'word', text: 'Name a country starting with "C"', answer: 'CANADA', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'North America' },
  { id: 144, type: 'sequence', text: 'Next number: 2, 4, 8, 16, ?', answer: '32', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Double each time' },
  { id: 145, type: 'drinking', text: 'Everyone wearing white drinks 1 shot!', answer: 'WHITE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Color check' },
  { id: 146, type: 'logic', text: 'What has a neck but no head?', answer: 'BOTTLE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Container' },
  { id: 147, type: 'quick', text: 'Last person to touch the floor drinks!', answer: 'FLOOR', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Ground' },
  { id: 148, type: 'math', text: 'What is 6 × 5?', answer: '30', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Multiplication' },
  { id: 149, type: 'trivia', text: 'What is the smallest planet?', answer: 'MERCURY', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Solar system' },
  { id: 150, type: 'word', text: 'Unscramble: E A R', answer: 'EAR', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Body part' },
  { id: 151, type: 'drinking', text: 'Last person to take a sip drinks 1 shot!', answer: 'SIP', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Small drink' },
  { id: 152, type: 'math', text: 'What is 25 + 25?', answer: '50', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Addition' },
  { id: 153, type: 'word', text: 'Name a sport starting with "B"', answer: 'BASKETBALL', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Ball game' },
  { id: 154, type: 'sequence', text: 'Next number: 5, 10, 15, 20, ?', answer: '25', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Add 5' },
  { id: 155, type: 'logic', text: 'What has cities but no houses?', answer: 'MAP', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Navigation' },
  { id: 156, type: 'quick', text: 'Last person to say their name drinks!', answer: 'NAME', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Identity' },
  { id: 157, type: 'trivia', text: 'What is the hardest natural substance?', answer: 'DIAMOND', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Gemstone' },
  { id: 158, type: 'math', text: 'What is 12 ÷ 3?', answer: '4', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Division' },
  { id: 159, type: 'drinking', text: 'Everyone with brown eyes drinks 1 shot!', answer: 'EYES', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Eye color' },
  { id: 160, type: 'word', text: 'Unscramble: T E A', answer: 'EAT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Consume food' },
  { id: 161, type: 'math', text: 'What is 7 + 8?', answer: '15', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Addition' },
  { id: 162, type: 'trivia', text: 'What is the tallest animal?', answer: 'GIRAFFE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Long neck' },
  { id: 163, type: 'word', text: 'Name a musical instrument starting with "G"', answer: 'GUITAR', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'String instrument' },
  { id: 164, type: 'sequence', text: 'Next letter: M, N, O, P, ?', answer: 'Q', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Alphabet' },
  { id: 165, type: 'drinking', text: 'Last person to check phone drinks 1 shot!', answer: 'PHONE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Device' },
  { id: 166, type: 'logic', text: 'What has hands but can\'t feel?', answer: 'CLOCK', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Time' },
  { id: 167, type: 'quick', text: 'Last person to point up drinks!', answer: 'UP', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Direction' },
  { id: 168, type: 'math', text: 'What is 9 × 9?', answer: '81', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Multiplication' },
  { id: 169, type: 'trivia', text: 'What is the largest desert?', answer: 'SAHARA', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Africa' },
  { id: 170, type: 'word', text: 'Unscramble: P O T', answer: 'TOP', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Highest point' },
  { id: 171, type: 'drinking', text: 'Person to the left of dealer drinks 1 shot!', answer: 'LEFT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Direction' },
  { id: 172, type: 'math', text: 'What is 50 - 30?', answer: '20', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Subtraction' },
  { id: 173, type: 'word', text: 'Name a sea animal starting with "D"', answer: 'DOLPHIN', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Smart mammal' },
  { id: 174, type: 'sequence', text: 'Next number: 100, 200, 300, 400, ?', answer: '500', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Hundreds' },
  { id: 175, type: 'logic', text: 'What has a bed but never sleeps?', answer: 'RIVER', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Water body' },
  { id: 176, type: 'quick', text: 'Last person to whisper drinks!', answer: 'WHISPER', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Quiet talk' },
  { id: 177, type: 'trivia', text: 'What is the fastest bird?', answer: 'PEREGRINE FALCON', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Bird of prey' },
  { id: 178, type: 'math', text: 'What is 8 ÷ 2?', answer: '4', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Division' },
  { id: 179, type: 'drinking', text: 'Everyone born in summer drinks 1 shot!', answer: 'SUMMER', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Season' },
  { id: 180, type: 'word', text: 'Unscramble: N E T', answer: 'TEN', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Number' },
  { id: 181, type: 'math', text: 'What is 11 + 9?', answer: '20', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Addition' },
  { id: 182, type: 'trivia', text: 'What is the largest mammal?', answer: 'BLUE WHALE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Ocean animal' },
  { id: 183, type: 'word', text: 'Name a tree starting with "O"', answer: 'OAK', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Strong wood' },
  { id: 184, type: 'sequence', text: 'Next letter: V, W, X, Y, ?', answer: 'Z', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Alphabet end' },
  { id: 185, type: 'drinking', text: 'Last person to make eye contact drinks 1 shot!', answer: 'EYE CONTACT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Look at someone' },
  { id: 186, type: 'logic', text: 'What has a ring but no finger?', answer: 'TELEPHONE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Communication' },
  { id: 187, type: 'quick', text: 'Last person to count to 3 drinks!', answer: 'COUNT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Numbers' },
  { id: 188, type: 'math', text: 'What is 4 × 6?', answer: '24', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Multiplication' },
  { id: 189, type: 'trivia', text: 'What is the smallest country?', answer: 'VATICAN CITY', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'In Rome' },
  { id: 190, type: 'word', text: 'Unscramble: F O X', answer: 'FOX', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Animal' },
  { id: 191, type: 'drinking', text: 'Person wearing most jewelry drinks 1 shot!', answer: 'JEWELRY', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Accessories' },
  { id: 192, type: 'math', text: 'What is 30 + 70?', answer: '100', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Addition' },
  { id: 193, type: 'word', text: 'Name a car brand starting with "T"', answer: 'TOYOTA', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'vocabulary', hint: 'Japanese brand' },
  { id: 194, type: 'sequence', text: 'Next number: 3, 6, 9, 12, ?', answer: '15', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'pattern', hint: 'Add 3' },
  { id: 195, type: 'logic', text: 'What has words but never speaks?', answer: 'BOOK', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'riddle', hint: 'Reading material' },
  { id: 196, type: 'quick', text: 'Last person to snap fingers drinks!', answer: 'SNAP', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Finger sound' },
  { id: 197, type: 'trivia', text: 'What is the hottest planet?', answer: 'VENUS', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'knowledge', hint: 'Solar system' },
  { id: 198, type: 'math', text: 'What is 16 ÷ 4?', answer: '4', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'calculation', hint: 'Division' },
  { id: 199, type: 'drinking', text: 'Everyone who is single drinks 1 shot!', answer: 'SINGLE', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'action', hint: 'Relationship status' },
  { id: 200, type: 'word', text: 'Unscramble: B A T', answer: 'BAT', difficulty: 'easy', penaltyShots: 1, mode: 'THE WARM UP', category: 'scramble', hint: 'Animal or sports equipment' },
  // ========== BRAIN BURNER (Medium - 2-3 shots) ==========
  // South African & neighboring countries focus with flirtatious twist
  { id: 201, type: 'flirt', text: 'Compliment the person to your right in isiZulu OR drink 2 shots!', answer: 'NJANI', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Say "Uyakhanya" (You shine) or similar' },
  { id: 202, type: 'flirt', text: 'Name 3 romantic spots in Cape Town OR drink 2 shots!', answer: 'SPOTS', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Table Mountain, Camps Bay, Kirstenbosch' },
  { id: 203, type: 'flirt', text: 'Whisper something sweet in Afrikaans to the person on your left OR drink 2 shots!', answer: 'SWEET', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Say "Jy is spesiaal" (You are special)' },
  { id: 204, type: 'flirt', text: 'Last person to name a South African love song drinks 2 shots!', answer: 'SONG', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'music', hint: 'Think of local artists' },
  { id: 205, type: 'flirt', text: 'Give a pickup line using a South African slang word OR drink 2 shots!', answer: 'PICKUP', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Use "Ayoba", "Lekker", or "Shapa"' },
  { id: 206, type: 'flirt', text: 'Name a romantic beach in Durban OR drink 2 shots!', answer: 'BEACH', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Umhlanga, North Beach, South Beach' },
  { id: 207, type: 'flirt', text: 'Describe your ideal braai date in 10 seconds OR drink 2 shots!', answer: 'BRAAI', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'culture', hint: 'Think boerewors, sunset, good company' },
  { id: 208, type: 'flirt', text: 'Last person to name a South African celebrity crush drinks 2 shots!', answer: 'CELEBRITY', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'pop culture', hint: 'Actors, musicians, sports stars' },
  { id: 209, type: 'flirt', text: 'Give someone a compliment using a township slang word OR drink 2 shots!', answer: 'COMPLIMENT', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Use "Sharp", "Eish", or "Yho"' },
  { id: 210, type: 'flirt', text: 'Name a romantic wine farm in Stellenbosch OR drink 2 shots!', answer: 'WINEFARM', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Spier, Boschendal, Delaire' },
  { id: 211, type: 'flirt', text: 'Whisper "you\'re beautiful" in any South African language OR drink 2 shots!', answer: 'BEAUTIFUL', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'isiZulu: "Uyakhanya", Afrikaans: "Jy is pragtig"' },
  { id: 212, type: 'flirt', text: 'Last person to name a romantic movie set in South Africa drinks 2 shots!', answer: 'MOVIE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'pop culture', hint: 'Think local or international films' },
  { id: 213, type: 'flirt', text: 'Describe your perfect safari date in Kruger Park OR drink 2 shots!', answer: 'SAFARI', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Sunset drive, bush dinner, stargazing' },
  { id: 214, type: 'flirt', text: 'Give a flirtatious look to the person across from you OR drink 2 shots!', answer: 'LOOK', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'action', hint: 'Make eye contact and smile' },
  { id: 215, type: 'flirt', text: 'Name a South African love poet OR drink 2 shots!', answer: 'POET', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'literature', hint: 'Think of local writers' },
  { id: 216, type: 'flirt', text: 'Last person to name a romantic spot in Johannesburg drinks 2 shots!', answer: 'JOBURG', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Sandton City, Maboneng, Zoo Lake' },
  { id: 217, type: 'flirt', text: 'Say something romantic in Sotho OR drink 2 shots!', answer: 'SOTHO', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Say "Ke a go rata" (I love you)' },
  { id: 218, type: 'flirt', text: 'Describe your ideal date at a shebeen OR drink 2 shots!', answer: 'SHEBEEN', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'culture', hint: 'Live music, good vibes, local drinks' },
  { id: 219, type: 'flirt', text: 'Last person to name a South African wedding tradition drinks 2 shots!', answer: 'TRADITION', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'culture', hint: 'Lobola, white wedding, after-party' },
  { id: 220, type: 'flirt', text: 'Give someone a shoulder massage OR drink 2 shots!', answer: 'MASSAGE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'action', hint: 'Be gentle and respectful' },
  { id: 221, type: 'flirt', text: 'Name a romantic hotel in the Winelands OR drink 2 shots!', answer: 'HOTEL', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Lanzerac, Babylonstoren, La Residence' },
  { id: 222, type: 'flirt', text: 'Last person to name a South African love story drinks 2 shots!', answer: 'LOVESTORY', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'literature', hint: 'Think local novels or folklore' },
  { id: 223, type: 'flirt', text: 'Whisper a sweet nothing in Xhosa OR drink 2 shots!', answer: 'XHOSA', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Say "Ndiyakuthanda" (I love you)' },
  { id: 224, type: 'flirt', text: 'Describe your perfect date during load shedding OR drink 2 shots!', answer: 'LOADSHD', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'culture', hint: 'Candles, blankets, good conversation' },
  { id: 225, type: 'flirt', text: 'Last person to name a romantic spot in Pretoria drinks 2 shots!', answer: 'PRETORIA', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Union Buildings, Botanical Gardens' },
  { id: 226, type: 'flirt', text: 'Give a compliment about someone\'s style using SA slang OR drink 2 shots!', answer: 'STYLE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'fashion', hint: 'Say "Your fit is fire" or similar' },
  { id: 227, type: 'flirt', text: 'Name a romantic getaway in the Drakensberg OR drink 2 shots!', answer: 'DRAKENSBERG', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Cathedral Peak, Champagne Castle' },
  { id: 228, type: 'flirt', text: 'Last person to name a South African love potion/tradition drinks 2 shots!', answer: 'POTION', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'culture', hint: 'Muthi, traditional herbs' },
  { id: 229, type: 'flirt', text: 'Say "I choose you" in any SA language to someone OR drink 2 shots!', answer: 'CHOOSE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Afrikaans: "Ek kies jou"' },
  { id: 230, type: 'flirt', text: 'Describe your ideal date at a township jazz club OR drink 2 shots!', answer: 'JAZZ', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'music', hint: 'Live music, dancing, vibes' },
  { id: 231, type: 'flirt', text: 'Last person to name a romantic beach in Mozambique drinks 2 shots!', answer: 'MOZAMBIQUE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Neighboring country beaches' },
  { id: 232, type: 'flirt', text: 'Give someone a playful wink OR drink 2 shots!', answer: 'WINK', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'action', hint: 'Keep it light and fun' },
  { id: 233, type: 'flirt', text: 'Name a romantic spot in Namibia OR drink 2 shots!', answer: 'NAMIBIA', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Sossusvlei, Swakopmund' },
  { id: 234, type: 'flirt', text: 'Last person to name a South African love proverb drinks 2 shots!', answer: 'PROVERB', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'culture', hint: 'Traditional wisdom about love' },
  { id: 235, type: 'flirt', text: 'Say something romantic about the Karoo OR drink 2 shots!', answer: 'KAROO', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Starry nights, wide open spaces' },
  { id: 236, type: 'flirt', text: 'Describe your perfect date at a South African music festival OR drink 2 shots!', answer: 'FESTIVAL', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'music', hint: 'Rocking the Daisies, Oppikoppi' },
  { id: 237, type: 'flirt', text: 'Last person to name a romantic spot in Botswana drinks 2 shots!', answer: 'BOTSWANA', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Okavango Delta, Chobe' },
  { id: 238, type: 'flirt', text: 'Give someone a high-five with a compliment OR drink 2 shots!', answer: 'HIGHFIVE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'action', hint: 'Say "You\'re awesome!" while high-fiving' },
  { id: 239, type: 'flirt', text: 'Name a romantic spot in Lesotho OR drink 2 shots!', answer: 'LESOTHO', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Mountain kingdom, Maluti Mountains' },
  { id: 240, type: 'flirt', text: 'Last person to name a South African love dance drinks 2 shots!', answer: 'DANCE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'dance', hint: 'Traditional or modern love dances' },
  { id: 241, type: 'flirt', text: 'Describe your ideal date watching a rugby match OR drink 2 shots!', answer: 'RUGBY', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'sports', hint: 'Springboks, braai, beers' },
  { id: 242, type: 'flirt', text: 'Say "you have beautiful eyes" in any SA language OR drink 2 shots!', answer: 'EYES', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'Afrikaans: "Jy het pragtige oë"' },
  { id: 243, type: 'flirt', text: 'Last person to name a romantic spot in eSwatini drinks 2 shots!', answer: 'ESWATINI', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Formerly Swaziland' },
  { id: 244, type: 'flirt', text: 'Give someone a hug OR drink 2 shots!', answer: 'HUG', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'action', hint: 'Ask for consent first!' },
  { id: 245, type: 'flirt', text: 'Name a romantic spot in Zimbabwe OR drink 2 shots!', answer: 'ZIMBABWE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Victoria Falls, Great Zimbabwe' },
  { id: 246, type: 'flirt', text: 'Last person to name a South African love song artist drinks 2 shots!', answer: 'ARTIST', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'music', hint: 'Local musicians who sing about love' },
  { id: 247, type: 'flirt', text: 'Describe your perfect date eating bunny chow OR drink 2 shots!', answer: 'BUNNYCHOW', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'food', hint: 'Durban specialty, casual dining' },
  { id: 248, type: 'flirt', text: 'Whisper "you make me smile" in any SA language OR drink 2 shots!', answer: 'SMILE', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'language', hint: 'isiZulu: "Uyangihlekisa"' },
  { id: 249, type: 'flirt', text: 'Last person to name a romantic spot in Zambia drinks 2 shots!', answer: 'ZAMBIA', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'geography', hint: 'Victoria Falls, Lake Kariba' },
  { id: 250, type: 'flirt', text: 'Give someone a genuine compliment about their personality OR drink 2 shots!', answer: 'PERSONALITY', difficulty: 'medium', penaltyShots: 2, mode: 'BRAIN BURNER', category: 'action', hint: 'Be specific and sincere' },
  // ========== ULTIMATE CHALLENGE (Hard - 5+ shots) ==========
  // Intense flirtation, brief intimate touches, sensual challenges
  // Each challenge will have {targetPlayer} replaced with a randomly selected player name
  { id: 251, type: 'intimate', text: 'Give {targetPlayer} a 10-second shoulder massage OR drink 5 shots!', answer: 'MASSAGE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Be gentle but firm, ask for consent' },
  { id: 252, type: 'intimate', text: 'Whisper your favorite love song lyric in {targetPlayer}\'s ear OR drink 5 shots!', answer: 'WHISPER', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'whisper', hint: 'Get close, speak softly and intimately' },
  { id: 253, type: 'intimate', text: 'Hold hands with {targetPlayer} for 30 seconds while maintaining eye contact OR drink 5 shots!', answer: 'HOLDHANDS', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Interlock fingers, don\'t break eye contact' },
  { id: 254, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their lips OR drink 5 shots!', answer: 'LIPS', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'Be genuine but flirtatious' },
  { id: 255, type: 'intimate', text: 'Dance closely with {targetPlayer} for 1 minute (no space between) OR drink 5 shots!', answer: 'DANCE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'dance', hint: 'Slow, close dancing, maintain contact' },
  { id: 256, type: 'intimate', text: 'Trace your finger along {targetPlayer}\'s arm from wrist to elbow OR drink 5 shots!', answer: 'TRACE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Light, slow touch along the arm' },
  { id: 257, type: 'intimate', text: 'Share a secret fantasy with {targetPlayer} OR drink 5 shots!', answer: 'SECRET', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'Keep it playful but honest' },
  { id: 258, type: 'intimate', text: 'Give {targetPlayer} a lingering hug (minimum 10 seconds) OR drink 5 shots!', answer: 'HUG', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Full body contact, don\'t rush' },
  { id: 259, type: 'intimate', text: 'Describe what you find attractive about {targetPlayer} OR drink 5 shots!', answer: 'ATTRACTIVE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'Be specific and sincere' },
  { id: 260, type: 'intimate', text: 'Play with {targetPlayer}\'s hair for 15 seconds OR drink 5 shots!', answer: 'HAIR', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Gentle strokes, ask permission first' },
  { id: 261, type: 'intimate', text: 'Share your most romantic kiss memory with {targetPlayer} OR drink 5 shots!', answer: 'KISS', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'memory', hint: 'Be descriptive but respectful' },
  { id: 262, type: 'intimate', text: 'Give {targetPlayer} a foot massage for 1 minute OR drink 5 shots!', answer: 'FOOTMASSAGE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Focus on the arches and heels' },
  { id: 263, type: 'intimate', text: 'Whisper what turns you on about {targetPlayer} OR drink 5 shots!', answer: 'TURNON', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'whisper', hint: 'Private whisper, be honest but kind' },
  { id: 264, type: 'intimate', text: 'Slow dance cheek-to-cheek with {targetPlayer} OR drink 5 shots!', answer: 'CHEEK', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'dance', hint: 'Faces touching, slow movement' },
  { id: 265, type: 'intimate', text: 'Give {targetPlayer} a neck massage for 30 seconds OR drink 5 shots!', answer: 'NECK', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Focus on the base of the skull' },
  { id: 266, type: 'intimate', text: 'Describe your ideal sensual date with {targetPlayer} OR drink 5 shots!', answer: 'DATE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'fantasy', hint: 'Include all five senses' },
  { id: 267, type: 'intimate', text: 'Give {targetPlayer} a back scratch for 20 seconds OR drink 5 shots!', answer: 'SCRATCH', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Gentle but firm circular motions' },
  { id: 268, type: 'intimate', text: 'Share what you\'d do on a romantic weekend getaway with {targetPlayer} OR drink 5 shots!', answer: 'WEEKEND', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'fantasy', hint: 'Be imaginative and detailed' },
  { id: 269, type: 'intimate', text: 'Give {targetPlayer} a hand massage for 45 seconds OR drink 5 shots!', answer: 'HANDMASSAGE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Focus on palms and fingers' },
  { id: 270, type: 'intimate', text: 'Whisper your favorite body part on {targetPlayer} OR drink 5 shots!', answer: 'BODYPART', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'whisper', hint: 'Private compliment' },
  { id: 271, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their eyes OR drink 5 shots!', answer: 'EYES', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'Look deeply while complimenting' },
  { id: 272, type: 'intimate', text: 'Share your favorite romantic memory with {targetPlayer} OR drink 5 shots!', answer: 'ROMANCE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'memory', hint: 'Be vulnerable and honest' },
  { id: 273, type: 'intimate', text: 'Give {targetPlayer} a scalp massage for 30 seconds OR drink 5 shots!', answer: 'SCALP', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'touch', hint: 'Circular motions with fingertips' },
  { id: 274, type: 'intimate', text: 'Describe your perfect kiss with {targetPlayer} OR drink 5 shots!', answer: 'PERFECTKISS', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'fantasy', hint: 'Location, timing, sensations' },
  { id: 275, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their voice OR drink 5 shots!', answer: 'VOICE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How their voice makes you feel' },
  { id: 276, type: 'intimate', text: 'Share what intimacy means to you with {targetPlayer} OR drink 5 shots!', answer: 'INTIMACY', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'Emotional and physical aspects' },
  { id: 277, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their smile OR drink 5 shots!', answer: 'SMILE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How their smile affects you' },
  { id: 278, type: 'intimate', text: 'Share your favorite sensual touch with {targetPlayer} OR drink 5 shots!', answer: 'TOUCH', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'What kind of touch you enjoy most' },
  { id: 279, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their hands OR drink 5 shots!', answer: 'HANDS', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'Notice details about their hands' },
  { id: 280, type: 'intimate', text: 'Share what you find most sensual in {targetPlayer} OR drink 5 shots!', answer: 'SENSUAL', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'Physical or emotional traits' },
  { id: 281, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their laugh OR drink 5 shots!', answer: 'LAUGH', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How their laugh makes you feel' },
  { id: 282, type: 'intimate', text: 'Share your favorite romantic gesture for {targetPlayer} OR drink 5 shots!', answer: 'GESTURE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'memory', hint: 'Something you\'d do for them' },
  { id: 283, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their scent OR drink 5 shots!', answer: 'SCENT', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How they smell to you' },
  { id: 284, type: 'intimate', text: 'Share what makes you feel desired by {targetPlayer} OR drink 5 shots!', answer: 'DESIRED', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'Their actions or words' },
  { id: 285, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their confidence OR drink 5 shots!', answer: 'CONFIDENCE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How their confidence attracts you' },
  { id: 286, type: 'intimate', text: 'Share your favorite thing about physical intimacy with {targetPlayer} OR drink 5 shots!', answer: 'PHYSICAL', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'What you\'d enjoy most' },
  { id: 287, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their intelligence OR drink 5 shots!', answer: 'INTELLIGENCE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How their mind attracts you' },
  { id: 288, type: 'intimate', text: 'Share what you find most romantic about {targetPlayer} OR drink 5 shots!', answer: 'ROMANTIC', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'Their romantic qualities' },
  { id: 289, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their passion OR drink 5 shots!', answer: 'PASSION', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'What they\'re passionate about' },
  { id: 290, type: 'intimate', text: 'Share your favorite sensual memory idea with {targetPlayer} OR drink 5 shots!', answer: 'MEMORY', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'fantasy', hint: 'A memorable sensual scenario' },
  { id: 291, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their style OR drink 5 shots!', answer: 'STYLE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How they express themselves' },
  { id: 292, type: 'intimate', text: 'Share what intimacy with {targetPlayer} looks like to you OR drink 5 shots!', answer: 'INTIMACYLIFE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'fantasy', hint: 'Your vision of intimate connection' },
  { id: 293, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their energy OR drink 5 shots!', answer: 'ENERGY', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'The vibe they give off' },
  { id: 294, type: 'intimate', text: 'Share your favorite way to be touched by {targetPlayer} OR drink 5 shots!', answer: 'WAYTOUCHED', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'fantasy', hint: 'Specific touches you\'d enjoy' },
  { id: 295, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their presence OR drink 5 shots!', answer: 'PRESENCE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'How they fill a room' },
  { id: 296, type: 'intimate', text: 'Share what turns you on emotionally about {targetPlayer} OR drink 5 shots!', answer: 'EMOTIONAL', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'Non-physical attractions' },
  { id: 297, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their warmth OR drink 5 shots!', answer: 'WARMTH', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'Their emotional warmth' },
  { id: 298, type: 'intimate', text: 'Share your idea of perfect intimacy with {targetPlayer} OR drink 5 shots!', answer: 'PERFECTINTIMACY', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'fantasy', hint: 'Your ultimate intimate scenario' },
  { id: 299, type: 'intimate', text: 'Give {targetPlayer} a sensual compliment about their authenticity OR drink 5 shots!', answer: 'AUTHENTICITY', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'compliment', hint: 'Their real, genuine self' },
  { id: 300, type: 'intimate', text: 'Share what you crave in intimate moments with {targetPlayer} OR drink 5 shots!', answer: 'CRAVE', difficulty: 'hard', penaltyShots: 5, mode: 'ULTIMATE CHALLENGE', category: 'confession', hint: 'Your deepest intimate desires' },
  // ========== ULTIMATE CHALLENGE (Hard - 5+ shots) ==========
  // Intense flirtation, brief intimate touches, sensual challenges
  // Each challenge summons a random player from the board to participate
  // ========== ULTIMATE CHALLENGE (Hard - 5+ shots) ==========
  // Intense flirtation, brief intimate touches, sensual challenges
 ],
 
 getCardsByMode: function(mode) {
  return this.cards.filter(card => card.mode === mode);
 },
 
 getRandomCardsByMode: function(mode, count) {
  const modeCards = this.getCardsByMode(mode);
  const shuffled = [...modeCards].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
 },
 
 getCardsByCategory: function(category) {
  return this.cards.filter(card => card.category === category);
 },
 
 getRandomCard: function() {
  return this.cards[Math.floor(Math.random() * this.cards.length)];
 },
 
 getCardById: function(id) {
  return this.cards.find(card => card.id === id);
 },
 
 getStats: function() {
  return {
   totalCards: this.cards.length,
   modes: [...new Set(this.cards.map(card => card.mode))],
   difficulties: {
    easy: this.cards.filter(card => card.difficulty === 'easy').length,
    medium: this.cards.filter(card => card.difficulty === 'medium').length,
    hard: this.cards.filter(card => card.difficulty === 'hard').length
   }
  };
 }
};

console.log("Game cards loaded - no emojis");
const stats = gameCards.getStats();
console.log("Total cards:", stats.totalCards);
console.log("Modes:", stats.modes);
console.log("Easy cards:", stats.difficulties.easy);
console.log("Medium cards:", stats.difficulties.medium);
console.log("Hard cards:", stats.difficulties.hard);

module.exports = gameCards;
