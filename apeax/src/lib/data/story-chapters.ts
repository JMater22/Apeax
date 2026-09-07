import { type StoryChapter } from "@/types/story";

// TODO: replace with a real fetch from services/story.service.ts (Sprint 7)
export const STORY_CHAPTERS: Record<string, StoryChapter> = {
  "chapter-one-exceed-limits": {
    chapterSlug: "chapter-one-exceed-limits",
    title: "Chapter One: Exceed Limits",
    dek: "The first act of becoming isn't found in comfort. It's found in the decision to keep climbing after the ceiling has already told you to stop.",
    byline: "Written by the APEAX Atelier",
    relatedProductSlugs: ["exceed-limits-tee", "exceed-limits-hoodie", "exceed-limits-cap"],
    acts: [
      {
        id: "act-1",
        slug: "act-1",
        number: 1,
        title: "The Breaking Point",
        dek: "Every limit was drawn by someone who stopped climbing before you did.",
        pullQuote: "Comfort is just a ceiling wearing a disguise.",
        content: [
          "There is a moment, quiet and unremarkable from the outside, where a person decides they are done accepting the shape they've been given. No one applauds it. Nothing changes on the surface. But somewhere underneath, a line has been crossed — the line between the person who was told what their limits were, and the person who stopped believing them.",
          "This is where Chapter One begins. Not with a victory, not with a finished version of anyone, but with the discomfort of the decision itself. Exceeding a limit doesn't feel like triumph in the moment it happens. It feels like doubt, held onto anyway.",
          "The ceiling was never a wall. It was a suggestion, repeated so often it started to sound like a fact. Exceed Limits exists for the people who stopped repeating it back.",
        ],
        featuredProductSlug: "exceed-limits-tee",
      },
      {
        id: "act-2",
        slug: "act-2",
        number: 2,
        title: "The Ascent",
        dek: "Growth is not one leap. It is the same uncomfortable choice, made again, until it stops feeling like a choice at all.",
        pullQuote: "You don't arrive at strength. You repeat your way into it.",
        content: [
          "Nobody climbs in a straight line. The version of the story where growth happens all at once, in a single cinematic moment, is a story told after the fact — never while it's actually happening. While it's happening, it looks like this: waking up and choosing the harder thing again, on a day when the easier thing would have gone unnoticed.",
          "The Ascent is not glamorous. It is repetition, disguised as progress. It is the same discomfort, revisited so many times that it eventually stops announcing itself as discomfort at all — it just becomes what you do.",
          "This is the part of becoming that most people don't see, because it doesn't photograph well. There's no single image of the middle of a climb. There's only the fact of still being on it, long after it would have been easier to stop.",
        ],
        featuredProductSlug: "exceed-limits-hoodie",
      },
      {
        id: "act-3",
        slug: "act-3",
        number: 3,
        title: "A State of Becoming",
        dek: "There is no summit. Only the next version of yourself, waiting one climb ahead.",
        pullQuote: "Becoming was never the destination. It was always the practice.",
        content: [
          "Every story like this one is expected to end somewhere — a summit, a finish line, a version of the self that finally arrived. Chapter One does not end that way, because that is not how becoming actually works. There is no arrival. There is only the next ceiling, and the decision, again, to exceed it.",
          "This is the quiet truth at the center of everything APEAX makes: the story never resolves, because you never stop becoming. The pieces in this chapter were not made to mark an ending. They were made to be worn by someone still mid-climb — which is to say, by anyone, always.",
          "A State of Becoming is not a title you earn once. It's the one you keep choosing, chapter after chapter, for as long as you're willing to keep climbing.",
        ],
        featuredProductSlug: "exceed-limits-cap",
      },
    ],
  },
};