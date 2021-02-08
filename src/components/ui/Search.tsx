import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';

interface IProps {
  getQuery: Dispatch<SetStateAction<string>>;
}

export const Search: FC<IProps> = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (e: FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { value } = e.target as HTMLInputElement;
    setText(value);
    getQuery(value);
  };

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          value={text}
          onChange={onChange}
          autoFocus
        />
      </form>
    </section>
  );
};
