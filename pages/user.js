const user = () => {
  return (
    <div>
      <form action="/send-data-here" method="post">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default user;
