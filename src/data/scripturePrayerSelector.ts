// Scripture and Prayer Selector Data
// Organized by emotional/spiritual struggles

export interface ScriptureResource {
  emotion: string;
  title: string;
  scripture: string;
  reference: string;
  prayer: string;
  additionalHelp?: string;
}

export const scriptureAndPrayers: ScriptureResource[] = [
  // Crisis/Suicidal Thoughts
  {
    emotion: "crisis",
    title: "In Crisis or Having Suicidal Thoughts",
    scripture: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
    reference: "Psalm 34:18",
    prayer: "Lord Jesus, I am in darkness and pain right now. I cannot see the way forward. Please be close to me in this moment. Send your Holy Spirit to comfort me. Help me reach out for help. Give me the courage to call 988 or talk to someone who cares. Protect me from harm. Remind me that this pain is temporary and that you have a purpose for my life. Mary, Mother of Sorrows, who stood by your Son in his darkest hour, stand by me now. St. Dymphna, patron of those in mental distress, intercede for me. Amen.",
    additionalHelp: "If you are in crisis right now, please call or text 988 immediately. You can also text HELLO to 741741. There are people ready to help you 24/7."
  },

  // Depression
  {
    emotion: "depression",
    title: "Feeling Depressed or Hopeless",
    scripture: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.",
    reference: "John 16:33",
    prayer: "Heavenly Father, I am weighed down by sadness and feel like hope is slipping away. Help me remember that this feeling is not the whole truth. Your Son experienced anguish and darkness, so I know you understand my pain. Give me the strength to take one small step today. Help me reach out to someone—a friend, a counselor, a priest. Remind me that your mercies are new every morning, even when I cannot feel them. St. Thérèse of Lisieux, who battled darkness while growing in trust, pray for me. Amen.",
    additionalHelp: "Depression is a medical condition that responds to treatment. Please consider talking to your doctor or a mental health professional. It's not a weakness to seek help—it's wisdom."
  },

  // Anxiety
  {
    emotion: "anxiety",
    title: "Feeling Anxious or Worried",
    scripture: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
    reference: "Philippians 4:6-7",
    prayer: "Prince of Peace, my mind is racing and my heart is troubled. The weight of worry feels crushing. I give you my anxieties—about health, about finances, about relationships, about the future. I cannot control these things, but I can trust in you. Slow my racing thoughts. Calm my anxious heart. Help me to breathe deeply of your Spirit. Remind me that you are in control and that you work all things for good. St. Dymphna, patroness of those with anxiety, intercede for me. Amen.",
    additionalHelp: "Try taking 5 slow, deep breaths. Breathe in for 4 counts, hold for 4, breathe out for 4. Repeat. If anxiety persists, consider seeking professional help—therapy and medication can be very effective."
  },

  // Grief/Loss
  {
    emotion: "grief",
    title: "Grieving a Loss",
    scripture: "Blessed are those who mourn, for they will be comforted.",
    reference: "Matthew 5:4",
    prayer: "Compassionate God, my heart is broken by loss. The pain feels unbearable. I cry out to you in my grief. You know what it is to lose someone you love—your own Son died on the cross. Mary watched her beloved son suffer and die. They understand my pain. Be near to me in this valley of sorrow. Send your Comforter, the Holy Spirit, to console me. Help me to know that those I love are held in your eternal embrace. Give me patience with my grieving process and surround me with people who will support me. St. Joseph, patron of a happy death, and all the saints, pray for my loved one and for me. Amen.",
    additionalHelp: "Grief is not a sign of weak faith—it's a sign of deep love. Consider joining a grief support group or speaking with a grief counselor, especially if your loss was to suicide."
  },

  // Loneliness
  {
    emotion: "lonely",
    title: "Feeling Alone or Isolated",
    scripture: "The Lord himself goes before you and will be with you; he will never leave you nor forsake you. Do not be afraid; do not be discouraged.",
    reference: "Deuteronomy 31:8",
    prayer: "Ever-present God, I feel so alone. No one seems to understand what I'm going through. The isolation is painful. Remind me that you are always with me, even when I cannot feel your presence. You promised never to leave me or forsake me. Help me reach out to someone today—send a text, make a call, go to Mass. Give me courage to be vulnerable with at least one person. Lead me to community where I can belong. Mary, you stood alone at the foot of the cross when others fled. Help me in my loneliness. Amen.",
    additionalHelp: "Loneliness is hard, but you don't have to stay isolated. Consider attending a parish event, joining a small group, or calling a friend. Connection takes courage, but it's worth it."
  },

  // Anger
  {
    emotion: "angry",
    title: "Feeling Angry or Frustrated",
    scripture: "In your anger do not sin: Do not let the sun go down while you are still angry.",
    reference: "Ephesians 4:26",
    prayer: "God of patience, I am filled with anger right now. I'm frustrated with my circumstances, with other people, maybe even with you. Help me acknowledge this anger without letting it control me or harm others. Show me healthy ways to express what I'm feeling. If my anger is covering deeper pain, fear, or hurt, help me recognize that. Give me the grace to forgive—others and myself. Cool my heated emotions and fill me with your peace. St. Francis de Sales, patron of patience, help me respond with gentleness rather than react with rage. Amen.",
    additionalHelp: "Anger is a valid emotion, but chronic anger can mask depression, especially in men. If anger is affecting your relationships or life, consider talking to a counselor."
  },

  // Fear
  {
    emotion: "afraid",
    title: "Feeling Afraid or Scared",
    scripture: "For God has not given us a spirit of fear, but of power and of love and of a sound mind.",
    reference: "2 Timothy 1:7",
    prayer: "Mighty God, fear has gripped my heart. I'm scared of what might happen, of things I cannot control, of the unknown future. You are my refuge and my fortress. You are more powerful than anything I fear. Cast out this fear with your perfect love. Help me remember that you go before me and that nothing can separate me from your love. When I am afraid, help me put my trust in you. Send your angels to guard me. Mary, who heard 'Do not be afraid' from the angel, help me trust like you did. Amen.",
    additionalHelp: "If fear is paralyzing you or causing panic attacks, please talk to a doctor or therapist. Anxiety disorders are treatable, and you don't have to live in constant fear."
  },

  // Guilt/Shame
  {
    emotion: "guilty",
    title: "Feeling Guilty or Ashamed",
    scripture: "If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness.",
    reference: "1 John 1:9",
    prayer: "Merciful Father, I am weighed down by guilt and shame. I am painfully aware of my failings and sins. But I know that your mercy is greater than any sin. I confess my sins to you and ask for your forgiveness. Help me receive your mercy, not just in my head but in my heart. Break the chains of shame that keep me from experiencing your love. If I need to go to Confession, give me courage to do so. Help me forgive myself as you have forgiven me. St. Peter, who denied Christ but was restored, pray for me. St. Mary Magdalene, who was freed from shame, intercede for me. Amen.",
    additionalHelp: "Guilt about real wrongdoing can be resolved through Confession. Shame that tells you 'you are bad' (not just 'you did something bad') may need to be addressed with a therapist or spiritual director."
  },

  // Worthlessness
  {
    emotion: "worthless",
    title: "Feeling Worthless or Like a Burden",
    scripture: "See what great love the Father has lavished on us, that we should be called children of God! And that is what we are!",
    reference: "1 John 3:1",
    prayer: "Loving Father, I feel worthless, like I have nothing to offer, like I'm a burden to everyone. These feelings are lies, but they feel so real. Help me see myself as you see me—your beloved child, created in your image, precious beyond measure. Remind me that Christ died for me because I am worth the blood of God himself. I am not defined by my productivity, my success, or others' opinions. I am defined by your unconditional love. You rejoice over me with singing. Help me believe this truth. St. Thérèse, who felt small and worthless but trusted in God's love, pray for me. Amen.",
    additionalHelp: "Feelings of worthlessness are often symptoms of depression. Please reach out to a mental health professional. Your life has immeasurable value."
  },

  // Confusion
  {
    emotion: "confused",
    title: "Feeling Confused or Lost",
    scripture: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
    reference: "Proverbs 3:5-6",
    prayer: "God of wisdom, I don't know which way to turn. Life feels confusing and I can't see the path forward. My mind is clouded and I can't think clearly. Send your Holy Spirit to guide me. Give me clarity of thought and peace of mind. Lead me to wise counsel—a priest, a spiritual director, a counselor, a trusted friend. Help me take one step at a time, trusting that you will light the way. I don't need to figure everything out right now. Help me be patient with uncertainty and trust in your timing. St. Joseph, who listened to God's guidance in dreams, pray for me. Amen.",
    additionalHelp: "If confusion is accompanied by difficulty thinking, concentrating, or making decisions, this could be a sign of depression. Consider seeing a doctor."
  },

  // Exhaustion/Burnout
  {
    emotion: "exhausted",
    title: "Feeling Exhausted or Burned Out",
    scripture: "Come to me, all you who are weary and burdened, and I will give you rest. Take my yoke upon you and learn from me, for I am gentle and humble in heart, and you will find rest for your souls.",
    reference: "Matthew 11:28-29",
    prayer: "Gentle Savior, I am so tired. I feel physically, emotionally, and spiritually depleted. I have nothing left to give. Jesus, you experienced exhaustion too—you needed to rest, to get away, to sleep. Help me recognize that rest is not laziness; it's necessary for my wellbeing. Give me permission to say no, to set boundaries, to care for myself. Lead me to refreshment and renewal. Restore my strength. Help me learn a more sustainable pace of life. St. Joseph, guardian of the Redeemer, who provided rest for the Holy Family, help me find rest too. Amen.",
    additionalHelp: "Chronic exhaustion and burnout are serious. Consider talking to your doctor about possible physical causes. It's also important to evaluate your boundaries and commitments with a counselor or spiritual director."
  },

  // Hopelessness about Faith
  {
    emotion: "spiritual",
    title: "Struggling in Your Faith",
    scripture: "I do believe; help me overcome my unbelief!",
    reference: "Mark 9:24",
    prayer: "God of my heart, I'm struggling in my faith right now. Prayer feels empty. I have doubts. I can't feel your presence. I wonder if you're really there or if you really care. If this struggle is part of my mental illness, help me separate the symptoms from spiritual reality. If these are real questions, help me wrestle with them honestly. You are big enough to handle my doubts. Many saints experienced dark nights of the soul. St. Teresa of Calcutta served you for decades while feeling nothing. Help me be faithful even when I don't feel your presence. I want to believe—help my unbelief. Amen.",
    additionalHelp: "Spiritual struggles during mental illness are normal. Depression can make prayer feel empty. This doesn't mean God has abandoned you. Consider talking to a priest or spiritual director who understands mental health."
  },

  // Overwhelmed
  {
    emotion: "overwhelmed",
    title: "Feeling Overwhelmed",
    scripture: "Cast all your anxiety on him because he cares for you.",
    reference: "1 Peter 5:7",
    prayer: "God of peace, everything feels like too much right now. I'm drowning in responsibilities, worries, and problems. I don't know where to start or how to cope. Help me remember that I don't have to carry all this alone. I lay every burden at your feet. Show me what's truly important today and help me let go of the rest. Give me wisdom to ask for help when I need it. One breath at a time, one step at a time, one day at a time. You are with me. St. Martha, who worried about many things when only one was necessary, help me focus on what truly matters. Amen.",
    additionalHelp: "When everything feels like too much, break it down. What's one small thing you can do right now? It's okay to ask for help or to say no to some things."
  },

  // Self-Harm Thoughts
  {
    emotion: "self-harm",
    title: "Thoughts of Self-Harm",
    scripture: "Do you not know that your bodies are temples of the Holy Spirit, who is in you, whom you have received from God? You are not your own; you were bought at a price. Therefore honor God with your bodies.",
    reference: "1 Corinthians 6:19-20",
    prayer: "Healing God, I'm struggling with urges to hurt myself. These thoughts are frightening and painful. Help me understand that my body is sacred—a temple of your Holy Spirit. You love me and want me to be whole. Give me healthier ways to cope with this pain. Help me reach out to someone right now—a counselor, a friend, a crisis line. Protect me from harming myself. Send your Spirit to comfort me in this distress. I know that you can heal me. St. Dymphna, patroness of mental illness, and St. John of God, who cared for those in mental anguish, intercede for me now. Amen.",
    additionalHelp: "If you're having thoughts of self-harm, please reach out for help immediately. Call or text 988, or go to an emergency room. These urges can be treated with professional help."
  },

  // Gratitude (Positive)
  {
    emotion: "grateful",
    title: "Feeling Grateful and Wanting to Pray",
    scripture: "Give thanks to the Lord, for he is good; his love endures forever.",
    reference: "Psalm 107:1",
    prayer: "Gracious God, today I want to thank you. Even in the midst of struggle, I can see your blessings. Thank you for your faithfulness, for carrying me through dark times, for never abandoning me. Thank you for the people who have supported me, for professional help that works, for small moments of joy. Thank you for your Church, for the sacraments, for the saints who pray for me. I know hard days may come again, but today I want to remember your goodness. Help me hold onto this gratitude when times get tough. All praise and glory to you, Father, Son, and Holy Spirit. Amen.",
    additionalHelp: "Gratitude is powerful for mental health. Consider keeping a gratitude journal where you write down 3 things you're thankful for each day, even on hard days."
  }
];

// Filter functions for the selector
export function getEmotionCategories(): string[] {
  return [
    "crisis", "depression", "anxiety", "grief", "lonely", "angry",
    "afraid", "guilty", "worthless", "confused", "exhausted",
    "spiritual", "overwhelmed", "self-harm", "grateful"
  ];
}

export function getEmotionLabel(emotion: string): string {
  const labels: Record<string, string> = {
    crisis: "In Crisis / Suicidal Thoughts",
    depression: "Depressed / Hopeless",
    anxiety: "Anxious / Worried",
    grief: "Grieving a Loss",
    lonely: "Alone / Isolated",
    angry: "Angry / Frustrated",
    afraid: "Afraid / Scared",
    guilty: "Guilty / Ashamed",
    worthless: "Worthless / Like a Burden",
    confused: "Confused / Lost",
    exhausted: "Exhausted / Burned Out",
    spiritual: "Struggling in Faith",
    overwhelmed: "Overwhelmed",
    "self-harm": "Thoughts of Self-Harm",
    grateful: "Grateful / Thankful"
  };
  return labels[emotion] || emotion;
}

export function getResourceByEmotion(emotion: string): ScriptureResource | undefined {
  return scriptureAndPrayers.find(resource => resource.emotion === emotion);
}
