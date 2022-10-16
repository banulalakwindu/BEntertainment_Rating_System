const user = () => {
  return (
    <div>
      <form action="/send-data-here" method="post">
        <label for="name">Name : </label>
        <input type="text" name="name" />
        <button type="submit" onClick={() => {}}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default user;
