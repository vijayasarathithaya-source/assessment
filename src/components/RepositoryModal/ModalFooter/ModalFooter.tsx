interface ModalFooterProps {
  githubUrl: string
}

function ModalFooter({ githubUrl }: ModalFooterProps) {
  return (
    <div className="modal-footer">
      <a 
        href={githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="modal-github-link"
      >
        View on GitHub →
      </a>
    </div>
  )
}

export default ModalFooter

