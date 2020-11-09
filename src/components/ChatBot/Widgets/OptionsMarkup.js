
const optionsMarkup = (options) => options.map((option) => (
  <li key={option.id} className="link-list">
    <a
      href={option.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-list-item-url"
    >
      {option.text}
    </a>
  </li>
  )
);

export default optionsMarkup;
