import { MisthoForm, MisthoProvider, ProviderList, useMistho } from "@mistho/react";
import { useState } from "react";

//Load styles for Mistho components
import "@mistho/react/lib/styles/style.css";

const InnerComponent = () => {
  const [provider, setProvider] = useState(false);
  const mistho = useMistho((state) => {
    console.log("mistho state", state);
    return state;
  });

  const transactionId = "5gelykd95qgafbzg16wdj1lr";

  console.log("mistho", mistho);
  console.log("provider", provider);
  return (
    <>
      <div style={{ height: "500px" }}>
        <ProviderList
          transaction_id={transactionId}
          onClick={(x) => setProvider(x)}
          // transaction_id="transaction_id"
          //Optional props

          // display search bar over provider lit
          withSearchBar
          // message or component displayed when no provider matches the search
        />
      </div>

      {provider && <MisthoForm provider={provider} transactionID={transactionId} />}
    </>
  );
};

export default function App() {
  return (
    <MisthoProvider>
      <h3>Above</h3>
      <InnerComponent />

      <h3>Below</h3>
    </MisthoProvider>
  );
}
