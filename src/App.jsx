import { User } from "./components/user";
import { Header } from "./components/header";
import { Userinfo } from "./props/userinfo";
import { LatestInfo } from "./props/destr_props";
function App() {
  return (
    <div>
      <LatestInfo name="brian" id={203946} />
      <Userinfo name="Alex" age={20} />
      <Header />
      <User />
    </div>
  );
}

export default App;
