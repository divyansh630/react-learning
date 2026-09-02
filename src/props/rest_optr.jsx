import { IdentityCard } from "./spread_optr";

export const UserIdentity = ({ age = 20, ...rest }) => {
  return (
    <div>
      <h1>User details</h1>
      <IdentityCard {...rest} />
      <p>age : {age}</p>
    </div>
  );
};
