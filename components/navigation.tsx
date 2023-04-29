import ThemeSwitch from "@/components/theme-toggle";
import Logo from "@/public/logo.svg";
import {Navbar} from "flowbite-react";
import {BiDownload} from "react-icons/bi";

const Navigation = ({active}: { active: number }) => {
    return <section className={"z-50 relative"}>
        <Navbar
            className={`!bg-light-background-lighter dark:!bg-dark-background-darker`}
            fluid={true}>
            <div className={"flex flex-row items-center gap-8"}>
                <a href={"/"}><Logo className={"w-12 h-12 m-2 ml-4"}/></a>

                <div className={"ml-4 flex flex-row items-center gap-8"}>
                    <HeaderLink text={"About"} href={"/"} active={active === 0}/>
                    <HeaderLink text={"Projects"} href={"/projects"} active={active === 1}/>
                    <HeaderLink text={"Blogs"} href={"/blogs"} active={active === 2}/>
                </div>
            </div>

            <div className={"flex flex-row items-center gap-6 mr-4"}>
                <ThemeSwitch/>
                <div className={`px-6 py-2 cursor-pointer rounded-lg border-2
                                 bg-light-background-lighter dark:bg-dark-background-darker
                                 border-light-accent-darker dark:border-dark-accent-darker
                                 group transition ease-out duration-300
                                 hover:border-dark-accent-darker hover:!bg-dark-accent-darker`}>
                    <a href={"/resume.pdf"} target={"_blank"} rel={"noopener noreferrer"}
                       className={`flex flex-row font-bold group-hover:text-dark-text-lighter
                                   text-light-accent-darker dark:text-dark-accent-darker`}>
                        <BiDownload className="mt-0.5 mr-2 h-5 w-5"/>
                        Resume
                    </a>
                </div>
            </div>
        </Navbar>
    </section>;
}

const HeaderLink = ({text, href, active}: { text: string, href: string, active: boolean }) => {
    let styleClasses = "text-lg font-bold ";

    if (active) {
        styleClasses += "text-light-accent-darker dark:text-dark-accent-darker";
    } else {
        styleClasses += `text-light-text-darker hover:text-light-accent-darker
                         dark:text-dark-text-normal dark:hover:text-dark-accent-darker`;
    }

    return <a href={active ? "#top" : href}>
        <p className={styleClasses}>{text}</p>
    </a>
};

export default Navigation;
