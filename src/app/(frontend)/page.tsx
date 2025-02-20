import React from 'react'
import './globals.css'
import { DisplayH2, H1, H2, H3, Lead, P, Span } from '@/components/typography'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export default async function HomePage() {
  return (
    <>
      <div className="md:px-inherit container mx-auto px-4">
        <section className="md:px-inherit container flex h-screen flex-col px-4">
          <div className="flex flex-1 flex-col justify-center">
            <H1 className="mb-2 w-full text-center text-6xl font-medium tracking-tighter md:text-end md:text-7xl lg:text-[140px]">
              ALVIN SOVEREIGN
            </H1>
            <H2 className="text-muted-foreground w-full text-center text-xl md:text-end md:text-3xl lg:text-4xl">
              Senior FullStack TypeScript Developer
            </H2>
          </div>
          <div className="flex flex-col gap-y-4 pb-8 lg:w-1/2 lg:pb-16">
            <Lead className="text-muted-foreground leading-relaxed">
              A business-oriented FullStack TypeScript developer with over 9 years of experience
              working in multiple industries, solving complex problems with code.
            </Lead>
            <Lead className="text-accent">AVAILABLE FOR NEW PROJECTS</Lead>
          </div>
        </section>
        <section className="container mx-auto py-16 md:py-24">
          <div className="flex flex-1 flex-col justify-center py-12">
            <DisplayH2>ABOUT</DisplayH2>
            <hr className="border-accent my-8" />
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex flex-7/12 flex-col gap-y-4">
                <Lead className="flex-1 md:text-3xl">
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
                  I&apos;m a FullStack TypeScript developer transforming complex business challenges
                  into elegant digital solutions. From scaling enterprise e-commerce to building
                  innovative EdTech content platforms, I specialize in high-performance React
                  applications that drive real business results.
                </P>
                <P className="text-muted-foreground">
                  I consistently deliver optimized user experiences through data-driven performance
                  improvements and strategic A/B testing. As a performance-obsessed developer, I
                  bring a keen eye for optimization and accessibility to every project, ensuring
                  applications exceed both technical benchmarks and user expectations.
                </P>
                <P className="text-muted-foreground">
                  My latest side-project is an innovative events platform that bridges dance
                  communities with event organizers, delivering a seamless experience through web
                  and mobile applications.
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
            <DisplayH2>EXPERIENCE</DisplayH2>
            <hr className="border-accent my-8" />
            <div className="flex flex-col gap-y-24 md:gap-y-48">
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  Feb 2021 - Jan 2024
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>VML (Previously known as Wunderman Thompson)</H3>
                      <Span className="text-muted-foreground">
                        Project: Spearheading development for the evolution of PVH&apos;s major
                        fashion brands - Calvin Klein and Tommy Hilfiger
                      </Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Contract Senior TypeScript Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">E-commerce</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        As a key member of the engineering team, I helped transform both Calvin
                        Klein and Tommy Hilfiger&apos;s e-commerce platforms from single-page
                        applications to sophisticated, config-driven storefronts. I played an
                        integral role in migrating to ContentStack CMS while crafting pixel-perfect
                        UIs for each brand&apos;s redesign. Through well-tested, maintainable code,
                        we significantly reduced production issues and consistently hit our
                        deadlines.
                      </P>
                      <P className="text-muted-foreground">
                        My role grew as I took on challenges across the sales funnel, diving deep
                        into performance optimization that made a real difference to both platforms.
                        By implementing server-side rendering and strategic A/B testing, we saw a
                        12% boost in conversion rates. I also enhanced the user experience by
                        building a service worker that enabled push notifications, giving marketing
                        teams powerful new tools for their campaigns.
                      </P>
                      <P className="text-muted-foreground">
                        Accessibility was another passion project of mine, where I championed WCAG
                        standards and ARIA implementations to ensure both Calvin Klein and Tommy
                        Hilfiger&apos;s platforms were truly inclusive. Throughout the project, I
                        kept communication flowing between technical teams and stakeholders,
                        regularly presenting our progress on migration and new features within the
                        NX monorepo architecture.
                      </P>
                      <P className="text-muted-foreground">
                        Beyond the code, I found real satisfaction in mentoring team members in
                        production-grade web development practices. By sharing knowledge and
                        maintaining high standards, we built a stronger, more capable team together.
                      </P>
                      <div className="md flex w-full flex-row gap-x-8">
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://www.vml.com/">
                              VML
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://www.calvinklein.co.uk/">
                              Calvin Klein
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://uk.tommy.com/">
                              Tommy Hilfiger
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  Oct 2020 - Dec 2020
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>Tinizine Ltd</H3>
                      <Span className="text-muted-foreground">
                        Project: Creating a new web-billing experience for a childrens TV channel
                      </Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Contract Senior Frontend Web Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">Media</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        Architected and delivered a modern, config-driven billing platform for
                        global educational content providers, integrating Braintree and Vodafone Pay
                        while ensuring optimal user experience and accessibility standards.
                      </P>
                      <div className="md flex w-full flex-row gap-x-8">
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://account.azoomee.com/user/login">
                              Project Link
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://www.azoomee.com/">
                              Azoomee
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://www.davinci.tv/">
                              Da Vinci
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  Jun 2020 - Sep 2020
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>Idean UK (Superdrug Mobile)</H3>
                      <Span className="text-muted-foreground">
                        Project: Transforming Superdrug Mobile&apos;s digital presence
                      </Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Contract Senior Frontend Web Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">Communications</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        Transformed Superdrug Mobile&apos;s digital presence by leading the
                        migration from Ruby on Rails to a modern GatsbyJS architecture, while
                        implementing critical features for GDPR compliance and customer support
                        integration.
                      </P>
                      <div className="md flex w-full flex-row gap-x-8">
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://www.superdrugmobile.com/register/">
                              Project Link
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  Nov 2019 - Mar 2020
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>DixonsCarphone</H3>
                      <Span className="text-muted-foreground">
                        Project: Bridging Marketing and Analytics for Currys
                      </Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Contract Frontend Web Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">Retail</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        Bridged multiple data-dependent teams by developing robust analytics
                        implementations, enabling sophisticated user behavior tracking and
                        personalization through Adobe&apos;s ecosystem.
                      </P>
                      <div className="md flex w-full flex-row gap-x-8">
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://www.currys.co.uk/">
                              Project Link
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  Jul 2019 - Nov 2019
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>Micro:bit Educational Foundation</H3>
                      <Span className="text-muted-foreground">
                        Project: Supporting the creation of BBC micro:bit educational content
                        website
                      </Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Contract Frontend Web Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">Education</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        Engineered an accessible, multilingual educational platform using GatsbyJS
                        and Sanity CMS, creating custom content management solutions to facilitate
                        global computer science education.
                      </P>
                      <div className="md flex w-full flex-row gap-x-8">
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://microbit.org/">
                              Project Link
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  Oct 2017 - Jul 2019
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>Homelyfe Ltd / Aventus</H3>
                      <Span className="text-muted-foreground">
                        Project: Creation and maintenance of Homelyfe&apos;s/Aventus white-label
                        insurance products
                      </Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Frontend Web Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">Insurance</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        Development of white-label solutions for insurance products, developing
                        configurable web and mobile applications while creating internal tools for
                        analytics and app generation.
                      </P>
                      <div className="md flex w-full flex-row gap-x-8">
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://www.weareaventus.com/">
                              Project Link
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  April 2016 - October 2017
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>Chambers & Partners Ltd</H3>
                      <Span className="text-muted-foreground">
                        Project: Modernizing legacy applications
                      </Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Frontend Web Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">Law</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        Modernized legacy applications through Angular implementations, developing
                        performant single-page applications interfacing with REST APIs while
                        maintaining code quality and consistency.
                      </P>
                      <div className="md flex w-full flex-row gap-x-8">
                        <div className="flex flex-row items-center gap-px">
                          <div className="border-accent border-b">
                            <Link target="_blank" href="https://chambers.com/">
                              Project Link
                            </Link>
                          </div>
                          <ArrowUpRight size={16} color="var(--accent)" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="flex flex-col">
                <Span className="text-muted-foreground mb-2 text-start md:mb-4">
                  April 2015 - October 2016
                </Span>
                <div className="flex flex-col gap-8 md:flex-row">
                  <div className="flex flex-col gap-16 md:flex-row">
                    <div className="flex flex-4 flex-col gap-4">
                      <H3>Freelance Web Development</H3>
                      <Span className="text-muted-foreground">Project: Various projects</Span>
                      <div className="flex flex-col gap-2 md:gap-6">
                        <div className="flex flex-row items-center justify-between">
                          <Span className="text-muted-foreground">Position:</Span>
                          <Span className="text-end">Frontend Web Developer</Span>
                        </div>
                        <div className="flex flex-row justify-between">
                          <Span className="text-muted-foreground">Industry:</Span>
                          <Span className="text-end">Freelance</Span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-8 flex-col">
                      <P className="text-muted-foreground">
                        Started my career as a freelance web developer, working on various projects
                        for clients. I worked on a range of projects such as photography, small
                        business marketing websites and more.
                      </P>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </div>
      <footer className="container mx-auto px-4">
        <div className="flex flex-col justify-between gap-y-8 py-16 md:flex-row">
          <div className="flex flex-4 flex-col gap-y-4">
            <DisplayH2>Let&apos;s Chat</DisplayH2>
            <P className="text-muted-foreground">
              I&apos;m always looking for new opportunities and challenges. If you have any
              questions or would like to get in touch, please don&apos;t hesitate to contact me.
            </P>
          </div>
          <div className="flex flex-8 flex-row items-center justify-center gap-x-8 md:justify-end">
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
        <div className="flex flex-row items-center justify-center py-4 md:py-8">
          <P className="text-muted-foreground">© 2025 Alvin Sovereign</P>
        </div>
      </footer>
    </>
  )
}
