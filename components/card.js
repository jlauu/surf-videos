import { List, Image } from 'semantic-ui-react';
export default ({ title, description, thumbnails, id }) => (
  <List.Item>
    <Image src={ thumbnails.default.url }></Image>
    <List.Content>
      <List.Header as="a">{ title }</List.Header>
      <List.Description>{ description }</List.Description>
    </List.Content>
  </List.Item>
);
