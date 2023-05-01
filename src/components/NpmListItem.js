export default function NpmListItem({ name, description, npmLink, keywords }) {
  return (
    <li>
      <a href={npmLink} target="_blank" rel="noreferrer">
        {name}
      </a>{' '}
      {description}
      <ul>
        {keywords?.map((keyword) => (
          <li key={keyword}>{keyword}</li>
        ))}
      </ul>
    </li>
  );
}
