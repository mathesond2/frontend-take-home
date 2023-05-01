export default function NpmListItem({ name, description, npmLink }) {
  return (
    <li>
      <a href={npmLink} target="_blank" rel="noreferrer">
        {name}
      </a>{' '}
      {description}
    </li>
  );
}
