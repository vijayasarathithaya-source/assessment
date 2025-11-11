import type { GitHubRepository } from '@types'
import { formatDisplayDate } from '@utils/date.util'

interface ModalDetailsProps {
  repo: GitHubRepository
}

function ModalDetails({ repo }: ModalDetailsProps) {
  return (
    <div className="modal-details">
      {repo.language && (
        <div className="modal-detail-item">
          <span className="modal-detail-label">Language:</span>
          <span className="modal-detail-value">{repo.language}</span>
        </div>
      )}
      
      <div className="modal-detail-item">
        <span className="modal-detail-label">Default Branch:</span>
        <span className="modal-detail-value">{repo.default_branch}</span>
      </div>

      <div className="modal-detail-item">
        <span className="modal-detail-label">Size:</span>
        <span className="modal-detail-value">{repo.size.toLocaleString()} KB</span>
      </div>

      {repo.license && (
        <div className="modal-detail-item">
          <span className="modal-detail-label">License:</span>
          <span className="modal-detail-value">{repo.license.name}</span>
        </div>
      )}

      <div className="modal-detail-item">
        <span className="modal-detail-label">Created:</span>
        <span className="modal-detail-value">{formatDisplayDate(repo.created_at)}</span>
      </div>

      <div className="modal-detail-item">
        <span className="modal-detail-label">Last Updated:</span>
        <span className="modal-detail-value">{formatDisplayDate(repo.updated_at)}</span>
      </div>

      {repo.pushed_at && (
        <div className="modal-detail-item">
          <span className="modal-detail-label">Last Pushed:</span>
          <span className="modal-detail-value">{formatDisplayDate(repo.pushed_at)}</span>
        </div>
      )}
    </div>
  )
}

export default ModalDetails

