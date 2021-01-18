import { BlogPreview } from "../components/BlogPreview";
import Layout from "../components/Layout";
const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <BlogPreview />
    </Layout>
  );
};

export default IndexPage;
