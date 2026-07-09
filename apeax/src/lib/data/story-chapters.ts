import { type StoryChapter } from "@/types/story";

// TODO: replace with a real fetch from services/story.service.ts (Sprint 7)
export const STORY_CHAPTERS: Record<string, StoryChapter> = {
  "chapter-one-exceed-limits": {
    chapterSlug: "chapter-one-exceed-limits",
    title: "Chapter One: Exceed Limits",
    relatedProductSlugs: ["exceed-limits-tee", "exceed-limits-hoodie", "exceed-limits-cap"],
    acts: [
      {
        id: "act-1",
        slug: "act-1",
        number: 1,
        title: "The Breaking Point",
        content:
          "Every ceiling was built by someone who stopped climbing. This is where the story begins — not with comfort, but with the decision to exceed what was thought possible.",
        featuredProductSlug: "exceed-limits-tee",
      },
      {
        id: "act-2",
        slug: "act-2",
        number: 2,
        title: "The Ascent",
        content:
          "Growth is not a single leap. It is a repeated act of discomfort, chosen again and again, until the limit that once felt permanent becomes a memory.",
        featuredProductSlug: "exceed-limits-hoodie",
      },
      {
        id: "act-3",
        slug: "act-3",
        number: 3,
        title: "A State of Becoming",
        content:
          "There is no arrival. Only the next version of yourself, and the next. APEAX exists for those who understand that becoming is the point — not the destination.",
        featuredProductSlug: "exceed-limits-cap",
      },
    ],
  },
};