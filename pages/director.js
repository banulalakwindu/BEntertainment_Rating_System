const director = () => {
  return <div>director</div>;
};

export default director;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/director/director");
  const dirData = await res.json();

  return {
    props: { dirData }, //291200266955283
  };
}
