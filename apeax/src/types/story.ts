export interface Act {
  id: string;
  slug: string;
  number: number;
  title: string;
  content: string;
  featuredProductSlug: string;  // the one merch item this Act tells the story of
}

export interface StoryChapter {
  chapterSlug: string;
  title: string;
  acts: Act[];
  relatedProductSlugs: string[]; // fallback "shop the full chapter" grid, shown after the last act
}