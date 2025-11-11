import './BottomNavigation.scss'

interface BottomNavigationProps {
  activeTab?: 'trending' | 'settings'
  onTabChange?: (tab: 'trending' | 'settings') => void
}

function BottomNavigation({ activeTab = 'trending', onTabChange }: BottomNavigationProps) {
  return (
    <nav className="bottom-nav" role="navigation" aria-label="Main navigation">
      <button
        className={`nav-item ${activeTab === 'trending' ? 'active' : ''}`}
        onClick={() => onTabChange?.('trending')}
        aria-label="Trending repositories"
        aria-current={activeTab === 'trending' ? 'page' : undefined}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
        <span className="nav-label">Trending</span>
      </button>
      
      <button
        className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
        onClick={() => onTabChange?.('settings')}
        aria-label="Settings"
        aria-current={activeTab === 'settings' ? 'page' : undefined}
      >
        <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m9-9h-6m-6 0H3m15.364 6.364l-4.243-4.243m-4.242 0L5.636 17.364m12.728 0l-4.243-4.243m-4.242 0L5.636 6.636" />
        </svg>
        <span className="nav-label">Settings</span>
      </button>
    </nav>
  )
}

export { BottomNavigation }

