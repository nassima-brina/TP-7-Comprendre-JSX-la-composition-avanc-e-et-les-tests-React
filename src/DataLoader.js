function DataLoader({ render }) {
  const data = ['nassima', 'kaoutar', 'ouissal'];

  return <div>{render(data)}</div>;
}

export default DataLoader;