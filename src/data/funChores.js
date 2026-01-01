// SOUTH AFRICAN FUN CHORES FOR DRINKING GAME
// 65 different SA-themed fun tasks for selected player during the game
// All chores include "or take 3 shots" in the text

const funChores = {
  chores: [
    {
      id: 1,
      text: "Do your best impression of a Springbok or take 3 shots",
      type: "entertainment",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 2,
      text: "Speak with a Cape Town accent for next round or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 3,
      text: "Name 3 South African presidents or take 3 shots",
      type: "knowledge",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 4,
      text: "Do the vosho dance or take 3 shots",
      type: "physical",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 5,
      text: "Name a famous South African dish and describe it or take 3 shots",
      type: "knowledge",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 6,
      text: "Act out a scene from Generations or take 3 shots",
      type: "acting",
      difficulty: "hard",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 7,
      text: "Sing the chorus of a Brenda Fassie song or take 3 shots",
      type: "music",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 8,
      text: "Tell a funny story about load shedding or take 3 shots",
      type: "storytelling",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 9,
      text: "Do the amapiano dance or take 3 shots",
      type: "physical",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 10,
      text: "Make up a short rap about braai culture or take 3 shots",
      type: "creative",
      difficulty: "hard",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 11,
      text: "Talk like a rugby commentator for next round or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 12,
      text: "Name 3 South African national parks or take 3 shots",
      type: "knowledge",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 13,
      text: "Do your best impression of Trevor Noah or take 3 shots",
      type: "entertainment",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 14,
      text: "Teach the group a South African slang word or take 3 shots",
      type: "social",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 15,
      text: "Tell a funny taxi rank story or take 3 shots",
      type: "storytelling",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 16,
      text: "Name 3 South African musicians or take 3 shots",
      type: "knowledge",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 17,
      text: "Do the gqom dance or take 3 shots",
      type: "physical",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 18,
      text: "Describe how to make pap correctly or take 3 shots",
      type: "knowledge",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 19,
      text: "Speak with a Johannesburg accent for next round or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 20,
      text: "Name the provinces of South Africa or take 3 shots",
      type: "knowledge",
      difficulty: "hard",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 21,
      text: "Do 5 push-ups while saying 'Ayoba' each time or take 3 shots",
      type: "physical",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 22,
      text: "Tell a story about a funny spaza shop experience or take 3 shots",
      type: "storytelling",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 23,
      text: "Balance a drink on your head like a vendor or take 3 shots",
      type: "physical",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 24,
      text: "Talk like a cricket commentator for next round or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 25,
      text: "Invent a new South African handshake or take 3 shots",
      type: "social",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 26,
      text: "Do an impression of a famous South African politician or take 3 shots",
      type: "entertainment",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 27,
      text: "Walk like you're in a Soweto march or take 3 shots",
      type: "physical",
      difficulty: "easy",
      duration: "until next turn",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 28,
      text: "Describe your favorite bunny chow without saying its name or take 3 shots",
      type: "creative",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 29,
      text: "Talk like a township preacher for next round or take 3 shots",
      type: "roleplay",
      difficulty: "hard",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 30,
      text: "Do a silly walk to the kitchen like you're getting snacks or take 3 shots",
      type: "physical",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 31,
      text: "Make up a slogan for rooibos tea or take 3 shots",
      type: "creative",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 32,
      text: "Talk like a SABC news reader for next round or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 33,
      text: "Do your best impression of a minibus taxi conductor or take 3 shots",
      type: "entertainment",
      difficulty: "hard",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 34,
      text: "Sing Nkosi Sikelel' iAfrika or take 3 shots",
      type: "music",
      difficulty: "easy",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 35,
      text: "Tell a ghost story set in Union Buildings or take 3 shots",
      type: "storytelling",
      difficulty: "medium",
      duration: "30 seconds",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 36,
      text: "Act like a traffic officer at a robot for two rounds or take 3 shots",
      type: "acting",
      difficulty: "hard",
      duration: "two rounds",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 37,
      text: "Do impressions of three South African animals or take 3 shots",
      type: "entertainment",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 38,
      text: "Talk like you're at a shebeen for next round or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 39,
      text: "Create a short commercial for biltong or take 3 shots",
      type: "creative",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 40,
      text: "Do the pantsula dance for 20 seconds or take 3 shots",
      type: "physical",
      difficulty: "hard",
      duration: "20 seconds",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 41,
      text: "Speak like you're explaining load shedding schedule or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 42,
      text: "Tell a story using only township slang or take 3 shots",
      type: "creative",
      difficulty: "hard",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 43,
      text: "Do your best impression of a South African teacher or take 3 shots",
      type: "entertainment",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 44,
      text: "Walk like you're carrying a bucket on your head or take 3 shots",
      type: "physical",
      difficulty: "easy",
      duration: "until next turn",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 45,
      text: "Talk like a farmer from the Karoo for three rounds or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "three rounds",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 46,
      text: "Invent a new South African cocktail and describe it or take 3 shots",
      type: "creative",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 47,
      text: "Do 10 squats while saying 'Eish' each time or take 3 shots",
      type: "physical",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 48,
      text: "Talk like a baby from Durban for next round or take 3 shots",
      type: "roleplay",
      difficulty: "easy",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 49,
      text: "Create a short poem about Table Mountain or take 3 shots",
      type: "creative",
      difficulty: "hard",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 50,
      text: "Do the kwaito dance across the room or take 3 shots",
      type: "physical",
      difficulty: "hard",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 51,
      text: "Talk like a tour guide at Robben Island for next round or take 3 shots",
      type: "roleplay",
      difficulty: "hard",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 52,
      text: "Do your best impression of a South African weather reporter or take 3 shots",
      type: "entertainment",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 53,
      text: "Walk on your tiptoes like you're avoiding something or take 3 shots",
      type: "physical",
      difficulty: "easy",
      duration: "until next turn",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 54,
      text: "Talk like a detective solving a case in Hillbrow or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 55,
      text: "Invent a secret code using South African slang or take 3 shots",
      type: "social",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 56,
      text: "Do 5 star jumps while shouting 'Shapa!' each time or take 3 shots",
      type: "physical",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 57,
      text: "Talk like a scientist discovering a new mineral or take 3 shots",
      type: "roleplay",
      difficulty: "hard",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 58,
      text: "Do your best impression of a South African game show host or take 3 shots",
      type: "entertainment",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 59,
      text: "Walk like your shoes are from China Mall or take 3 shots",
      type: "physical",
      difficulty: "easy",
      duration: "until next turn",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 60,
      text: "Talk like a poet from Sophiatown for next round or take 3 shots",
      type: "roleplay",
      difficulty: "hard",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 61,
      text: "Create a victory dance for Bafana Bafana winning or take 3 shots",
      type: "physical",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 62,
      text: "Talk like a tour guide showing Soweto or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 63,
      text: "Do your best impression of a South African politician campaigning or take 3 shots",
      type: "entertainment",
      difficulty: "medium",
      duration: "immediate",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 64,
      text: "Walk like you're on a tightrope at Gold Reef City or take 3 shots",
      type: "physical",
      difficulty: "medium",
      duration: "until next turn",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    },
    {
      id: 65,
      text: "Talk like a sports coach during Rugby World Cup or take 3 shots",
      type: "roleplay",
      difficulty: "medium",
      duration: "next round",
      penaltyShots: 3,
      penaltyNote: "Do it or take 3 shots!"
    }
  ],

  getRandomChore: function() {
    return this.chores[Math.floor(Math.random() * this.chores.length)];
  },

  getChoreById: function(id) {
    return this.chores.find(chore => chore.id === id);
  },

  getChoresByType: function(type) {
    return this.chores.filter(chore => chore.type === type);
  },

  getStats: function() {
    return {
      totalChores: this.chores.length,
      types: [...new Set(this.chores.map(chore => chore.type))],
      difficulties: {
        easy: this.chores.filter(chore => chore.difficulty === 'easy').length,
        medium: this.chores.filter(chore => chore.difficulty === 'medium').length,
        hard: this.chores.filter(chore => chore.difficulty === 'hard').length
      },
      totalPenaltyShots: this.chores.reduce((sum, chore) => sum + chore.penaltyShots, 0)
    };
  }
};

console.log("South African fun chores loaded - no emojis");
const stats = funChores.getStats();
console.log("Total SA-themed chores:", stats.totalChores);
console.log("All chores include 'or take 3 shots' in text");

module.exports = funChores;
