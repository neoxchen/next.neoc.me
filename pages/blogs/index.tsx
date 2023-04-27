import {ShortDivider} from "@/components/dividers";
import PageContainer from "@/components/page-container";
import crying from "@/public/crying.jpg"
import note_zart from "@/public/note_zart.png"
import settlements from "@/public/settlements.png"
import styles from "@/styles/Blogs.module.css"
import Image, {StaticImageData} from "next/image";
import Link from "next/link";
import {useState} from "react";
import {IconContext} from "react-icons";
import {BiLike} from "react-icons/bi";
import {RiEye2Line} from "react-icons/ri";

export default function Blogs() {

    const elements = <>
        <div className={"flex flex-col items-center mt-10 mb-10"}>
            <div className={"w-[60%] min-w-[50rem] max-w-[70rem] flex flex-col"}>
                <section>
                    <h1 className={`text-4xl font-bold mb-2
                                    text-light-accent-darker dark:text-dark-accent-darker`}>
                        Blogs
                    </h1>
                    <h2 className={"mb-3 text-xl " +
                        "text-light-text-darker dark:text-dark-text-normal"}>
                        Some things that I do in my free time
                    </h2>
                    <ShortDivider/>

                    <h1 className={`text-4xl font-bold mb-2
                                    text-light-accent-darker dark:text-dark-text-lighter`}>
                        This page is under construction, please check back later
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </h1>

                    {/* Featured post */}
                    {/*<BigBlogCard metadata={{*/}
                    {/*    href: "https://tailwindcss.com/docs/font-size",*/}
                    {/*    title: "Using ChatGPT 4.0",*/}
                    {/*    imageSrc: settlements,*/}
                    {/*    description: "In this example, we're using the via-* classes to set two custom color stops for the gradient overlay. The from-transparent value sets the starting color of the gradient to transparent, and the to-white",*/}
                    {/*    tags: ["docker", "containers"],*/}
                    {/*    date: "Mar 18, 2022",*/}
                    {/*    views: 316,*/}
                    {/*    likes: 12,*/}
                    {/*}}/>*/}
                </section>

                {/* All posts */}
                {/*<section>*/}
                {/*    <h1 className={"text-4xl font-bold mt-[5rem] mb-2 " +*/}
                {/*        "text-light-accent-darker dark:text-dark-accent-darker"}>*/}
                {/*        All Posts*/}
                {/*    </h1>*/}
                {/*    <ShortDivider/>*/}
                {/*    <BlogContainer/>*/}
                {/*</section>*/}
            </div>
        </div>
    </>;

    return <PageContainer title={"Neo's Blogs"} index={2} elements={elements}/>;
}


const BlogContainer = () => {
    return <>
        <TagContainer/>
        <div className={"grid grid-cols-3 gap-8"}>
            <SmallBlogCard metadata={{
                href: "https://tailwindcss.com/docs/font-size",
                title: "Using ChatGPT 4.0",
                imageSrc: crying,
                description: "In this example, we're using the via-* classes to set two custom color stops for the gradient overlay. The from-transparent value sets the starting color of the gradient to transparent, and the to-white",
                tags: ["docker", "containers"],
                date: "Mar 18, 2022",
                views: 316,
                likes: 12,
            }}/>
            <SmallBlogCard metadata={{
                href: "https://tailwindcss.com/docs/font-size",
                title: "Using ChatGPT 4.0",
                imageSrc: settlements,
                description: "In this example, we're using the via-* classes to set two custom color stops for the gradient overlay. The from-transparent value sets the starting color of the gradient to transparent, and the to-white",
                tags: ["docker", "containers"],
                date: "Mar 18, 2022",
                views: 316,
                likes: 12,
            }}/>
            <SmallBlogCard metadata={{
                href: "https://tailwindcss.com/docs/font-size",
                title: "Using ChatGPT 4.0",
                imageSrc: note_zart,
                description: "In this example, we're using the via-* classes to set two custom color stops for the gradient overlay. The from-transparent value sets the starting color of the gradient to transparent, and the to-white",
                tags: ["docker", "containers"],
                date: "Mar 18, 2022",
                views: 316,
                likes: 12,
            }}/>
            <SmallBlogCard metadata={{
                href: "https://tailwindcss.com/docs/font-size",
                title: "Using ChatGPT 4.0",
                imageSrc: crying,
                description: "In this example, we're using the via-* classes to set two custom color stops for the gradient overlay. The from-transparent value sets the starting color of the gradient to transparent, and the to-white",
                tags: ["docker", "containers"],
                date: "Mar 18, 2022",
                views: 316,
                likes: 12,
            }}/>
            <SmallBlogCard metadata={{
                href: "https://tailwindcss.com/docs/font-size",
                title: "Using ChatGPT 4.0",
                imageSrc: settlements,
                description: "In this example, we're using the via-* classes to set two custom color stops for the gradient overlay. The from-transparent value sets the starting color of the gradient to transparent, and the to-white",
                tags: ["docker", "containers"],
                date: "Mar 18, 2022",
                views: 316,
                likes: 12,
            }}/>
            <SmallBlogCard metadata={{
                href: "https://tailwindcss.com/docs/font-size",
                title: "Using ChatGPT 4.0",
                imageSrc: note_zart,
                description: "In this example, we're using the via-* classes to set two custom color stops for the gradient overlay. The from-transparent value sets the starting color of the gradient to transparent, and the to-white",
                tags: ["docker", "containers"],
                date: "Mar 18, 2022",
                views: 316,
                likes: 12,
            }}/>
        </div>
    </>;
}

