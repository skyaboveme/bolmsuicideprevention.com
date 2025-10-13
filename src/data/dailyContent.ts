// Daily rotating content for homepage
// Content rotates based on day of year for consistency

export interface DailyScripture {
  verse: string;
  reference: string;
  reflection: string;
}

export interface SaintQuote {
  quote: string;
  saint: string;
  context: string;
}

export interface MentalHealthTip {
  tip: string;
  category: string;
}

export interface PrayerIntention {
  intention: string;
  focus: string;
}

export interface WhyYouAreImportant {
  message: string;
  source: string;
}

export interface PositiveThought {
  thought: string;
  source: string;
}

export const scriptures: DailyScripture[] = [
  {
    verse: "Come to me, all you who are weary and burdened, and I will give you rest.",
    reference: "Matthew 11:28",
    reflection: "Jesus invites us to bring our mental and emotional burdens to Him."
  },
  {
    verse: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reference: "Psalm 34:18",
    reflection: "God is especially near to us in our darkest moments of despair."
  },
  {
    verse: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    reflection: "Our worries and fears are not burdens we must carry alone."
  },
  {
    verse: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6",
    reflection: "Prayer is our refuge when anxiety threatens to overwhelm us."
  },
  {
    verse: "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
    reference: "Psalm 23:1-3",
    reflection: "God provides rest and restoration for our weary souls."
  },
  {
    verse: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.",
    reference: "John 14:27",
    reflection: "Christ offers a peace that transcends our circumstances."
  },
  {
    verse: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.",
    reference: "Psalm 23:4",
    reflection: "In the valley of depression, God walks beside us."
  },
  {
    verse: "My grace is sufficient for you, for my power is made perfect in weakness.",
    reference: "2 Corinthians 12:9",
    reflection: "Our mental health struggles do not diminish God's power in our lives."
  },
  {
    verse: "He heals the brokenhearted and binds up their wounds.",
    reference: "Psalm 147:3",
    reflection: "God is actively working to heal our emotional and psychological wounds."
  },
  {
    verse: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    reference: "John 16:33",
    reflection: "Jesus acknowledges our struggles while assuring us of ultimate victory."
  },
  {
    verse: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
    reference: "Deuteronomy 31:8",
    reflection: "We are never alone in our mental health journey."
  },
  {
    verse: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
    reference: "Jeremiah 29:11",
    reflection: "Even in darkness, God has a plan of hope for our lives."
  },
  {
    verse: "Be strong and courageous. Do not be afraid or terrified because of them, for the Lord your God goes with you; he will never leave you nor forsake you.",
    reference: "Deuteronomy 31:6",
    reflection: "God's presence gives us courage to face our fears."
  },
  {
    verse: "Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort.",
    reference: "2 Corinthians 1:3",
    reflection: "God's compassion reaches into our deepest pain."
  },
  {
    verse: "We are hard pressed on every side, but not crushed; perplexed, but not in despair.",
    reference: "2 Corinthians 4:8",
    reflection: "Though we struggle, we are sustained by God's grace."
  }
];

export const saintQuotes: SaintQuote[] = [
  {
    quote: "Be patient with everyone, but above all with yourself.",
    saint: "St. Francis de Sales",
    context: "He experienced depression and understood the need for self-compassion."
  },
  {
    quote: "The greatest glory we can give to God is to do his will in everything.",
    saint: "St. Alphonsus Liguori",
    context: "Finding purpose even in our struggles with mental health."
  },
  {
    quote: "God does not require that we be successful, only that we be faithful.",
    saint: "Blessed Mother Teresa",
    context: "Our worth is not defined by productivity, but by faithfulness."
  },
  {
    quote: "We must not wish anything other than what happens from moment to moment, all the while trusting in God.",
    saint: "St. Catherine of Siena",
    context: "Living with mental illness requires radical trust in God's care."
  },
  {
    quote: "Have patience with all things, but chiefly have patience with yourself.",
    saint: "St. Francis de Sales",
    context: "Recovery is a journey that requires self-compassion."
  },
  {
    quote: "The only way to make rapid progress along the path of Divine Love is to remain very little and put all our trust in Almighty God.",
    saint: "St. Thérèse of Lisieux",
    context: "She battled anxiety while developing her 'Little Way' of trust."
  },
  {
    quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
    saint: "St. Francis of Assisi",
    context: "Small steps forward are still progress in mental health recovery."
  },
  {
    quote: "Our Lord does not care so much for the importance of our works as for the love with which they are done.",
    saint: "St. Teresa of Ávila",
    context: "Even small acts done with love have value when we're struggling."
  },
  {
    quote: "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    saint: "St. Augustine",
    context: "Seeking mental health treatment is part of living well."
  },
  {
    quote: "Nothing great is ever achieved without much enduring.",
    saint: "St. Catherine of Siena",
    context: "Mental health recovery requires patience and perseverance."
  },
  {
    quote: "Holiness consists simply in doing God's will, and being just what God wants us to be.",
    saint: "St. Thérèse of Lisieux",
    context: "We can be holy even while experiencing mental illness."
  },
  {
    quote: "The greatest method of praying is to pray the Rosary.",
    saint: "St. Francis de Sales",
    context: "The repetitive nature of the Rosary can calm anxious minds."
  },
  {
    quote: "Let nothing disturb you, let nothing frighten you. All things are passing away: God never changes.",
    saint: "St. Teresa of Ávila",
    context: "Finding stability in God when emotions feel unstable."
  },
  {
    quote: "God does not demand that I be successful. God demands that I be faithful.",
    saint: "Blessed Mother Teresa",
    context: "Our mental health does not define our faithfulness to God."
  },
  {
    quote: "Prayer is the best weapon we have; it is the key to God's heart.",
    saint: "St. Padre Pio",
    context: "Prayer connects us to God even when we feel disconnected."
  }
];

