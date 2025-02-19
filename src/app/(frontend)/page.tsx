import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import React from 'react'

import config from '@/payload.config'
import './globals.css'
import { DisplayH1, DisplayH2, H1, H2, H3, Lead, P } from '@/components/typography'
import Link from 'next/link'
import { ArrowUpRight, MoveUpRight } from 'lucide-react'
export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <div className="md:px-inherit container mx-auto px-4">
      <section className="md:px-inherit container flex h-screen flex-col px-4">
        <div className="flex flex-1 flex-col justify-center">
          <DisplayH1 className="w-full text-center md:text-end">ALVIN SOVEREIGN</DisplayH1>
          <H2
            as="h2"
            className="text-muted-foreground w-full text-center text-xl md:text-end md:text-3xl lg:text-4xl"
          >
            Senior FullStack TypeScript Developer
          </H2>
        </div>
        <div className="flex flex-col gap-y-4 pb-8 lg:w-1/2 lg:pb-16">
          <Lead className="text-muted-foreground leading-relaxed">
            A business-oriented TypeScript FullStack developer with over 9 years of experience
            working in multiple industries, solving complex problems with code.
          </Lead>
          <Lead className="!text-accent">AVAILABLE FOR NEW PROJECTS</Lead>
        </div>
      </section>
      <section className="container mx-auto py-16 md:py-24">
        <div className="flex flex-1 flex-col justify-center py-12">
          <DisplayH2 className="tracking-wide">ABOUT</DisplayH2>
          <hr className="border-accent my-6" />
          <div className="flex flex-col gap-8 md:flex-row">
            <div className="flex flex-7/12 flex-col gap-y-4">
              <Lead className="text-semibold flex-1 md:text-3xl">
                Throughout my career, I have crafted high-performance web applications with an
                unwavering focus on exceptional user experience and accessibility, turning complex
                challenges into impactful digital solutions.
              </Lead>

              <div className="hidden w-full flex-row gap-x-12 md:flex">
                <div className="flex flex-row items-center gap-px">
                  <div className="border-accent border-b pb-px">
                    <Link target="_blank" href="https://www.linkedin.com/in/alvinsovereign">
                      <Lead>LinkedIn</Lead>
                    </Link>
                  </div>
                  <ArrowUpRight size={16} color="var(--accent)" />
                </div>
                <div className="flex flex-row items-center gap-px">
                  <div className="border-accent border-b pb-px">
                    <Link target="_blank" href="https://github.com/alvsovereign">
                      <Lead>GitHub</Lead>
                    </Link>
                  </div>
                  <ArrowUpRight size={16} color="var(--accent)" />
                </div>
                <div className="flex flex-row items-center gap-px">
                  <div className="border-accent border-b pb-px">
                    <Link target="_blank" href="mailto:alvinsovereign@gmail.com">
                      <Lead>Email</Lead>
                    </Link>
                  </div>
                  <ArrowUpRight size={16} color="var(--accent)" />
                </div>
              </div>
            </div>
            <div className="flex flex-5/12 flex-col">
              <P className="text-muted-foreground">
                I&apos;m a veteran TypeScript developer transforming complex business challenges
                into elegant digital solutions. From scaling enterprise e-commerce at Calvin Klein
                to building innovative EdTech platforms, I specialize in high-performance React
                applications that drive real business results.
              </P>
              <P className="text-muted-foreground">
                I consistently deliver optimized user experiences through data-driven performance
                improvements and strategic A/B testing. As a performance-obsessed developer, I bring
                a keen eye for optimization and accessibility to every project, ensuring
                applications exceed both technical benchmarks and user expectations.
              </P>
              <P className="text-muted-foreground">
                My latest side-project is an innovative events platform that bridges dance
                communities with event organizers, delivering a seamless experience through web and
                mobile applications.
              </P>
            </div>
            <div className="flex w-full flex-row gap-x-8 md:hidden">
              <div className="flex flex-row items-center gap-px">
                <div className="border-accent border-b">
                  <Link target="_blank" href="https://www.linkedin.com/in/alvinsovereign">
                    LinkedIn
                  </Link>
                </div>
                <ArrowUpRight size={16} color="var(--accent)" />
              </div>
              <div className="flex flex-row items-center gap-px">
                <div className="border-accent border-b">
                  <Link target="_blank" href="https://github.com/alvsovereign">
                    GitHub
                  </Link>
                </div>
                <ArrowUpRight size={16} color="var(--accent)" />
              </div>
              <div className="flex flex-row items-center gap-px">
                <div className="border-accent border-b">
                  <Link target="_blank" href="mailto:alvinsovereign@gmail.com">
                    Email
                  </Link>
                </div>
                <ArrowUpRight size={16} color="var(--accent)" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-16 md:py-24">
        <div className="flex flex-1 flex-col justify-center py-12">
          <DisplayH2 className="tracking-wide">EXPERIENCE</DisplayH2>
          <hr className="border-accent my-6" />
          <div className="flex flex-col gap-8 md:flex-row"></div>
        </div>
      </section>
    </div>
  )
}
