import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
