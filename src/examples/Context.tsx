import React from "react";

interface MyContextProviderState {
  users: string[];
}

interface MyContextType {
  users: string[];
  updateUser(user: string): any;
}

const MyContext = React.createContext<MyContextType>({
  users: ["Aco", "Ario"],
  updateUser: () => {},
});

class MyContextProvider extends React.Component<{}, MyContextProviderState> {
  constructor(props: {}) {
    super(props);
    this.state = { users: ["Aco", "Ario"] };
  }

  handlerUpdateUser = (user: string) => {
    this.setState({ users: [...this.state.users, user] });
  };

  render() {
    return (
      <MyContext.Provider
        value={{ users: this.state.users, updateUser: this.handlerUpdateUser }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

class UserInput extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {(value) => (
          <div>
            <h1>User Input</h1>
            <ul>
              {value.users.map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
            <button onClick={() => value.updateUser("Mandana")}>
              Add user
            </button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}

class HomePage extends React.Component {
  static contextType = MyContext;
  //exclamation mark means this variable will never be null or undefined
  context!: React.ContextType<typeof MyContext>;
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <ul>
          {this.context.users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
        <button onClick={() => this.context.updateUser("Rozhin")}>
          Add user
        </button>
        <UserInput />
      </div>
    );
  }
}

function App() {
  return (
    <MyContextProvider>
      <HomePage />
    </MyContextProvider>
  );
}
export default App;
