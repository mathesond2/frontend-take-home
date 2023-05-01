import { List } from '@chakra-ui/react';
import { render, screen } from '@testing-library/react';
import NpmListItem from './NpmListItem';

const mockData = {
  name: 'test',
  description: 'my test description',
  links: {
    npm: 'https://www.npmjs.com/package/test',
  },
  keywords: ['testing-keyword-1', 'testing-keyword-2'],
};

describe('NpmListItem', () => {
  const { name, description, links, keywords } = mockData;
  it('renders NpmListItem', () => {
    render(
      <List>
        <NpmListItem name={name} description={description} keywords={keywords} npmLink={links.npm} />
      </List>,
    );
    const nameContent = screen.getByText(name);
    expect(nameContent).toBeInTheDocument();
    const descriptionContent = screen.getByText(description);
    expect(descriptionContent).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', links.npm);
    expect(screen.getAllByText(keywords[0])).toHaveLength(1);
    expect(screen.getAllByText(keywords[1])).toHaveLength(1);
  });
});
