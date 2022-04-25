import { Provider } from "react-redux";
import App from "./containers/app/App";
import store from "./store";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");

if (container != null) {
  const root = createRoot(container);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
