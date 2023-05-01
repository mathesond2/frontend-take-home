import { List } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import NpmListItem from './NpmListItem';

describe('NpmListItem', () => {
  const mockData = {
    name: 'test',
    description: 'my test description',
    links: {
      npm: 'https://www.npmjs.com/package/test',
    },
    keywords: ['testing-keyword-1', 'testing-keyword-2'],
  };
  const { name, description, links, keywords } = mockData;
  it('renders NpmListItem', () => {
    render(
      <List>
        <NpmListItem name={name} description={description} keywords={keywords} npmLink={links.npm} />
      </List>,
    );
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', links.npm);
    expect(screen.getAllByText(keywords[0])).toHaveLength(1);
    expect(screen.getAllByText(keywords[1])).toHaveLength(1);
  });
});
