import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body className={"bg-light-background-normal dark:bg-dark-background-normal"}>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