const TagContainer = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const TagPill = ({name, count, index}: {
        name: string,
        count?: number,
        index: number,
    }) => {
        const isActive = index == activeIndex;
        let pillClasses = `min-w-[3rem] flex flex-row rounded-lg items-center justify-center cursor-pointer text-sm font-bold `;
        if (isActive) {
            pillClasses += "text-black dark:text-dark-background-darker ";
            pillClasses += "bg-light-accent-lighter dark:bg-dark-text-darker ";
        } else {
            pillClasses += "text-light-text-lighter dark:text-dark-text-lighter ";
            pillClasses += "bg-light-background-normal dark:bg-dark-background-lighter";
        }

        let numberClasses = "px-3 py-2 rounded-md ";
        if (isActive) {
            numberClasses += "bg-light-accent-normal dark:bg-dark-text-darkest ";
            numberClasses += "text-white dark:text-dark-accent-darker";
        } else {
            numberClasses += "bg-light-background-semi-dark dark:bg-dark-background-lighter ";
            numberClasses += "text-light-text-code dark:text-dark-accent-darker";
        }

        return <div className={pillClasses} onClick={() => setActiveIndex(index)}>
            <p className={"mx-3 my-2 text-center"}>{name}</p>
            {
                count &&
                <div className={numberClasses}>
                    <p>{count}</p>
                </div>
            }
        </div>;
    }

    return <div className={"flex flex-wrap gap-4 mb-8 p-4 rounded-xl " +
        "bg-light-background-lighter dark:bg-dark-background-darker"}>
        <TagPill name={"All"} index={0}/>
        <TagPill name={"Waku Waku"} count={1} index={1}/>
        <TagPill name={"Yasar"} count={14} index={2}/>
        <TagPill name={"Jeff is an idiot"} count={3} index={3}/>
        <TagPill name={"Python"} count={6} index={4}/>
        <TagPill name={"Java"} count={8} index={5}/>
        <TagPill name={"TypeScript"} count={2} index={6}/>
    </div>;
}

