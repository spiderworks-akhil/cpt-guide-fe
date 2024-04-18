import React from 'react'
import Head from "next/head";
function MetaContents({ title, browser_title, meta_keywords, meta_description, og_title }) {
    return (
        <Head >
            <title>{title}</title>
            <meta
                title={browser_title}
                key={meta_keywords}
                content={meta_description}
                property={og_title}

            />
        </Head>


    )
}

export default MetaContents