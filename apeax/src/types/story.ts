export interface Act {
  id: string;
  slug: string;
  number: number;          // 1, 2, 3...
  title: string;            // "The Breaking Point"
  content: string;          // full narrative text for this act
}

export interface StoryChapter {
  chapterSlug: string;      // links to the Chapter (drop) this story belongs to
  title: string;             // "Chapter One: Exceed Limits"
  acts: Act[];
  relatedProductSlugs: string[];
}