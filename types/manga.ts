export interface Manga {
  content_type: string
  latest_chapter: LatestChapter[]
  score: string
  thumbnail: string
  thumbnail_set: string
  title: string
}

export interface LatestChapter {
  chapter_post_on: string
  chapter_title: string
}

export interface Series {
  chapters: Chapter[]
  image_link: string
  genres: string[]
  synopsis: string
  title: string
}

export interface Chapter {
  release_date: string
  title: string
}