import { List } from '@chakra-ui/react';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import NpmListItem from '../NpmListItem/NpmListItem';

export default function NpmList({ npmData }) {
  const { data, loading, error } = npmData;

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <Error text={'An error occurred getting package data. Please try again.'}/>;
  }

  return (
    <List>
      {data.map(({ package: { name, description, links, keywords } }) => (
        <NpmListItem key={name} name={name} description={description} npmLink={links.npm} keywords={keywords} />
      ))}
    </List>
  );
}
