interface ModalTopicsProps {
  topics: string[]
}

function ModalTopics({ topics }: ModalTopicsProps) {
  if (!topics || topics.length === 0) {
    return null
  }

  return (
    <div className="modal-section">
      <h3 className="modal-section-title">Topics</h3>
      <div className="modal-topics">
        {topics.map((topic: string) => (
          <span key={topic} className="modal-topic-tag">
            {topic}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ModalTopics

