import { Heading, Link, List, ListItem, Tag, Text } from '@chakra-ui/react';
import './NpmListItem.css';

export default function NpmListItem({ name, description, npmLink, keywords }) {
  return (
    <ListItem className='npm-list-item'>
      <Heading as="p" size='md'>
        <Link href={npmLink} rel="noreferrer" isExternal>
          {name}
        </Link>
      </Heading>
      <Text fontSize='md'>{description}</Text>
      <List spacing={3} className='keyword-list'>
        {keywords?.map((keyword, i) => (
          <ListItem key={`${keyword}-${i}`} className='keyword-list-item'>
            <Tag>{keyword}</Tag>
          </ListItem>
        ))}
      </List>
    </ListItem>
  );
}
