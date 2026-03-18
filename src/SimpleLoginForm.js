// src/SimpleLoginForm.js
import { useState } from 'react';

function SimpleLoginForm() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError('Le nom d’utilisateur est obligatoire');
      return;
    }
    setError('');
    alert(`Connexion simulée pour ${username}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '20px' }}>
      <div style={{ marginBottom: '16px' }}>
        <label 
          htmlFor="username"
          style={{ display: 'block', marginBottom: '6px' }}
        >
          Nom d'utilisateur
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            if (error) setError('');
          }}
          style={{ width: '100%', padding: '10px' }}
        />
        {error && (
          <p style={{ color: '#e74c3c', marginTop: '6px', fontSize: '0.9em' }}>
            {error}
          </p>
        )}
      </div>

      <button 
        type="submit"
        style={{ padding: '10px 20px', background: '#3498db', color: 'white', border: 'none' }}
      >
        Se connecter
      </button>
    </form>
  );
}

export default SimpleLoginForm;