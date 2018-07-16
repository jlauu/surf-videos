import Link from 'next/link';
import { List, Image } from 'semantic-ui-react';

// abstracted to get rid of error message due to
// semantic/nextjs integration hicks.
const VideoLink = ({ href, title }) => (
  <Link href={href}><a>{title}</a></Link>
);

export default ({ title, description, thumbnailUrl, id }) => (
  <List.Item>
    <Image src={ thumbnailUrl }></Image>
    <List.Content>
      <List.Header as={VideoLink}
        title={title}
        href={{
          pathname: '/watch',
          query: { id }
        }}>
      </List.Header>
      <List.Description>{ description }</List.Description>
    </List.Content>
  </List.Item>
);
