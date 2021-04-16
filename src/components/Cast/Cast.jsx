const Cast = ({ cast }) => (
  <>
    <ul>
      {cast.cast.map(actor => (
        <li key={actor.id}>
          <div>
            <p>{actor.character}</p>
            <p> - {actor.name}</p>
          </div>
        </li>
      ))}
    </ul>
    <ul>
      {cast.crew.map(crew => (
        <li key={crew.credit_id}>
          <div>
            <p>{crew.name}</p>
            <p> - {crew.job}</p>
          </div>
        </li>
      ))}
    </ul>
  </>
);

export default Cast;
