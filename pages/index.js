import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/common/Layout";
import Head from "next/head";
import MetaContents from "@/components/common/MetaContents";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <MetaContents
        title={"Home"}
        meta_keywords={'keyword'}
        meta_description={"This is description"}
        og_title={"og title"}
        browser_title={"Home"}
      />
      Home
    </Layout>
  );
}
