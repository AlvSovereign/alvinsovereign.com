import { FC } from 'react';
import tw from 'twin.macro';
import { Circle } from 'phosphor-react';
import { SanityContent, Text } from '../../components';
import { Experience } from '../../types';

type WorkExperienceProps = { experience: Experience[] };

const WorkExperience: FC<WorkExperienceProps> = ({ experience }) => {
  return (
    <ul tw='flex flex-col list-outside list-disc'>
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
            css={[
              tw`relative flex flex-row border-l-2 border-grey-normal dark:border-grey-lighter`,
              index + 1 === array.length ? tw`mb-12 pb-0` : tw`mb-0 pb-8`,
              index === 0 ? tw`border-dashed` : tw`border-solid`,
            ]}>
            <Circle
              size={14}
              css={{ left: -8, top: -1 }}
              tw='absolute text-slate-blue-normal dark:text-slate-yellow-normal'
              weight='fill'
            />
            <div tw='flex flex-col pl-3.5'>
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
                  target='_blank'>
                  <Text color='accent' tw='underline mb-2' variant='body'>
                    {`Project: ${project}`}
                  </Text>
                </a>
              ) : (
                project && (
                  <Text color='accent' tw='mb-2' variant='body'>
                    {`Project: ${project}`}
                  </Text>
                )
              )}
              <Text component='h4' tw='leading-5 mb-2' variant='subheading'>
                {role}
              </Text>
              <Text component='p' tw='mb-2' style='italic' variant='body2'>
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
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default WorkExperience;
