import {AnimatedLink} from "@/components/animated-link";
import {ShortDivider} from "@/components/dividers";
import PageContainer from "@/components/page-container";
import photo from "@/public/photo.png";
import amazon from "@/public/texture_amazon.png";
import cmu from "@/public/texture_cmu.png";
import uci from "@/public/texture_uci.png";
import zoom from "@/public/texture_zoom.png";
import styles from "@/styles/About.module.css"
import Timeline from "@mui/lab/Timeline";
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import Image, {StaticImageData} from "next/image";
import * as React from "react";
import {ReactNode, useEffect, useState} from "react";
import Confetti from "react-dom-confetti";
import {IconContext} from "react-icons";
import {BiCodeAlt, BiMouse, BiNetworkChart} from "react-icons/bi";
import {BsAndroid, BsArrowRight, BsGithub, BsLinkedin, BsStack} from "react-icons/bs";
import {FaCubes} from "react-icons/fa";
import {HiDesktopComputer} from "react-icons/hi";
import {MdEmail, MdOutlineKeyboardDoubleArrowDown} from "react-icons/md";

export default function Home() {
    const elements = <>
        <div className={"flex flex-col items-center mt-10 mb-10"}>
            <div className={"w-[60%] min-w-[50rem] max-w-[70rem] flex flex-col"}>
                <Landing/>
                <About/>
                <Skills/>
                <Experiences/>
                <Links/>
            </div>
        </div>
    </>;

    return <PageContainer title={"Neo Chen"} index={0} elements={elements}/>;
}

const Landing = () => {
    return <section className={`flex flex-col py-32`}>
        <div className={"flex flex-row items-center justify-between gap-10"}>
            <div className={"flex flex-col gap-2 w-2/3"}>
                <h5 className={"text-xl text-light-accent-darker dark:text-dark-accent-lighter"}>
                    Hello there! My name is
                </h5>
                <h1 className={"-ml-1 text-8xl font-bold text-light-text-darker dark:text-dark-text-lighter"}>
                    Neo Chen
                </h1>
                <h2 className={"text-4xl font-bold text-light-accent-normal dark:text-dark-accent-darker"}>
                    I&rsquo;m a Software Engineer
                </h2>
                <h3 className={"text-xl text-light-text-lighter dark:text-dark-text-normal"}>
                    who&rsquo;s mainly focused in backend development, but have some experience in designing & building
                    full-stack products
                </h3>
            </div>
            <div className={"relative w-1/3 rounded-3xl shadow-xl"}>
                <Image src={photo} alt={"Neo's portrait photo"} className={"rounded-3xl"}/>
                {/*<div*/}
                {/*    className={"absolute w-full h-full top-0 z-10 rounded-3xl bg-dark-text-code opacity-0 dark:opacity-10"}/>*/}
            </div>
        </div>

        <div className={"flex flex-col mt-20 items-center"}>
            <BiMouse className={"w-7 h-7 fill-light-accent-darker dark:fill-dark-text-darker"}/>
            <MdOutlineKeyboardDoubleArrowDown
                className={"w-4 h-4 mt-1 animate-bounce fill-light-accent-darker dark:fill-dark-text-darker"}/>
        </div>
    </section>;
}


const About = () => {
    const Hexagons = () => {
        const HexTile = ({image, href}: {
            image: StaticImageData,
            href: string
        }) => {
            return <div className={"cursor-pointer transition ease-out hover:scale-[105%]"}>
                <a href={href} target={"_blank"} rel={"noopener noreferrer"}>
                    <Image src={image} alt={"image"} className={"w-full h-full object-cover"}/>
                </a>
            </div>;
        }

        return <div className={`${styles.main} flex-weight-1 drop-shadow-md`}>
            <div className={styles.container}>
                <HexTile image={uci} href={"https://uci.edu/"}/>
                <HexTile image={cmu} href={"https://www.cmu.edu/"}/>
                <HexTile image={zoom} href={"https://zoom.us/"}/>
                <HexTile image={amazon} href={"https://www.amazon.com/"}/>
            </div>
        </div>;
    }

    return <section className={`flex flex-col py-32 overflow-hidden snap-start`} id={"about-start"}>
        {/* Title */}
        <div className={"flex flex-col gap-3"}>
            <h1 className={"text-4xl font-bold text-light-accent-normal dark:text-dark-accent-normal"}>
                About Me
            </h1>
            <ShortDivider/>
        </div>

        {/* Body */}
        <div className={"flex flex-row items-center justify-between gap-5"}>
            <p className={"text-xl text-light-text-lighter dark:text-dark-text-normal flex-weight-2"}>
                My journey into the programming world began when my brother introduced me to Minecraft. I was instantly
                captivated by how the simple slash commands could create such immense changes to the landscape. This
                spark of fascination ignited my passion for computer science that has only grown stronger over time.
                <br/><br/>
                Fast forward 10 years, having undergone extensive academic training and multiple internships within the
                industry, I&rsquo;ve honed my skills in designing and implementing scalable software solutions. While my
                focus is primarily on backend and cloud development, I also have experience in full-stack development,
                working with technologies like ReactJS and Android.
                <br/><br/>
                Driven by curiosity and a love for learning, I&rsquo;m exploring opportunities to pursue a Ph.D. in
                computer vision, focusing on AR/VR technologies. My aim is to be at the forefront of advancements that
                shape our world for the better.
            </p>
            <Hexagons/>
            {/*<div className={"flex-weight-1 px-4"}>*/}
            {/*    <Image src={hexagons} alt={"image"} height={128 * 2.5}/>*/}
            {/*</div>*/}
        </div>
    </section>;
}

