import Layout from "../components/template/Layout";
interface profileProps {

}

function Profile(props: profileProps) {
  return (
    <Layout
      title="Profile"
      subtitle="Manage your profile"
    >
      <h3>Your profile</h3>
    </Layout>
  );
}

export default Profile;
