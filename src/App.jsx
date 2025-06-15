export default function App() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1a1a1a' }}>Sinercomex</h1>
      <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '1rem' }}>
        Estamos trabajando en nuestro sitio web.
      </p>
      <p style={{ fontSize: '1rem', color: '#888' }}>
        Muy pronto podrás conocernos mejor. Mientras tanto, puedes encontrarnos en{' '}
        <a href="https://www.linkedin.com/company/sinercomex" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>.
      </p>
    </main>
  );
}
