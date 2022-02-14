import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Hooks from "./examples/Hooks";
import ErrorBoundary from "./examples/ErrorBoundary";
import Memo from "./examples/Memo";
import UseCallbackComponent from "./examples/useCallback";
import UseMemoComponent from "./examples/useMemo";
import PointerEventsComponent from "./examples/PointerEvents";
import ForceUpdateComponent from "./examples/ForceUpdate";
import BrowserResizeComponent from "./examples/BrowserResize";
import PureComponent from "./examples/PureComponent";
import RenderProps from "./examples/RenderProps";
import HOC from "./examples/HOC";
import RefComponent from "./examples/Ref";
// import ContextComponent from "./examples/context/Context";
import LazyLoading from "./examples/LazyLoading";
import Children from "./examples/Children";
import useOnClickOutside from "./examples/useOnClickOutside";
import Lists from "./components/ContainerComponents/Lists";
import { Steps } from "./components/UncontrolledOnboardingFlow";
import ReducerComponent from "./examples/Reducer";
import ContextComponent from "./examples/context/";
import Debounce from "./examples/Debounce";

const components = [
  { text: "Children", Component: Children },
  { text: "LazyLoading", Component: LazyLoading },
  { text: "Ref", Component: RefComponent },
  { text: "PureComponent", Component: PureComponent },
  { text: "BrowserResizeComponent", Component: BrowserResizeComponent },
  { text: "ForceUpdateComponent", Component: ForceUpdateComponent },
  { text: "Hooks", Component: Hooks },
  { text: "Error Boundary", Component: ErrorBoundary },
  { text: "Memo", Component: Memo },
  { text: "useMemo", Component: UseMemoComponent },
  { text: "useCallback", Component: UseCallbackComponent },
  { text: "PointerEventsComponent", Component: PointerEventsComponent },
  { text: "RenderProps", Component: RenderProps },
  { text: "HOC", Component: HOC },
  // { text: "Context", Component: ContextComponent },
  { text: "useContext", Component: ContextComponent },
  { text: "useOnClickOutside", Component: useOnClickOutside },
  { text: "ContainerComponent", Component: Lists },
  { text: "UncontrolledOnboardingFlow", Component: Steps },
  { text: "Reducer", Component: ReducerComponent },
  { text: "Debounce", Component: Debounce },
];

const ItemLink = ({ to, text }) => (
  <li>
    <Link to={to}>{text}</Link>
  </li>
);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <div>
          <ul>
            {components.map((component, index) => (
              <ItemLink
                key={index}
                to={"/" + component.text}
                text={component.text}
              />
            ))}
          </ul>
        </div>
        <div>
          <Routes>
            {components.map(({ Component, text }, index) => (
              <Route key={index} element={<Component />} path={"/" + text} />
            ))}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
