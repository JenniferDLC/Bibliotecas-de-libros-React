import { useState } from 'react';
import { useAppContext } from '../store/store';

//al cambiar de ruta no se guardan los estados o sea
//se actualiza la pagina en blanco
//para solucionar esto vamos a utilizar un componente
// llamado link de reac-router-dom

import Layout from '../components/layout';
import { useNavigate } from 'react-router-dom';

export default function Create() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [cover, setCover] = useState('');
  const [intro, setIntro] = useState('');
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState('');

  const store = useAppContext();
  const navigate = useNavigate();

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'author':
        setAuthor(value);
        break;

      case 'cover':
        setCover(value);
        break;

      case 'intro':
        setIntro(value);
        break;

      case 'Completed':
        setCompleted(e.target.checked);
        break;

      case 'review':
        setReview(value);
        break;

      default:
    }
  }

  function handleChangeFile(e) {
    const element = e.target;
    const file = element.files[0];
    //filereder es una funcion especial para leer archivos del filesearch
    const reader = new FileReader();

    //llamamos a el archivo
    //The readAsDataURL method is used to read the contents
    // of the specified Blob or File

    reader.readAsDataURL(file);

    //onloadend es una funcion donde vamos a especificar
    //que se hara con el archivo que leyo o cargo.

    reader.onloadend = function () {
      ///se la asignamos a setcover convertida a string.

      setCover(reader.result.toString());
    };
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newBook = {
      id: crypto.randomUUID(),
      title,
      cover,
      intro,
      completed,
      review,
    };

    store.createItem(newBook);
    navigate('/');
  }

  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Title</div>

          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>

        <div>
          <div>Author</div>

          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div>
          <div>Cover</div>

          <input type="file" name="cover" onChange={handleChangeFile} />

          <div>
            {!!cover ? <img src={cover} width="200" alt="preview" /> : ''}
          </div>
        </div>

        <div>
          <div>Intro</div>

          <input
            type="text"
            name="intro"
            onChange={handleChange}
            value={intro}
          />
        </div>

        <div>
          <div>Completed</div>

          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>

        <div>
          <div>Review</div>

          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <input type="submit" value="Register books" />
      </form>
    </Layout>
  );
}
