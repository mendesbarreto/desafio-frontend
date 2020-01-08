import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './SearchBox.css';

interface ISearchBox {
  placeholder?: string,
  onSearch?: (text: string) => void;
}

const SearchBox: React.FC<ISearchBox> = ({ placeholder = "Insira o nome da cidade", onSearch = () => { } }) => {
  const [text, setText] = useState("");

  function waitEnterPress(e: React.KeyboardEvent) {
    const KeyEnterCode = 13;

    if (e.keyCode === KeyEnterCode) {
      onSearch(text)
    }
  }

  return (
    <div className="container-search my-8">
      <input className="input__search" type="text" placeholder={placeholder} value={text} onKeyUp={waitEnterPress} onChange={e => setText(e.currentTarget.value)} />
      <FontAwesomeIcon className="pa-8 cursor" icon={faSearch} size="lg" onClick={() => onSearch(text)} />
    </div>
  );
}

export default SearchBox;