export const mentalHealthTips: MentalHealthTip[] = [
  {
    tip: "Take five slow, deep breaths when anxiety rises. Breathe in God's peace, breathe out fear.",
    category: "Anxiety"
  },
  {
    tip: "Attend Mass or spend time in Adoration. Christ's presence in the Eucharist brings peace beyond understanding.",
    category: "Spiritual"
  },
  {
    tip: "Keep a gratitude journal. Each day, write three things you're grateful for, no matter how small.",
    category: "Depression"
  },
  {
    tip: "Reach out to one person today. Connection combats isolation. Send a text, make a call, or meet for coffee.",
    category: "Social"
  },
  {
    tip: "Move your body for 10 minutes. Walk, stretch, or dance. Movement releases endorphins and lifts mood.",
    category: "Physical"
  },
  {
    tip: "Pray the Rosary, focusing on the repetitive, meditative rhythm. Let Mary's intercession calm your mind.",
    category: "Prayer"
  },
  {
    tip: "Limit social media to 30 minutes today. Comparison steals joy. Focus on your own journey.",
    category: "Boundaries"
  },
  {
    tip: "Talk to your doctor or therapist if symptoms persist. Seeking help is wisdom, not weakness.",
    category: "Professional Help"
  },
  {
    tip: "Practice self-compassion. Speak to yourself as you would to a dear friend who is struggling.",
    category: "Self-Care"
  },
  {
    tip: "Get outside for 15 minutes. Sunlight, fresh air, and nature can improve mood and reduce stress.",
    category: "Physical"
  },
  {
    tip: "Receive the Sacrament of Reconciliation. Confession brings spiritual healing and peace.",
    category: "Spiritual"
  },
  {
    tip: "Create a bedtime routine. Good sleep hygiene improves mental health. Aim for 7-9 hours.",
    category: "Sleep"
  },
  {
    tip: "Say no to one thing today. Protecting your time and energy is an act of self-care.",
    category: "Boundaries"
  },
  {
    tip: "Listen to sacred music. Gregorian chant or worship music can calm anxiety and lift spirits.",
    category: "Music"
  },
  {
    tip: "Read Scripture for 5 minutes. God's Word brings comfort, hope, and perspective.",
    category: "Spiritual"
  }
];

export const prayerIntentions: PrayerIntention[] = [
  {
    intention: "For all who struggle with depression, that they may feel God's nearness in the darkness.",
    focus: "Depression"
  },
  {
    intention: "For those battling anxiety, that they may find peace in Christ's promises.",
    focus: "Anxiety"
  },
  {
    intention: "For families who have lost a loved one to suicide, that they may find comfort in God's mercy.",
    focus: "Suicide Loss"
  },
  {
    intention: "For mental health professionals, that they may be instruments of God's healing.",
    focus: "Professionals"
  },
  {
    intention: "For those considering suicide, that they may find hope and reach out for help.",
    focus: "Crisis"
  },
  {
    intention: "For parish communities, that they may become places of welcome and support for those with mental illness.",
    focus: "Community"
  },
  {
    intention: "For those who feel alone in their struggles, that they may find connection and community.",
    focus: "Isolation"
  },
  {
    intention: "For courage to seek help, whether through therapy, medication, or spiritual direction.",
    focus: "Help-Seeking"
  },
  {
    intention: "For those in psychiatric hospitals, that they may experience compassionate care and healing.",
    focus: "Hospitalization"
  },
  {
    intention: "For an end to the stigma surrounding mental illness in faith communities.",
    focus: "Stigma"
  },
  {
    intention: "For caregivers of those with mental illness, that they may find strength and support.",
    focus: "Caregivers"
  },
  {
    intention: "For those struggling with intrusive thoughts, that they may find peace and freedom.",
    focus: "OCD/Scrupulosity"
  },
  {
    intention: "For those managing chronic mental illness, that they may find hope in each new day.",
    focus: "Chronic Illness"
  },
  {
    intention: "For priests and pastoral ministers, that they may respond with compassion to mental health needs.",
    focus: "Clergy"
  },
  {
    intention: "For those on medication, that they may find the right treatment and healing.",
    focus: "Treatment"
  }
];