const BigBlogCard = ({metadata}: {
    metadata: {
        href: string,
        title: string,
        imageSrc: StaticImageData,
        description: string,
        tags: string[],
        date: string,
        views: number,
        likes: number,
    }
}) => {
    return <Link href={metadata.href}>
        <div
            className={"relative w-full min-h-[20rem] flex overflow-hidden box-border border-0 rounded-xl justify-items-stretch " +
                "!bg-light-background-lighter dark:!bg-dark-background-darker " +
                "transition ease-out hover:scale-[102%]"}
        >
            {/* Ribbon */}
            <div
                className={styles.ribbon + " text-white dark:text-dark-background-lighter " +
                    "bg-light-error dark:bg-dark-accent-darker " +
                    "before:bg-light-error before:dark:bg-dark-accent-darker " +
                    "after:bg-light-error after:dark:bg-dark-accent-darker "}>
                Featured
            </div>

            {/* Image */}
            <div className={"relative w-[50%]"}>
                <div className={"absolute h-[99%] w-[120%] h-full"}>
                    <Image src={metadata.imageSrc} alt={"Blog Image"} fill={true} className={"object-cover"}/>
                    <span className={"absolute w-full h-full bg-blog-featured-image opacity-20"}/>
                </div>
            </div>

            {/* Gradient overlay */}
            <div
                className={"absolute w-full h-full z-10 bg-blog-overlay-gradient-light dark:bg-blog-overlay-gradient-dark"}>
            </div>

            {/* Text */}
            <div className={"w-[50%] flex flex-col gap-3 p-8 z-10"}>
                <h5 className="text-4xl font-bold tracking-tight text-light-text-darker dark:text-dark-text-lighter">
                    {metadata.title}
                </h5>
                <p className="font-monospace text-light-text-code dark:text-dark-text-code">
                    {metadata.tags.map(value => `#${value}`).join(" ")}
                </p>
                <p className="mt-3 mb-auto text-light-text-darker dark:text-dark-text-normal">
                    {metadata.description}
                </p>

                <div className={"mt-auto flex flex-row items-center justify-between"}>
                    <p className="text-light-text-lighter dark:text-dark-text-darker">
                        {metadata.date}
                    </p>
                    <div className={"flex flex-row gap-4"}>
                        <IconContext.Provider value={{
                            className: "w-5 h-5 fill-light-accent-darker dark:fill-dark-text-normal"
                        }}>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <RiEye2Line/>
                                <p className="text-base text-light-text-lighter dark:text-dark-text-darker">{metadata.views}</p>
                            </div>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <BiLike/>
                                <p className="text-base text-light-text-lighter dark:text-dark-text-darker">{metadata.likes}</p>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    </Link>;
}

const SmallBlogCard = ({metadata}: {
    metadata: {
        href: string,
        title: string,
        imageSrc: StaticImageData,
        description: string,
        tags: string[],
        date: string,
        views: number,
        likes: number,
    }
}) => {
    return <Link href={metadata.href}>
        <div
            className={"relative w-full h-[25rem] flex flex-col overflow-hidden box-border rounded-xl justify-items-stretch " +
                "!bg-light-background-lighter dark:!bg-dark-background-lighter " +
                "transition ease-out hover:scale-[102%]"}
        >
            <div className={"relative w-full h-[25%]"}>
                <div className={"absolute w-full h-[120%]"}>
                    <Image src={metadata.imageSrc} alt={"Blog Image"} fill={true} className={"object-cover"}/>
                    <span className={"absolute w-full h-full bg-blog-featured-image opacity-20"}/>
                </div>
            </div>

            <div
                className={"absolute w-full h-full z-10 bg-blog-overlay-gradient-light-small dark:bg-blog-overlay-gradient-dark-small"}>
            </div>

            <div className={"w-full h-[75%] flex flex-col gap-3 p-5 z-10"}>
                <h5 className="text-3xl font-bold tracking-tight text-light-text-darker dark:text-dark-text-lighter">
                    {metadata.title}
                </h5>
                <p className="font-monospace text-light-text-code dark:text-dark-text-code">
                    {metadata.tags.map(value => `#${value}`).join(" ")}
                </p>
                <p className="mt-1 mb-auto text-light-text-darker dark:text-dark-text-normal">
                    {metadata.description}
                </p>

                <div className={"mt-auto flex flex-row items-center justify-between"}>
                    <p className="text-light-text-lighter dark:text-dark-text-darker">
                        {metadata.date}
                    </p>
                    <div className={"flex flex-row gap-4"}>
                        <IconContext.Provider value={{
                            className: "w-5 h-5 fill-light-accent-darker dark:fill-dark-text-normal"
                        }}>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <RiEye2Line/>
                                <p className="text-base text-light-text-lighter dark:text-dark-text-darker">{metadata.views}</p>
                            </div>
                            <div className={"flex flex-row gap-2 items-center"}>
                                <BiLike/>
                                <p className="text-base text-light-text-lighter dark:text-dark-text-darker">{metadata.likes}</p>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    </Link>;
}
