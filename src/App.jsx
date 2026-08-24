import { User } from "./components/user";
import { Header } from "./components/header";
import { Userinfo } from "./props/userinfo";
function App() {
  return (
    <div>
      <Userinfo name="Alex" age={20} />
      <Header />
      <User />
    </div>
  );
}

export default App;
