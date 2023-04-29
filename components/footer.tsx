import {Footer} from "flowbite-react";
import {IconContext} from "react-icons";
import {BsGithub, BsLinkedin} from "react-icons/bs";

const MyFooter = () => {
    return <section>
        <Footer container={true} className={"mt-16 !bg-light-background-lighter dark:!bg-dark-background-darker"}>
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright
                    className={"ml-4"}
                    by="Neo Chen"
                    year={2023}
                />

                {/*<p className={"font-regular text-center text-sm text-light-text-lighter dark:text-dark-text-normal"}>*/}
                {/*    Designed & built by Neo Chen*/}
                {/*</p>*/}
                <div className="!mt-2 flex mr-4 space-x-6 sm:mt-0 sm:justify-center">
                    <IconContext.Provider value={{
                        className: "w-6 h-6 fill-light-accent-darker hover:fill-light-accent-lighter " +
                            "dark:fill-dark-accent-darker dark:hover:fill-dark-accent-lighter"
                    }}>
                        <a href={"https://www.linkedin.com/in/neoc/"}>
                            <BsLinkedin/>
                        </a>
                        <a href={"https://github.com/neoxchen/"}>
                            <BsGithub/>
                        </a>
                    </IconContext.Provider>
                </div>
            </div>
        </Footer>
    </section>;
}

export default MyFooter;
