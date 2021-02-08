import { FC } from 'react';
import logo from '../../img/logo.png';

export const Header: FC = () => {
  return (
    <header className='center'>
      <img src={logo} alt='breaking bad' />
    </header>
  );
};
