
import JSXDemo from './JSXDemo';                    
import ButtonWithLogging from './ButtonWithLogging'; 
import DataLoader from './DataLoader';              
import Counter from './Counter';                    
import ButtonWithTimestamp from './ButtonWithTimestamp'; 
import ListFilter from './ListFilter';             
import SimpleLoginForm from './SimpleLoginForm';    
import './App.css';    
const names = [
  'Alice', 'Bob', 'Charlie', 'David', 'Emma', 'Frank',
  'Grace', 'Hannah', 'Isaac', 'Julia'
];

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>
        Résultat complet du TP 
      </h1>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>1. JSX Demo </h2>
        <JSXDemo />
      </section>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>2. Bouton avec logging </h2>
        <ButtonWithLogging label="Cliquer ici " />
      </section>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>3. DataLoader avec Render Props </h2>
        <DataLoader
          render={(data) => (
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {data.map((name) => (
                <li key={name} style={{ padding: '6px' }}>{name}</li>
              ))}
            </ul>
          )}
        />
      </section>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>4. Compteur avec useState </h2>
        <Counter />
      </section>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>5. Bouton avec Timestamp </h2>
        <ButtonWithTimestamp label="Bouton timestamp" />
      </section>

      <section style={{ marginBottom: '40px', borderBottom: '1px solid #ddd', paddingBottom: '20px' }}>
        <h2>6. Filtrage liste </h2>
        <ListFilter items={names} render={({ filteredItems, searchValue, setSearchValue, total, resultsCount }) => (
          <>
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Rechercher un prénom..."
              style={{ width: '100%', padding: '10px', marginBottom: '12px' }}
            />
            <p>{resultsCount} résultat{resultsCount !== 1 ? 's' : ''} sur {total}</p>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {filteredItems.map(name => (
                <li key={name} style={{ padding: '8px', background: '#f8f9fa', marginBottom: '4px' }}>
                  {name}
                </li>
              ))}
            </ul>
          </>
        )} />
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>7. Formulaire avec validation </h2>
        <SimpleLoginForm />
      </section>
    </div>
  );
}

export default App;