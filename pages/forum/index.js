import React from 'react'
import Section_1 from '@/components/pages/forum/listing/Section_1'
import Layout from '@/components/common/Layout'
import Section_2 from '@/components/pages/forum/listing/Section_2'
import Section_3 from '@/components/pages/forum/listing/Section_3'
import MetaContents from '@/components/common/MetaContents'
import StudyGuid from '@/components/common/StudyGuid'
function index() {
    return (
        <Layout>
            <MetaContents
                title={"Forum"}
                meta_keywords={'keyword'}
                meta_description={"This is description"}
                og_title={"og title"}
                browser_title={"Home"}
            />
            <Section_1 />
            <Section_2 />
            <StudyGuid />
            <Section_3 />

        </Layout>
    )
}

export default index