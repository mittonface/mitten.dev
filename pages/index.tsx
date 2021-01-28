import Layout from "../components/Layout";
const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <iframe
        src="https://search-go-wsb-yqgj74dofybfy4jkltmfvvx4nu.us-east-1.es.amazonaws.com/_plugin/kibana/app/dashboards?security_tenant=private#/view/504b7970-619f-11eb-a377-778b2338e118?embed=true&_g=(filters%3A!(('%24state'%3A(store%3AglobalState)%2Cmeta%3A(alias%3A!n%2Cdisabled%3A!f%2Cindex%3A'8e1f11e0-619e-11eb-a377-778b2338e118'%2Ckey%3Acreated_date%2Cnegate%3A!f%2Cparams%3A(gte%3Anow-15m%2Clt%3Anow)%2Ctype%3Arange)%2Crange%3A(created_date%3A(gte%3Anow-15m%2Clt%3Anow))))%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A10000)%2Ctime%3A(from%3Anow-15m%2Cto%3Anow))&hide-filter-bar=true"
        height="980"
        width="100%"
      ></iframe>
    </Layout>
  );
};

export default IndexPage;
