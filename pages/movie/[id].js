import EditMovie from "../../components/EditMovie";

function updateMovie({ movie }) {
  return <EditMovie updateData={movie} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`http://localhost:3000/api/movie/${params.id}`);
  const movie = await res.json();
  return {
    props: { movie },
  };
}

export default updateMovie;
