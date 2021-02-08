import spinner from '../../img/spinner.gif';

export const Spinner = (): JSX.Element => {
  return (
    <img
      src={spinner}
      alt='spinner'
      style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
  );
};
