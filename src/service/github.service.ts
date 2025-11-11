import { env } from '@config/env'
import { getDateNDaysAgo } from '@utils/date.util'
import type { FetchReposResult } from '@types'

/**
 * Fetches GitHub repositories created in the last N days, sorted by stars
 * @param page - Page number to fetch
 * @returns Promise with repositories and pagination info
 * @throws Error if API request fails
 */
export const fetchGitHubRepos = async (page: number = 1): Promise<FetchReposResult> => {
  const dateString = getDateNDaysAgo(env.daysAgo)
  
  const url = `${env.apiBaseUrl}?q=created:>${dateString}&sort=stars&order=desc&page=${page}`
  
  const response = await fetch(url)
  
  if (!response.ok) {
    throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
  }
  
  const data = await response.json()
  
  if (!data.items || !Array.isArray(data.items)) {
    throw new Error('Invalid response from GitHub API')
  }
  
  return {
    items: data.items,
    hasMore: data.items.length === env.itemsPerPage
  }
}

