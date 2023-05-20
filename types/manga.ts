export interface Manga {
  content_type: string
  latest_chapter: LatestChapter[]
  score?: string
  thumbnail: string
  thumbnail_set?: string
  title: string
  genres?: string[]
}

export interface Search {
  current_page: string
  next_page: boolean
  prev_page: boolean
  searchs: Manga[]
  total_search: string
}

export interface LatestChapter {
  post_on: string
  title: string
  link?: string
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

export interface ReadSeries {
  chapters: ChapterOption[]
  image_content: string[]
  title: string
}

export interface ChapterOption {
  isSelected: boolean
  title: string
}