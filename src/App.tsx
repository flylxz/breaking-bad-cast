import { useState, useEffect, FC, SetStateAction } from 'react';
import axios from 'axios';
import { Header, Search } from './components/ui';
import { CharacterGrid } from './components/characters';
import './App.css';

export interface IItem {
  char_id: number;
  name: 'string';
  birthday: string;
  ocupation: string[];
  img: string;
  status: string;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: [];
}

const App: FC = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={setQuery} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
