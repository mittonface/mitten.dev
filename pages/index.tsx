import { BlogPreview } from "../components/BlogPreview";
import Layout from "../components/Layout";
const IndexPage = ({ processes }: { processes: any }) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <BlogPreview />

    {Object.keys(processes).map((key: string) => {
      return (
        <div>
          NAME: {key} STATUS {processes[key]}
        </div>
      );
    })}
  </Layout>
);

export default IndexPage;
