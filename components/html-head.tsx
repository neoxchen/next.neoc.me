import Head from "next/head";

const HtmlHead = ({title}: {
    title: string
}) => {
    return <Head>
        <title>{title}</title>
        <meta name="description" content="Neo's personal website"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
    </Head>;
}

export default HtmlHead;
