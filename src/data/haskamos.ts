export interface Haskama {
  id: number;
  quote: string;
  source: string;
  translation?: string;
  category: 'chazal' | 'tanach' | 'acharonim' | 'contemporary';
  theme: string;
}

export const haskamos: Haskama[] = [
  {
    id: 1,
    quote: "בצר לי מרחב יה",
    source: "Tehillim 118:5",
    translation: "From the straits I called to God; God answered me with expansiveness",
    category: "tanach",
    theme: "Hope from Struggle"
  },
  {
    id: 2,
    quote: "לפום צערא אגרא",
    source: "Pirkei Avos 5:23",
    translation: "According to the effort is the reward",
    category: "chazal",
    theme: "Value of Struggle"
  },
  {
    id: 3,
    quote: "The dust from their struggle rose to the Kisei HaKavod",
    source: "Bereishis Rabbah 77:3",
    translation: "Even our lowest moments reach the highest realms",
    category: "chazal",
    theme: "Significance of Struggle"
  },
  {
    id: 4,
    quote: "אין הקדוש ברוך הוא בא בטרוניא עם בריותיו",
    source: "Avodah Zarah 3a",
    translation: "Hashem does not deal tyrannically with His creations - He doesn't give us more than we can handle",
    category: "chazal",
    theme: "Divine Compassion"
  },
  {
    id: 5,
    quote: "כל מה דעביד רחמנא לטב עביד",
    source: "Berachos 60b",
    translation: "Everything Hashem does is for the good",
    category: "chazal",
    theme: "Faith in Divine Plan"
  },
  {
    id: 6,
    quote: "גם כי אלך בגיא צלמות לא אירא רע כי אתה עמדי",
    source: "Tehillim 23:4",
    translation: "Even when I walk through the valley of the shadow of death, I will fear no evil, for You are with me",
    category: "tanach",
    theme: "Divine Presence in Darkness"
  },
  {
    id: 7,
    quote: "קרוב ה׳ לנשברי לב",
    source: "Tehillim 34:19",
    translation: "Hashem is close to the broken-hearted",
    category: "tanach",
    theme: "Finding Hashem in Pain"
  },
  {
    id: 8,
    quote: "A person doesn't understand the depths of Torah until he stumbles in it",
    source: "Gittin 43a",
    translation: "Failure and struggle are part of growth",
    category: "chazal",
    theme: "Growth Through Difficulty"
  },
  {
    id: 9,
    quote: "The world was created with ten utterances. Why? To give reward to the tzaddikim who sustain the world that was created with ten utterances, and to exact punishment from the resha'im who destroy the world that was created with ten utterances.",
    source: "Pirkei Avos 5:1",
    translation: "The difficulty of sustaining ourselves spiritually is intentional - it's what gives meaning to our efforts",
    category: "chazal",
    theme: "Purpose of Challenge"
  },
  {
    id: 10,
    quote: "One hour of repentance and good deeds in this world is better than all the life of the World to Come",
    source: "Pirkei Avos 4:17",
    translation: "Our struggles and our choices here matter more than we can imagine",
    category: "chazal",
    theme: "Significance of This World"
  },
  {
    id: 11,
    quote: "The greater the person, the greater their yetzer hara",
    source: "Sukkah 52a",
    translation: "Intense struggle is often a sign of spiritual potential, not spiritual failure",
    category: "chazal",
    theme: "Understanding Struggle"
  },
  {
    id: 12,
    quote: "A person is obligated to say: The world was created for me",
    source: "Sanhedrin 37a",
    translation: "Your existence has infinite value and purpose",
    category: "chazal",
    theme: "Self-Worth"
  },
  {
    id: 13,
    quote: "Yaakov didn't die",
    source: "Ta'anis 5b",
    translation: "The essence of Yaakov - the struggle - lives on in us, his descendants",
    category: "chazal",
    theme: "Eternal Nature of Struggle"
  },
  {
    id: 14,
    quote: "The Tzaddik falls seven times and rises",
    source: "Mishlei 24:16",
    translation: "Falling and rising is the pattern of righteousness, not its opposite",
    category: "tanach",
    theme: "Resilience"
  },
  {
    id: 15,
    quote: "A person's struggles are precious before Hashem",
    source: "Sfas Emes, Vayeishev",
    translation: "Our very struggle is a form of avodas Hashem",
    category: "acharonim",
    theme: "Sacred Struggle"
  },
  {
    id: 16,
    quote: "Depression is not a spiritual failing. It's an illness that affects our ability to perceive spirituality.",
    source: "Rabbi Dr. Abraham Twerski zt\"l",
    translation: "Modern Torah perspective acknowledging mental health as medical, not spiritual failure",
    category: "contemporary",
    theme: "Mental Health Understanding"
  },
  {
    id: 17,
    quote: "Sometimes the greatest avodah is simply to survive the day",
    source: "Rebbe Nachman of Breslov, adapted",
    translation: "Survival itself can be holy work",
    category: "acharonim",
    theme: "Validating Survival"
  },
  {
    id: 18,
    quote: "השם עמכם - Hashem is with you",
    source: "Traditional Jewish greeting",
    translation: "Even when you can't feel it, the presence remains",
    category: "contemporary",
    theme: "Divine Presence"
  }
];

export const getHaskamasByCategory = (category: Haskama['category'] | 'all'): Haskama[] => {
  if (category === 'all') return haskamos;
  return haskamos.filter(haskama => haskama.category === category);
};

export const categoryNames: Record<Haskama['category'], string> = {
  tanach: "Tanach - Timeless Words",
  chazal: "Chazal - Our Sages",
  acharonim: "Acharonim - Later Torah Authorities",
  contemporary: "Contemporary Torah Voices"
};
