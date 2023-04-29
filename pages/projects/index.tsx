import {ShortDivider} from "@/components/dividers";
import PageContainer from "@/components/page-container";
import noteZart from '@/public/note_zart.png'
import settlements from '@/public/settlements.png'
import {Table} from "flowbite-react";
import Image, {StaticImageData} from "next/image";
import {useRef} from "react";
import {IconContext} from "react-icons";
import {FiExternalLink, FiFileText, FiGithub, FiPlayCircle} from "react-icons/fi";

const featuredProjects = [
    {
        title: "Note-zart Music Composer",
        imageSrc: noteZart,
        description: "A Python-based music generation project that uses advanced deep learning techniques like recurrent neural networks (RNN) and transformer networks. Utilizing the MAESTRO 3.0 dataset as training data, the program can generate new MIDI sheet music from scratch. It achieves this by analyzing patterns and structures in the training data and creating original pieces based on what it has learned.",
        tags: ["python", "RNN", "transformer", "maestro-3.0", "MIDI"],
        blog: "owo uwu", // TODO: =====================================================
        github: "https://github.com/neoxchen/note-zart",
        video: "https://drive.google.com/file/d/1bW9LZZ1Mu38bIFsymP5RojbkRbnwkhhH/view?usp=sharing"
    },
    {
        title: "Personal Website v2",
        description: "The second iteration of my personal portfolio website, with front-end developed using Next.js and backend utilizing a RESTful Flask API deployed on AWS. This version added various 3D objects and effects modeled using Blender and displayed using Three.js.",
        tags: ["next.js", "flask-api", "three.js", "css", "blender"],
        // github: "https://github.com/neoxchen/neoc.me",
        external: "https://neoc.me/"
    },
    {
        title: "Deep Learning PvP Agent",
        description: "Developed and trained a reinforcement learning Minecraft player-versus-player combat agent using Microsoft Malmo. The agent can continuously improve itself by self-playing with tweaked hyperparameters or with recorded battles with human players.",
        tags: ["python", "pytorch", "deep-q-learning"],
        video: "https://youtu.be/xhJ0ePXZqFY"
    },
    {
        title: "Spigot Plugin: Settlements",
        imageSrc: settlements,
        description: "A plugin that improves the immersive experience in Minecraft by altering and introducing unique actions to entities associated with villages such as villagers, tamed wolves, and tamed cats. These modifications have been made in a way that allows any vanilla Minecraft client to join without requiring additional mods to be installed.",
        tags: ["java", "spigot-api", "nms-decompiling", "sensors-behaviors"],
        github: "https://github.com/breeze-devs/Settlements",
        external: "https://spigotmc.org/" // TODO: =====================================================
    },
];

const allProjects = [
    {
        year: 2023,
        name: "Personal Website v2",
        technologies: ["Next.js/TS", "AWS", "Flask", "Blender"],
        association: "-",
        // github: "/test1",
        external: "https://neoc.me/"
    },
    {
        year: 2023,
        name: "FBA Inbound Shipment Tool",
        technologies: ["React.js", "Flask", "AWS"],
        association: "TorchStar",
        proprietary: true
    },
    {
        year: 2023,
        name: "Spigot Plugin: Settlements",
        technologies: ["Java", "Spigot API", "NMS"],
        association: "-",
        blog: "owo uwu", // TODO: =====================================================
        github: "https://github.com/breeze-devs/Settlements",
        external: "https://spigotmc.org/" // TODO: =====================================================
    },
    {
        year: 2022,
        name: "Calibration Device Interface App",
        technologies: ["Java", "Android", "BLE", "MongoDB"],
        association: "Adrich",
        proprietary: true
    },
    {
        year: 2022,
        name: "Note-zart Music Composer",
        technologies: ["Python", "RNN", "Transformer"],
        association: "CMU",
        github: "https://github.com/neoxchen/note-zart",
        video: "https://drive.google.com/file/d/1bW9LZZ1Mu38bIFsymP5RojbkRbnwkhhH/view?usp=sharing"
    },
    {
        year: 2022,
        name: "Alexa Business Metrics Pipeline",
        technologies: ["Java", "AWS", "Guice", "DevOps"],
        association: "Amazon",
        proprietary: true
    },
    {
        year: 2022,
        name: "Alexa Business Metrics CDK",
        technologies: ["Java", "AWS", "Infra. as Code"],
        association: "Amazon",
        proprietary: true
    },
    {
        year: 2022,
        name: "Personal Website v1",
        technologies: ["React.js", "CSS", "Photoshop"],
        association: "-",
    },
    {
        year: 2021,
        name: "Reinforcement Learning PvP Agent",
        technologies: ["Python", "Pytorch", "DQN"],
        association: "UCI",
        // github: "/test1", // TODO?
        video: "https://youtu.be/xhJ0ePXZqFY"
    },
    {
        year: 2021,
        name: "Notification Relay Service",
        technologies: ["Python", "Flask", "Docker", "Kubernetes"],
        association: "Zoom",
        proprietary: true
    },
    {
        year: 2021,
        name: "NLP Discord Chat Bot",
        technologies: ["Python", "NLP", "Tensorflow"],
        association: "AI @ UCI",
        // github: "/test1", // TODO?
        // external: "https://youtu.be/xhJ0ePXZqFY" // TODO?
    },
    {
        year: 2021,
        name: "Heuristics-based Tetris Workshop",
        technologies: ["Python", "Genetic Algorithm", "Pygame"],
        association: "AI @ UCI",
        // github: "/test1", // TODO?
        video: "https://youtu.be/ptUXxWumxfE"
    },
    {
        year: 2019,
        name: "WeSee Automated Testing Framework",
        technologies: ["Java", "Android", "Dep. Injection", "Espresso"],
        association: "Tencent",
        proprietary: true
    },
    {
        year: 2018,
        name: "Internal Product Database",
        technologies: ["MySQL", "Java", "JavaFX"],
        association: "TorchStar",
        proprietary: true
    },
    {
        year: 2018,
        name: "Fulfillment Verification Excel Macros",
        technologies: ["Visual Basic", "Excel"],
        association: "TorchStar",
        proprietary: true
    },
];

