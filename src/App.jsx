import { User } from "./components/user";
import { Header } from "./components/header";
import { Userinfo } from "./props/userinfo";
import { LatestInfo } from "./props/destr_props";
import { IdentityCard } from "./props/spread_optr";
import { UserIdentity } from "./props/rest_optr";
import { Identitywrapper } from "./props/props_children";
import { UserStatus } from "./conditional_rendering/user_status";

function App() {
  return (
    <div>
      <UserStatus />
      <br />
      <Identitywrapper title="Nicknames">
        <p>diana</p>
        <p>williams</p>
        <p>richard</p>
      </Identitywrapper>
      <br />
      <UserIdentity
        institution="xyz university"
        name="WILLIAMS"
        city="Delhi"
        email="willliamsfind11@outlook.com"
      />
      <br />
      <IdentityCard
        institution="xyz university"
        name="WILLIAMS"
        city="Delhi"
        email="willliamsfind11@outlook.com"
      />
      <br />
      <LatestInfo name="brian" id={203946} />
      <br />
      <Userinfo name="Alex" age={20} />
      <br />
      <Header />
      <br />
      <User />
    </div>
  );
}

export default App;
