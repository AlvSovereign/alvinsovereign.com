import { FC } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import { Text } from '..';

type SanityContentProps = {
  additionalBlockSerializers?: any;
  additionalSerializer?: any;
  blocks: any;
};

const SanityContent: FC<SanityContentProps> = ({
  additionalBlockSerializers,
  additionalSerializer,
  blocks,
}) => {
  const serializers = {
    marks: {
      link: ({ children, mark }) => {
        return (
          <Text component='a' href={mark.href} target='_blank'>
            {children}
          </Text>
        );
      },
    },
    types: {
      block: ({ children, node }) => {
        return blockSerializer[node.style](children);
      },
    },
  };

  const blockSerializer = {
    normal: (children) => {
      return (
        <Text component='p' variant='body'>
          {children}
        </Text>
      );
    },
    ...additionalBlockSerializers,
  };

  return (
    <BlockContent
      blocks={blocks}
      serializers={{ ...serializers, ...additionalSerializer }}
    />
  );
};

export default SanityContent;
