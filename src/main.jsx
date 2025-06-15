import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => (
  <main style={{
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: 'sans-serif'
  }}>
    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Sinercomex</h1>
    <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '0.5rem' }}>
      Estamos trabajando en nuestro sitio web.
    </p>
    <p style={{ color: '#999' }}>
      Mientras tanto, puedes encontrarnos en{' '}
      <a href="https://www.linkedin.com/company/sinercomex" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>.
    </p>
  </main>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
