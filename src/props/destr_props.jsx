export const LatestInfo = (props) => {
  return (
    <>
      <h1>My information</h1>
      <p>Hello, {props.name} .</p>
      <br />
      <p>your Uid is {props.id}</p>
    </>
  );
};