export const whyYouAreImportant: WhyYouAreImportant[] = [
  {
    message: "You are created in the image and likeness of God, bearing His divine imprint in your very being.",
    source: "Genesis 1:27, Catechism 356-357"
  },
  {
    message: "God knows you by name and has counted every hair on your head. You are personally known and loved.",
    source: "Luke 12:7, Isaiah 43:1"
  },
  {
    message: "Christ gave His life for you. You are worth the blood of God Himself.",
    source: "Romans 5:8, 1 Peter 1:18-19"
  },
  {
    message: "You have infinite dignity that cannot be diminished by illness, failure, or circumstances.",
    source: "Pope John Paul II, CCC 1700"
  },
  {
    message: "God has a unique plan for your life that only you can fulfill. You are irreplaceable.",
    source: "Jeremiah 29:11, Ephesians 2:10"
  },
  {
    message: "You are a beloved child of God, adopted into His family through baptism.",
    source: "1 John 3:1, Galatians 4:6-7"
  },
  {
    message: "The Holy Spirit dwells within you, making you a temple of the living God.",
    source: "1 Corinthians 6:19, CCC 1265"
  },
  {
    message: "Your life has meaning and purpose, even when you cannot see or feel it.",
    source: "Ecclesiastes 3:11, Pope Francis"
  },
  {
    message: "God's love for you is unconditional and unchanging, not based on your performance.",
    source: "Romans 8:38-39, Catechism 219"
  },
  {
    message: "You are called to holiness and eternal life with God. Your destiny is Heaven.",
    source: "1 Thessalonians 4:7, CCC 1716"
  },
  {
    message: "Even in your weakness and struggle, you reveal God's power and glory.",
    source: "2 Corinthians 12:9, Pope Benedict XVI"
  },
  {
    message: "Your suffering has redemptive value when united with Christ's suffering.",
    source: "Colossians 1:24, Pope John Paul II"
  },
  {
    message: "You are part of the Body of Christ, and the Church needs your unique gifts.",
    source: "1 Corinthians 12:27, CCC 791"
  },
  {
    message: "God rejoices over you with singing. You bring joy to the heart of God.",
    source: "Zephaniah 3:17, Luke 15:7"
  },
  {
    message: "Your existence is not an accident. God willed you into being and sustains you in love.",
    source: "Psalm 139:13-16, CCC 301"
  }
];

export const positiveThoughts: PositiveThought[] = [
  {
    thought: "This difficult moment will pass. God's mercy is new every morning.",
    source: "Lamentations 3:22-23"
  },
  {
    thought: "I am stronger than I think. With God, all things are possible.",
    source: "Philippians 4:13, Matthew 19:26"
  },
  {
    thought: "My worth is not determined by my feelings or circumstances today.",
    source: "Catholic Teaching on Dignity"
  },
  {
    thought: "God is writing a story with my life, and this chapter is not the end.",
    source: "Jeremiah 29:11"
  },
  {
    thought: "I am loved by the Creator of the universe, and nothing can separate me from that love.",
    source: "Romans 8:38-39"
  },
  {
    thought: "Small steps forward are still progress. God delights in my efforts.",
    source: "St. Thérèse's Little Way"
  },
  {
    thought: "I don't have to be perfect. God's grace is sufficient for me.",
    source: "2 Corinthians 12:9"
  },
  {
    thought: "Asking for help is a sign of wisdom, not weakness.",
    source: "Proverbs 11:14"
  },
  {
    thought: "My struggles do not define me. I am a beloved child of God.",
    source: "1 John 3:1"
  },
  {
    thought: "Today I choose hope. Even the darkest night will end and the sun will rise.",
    source: "Psalm 30:5"
  },
  {
    thought: "I am not alone. God walks with me, and His angels surround me.",
    source: "Psalm 91:11, Deuteronomy 31:6"
  },
  {
    thought: "My life has purpose and meaning, even when I cannot see it.",
    source: "Pope Francis, Evangelii Gaudium"
  },
  {
    thought: "I can do hard things with God's help. He will give me the strength I need.",
    source: "Isaiah 41:10"
  },
  {
    thought: "Every saint had a past, and every sinner has a future. I can begin again.",
    source: "St. Augustine"
  },
  {
    thought: "God's love for me does not depend on my productivity, performance, or perfection.",
    source: "Catechism 2559"
  }
];

// Get content based on day of year for consistency
export function getDailyContent() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);

  return {
    scripture: scriptures[dayOfYear % scriptures.length],
    saintQuote: saintQuotes[dayOfYear % saintQuotes.length],
    mentalHealthTip: mentalHealthTips[dayOfYear % mentalHealthTips.length],
    prayerIntention: prayerIntentions[dayOfYear % prayerIntentions.length],
    whyImportant: whyYouAreImportant[dayOfYear % whyYouAreImportant.length],
    positiveThought: positiveThoughts[dayOfYear % positiveThoughts.length],
  };
}