const Experiences = () => {
    const TimelineSection = ({icon, role, company, company_url, date, descriptions}: {
        icon: ReactNode,
        role: string,
        company: string,
        company_url: string,
        date: string,
        descriptions: string[]
    }) => {
        const ListItem = ({message}: { message: string }) => {
            return <li
                className={"flex flex-row mb-1.5 before:content-['▸'] before:mr-2 before:text-light-accent-darker dark:before:text-dark-accent-normal"}>
                {message}
            </li>;
        }

        const descriptionsElements = [];
        let i = 0;
        for (const desc of descriptions) {
            descriptionsElements.push(<ListItem message={desc} key={i}/>);
            i++;
        }

        return <TimelineItem className={"group"}>
            <TimelineSeparator>
                <TimelineConnector/>
                <TimelineDot
                    className={`w-10 h-10 items-center justify-center transition-all ease-out
                                bg-light-accent-normal dark:bg-dark-accent-darker
                                group-hover:bg-light-accent-darker dark:group-hover:bg-dark-accent-lighter`}>
                    <IconContext.Provider
                        value={{className: "w-5 h-5 fill-light-background-lighter dark:fill-dark-background-normal"}}>
                        {icon}
                    </IconContext.Provider>
                </TimelineDot>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{py: 3, px: 4, m: 1.5}}
                             className={`rounded-lg drop-shadow-md
                                         bg-light-background-lighter dark:bg-dark-background-darker
                                         transition ease-out group-hover:scale-[101%]`}>
                <div
                    className={"flex flex-row gap-1 font-regular font-bold text-xl text-light-text-lighter dark:text-dark-text-lighter"}>
                    <p>{role}</p>
                    <p>@</p>
                    <AnimatedLink href={company_url} text={company}/>
                </div>
                <p className={"font-regular font-semibold text-md text-light-accent-darkest dark:text-dark-text-darker"}>
                    {date}
                </p>
                <ul className={`mt-2 font-regular text-md text-light-text-lighter dark:text-dark-text-normal`}>
                    {descriptionsElements}
                </ul>
            </TimelineContent>
        </TimelineItem>;
    }

    return <section className={`flex flex-col py-32`}>
        {/* Title */}
        <div className={"flex flex-col gap-3"}>
            <h1 className={"text-4xl font-bold text-light-accent-normal dark:text-dark-accent-normal"}>
                Experiences
            </h1>
            <ShortDivider/>

            <Timeline position="right" sx={{
                [`& .${timelineItemClasses.root}:before`]: {flex: 0, padding: 0},
            }}>
                <TimelineSection icon={<FaCubes/>}
                                 role={"Software Development Engineer"}
                                 company={"Amazon"}
                                 company_url={"https://www.amazon.com/"}
                                 date={"Summer Internship | 2022.5 - 2022.8"}
                                 descriptions={[
                                     "Created stream-based AWS business intelligence (BI) pipeline, allowing services to send real-time metrics to the data team",
                                     "Migrated various Alexa services to the new BI pipeline, shortened their BI data delivery time from 1 day to 5 minutes",
                                     "Automated per-service pipeline creation with AWS CDK, eliminating human error and reducing deployment time by 400%"
                                 ]}/>

                <TimelineSection icon={<BsStack/>}
                                 role={"Backend Software Engineer"}
                                 company={"Zoom"}
                                 company_url={"https://zoom.us/"}
                                 date={"Summer Internship | 2021.6 - 2021.8"}
                                 descriptions={[
                                     "Developed a notification-relay server that monitors Zoom services and provides real-time feedback on potential problems",
                                     "Supported the creation of custom filtering & aggregation rules for subscriptions, reducing total notifications by over 80%",
                                     "Analyzed received data and created reports based on problem trends, allowing preemptive error detection and prevention"
                                 ]}/>

                <TimelineSection icon={<BsAndroid/>}
                                 role={"Android Testing Developer"}
                                 company={"Tencent"}
                                 company_url={"https://www.tencent.com/"}
                                 date={"Summer Internship | 2019.6 - 2019.8"}
                                 descriptions={[
                                     "Participated in the development of testing framework for the WeSee Android app, reducing the need for manual testing",
                                     "Learned how to use testing frameworks such as Espresso and utilized them to write simpler, yet more effective test cases",
                                     "Improved the scope and efficiency of existing tests cases, increasing coverage rate to 85% and decreasing testing duration"
                                 ]}/>

                <TimelineSection icon={<HiDesktopComputer/>}
                                 role={"Software Engineer"}
                                 company={"TorchStar"}
                                 company_url={"https://torchstar.us/"}
                                 date={"Summer Internship | 2018.6 - 2018.9"}
                                 descriptions={[
                                     "Developed a dedicated SQL product database and its access client, allowing hassle-free querying and editing of products",
                                     "Automated manual database-related tasks using predefined database scripts, improving efficiency of warehouse operations",
                                     "Programmed a series of data-analysis tools using Excel, allowed the analysis of discrepancies caused by manual mistakes"
                                 ]}/>
            </Timeline>
        </div>

    </section>;
}

