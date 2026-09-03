export const Identitywrapper = ({ title, children }) => {
  return (
    <div className="Identity">
      <h2>{title}</h2>
      <div className="Idetity-Wrap">{children}</div>
    </div>
  );
};
