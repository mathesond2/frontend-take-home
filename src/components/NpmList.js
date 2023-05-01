import NpmListItem from './NpmListItem';

export default function NpmList({ npmData }) {
  const { data, loading, error } = npmData;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <ul>
      {data.map(({ package: { name, description, links } }) => (
        <NpmListItem key={name} name={name} description={description} npmLink={links.npm} />
      ))}
    </ul>
  );
}