export default function Projects() {
    const containerRef = useRef(null);

    const elements = <>
        <div className={"flex flex-col items-center mt-10 mb-10"}>
            <div className={"w-[60%] min-w-[50rem] max-w-[70rem] flex flex-col"}>
                <section>
                    <h1 className={"text-4xl font-bold mb-2 " +
                        "text-light-accent-normal dark:text-dark-accent-darker"}>
                        Featured Projects
                    </h1>
                    <h2 className={"mb-3 text-xl " +
                        "text-light-text-darker dark:text-dark-text-normal"}>
                        Projects that are more enjoyable and worthy of attention
                    </h2>
                    <ShortDivider/>
                    <ProjectCards/>
                </section>

                <section>
                    <h1 className={"text-4xl font-bold mt-[5rem] mb-2 " +
                        "text-light-accent-normal dark:text-dark-accent-darker"}>
                        Project Archive
                    </h1>
                    <h2 className={"mb-3 text-xl " +
                        "text-light-text-darker dark:text-dark-text-normal"}>
                        A comprehensive catalog of the projects I&rsquo;ve worked on
                    </h2>
                    <ShortDivider/>
                    <ProjectTable/>
                </section>
            </div>
        </div>
    </>;
    return <PageContainer title={"Neo's Projects"} index={1} elements={elements}/>;
}

const ProjectCards = () => {
    return <div className={"flex flex-col items-center drop-shadow-md"}>
        <ul className={"w-full grid gap-4 grid-cols-2"}>
            <li className={"h-full col-span-2 flex flex-col items-center"}>
                <ProjectCard projects={featuredProjects[0]}/>
            </li>
            <li className={"h-full flex flex-col items-center"}>
                <ProjectCard projects={featuredProjects[1]}/>
            </li>
            <li className={"h-full flex flex-col items-center"}>
                <ProjectCard projects={featuredProjects[2]}/>
            </li>
            <li className={"h-full col-span-2 flex flex-col items-center"}>
                <ProjectCard projects={featuredProjects[3]}/>
            </li>
        </ul>
    </div>;
}

