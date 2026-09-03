import { User } from "./components/user";
import { Header } from "./components/header";
import { Userinfo } from "./props/userinfo";
import { LatestInfo } from "./props/destr_props";
import { IdentityCard } from "./props/spread_optr";
import { UserIdentity } from "./props/rest_optr";
import { Identitywrapper } from "./props/props_children";
function App() {
  return (
    <div>
      <Identitywrapper title="Nicknames">
        <p>diana</p>
        <p>williams</p>
        <p>richard</p>
      </Identitywrapper>

      <UserIdentity
        institution="xyz university"
        name="WILLIAMS"
        city="Delhi"
        email="willliamsfind11@outlook.com"
      />
      <IdentityCard
        institution="xyz university"
        name="WILLIAMS"
        city="Delhi"
        email="willliamsfind11@outlook.com"
      />
      <LatestInfo name="brian" id={203946} />
      <Userinfo name="Alex" age={20} />
      <Header />
      <User />
    </div>
  );
}

export default App;
