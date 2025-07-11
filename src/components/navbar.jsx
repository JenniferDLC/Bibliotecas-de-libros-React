import { Link } from 'react-router-dom';

export default function NavBar() {
  const navContainer = {
    backgroundColor: 'white',
    borderRadius: '5px',
    width: '50px',
    height: '20px',
    textAling: 'center',
    padding: '4px',
    margin: '5px',
  };

  return (
    <>
      <a style={navContainer}>
        <Link to="/">Home</Link>
      </a>
      <a style={navContainer}>
        <Link to="/create"> Create</Link>
      </a>
    </>
  );
}
