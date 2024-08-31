import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from './store'
import Home from "./pages/Home";
import AddTask from "./pages/AddTask/index";
import GlobalStyle, { Container } from "./styles";

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <AddTask />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={routes} />
      </Container>
  </Provider>
  );
}

export default App;
