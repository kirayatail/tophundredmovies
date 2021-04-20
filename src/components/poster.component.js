
export function Poster(props) {
  const m = props.data;

  function posterPath() {
    return 'https://www.themoviedb.org/t/p/w220_and_h330_face' + m.poster_path;
  } 

  return (
    <div className="poster">
      <div className="overlay">
        {m.title}
        <br />
        ({m.release_date})
      </div>
      <img src={posterPath()} alt={m.title} />
    </div>
  )
}