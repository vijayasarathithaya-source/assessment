import './LoadingSpinner.scss'

function LoadingSpinner() {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <div className="spinner"></div>
      <p className="loading-text">Loading repositories...</p>
    </div>
  )
}

export default LoadingSpinner

