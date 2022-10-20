import Header from "../components/Header";
import Usertable from "../components/Usertable";

const admin = ({ data }) => {
  return (
    <div>
      <Header />
      <div className="flex px-20">
        <a
          href="/adduser"
          className="w-full px-20 py-5 my-4 bg-sky-900 text-white text-xl rounded-lg text-center hover:bg-sky-700 duration-700"
        >
          Add User
        </a>
      </div>
      <Usertable userData={data} />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/user/user");
  const data = await res.json();

  return {
    props: { data },
  };
}

export default admin;
