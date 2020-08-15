import { BlogPreview } from "../components/BlogPreview";
import Layout from "../components/Layout";
import axios from "axios";
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

export async function getServerSideProps() {
  const apiUrl = process.env.BOOKSHELF_API || "";

  const processes = await axios.get(apiUrl);

  return { props: { processes: processes.data } };
}

export default IndexPage;
