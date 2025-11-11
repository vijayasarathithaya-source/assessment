/**
 * Environment configuration
 * Vite exposes env variables via import.meta.env
 * Variables must be prefixed with VITE_ to be exposed to the client
 */

interface EnvConfig {
  mode: string
  apiBaseUrl: string
  daysAgo: number
  itemsPerPage: number
  appName: string
}

const getEnvConfig = (): EnvConfig => {
  const mode: string = import.meta.env.MODE || 'dev'
  
  const apiBaseUrl: string = import.meta.env.VITE_GITHUB_API_BASE_URL ?? 'https://api.github.com/search/repositories'
  const daysAgo: number = import.meta.env.VITE_DAYS_AGO ? Number(import.meta.env.VITE_DAYS_AGO) : 10
  const itemsPerPage: number = import.meta.env.VITE_ITEMS_PER_PAGE ? Number(import.meta.env.VITE_ITEMS_PER_PAGE) : 30
  const appName: string = import.meta.env.VITE_APP_NAME ?? 'GitHub Repos'
  
  return {
    mode,
    apiBaseUrl,
    daysAgo,
    itemsPerPage,
    appName,
  }
}

export const env = getEnvConfig()

