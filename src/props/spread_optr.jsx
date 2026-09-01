export const IdentityCard = ({ institution, name, city, email }) => {
  return (
    <>
      <h1>{institution}</h1>
      <h2>Name : {name}</h2>
      <p>city : {city}</p>
      <p>email : {email}</p>
    </>
  );
};
