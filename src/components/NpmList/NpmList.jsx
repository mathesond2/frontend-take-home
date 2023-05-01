import { List } from '@chakra-ui/react';
import NpmListItem from '../NpmListItem/NpmListItem';
import Loader from '../Loader';

export default function NpmList({ npmData }) {
  const { data, loading, error } = npmData;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <List>
      {data.map(({ package: { name, description, links, keywords } }) => (
        <NpmListItem key={name} name={name} description={description} npmLink={links.npm} keywords={keywords} />
      ))}
    </List>
  );
}
