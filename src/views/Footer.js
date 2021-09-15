
import {useState} from 'react';

function Footer() {
    const [nome, setNome] = useState('Jonatã');
  return (
      <header className="App-header">
        <h2>Footer do site</h2>
      </header>
  );
}

export default Footer;