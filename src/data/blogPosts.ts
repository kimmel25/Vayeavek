export interface BlogPost {
  id: number;
  title: string;
  type: 'divrei-torah' | 'reflection';
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Dust That Rises",
    type: "divrei-torah",
    date: "2024-01-15",
    excerpt: "Chazal tell us that the dust from Yaakov's struggle rose to the Kisei HaKavod. What does this mean for us today?",
    content: `The Midrash (Bereishis Rabbah 77:3) teaches us something remarkable: When Yaakov Avinu wrestled with the Sar shel Eisav, their struggle was so intense that the dust they raised ascended all the way to the Kisei HaKavod - the Throne of Glory.

Think about that image. Dust. The lowest thing, kicked up from the ground, covering the highest spiritual reality.

The Sefas Emes explains that this teaches us a fundamental truth: our struggles down here in this world are not separate from the spiritual realm above. When we wrestle with our yetzer hara, with our doubts, with our pain - that struggle itself creates a connection upward.

But here's the paradox: the dust covers the Kisei. It obscures. When we're in the midst of struggle, we can't see the connection. We can't see how our pain and our questions fit into any divine plan. The dust blocks our vision.

Yet the very fact that the dust reaches the Kisei means the connection exists. Our struggles matter. They register in the highest realms. Even when - especially when - we can't see it.

Yaakov limped away from that struggle. He was wounded. But he was also transformed. He became Yisrael - the one who struggled with the divine and prevailed.

Your struggle is not evidence of failure. It's evidence of engagement with something real, something that matters enough to fight over.`,
    tags: ["Yaakov Avinu", "Struggle", "Midrash"]
  },
  {
    id: 2,
    title: "When the Beis Medrash Feels Empty",
    type: "reflection",
    date: "2024-01-08",
    excerpt: "Sitting surrounded by people learning, yet feeling utterly alone. A reflection on isolation in community.",
    content: `There's a particular kind of loneliness that happens in a crowded beis medrash. You're surrounded by the sounds of Torah - the hum of chavrusos, the rhythm of gemara, the occasional burst of excited discovery. But inside, you're screaming, and no one can hear.

I've sat there, ostensibly learning, but really just turning pages while my mind spirals. Anxiety about parnassah. Depression that makes every daf feel like climbing a mountain. Questions about emunah that feel too dangerous to voice.

The yeshiva world taught me to learn, to daven, to grow. But it didn't teach me what to do when my brain chemistry makes all of that feel impossible. It didn't teach me that needing therapy isn't a weakness. That medication isn't a failure of bitachon.

I wish someone had told me earlier: Hashem created you with a neshama AND a brain. Sometimes the brain needs fixing just like any other organ. There's no contradiction between complete emunah and taking an SSRI. Between davening with kavanah and going to therapy.

You can be a ben Torah and struggle with mental health. These aren't opposites. They're both parts of the same person - you, with all your complexity, trying to serve Hashem with the tools you have.

If you're that person in the beis medrash feeling alone right now: you're not alone. There are more of us than you think. And getting help isn't giving up on ruchniyus - it's honoring the person Hashem created you to be.`,
    tags: ["Mental Health", "Loneliness", "Therapy"]
  },
  {
    id: 3,
    title: "Yaakov's Limp: A Badge of Honor",
    type: "divrei-torah",
    date: "2024-01-01",
    excerpt: "Why did Yaakov keep his limp? Understanding the holiness of our scars.",
    content: `After the struggle, the Torah tells us "Vayizrach lo hashemesh" - the sun rose for him. Rashi says this sun rose specifically to heal him. Yet we know that Yaakov walked with a limp for the rest of his life.

So which is it? Was he healed or wasn't he?

The Nesivos Shalom explains beautifully: The physical injury was healed. But Yaakov chose to keep the limp. It became part of who he was - Yisrael, the one who struggled.

Think about what that means. After everything, after the healing was available, he integrated the struggle into his very identity. The limp wasn't a failure to heal completely. It was a reminder. A testimony.

In our own lives, we sometimes expect that healing means erasing all traces of what we went through. That if we're really better, really growing, we should be able to move past our struggles without any lasting effects.

But maybe that's not how it works. Maybe healing means integrating our struggles into who we are. Acknowledging that yes, we wrestled with something difficult. Yes, it left a mark. And that mark is part of our story.

Yaakov didn't become Yisrael by pretending the struggle never happened. He became Yisrael by walking forward, limp and all, into his destiny.

Your scars - emotional, spiritual, mental - they're not disqualifications. They're part of your testimony. You're still here. Still walking. Still trying.

That's not weakness. That's Yisrael.`,
    tags: ["Yaakov Avinu", "Healing", "Identity"]
  },
  {
    id: 4,
    title: "Finding Hashem in the Fog",
    type: "reflection",
    date: "2023-12-20",
    excerpt: "What do you do when you can't feel Hashem's presence anymore? A personal journey through spiritual darkness.",
    content: `I used to feel Hashem when I davened. Not every time, but enough to know there was Someone listening. I used to feel inspired by a good vort, moved by a beautiful niggun. I used to feel something.

Then, slowly, it all went gray. Depression crept in like fog, and suddenly I was just going through motions. Davening words I didn't feel. Learning words I couldn't connect to. The beis medrash that used to feel like home felt like a theater where I was performing a role.

I thought maybe I'd done something wrong. Maybe this was punishment. Maybe I'd lost my chelek in ruchniyus. The guilt was crushing.

It took me too long to realize: depression is an illness, not a spiritual failure. When your brain chemistry is off, feeling emotions - including spiritual emotions - becomes nearly impossible. It's not that Hashem left. It's that the instrument you use to perceive Him is temporarily broken.

Here's what helped me: I kept showing up. Even when I felt nothing. Even when it felt fake. I davened the words even when they felt empty. I learned even when it felt mechanical.

And slowly - not all at once, not linearly, but slowly - the fog started to lift. Not because I davened myself out of depression. But because I got help. Real help. Therapy. Medication. Support.

And as my brain healed, I started to feel again. Not the same as before - I'm different now. But real. Authentic.

The greatest lie depression tells you is that it's permanent. That this is just who you are now. It's not true. There's a path through the fog.

You just have to keep walking.`,
    tags: ["Depression", "Davening", "Hope"]
  },
  {
    id: 5,
    title: "The Power of 'Gam Zu L'Tovah'",
    type: "divrei-torah",
    date: "2023-12-15",
    excerpt: "Understanding Nachum Ish Gam Zu - not toxic positivity, but deep faith in transformation.",
    content: `We know the story: Nachum Ish Gam Zu would respond to everything with "Gam zu l'tovah" - this too is for the good. Even when terrible things happened, he saw good.

It's easy to read this as toxic positivity. Just smile through the pain! Everything happens for a reason! It's all good!

But that's not what Nachum was saying. The Sfas Emes points out something crucial: he didn't say "Zeh tov" - this IS good. He said "Gam zu L'tovah" - this too is FOR good. Meaning: this will lead to good. This will transform into good.

That's profoundly different. It's not denying that something is painful or difficult or even tragic. It's expressing faith that Hashem can work even with - especially with - brokenness.

When you're struggling with mental health, people sometimes quote this at you as if it should make you feel better. "It's all good! Hashem has a plan!" And it feels dismissive, like they're minimizing your pain.

But the deeper understanding is this: Yes, what you're going through is hard. Yes, it hurts. Yes, it's real suffering. AND - Hashem can work with this. Your struggle isn't wasted. It's being transformed, in ways you might not see yet, into something that will be for good.

Not despite your pain. Through it.

That's not toxic positivity. That's faith. Faith that even dust can rise to the Kisei HaKavod.`,
    tags: ["Emunah", "Suffering", "Faith"]
  }
];

export const getPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getPostsByType = (type: 'divrei-torah' | 'reflection' | 'all'): BlogPost[] => {
  if (type === 'all') return blogPosts;
  return blogPosts.filter(post => post.type === type);
};

export const getRecentPosts = (count: number = 3): BlogPost[] => {
  return [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};
