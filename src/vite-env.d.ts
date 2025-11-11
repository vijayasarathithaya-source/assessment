/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GITHUB_API_BASE_URL?: string
  readonly VITE_DAYS_AGO?: string
  readonly VITE_ITEMS_PER_PAGE?: string
  readonly VITE_APP_NAME?: string
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

