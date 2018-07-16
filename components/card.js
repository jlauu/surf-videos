import Link from 'next/link';
import { List, Image } from 'semantic-ui-react';
export default ({ title, description, thumbnailUrl, id }) => (
  <List.Item>
    <Image src={ thumbnailUrl }></Image>
    <List.Content>
      <List.Header as={Link}
        href={{
          pathname: '/watch',
          query: { id }
        }}>
        <a>{ title }</a>
      </List.Header>
      <List.Description>{ description }</List.Description>
    </List.Content>
  </List.Item>
);
