import Form from '../components/Form';

const MoviesPage = () => {
  const submitHandler = text => console.log(text);

  return (
    <>
      <Form onSubmit={submitHandler} />)
    </>
  );
};

export default MoviesPage;
