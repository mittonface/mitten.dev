import { BlogPreview } from "../components/BlogPreview";
import Layout from "../components/Layout";
const IndexPage = () => {
  const subdomain = window.location.host.split(".")[1]
    ? window.location.host.split(".")[0]
    : false;

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      THE SUBDOMAIN IS ${subdomain}
      <BlogPreview />
    </Layout>
  );
};

export default IndexPage;
