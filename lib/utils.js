export const Debug = props => (
  <pre>{JSON.stringify(props, null, '  ')}</pre>
);
