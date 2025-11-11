import { useState, useEffect, useCallback } from 'react'
import { fetchGitHubRepos } from '@service/github.service'
import type { UseGitHubReposReturn, GitHubRepository } from '@types'

/**
 * Custom hook for fetching and managing GitHub repositories
 * @returns Object with repos, loading state, error, pagination, and actions
 */
export const useGitHubRepos = (): UseGitHubReposReturn => {
  const [repos, setRepos] = useState<GitHubRepository[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)

  const fetchRepos = useCallback(async (pageNum: number, append: boolean = false): Promise<void> => {
    setLoading(true)
    setError(null)
    
    try {
      const { items, hasMore: moreAvailable } = await fetchGitHubRepos(pageNum)
      
      if (append) {
        setRepos((prev: GitHubRepository[]) => [...prev, ...items])
      } else {
        setRepos(items)
      }
      
      setHasMore(moreAvailable)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch repositories'
      setError(errorMessage)
      setHasMore(false)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRepos(1, false)
  }, [fetchRepos])

  const loadMore = useCallback((): void => {
    if (!loading && hasMore && !error) {
      const nextPage = page + 1
      setPage(nextPage)
      fetchRepos(nextPage, true)
    }
  }, [loading, hasMore, error, page, fetchRepos])

  const retry = useCallback((): void => {
    setPage(1)
    setError(null)
    fetchRepos(1, false)
  }, [fetchRepos])

  return {
    repos,
    loading,
    error,
    hasMore,
    loadMore,
    retry
  }
}

