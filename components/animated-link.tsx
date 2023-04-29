import styles from "@/styles/Links.module.css";

export const AnimatedLink = ({href, text, additionalClassNames, newWindow}: {
    href: string,
    text: string,
    additionalClassNames?: string,
    newWindow?: boolean
}) => {
    return <div className={"block cursor-pointer group"}>
        <a className={`relative text-light-accent-normal dark:text-dark-accent-normal
                        after:bg-light-accent-normal dark:after:bg-dark-accent-normal
                        group-hover:after:scale-100 group-hover:after:origin-bottom-left
                        ${additionalClassNames} ${styles.link}`}
           href={href} target={newWindow ? "_blank" : undefined} rel={newWindow ? "noopener noreferrer" : undefined}>
            {text}
        </a>
    </div>
        ;
}
