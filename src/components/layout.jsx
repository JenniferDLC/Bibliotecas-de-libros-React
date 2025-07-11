import NavBar from './navbar';

export default function Layout({ children }) {
  const titleStyle = {
    color: 'white',
    fontFamily: 'Arial',
  };

  return (
    <div>
      <div>
        <h1 style={titleStyle}>Biblioteca de libros</h1>
      </div>
      <NavBar />
      <div>___________</div>

      <div>{children}</div>
    </div>
  );
}
