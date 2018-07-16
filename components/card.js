import Link from 'next/link';
import { List, Image } from 'semantic-ui-react';
export default ({ title, description, thumbnails, id }) => (
  <List.Item>
    <Image src={ thumbnails.default.url }></Image>
    <List.Content>
      <List.Header as={Link}
        href={{
          pathname: '/watch',
          query: { id }
        }}>
        { title }
      </List.Header>
      <List.Description>{ description }</List.Description>
    </List.Content>
  </List.Item>
);
