import { FC } from 'react';
import tw from 'twin.macro';
import { SanityContent, Text } from '../../components';
import { Experience } from '../../types';

type WorkExperienceProps = { experience: Experience[] };

const WorkExperience: FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <ul tw='flex flex-col list-outside list-disc border-l-2 border-grey-normal pl-2.5'>
      {(experience || []).map(
        (
          {
            _id,
            date,
            description,
            role,
            technologies,
            title,
            url,
          }: Experience,
          index,
          array
        ) => (
          <li
            key={_id}
            css={[
              tw`-mt-2.5`,
              index + 1 === array.length ? tw`mb-0` : tw`mb-12`,
            ]}>
            <Text component='span' variant='body2'>
              {date}
            </Text>
            <a href={url} target='_blank'>
              <Text tw='underline' color='accent' component='h3' variant='h3'>
                {title}
              </Text>
            </a>
            <Text component='h4' tw='leading-5 mb-2' variant='subheading'>
              {role}
            </Text>
            <Text component='p' tw='mb-2' style='italic' variant='body2'>
              {`Technologies used: `}
              {(technologies || []).map(({ _id, title }, index, array) => (
                <Text key={_id} component='span' style='italic' variant='body2'>
                  {`${title} ${index + 1 !== array.length ? ', ' : ''}`}
                </Text>
              ))}
            </Text>
            <SanityContent
              blocks={description}
              additionalBlockSerializers={{
                normal: (children) => {
                  return (
                    <Text
                      tw='leading-5'
                      color='primary'
                      component='p'
                      variant='body'>
                      {children}
                    </Text>
                  );
                },
              }}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default WorkExperience;