const Skills = () => {
    const SkillCard = ({icon, title, description, tags}: {
        icon: ReactNode,
        title: string,
        description: string,
        tags: string,
    }) => {
        return <div
            className={`relative flex overflow-hidden rounded-xl drop-shadow-md
                        bg-light-background-lighter dark:bg-dark-background-darker`}>
            <div className={"w-full m-10 z-10 flex flex-col gap-2"}>
                <div className={"flex flex-row items-center justify-between gap-2"}>
                    <h3 className={"text-3xl font-bold text-light-text-lighter dark:text-dark-text-lighter"}>
                        {title}
                    </h3>
                </div>

                {/* Content */}
                <div className={"flex flex-row items-center justify-between gap-2"}>
                    <p className={"text-lg text-light-text-lighter dark:text-dark-text-normal whitespace-pre-wrap"}>
                        {description}
                    </p>
                </div>

                <div className={"mt-auto pt-6"}>
                    <p className={"font-monospace text-light-text-code dark:text-dark-text-code whitespace-pre-wrap"}>
                        {tags}
                    </p>
                </div>
            </div>
            <IconContext.Provider value={{
                className: "absolute -right-8 -bottom-8 w-40 h-40 fill-light-accent-normal opacity-[30%] " +
                    "dark:fill-dark-accent-darker dark:opacity-[55%]"
            }}>
                {icon}
            </IconContext.Provider>
        </div>;
    }

    return <section className={"flex flex-col py-32"}>
        {/* Title */}
        <div className={"flex flex-col gap-3"}>
            <h1 className={"text-4xl font-bold text-light-accent-normal dark:text-dark-accent-normal"}>
                My Skills
            </h1>
            <ShortDivider/>
        </div>

        {/* Content */}
        <div className={"mt-6 grid grid-cols-3 gap-4"}>
            <SkillCard key={"backend"} icon={<FaCubes/>} title={"Backend"} tags={"SAAS IaC DevOps\nAWS K8s Docker"}
                       description={"Experienced across the software development cycle, from designing scalable architectures, to implementing them using various frameworks, and to managing operations through CI/CD."}/>
            <SkillCard key={"frontend"} icon={<BiCodeAlt/>} title={"Frontend"}
                       tags={"React NextJS CSS\nAndroid UI/UX"}
                       description={"Passionate about creating intuitive and engaging user experiences through creative UI design, with skills in Android development and React/NextJS web development."}/>
            <SkillCard key={"research"} icon={<BiNetworkChart/>} title={"Research"}
                       tags={"Pytorch Tensorflow\nJupyter CUDA"}
                       description={"Enthusiastic about contributing to computer vision advancements, I offer software engineering expertise, Python proficiency, and familiarity with ML libraries to support research endeavors."}/>
        </div>

        <div className={"mt-16 flex flex-col items-center"}>
            <a className={`px-12 py-3 rounded-lg border-2 cursor-pointer drop-shadow-md
                           bg-light-background-lighter dark:bg-dark-background-darker
                           border-light-accent-darker dark:border-dark-accent-normal
                           group transition ease-out duration-300
                           hover:border-dark-accent-darker hover:!bg-dark-accent-darker`}
               href={"/projects"}>
                <p className={`text-xl font-bold group-hover:text-dark-text-lighter
                               text-light-accent-darker dark:text-dark-accent-normal`}>
                    View my projects
                </p>
            </a>
        </div>

    </section>;
}


