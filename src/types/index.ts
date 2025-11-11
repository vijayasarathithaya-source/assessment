// GitHub API Response Types
export interface GitHubOwner {
  login: string
  avatar_url: string
  html_url: string
  type: string
}

export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  open_issues_count: number
  language: string | null
  created_at: string
  updated_at: string
  pushed_at: string
  owner: GitHubOwner
  topics: string[]
  license: {
    name: string
    spdx_id: string
  } | null
  default_branch: string
  size: number
  watchers_count: number
}

export interface GitHubApiResponse {
  total_count: number
  incomplete_results: boolean
  items: GitHubRepository[]
}

export interface FetchReposResult {
  items: GitHubRepository[]
  hasMore: boolean
}

// Hook Return Types
export interface UseGitHubReposReturn {
  repos: GitHubRepository[]
  loading: boolean
  error: string | null
  hasMore: boolean
  loadMore: () => void
  retry: () => void
}

