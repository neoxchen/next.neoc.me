import Logo from "@/public/logo.svg";
import {Button, Navbar} from "flowbite-react";
import {BiDownload} from "react-icons/bi";

const Navigation = ({active}: { active: number }) => {
    return <section className={"z-50 relative"}>
        <Navbar
            className={`!bg-light-background-lighter dark:!bg-dark-background-lighter headerX`}
            fluid={true}>
            <div className={"flex flex-row items-center gap-8"}>
                <a href={"/"}><Logo className={"w-12 h-12 m-2 ml-4"}/></a>

                <div className={"ml-4 flex flex-row items-center gap-8"}>
                    <HeaderLink text={"About"} href={"/#about"} active={active === 0}/>
                    <HeaderLink text={"Projects"} href={"/projects"} active={active === 1}/>
                    <HeaderLink text={"Blogs"} href={"/blogs"} active={active === 2}/>
                </div>
            </div>

            <div className={"flex flex-row items-center gap-4 mr-4"}>
                {/*<ThemeSwitch/>*/}
                <Button gradientDuoTone={"greenToBlue"} outline={true}>
                    <a className={"flex flex-row"} href={"/resume.pdf"} target="_blank" rel="noopener noreferrer">
                        <BiDownload className="mr-2 h-5 w-5"/>
                        Resume
                    </a>
                </Button>
            </div>
        </Navbar>
    </section>;
}

const HeaderLink = ({text, href, active}: { text: string, href: string, active: boolean }) => {
    let styleClasses = "text-lg font-bold ";

    if (active) {
        styleClasses += "text-light-accent-darker ";
        styleClasses += "dark:text-dark-accent-darker";
    } else {
        styleClasses += "text-light-text-darker hover:text-light-accent-darker ";
        styleClasses += "dark:text-dark-text-normal dark:hover:text-dark-accent-darker";
    }

    return <a href={active ? "#top" : href}>
        <p className={styleClasses}>{text}</p>
    </a>
};

export default Navigation;
