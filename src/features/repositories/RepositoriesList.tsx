import { useState } from 'react'
import { useGitHubRepos } from '@hooks/useGitHubRepos'
import { RepositoryItem, RepositoryModal, ErrorMessage, LoadingSpinner, BottomNavigation } from '@components'
import { Button } from '@shared/components'
import type { GitHubRepository } from '@types'
import './RepositoriesList.scss'

function RepositoriesList() {
  const { repos, loading, error, hasMore, loadMore, retry } = useGitHubRepos()
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepository | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const handleRepoClick = (repo: GitHubRepository): void => {
    setSelectedRepo(repo)
    setIsModalOpen(true)
  }

  const handleCloseModal = (): void => {
    setIsModalOpen(false)
    setSelectedRepo(null)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Trending Repos</h1>
      </header>
      
      <main className="main">
        {error && <ErrorMessage message={error} onRetry={retry} />}
        
        {!error && (
          <>
            {repos.length === 0 && !loading && (
              <div className="empty-state">
                <p>No repositories found for the last 10 days.</p>
              </div>
            )}
            
            {repos.length > 0 && (
              <div className="repo-list" role="list">
                {repos.map((repo: GitHubRepository) => (
                  <RepositoryItem 
                    key={repo.id} 
                    repo={repo}
                    onItemClick={handleRepoClick}
                  />
                ))}
              </div>
            )}
            
            {loading && <LoadingSpinner />}
            
            {!loading && hasMore && !error && (
              <div className="load-more-container">
                <Button 
                  onClick={loadMore}
                  aria-label="Load more repositories"
                >
                  Load More
                </Button>
              </div>
            )}
             
            {!loading && !hasMore && repos.length > 0 && (
              <div className="no-more" role="status" aria-live="polite">
                No more repositories to load
              </div>
            )}
          </>
        )}
      </main>

      <BottomNavigation activeTab="trending" />

      <RepositoryModal 
        repo={selectedRepo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  )
}

export { RepositoriesList }

