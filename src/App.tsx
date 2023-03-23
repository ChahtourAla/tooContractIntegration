import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useFactoryContract } from "./hooks/useFactoryContract";

function App() {
  const { value, address } = useFactoryContract();
  return (
    <div className="App">
      <div className="Container">
        <TonConnectButton />

        <div className="Card">
          <b>Factory Address</b>
          <div className="Hint">{address}</div>
        </div>

        <div className="Card">
          <b>Daos</b>
          <div>{value ?? "Loading..."}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