const ProjectCard = ({projects}: {
    projects: {
        title: string,
        imageSrc?: StaticImageData,
        description: string,
        tags: string[],
        blog?: string,
        github?: string,
        external?: string,
        video?: string,
    }
}) => {

    return <div
        className={"w-full flex border-0 rounded-xl justify-items-stretch " +
            "!bg-light-background-lighter " +
            "dark:!bg-dark-background-darker " +
            "transition ease-out hover:scale-[102%]"}
    >
        {projects.imageSrc &&
            <Image src={projects.imageSrc} alt={"Project Image"}
                   className={"max-w-[14rem] rounded-lg object-cover"}/>}
        <div className={"w-full flex flex-col gap-3 p-5"}>
            <div className={"w-full flex flex-row items-stretch justify-between"}>
                <h5 className="text-2xl font-bold tracking-tight text-light-text-darker dark:text-dark-text-lighter">
                    {projects.title}
                </h5>
                <div className={"flex flex-row gap-3"}>
                    <IconContext.Provider value={{
                        className: "w-6 h-full cursor-pointer transition duration-200 ease-out " +
                            "stroke-light-accent-darker hover:stroke-light-accent-lighter " +
                            "dark:stroke-dark-accent-normal dark:hover:stroke-dark-text-lighter"
                    }}>
                        {projects.blog &&
                            <a href={projects.blog} target="_blank" rel="noreferrer"><FiFileText/></a>}
                        {projects.github &&
                            <a href={projects.github} target="_blank" rel="noreferrer"><FiGithub/></a>}
                        {projects.external &&
                            <a href={projects.external} target="_blank" rel="noreferrer"><FiExternalLink/></a>}
                        {projects.video &&
                            <a href={projects.video} target="_blank" rel="noreferrer"><FiPlayCircle/></a>}
                    </IconContext.Provider>
                </div>
            </div>

            <p className="text-light-text-lighter dark:text-dark-text-normal">
                {projects.description}
            </p>
            <p className="font-monospace text-light-text-code dark:text-dark-text-code">
                {projects.tags.join(" ")}
            </p>
        </div>
    </div>;
}

const ProjectTable = () => {
    const ProjectRow = ({project}: {
        project: {
            year: number,
            name: string,
            technologies: string[],
            association?: string,
            blog?: string,
            github?: string,
            external?: string,
            video?: string,
            proprietary?: boolean
        }
    }) => {
        return <Table.Row className={`border-none font-medium
                                      !bg-light-background-lighter hover:!bg-light-background-normal
                                      dark:!bg-dark-background-darker dark:hover:!bg-dark-background-lighter`}>
            <Table.Cell className={"text-light-accent-darkest dark:text-dark-text-darker"}>
                {project.year}
            </Table.Cell>
            <Table.Cell className={"font-bold"}>
                {project.name}
            </Table.Cell>
            <Table.Cell className={"font-monospace font-medium text-xs text-light-text-code dark:text-dark-text-code"}>
                {project.technologies.join(", ")}
            </Table.Cell>
            <Table.Cell className={"font-semibold"}>
                {project.association}
            </Table.Cell>
            <Table.Cell>
                <div className={"flex flex-row gap-2 items-center content-center font-semibold"}>
                    <IconContext.Provider value={{
                        className: `w-5 h-full cursor-pointer transition duration-200 ease-out
                                    stroke-light-accent-darker hover:stroke-light-accent-lighter
                                    dark:stroke-dark-accent-normal dark:hover:stroke-dark-text-normal`
                    }}>
                        {project.blog &&
                            <a href={project.blog} target="_blank" rel="noreferrer"><FiFileText/></a>}
                        {project.github &&
                            <a href={project.github} target="_blank" rel="noreferrer"><FiGithub/></a>}
                        {project.external &&
                            <a href={project.external} target="_blank" rel="noreferrer"><FiExternalLink/></a>}
                        {project.video &&
                            <a href={project.video} target="_blank" rel="noreferrer"><FiPlayCircle/></a>}
                        {project.proprietary && "Proprietary"}
                        {!project.github && !project.external && !project.video && !project.proprietary && "-"}
                    </IconContext.Provider>
                </div>
            </Table.Cell>
        </Table.Row>;
    };

    const projects = [];
    let index = 0;
    for (const project of allProjects) {
        projects.push(<ProjectRow project={project} key={index}/>);
        index++;
    }

    return <Table hoverable={true}>
        <Table.Head className={"font-bold !bg-light-background-darker dark:!bg-dark-background-lighter"}>
            <Table.HeadCell>
                Year
            </Table.HeadCell>
            <Table.HeadCell>
                Project Name
            </Table.HeadCell>
            <Table.HeadCell>
                Technologies
            </Table.HeadCell>
            <Table.HeadCell>
                Associations
            </Table.HeadCell>
            <Table.HeadCell>
                Links
            </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {projects}
        </Table.Body>
    </Table>;
}

const Divider = () => {
    return <div className={"w-10 h-1 mt-1 mb-10 bg-light-text-lighter dark:bg-dark-text-darker"}/>;
}
