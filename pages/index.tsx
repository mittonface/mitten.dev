import { BlogPreview } from "../components/BlogPreview";
import Layout from "../components/Layout";
import Link from "next/link";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <BlogPreview />
  </Layout>
);

export default IndexPage;
