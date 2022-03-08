import Layout from "../components/template/Layout";

interface settingsProps {

}

function settings(props: settingsProps) {
  return (
    <Layout
      title="Settings"
      subtitle="Manage your settings"
    >
      <h3>Page Content</h3>
    </Layout>
  );
}

export default settings;
