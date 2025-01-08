import { FC } from 'react';
import { Circle } from '@phosphor-icons/react/dist/ssr';
import { SanityContent, Text } from '../../components';
import { Experience } from '../../types';

type WorkExperienceProps = { experience: Experience[] };

const WorkExperience: FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <ul className='flex flex-col list-outside list-disc'>
      {(experience || []).map(
        (
          {
            _id,
            date,
            description,
            project,
            projectUrl,
            role,
            technologies,
            title,
          }: Experience,
          index,
          array
        ) => (
          <li
            key={_id}
            className={[
              index + 1 === array.length ? 'mb-12 pb-0' : 'mb-0 pb-8',
              index === 0 ? 'border-dashed' : 'border-solid',
              'relative flex flex-row border-l-2 border-grey-normal dark:border-grey-lighter',
            ].join(' ')}>
            <Circle
              size={14}
              className='absolute text-slate-blue-normal dark:text-slate-yellow-normal left-[-8px] top-[-1px]'
              weight='fill'
            />
            <div className='flex flex-col pl-3.5'>
              <Text component='span' variant='body2'>
                {date}
              </Text>
              <Text color='accent' component='h3' variant='h3'>
                {title}
              </Text>
              {project && projectUrl ? (
                <a
                  aria-label={`Visit the "${project}" project webpage`}
                  href={projectUrl}
                  target='_blank'
                  rel='noreferrer'>
                  <Text
                    color='accent'
                    className='underline mb-2'
                    variant='body'>
                    {`Project: ${project}`}
                  </Text>
                </a>
              ) : (
                project && (
                  <Text color='accent' className='mb-2' variant='body'>
                    {`Project: ${project}`}
                  </Text>
                )
              )}
              <Text
                component='h4'
                className='leading-5 mb-2'
                variant='subheading'>
                {role}
              </Text>
              <Text
                component='p'
                className='mb-2'
                style='italic'
                variant='body2'>
                {`Technologies used: `}
                {(technologies || []).map(({ _id, title }, index, array) => (
                  <Text
                    key={_id}
                    component='span'
                    style='italic'
                    variant='body2'>
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
                        className='leading-5'
                        color='primary'
                        component='p'
                        variant='body'>
                        {children}
                      </Text>
                    );
                  },
                }}
              />
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default WorkExperience;
