import { Link } from 'react-router-dom';

export default function Book({ item }) {
  const bookContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: '20px',
  };

  const bookInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAling: 'center',
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <div style={bookContainerStyle}>
      <Link to={`/view/${item.id}`} style={bookInfoStyle}>
        <img src={item.cover} width="200" alt={item.title} />
        <div>{item.title}</div>
      </Link>
    </div>
  );
}