const Links = () => {
    const [hovering, setHovering] = useState(false);
    const confettiConfig = {
        spread: 360,
        startVelocity: 8,
        elementCount: 15,
        perspective: "1000px",
    };

    useEffect(() => {
        setHovering(false);
    }, [hovering]);

    return <section className={"flex flex-col py-32"}>
        {/* Title */}
        <div className={"flex flex-col gap-3"}>
            <h1 className={"text-4xl font-bold text-light-accent-normal dark:text-dark-accent-normal"}>
                Get in Touch
            </h1>
            <ShortDivider/>
        </div>

        <div className={"grid grid-rows-1 grid-cols-2 gap-6"}>
            {/* Link to Blog */}
            <div
                className={`flex flex-1 overflow-hidden relative rounded-xl drop-shadow-md group
                            bg-light-background-lighter dark:bg-dark-background-darker`}>
                <div className={"w-full m-10 z-10 flex flex-col gap-2"}>
                    <div className={"flex flex-row items-center justify-between gap-2"}>
                        <h3 className={"text-3xl font-bold text-light-text-lighter dark:text-dark-text-lighter"}>
                            Check out my blog!
                        </h3>
                    </div>

                    <div className={"text-xl text-light-text-lighter dark:text-dark-text-normal"}>
                        On my blog, you&rsquo;ll find posts about the various technologies I&rsquo;ve learned and the
                        interesting projects I&rsquo;ve worked on.
                        <br/><br/>
                        Some of these posts even feature&nbsp;
                        <div
                            className={"inline-block relative cursor-pointer hover:animate-wiggle-once"}>
                            <p
                                className={"font-bold text-light-accent-darker dark:text-dark-accent-normal"}
                                onMouseEnter={() => setHovering(true)}>
                                interactive
                            </p>
                            <div className={"absolute -top-2 w-full"}>
                                <div className={"w-full flex flex-col items-center"}>
                                    <Confetti active={hovering} config={confettiConfig}/>
                                </div>
                            </div>
                        </div>
                        &nbsp;demos to create a more
                        engaging and interactive experience!
                    </div>

                    <div className={`mt-auto flex flex-row gap-4 pt-4 items-center justify-start group
                                     font-bold text-xl text-dark-accent-normal dark:text-dark-accent-normal`}>
                        <AnimatedLink href={"/blogs"} text={"Read my articles"}/>
                        <BsArrowRight className={"h-8 w-8 transition ease-out duration-100 group-hover:translate-x-2"}/>
                    </div>

                </div>
            </div>

            {/* Contact form */}
            <div
                className={`flex flex-1 rounded-xl drop-shadow-md group
                            bg-light-background-lighter dark:bg-dark-background-darker`}>
                <div className={"flex flex-col items-stretch w-full m-10 z-10 gap-4"}>
                    <h3 className={"text-3xl font-bold text-light-text-lighter dark:text-dark-text-lighter"}>
                        Say Hello!
                    </h3>

                    <p className={"text-xl text-light-text-lighter dark:text-dark-text-normal"}>
                        Get in touch with me through my personal email or any of the social media platforms I use.
                        <br/><br/>
                        Whether you have a question, a project idea, or just want to say hello, I&rsquo;d love to hear
                        from you!
                    </p>

                    <div className={"mt-auto flex flex-row gap-3"}>
                        <IconContext.Provider value={{
                            className: `w-6 h-6 fill-light-accent-normal hover:fill-light-accent-lighter
                                        dark:fill-dark-accent-darker dark:hover:fill-dark-accent-lighter
                                        group-hover:animate-wiggle-once`
                        }}>
                            <a href={"mailto:hi@neoc.me"}>
                                <MdEmail/>
                            </a>
                            <a href={"https://www.linkedin.com/in/neoc/"}>
                                <BsLinkedin/>
                            </a>
                            <a href={"https://github.com/neoxchen/"}>
                                <BsGithub/>
                            </a>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>

        </div>
    </section>;
}
