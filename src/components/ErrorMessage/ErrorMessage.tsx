import { Button } from '@shared/components'
import './ErrorMessage.scss'

interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="error-message" role="alert">
      <div className="error-content">
        <p className="error-text">{message}</p>
        {onRetry && (
          <Button 
            onClick={onRetry}
            aria-label="Retry loading repositories"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}

export { ErrorMessage }

