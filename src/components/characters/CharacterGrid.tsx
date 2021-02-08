import { FC } from 'react';

import { CharacterItem } from './CharacterItem';
import { Spinner } from '../ui';

import { IItem } from '../../App';

interface IProps {
  isLoading: boolean;
  items: IItem[];
}

export const CharacterGrid: FC<IProps> = ({ isLoading, items }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <CharacterItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};
