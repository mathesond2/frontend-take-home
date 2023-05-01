import { Heading, Link, List, ListItem, Tag, Text, useColorMode } from '@chakra-ui/react';
import './NpmListItem.css';

export default function NpmListItem({ name, description, npmLink, keywords }) {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === 'light' ? 'gray.100' : 'gray.700';
  return (
    <ListItem className='npm-list-item' _hover={{backgroundColor: bgColor}}>
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
