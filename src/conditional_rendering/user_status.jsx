export const UserStatus = () => {
  const isLoggedin = true;

  return (
    <>
      <p>status : {isLoggedin ? "Logged In" : "Logged Out"}</p>
    </>
  );
};
