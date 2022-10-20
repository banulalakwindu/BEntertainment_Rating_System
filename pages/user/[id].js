import EditUser from "../../components/EditUser";

function updateUser({ user }) {
  console.log("updateUser", user);
  return <EditUser updateData={user} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/user/${params.id}`);
  const user = await res.json();
  return {
    props: { user },
  };
}

export default updateUser;
