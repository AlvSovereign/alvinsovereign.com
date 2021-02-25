import { FC } from 'react';
import clsx from 'clsx';
import { SanityContent, Text } from '../../components';
import { Experience } from '../../types';

type WorkExperienceProps = { experience: Experience[] };

const WorkExperience: FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <ul className='flex flex-col list-outside list-disc border-l-2 border-grey-normal pl-2.5'>
      {(experience || []).map(
        (
          { _id, date, description, role, technologies, title }: Experience,
          index,
          array
        ) => (
          <li
            key={_id}
            className={clsx([
              '-mt-2.5',
              index + 1 === array.length ? 'mb-0' : 'mb-12',
            ])}>
            <Text component='span' variant='body2'>
              {date}
            </Text>
            <Text component='h3' variant='h3'>
              {title}
            </Text>
            <Text
              component='h4'
              className='leading-5 mb-2'
              variant='subheading'>
              {role}
            </Text>
            <Text component='p' className='mb-2' style='italic' variant='body2'>
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
                    <Text className='leading-5' component='p' variant='body'>
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
