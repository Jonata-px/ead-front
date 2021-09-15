
import {useState} from 'react';

function Header() {
    const [nome, setNome] = useState('Jonatã');
  return (
      <header className="App-header">
        <h2>Header do site</h2>
      </header>
  );
}

export default Header;
