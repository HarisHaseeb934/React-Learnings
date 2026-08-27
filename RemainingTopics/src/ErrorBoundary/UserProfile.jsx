export const UserProfile = (user) => {
    const {name,age} = user;
  return (
    <div style={{border: "1px solid black"}}>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
