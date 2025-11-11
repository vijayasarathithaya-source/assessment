import { useEffect, useRef } from 'react'
import type { GitHubRepository } from '@types'
import ModalHeader from './ModalHeader'
import ModalStats from './ModalStats'
import ModalDetails from './ModalDetails'
import ModalTopics from './ModalTopics'
import ModalFooter from './ModalFooter'
import './RepositoryModal.scss'

interface RepositoryModalProps {
  repo: GitHubRepository | null
  isOpen: boolean
  onClose: () => void
}

function RepositoryModal({ repo, isOpen, onClose }: RepositoryModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent): void => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
      
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 100)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen || !repo) {
    return null
  }

  return (
    <div 
      className="modal-backdrop" 
      ref={modalRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="modal-content">
        <button
          ref={closeButtonRef}
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        <ModalHeader repo={repo} />

        <div className="modal-body">
          {repo.description && (
            <div className="modal-section">
              <h3 className="modal-section-title">Description</h3>
              <p className="modal-description">{repo.description}</p>
            </div>
          )}

          <ModalStats repo={repo} />
          <ModalDetails repo={repo} />
          <ModalTopics topics={repo.topics || []} />
        </div>

        <ModalFooter githubUrl={repo.html_url} />
      </div>
    </div>
  )
}

export { RepositoryModal }

