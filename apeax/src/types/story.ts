export interface Act {
  id: string;
  slug: string;
  number: number;
  title: string;
  dek: string;
  content: string[];
  pullQuote: string;
  featuredProductSlug: string;
}

export interface StoryChapter {
  chapterSlug: string;
  title: string;
  dek: string;
  byline: string;
  acts: Act[];
  relatedProductSlugs: string[];
}