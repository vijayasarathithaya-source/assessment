import type { GitHubRepository } from '@types'

interface ModalHeaderProps {
  repo: GitHubRepository
}

function ModalHeader({ repo }: ModalHeaderProps) {
  return (
    <div className="modal-header">
      <div className="modal-owner-section">
        <img 
          src={repo.owner.avatar_url} 
          alt={`${repo.owner.login}'s avatar`}
          className="modal-owner-avatar"
        />
        <div className="modal-owner-info">
          <h2 id="modal-title" className="modal-repo-name">{repo.name}</h2>
          <a 
            href={repo.owner.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="modal-owner-link"
          >
            {repo.owner.login}
          </a>
        </div>
      </div>
    </div>
  )
}

export default ModalHeader

