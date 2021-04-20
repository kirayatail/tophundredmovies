
export async function getMovies() {
  const result = await fetch('/api/movies').then(res => res.json());
  return result;
}