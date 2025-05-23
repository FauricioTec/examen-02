import { Provider } from "react-redux";
import MainLayout from "./layouts/MainLayout";
import "./styles.css";
import store from "./features/store";

export default function App() {
  return (
    <>
      <Provider store={store}>
        <MainLayout />
      </Provider>
    </>
  );
}
