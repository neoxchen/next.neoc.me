import {useTheme} from "next-themes"
import {useEffect, useState} from "react"
import {IconContext} from "react-icons";
import {MdDarkMode, MdLightMode} from "react-icons/md";

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const {theme, resolvedTheme, setTheme} = useTheme();

    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return <>
        <IconContext.Provider value={{
            className: "w-9 h-9 m-2 cursor-pointer transition ease-out hover:rotate-12 " +
                "fill-light-text-lighter hover:fill-light-accent-normal " +
                "dark:fill-dark-text-lighter dark:hover:fill-dark-accent-normal"
        }}>
            {resolvedTheme === "light" && <MdDarkMode onClick={() => setTheme("dark")}/>}
            {resolvedTheme !== "light" && <MdLightMode onClick={() => setTheme("light")}/>}
        </IconContext.Provider>
    </>
}

export default ThemeSwitch
