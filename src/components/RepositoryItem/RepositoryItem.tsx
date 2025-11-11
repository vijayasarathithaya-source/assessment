import type { GitHubRepository } from '@types'
import './RepositoryItem.scss'

interface RepositoryItemProps {
  repo: GitHubRepository
  onItemClick: (repo: GitHubRepository) => void
}

function RepositoryItem({ repo, onItemClick }: RepositoryItemProps) {
  const handleClick = (): void => {
    onItemClick(repo)
  }

  const formatStars = (count: number): string => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}k`
    }
    return count.toLocaleString()
  }

  return (
    <div 
      className="repo-item" 
      role="listitem"
      onClick={handleClick}
      onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleClick()
        }
      }}
      tabIndex={0}
      aria-label={`View details for ${repo.name}`}
    >
      <h2 className="repo-name">{repo.name}</h2>
      
      {repo.description && (
        <p className="repo-description">{repo.description}</p>
      )}
      
      <div className="repo-footer">
        <div className="owner-info">
          <img 
            src={repo.owner.avatar_url} 
            alt={`${repo.owner.login}'s avatar`}
            className="owner-avatar"
            loading="lazy"
          />
          <span className="owner-name">{repo.owner.login}</span>
        </div>
        <div className="stars" aria-label={`${repo.stargazers_count} stars`}>
          <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span>{formatStars(repo.stargazers_count)}</span>
        </div>
      </div>
    </div>
  )
}

export { RepositoryItem }

