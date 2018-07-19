import Link from 'next/link';
import { List, Image } from 'semantic-ui-react';

// abstracted to get rid of error message due to
// semantic/nextjs integration hicks.
const VideoLink = ({ href, title }) => (
  <Link href={href}>
    <div className="title">
      <a>{title}</a>
    </div>
  </Link>
);

const toHref = id => ({
  pathname: '/watch',
  query: { id }
});

export default ({ title, description, thumbnailUrl, id }) => (
  <List.Item className="card">
    <Link href={toHref(id)}>
      <Image src={ thumbnailUrl }></Image>
    </Link>
    <List.Content>
      <List.Header as={VideoLink}
        title={title}
        href={toHref(id)}>
      </List.Header>
      <List.Description>{ description }</List.Description>
    </List.Content>
    <style jsx global>{`
      .card :global(.title) {
        margin: .5rem 0;
      }
    `}</style>
  </List.Item>
);
