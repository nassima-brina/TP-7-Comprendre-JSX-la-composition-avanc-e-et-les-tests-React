// src/withTimestamp.js
import React from 'react';

function withTimestamp(WrappedComponent) {
  return function EnhancedComponent(props) {
    const now = new Date().toLocaleString('fr-FR', {
      dateStyle: 'short',
      timeStyle: 'medium'
    });

    console.log(`Rendu de ${WrappedComponent.name} le ${now}`);

    return (
      <div>
        <WrappedComponent {...props} />
        <small style={{ color: '#666', fontSize: '0.8em', display: 'block', marginTop: '8px' }}>
          Dernier rendu : {now}
        </small>
      </div>
    );
  };
}

export default withTimestamp;