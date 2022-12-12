import Head from "next/head";


interface HeadContent {
    title: string;
    meta: string;
}

/**
 * HeadContainer is a function that takes in a title and meta and returns a JSX element.
 * @param {HeadContent}  - JSX.Element -&gt; this is the return type of the function
 * @returns A JSX.Element
 */
export default function HeadContainer({title, meta}:HeadContent): JSX.Element {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={meta} key={title} />
            </Head>
        </>
    )
}