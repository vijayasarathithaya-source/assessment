import type { GitHubRepository } from '@types'

interface ModalStatsProps {
  repo: GitHubRepository
}

function ModalStats({ repo }: ModalStatsProps) {
  return (
    <div className="modal-stats">
      <div className="modal-stat-item">
        <span className="modal-stat-label">⭐ Stars</span>
        <span className="modal-stat-value">{repo.stargazers_count.toLocaleString()}</span>
      </div>
      <div className="modal-stat-item">
        <span className="modal-stat-label">🍴 Forks</span>
        <span className="modal-stat-value">{repo.forks_count.toLocaleString()}</span>
      </div>
      <div className="modal-stat-item">
        <span className="modal-stat-label">👁️ Watchers</span>
        <span className="modal-stat-value">{repo.watchers_count.toLocaleString()}</span>
      </div>
      <div className="modal-stat-item">
        <span className="modal-stat-label">⚠️ Open Issues</span>
        <span className="modal-stat-value">{repo.open_issues_count.toLocaleString()}</span>
      </div>
    </div>
  )
}

export default ModalStats

