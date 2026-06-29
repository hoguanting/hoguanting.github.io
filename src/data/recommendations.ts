export type RecommendationCategory =
  | 'articles'
  | 'videos'
  | 'books'
  | 'blogs'
  | 'podcasts'
  | 'places';

export type RecommendationItem = {
  title: string;
  url?: string;
};

export type RecommendationSection = {
  category: RecommendationCategory;
  title: string;
  items: RecommendationItem[];
};

export const recommendationSections: RecommendationSection[] = [
  {
    category: 'articles',
    title: 'Articles',
    items: [
      { title: 'Race Conditions and Data Races', url: 'https://example.com' },
      { title: 'A Git Horror Story', url: 'https://example.com' },
      { title: 'The Bitter Lesson', url: 'https://example.com' },
    ],
  },
  {
    category: 'videos',
    title: 'Videos',
    items: [
      { title: 'Turning Portal 2 Into a Web Server', url: 'https://example.com' },
      { title: 'Get a Taste of Lambdas and Get Addicted to Streams', url: 'https://example.com' },
      { title: 'A Philosophy of Software Design Talk', url: 'https://example.com' },
    ],
  },
  {
    category: 'books',
    title: 'Books',
    items: [
      { title: 'The Art of Doing Science and Engineering', url: 'https://example.com' },
      { title: 'Structure and Interpretation of Computer Programs', url: 'https://example.com' },
      { title: 'Effective Java', url: 'https://example.com' },
      { title: 'Designing Data-Intensive Applications', url: 'https://example.com' },
    ],
  },
  {
    category: 'blogs',
    title: 'Blogs',
    items: [
      { title: 'Things You Should Never Do, Part I', url: 'https://example.com' },
      { title: 'Martin Fowler', url: 'https://martinfowler.com' },
      { title: "Bob Nystrom's Stuff With Stuff", url: 'https://journal.stuffwithstuff.com' },
    ],
  },
  {
    category: 'podcasts',
    title: 'Podcasts',
    items: [
      { title: 'The Changelog Podcast', url: 'https://changelog.com/podcast' },
      { title: 'Syntax', url: 'https://syntax.fm' },
      { title: 'CodeNewbie Podcast', url: 'https://www.codenewbie.org/podcast' },
    ],
  },
  {
    category: 'places',
    title: 'Places',
    items: [
      { title: 'Yosemite National Park' },
      { title: 'The Metropolitan Museum of Art' },
      { title: 'Monash University Library' },
    ],
  },
];
