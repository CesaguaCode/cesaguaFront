import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Fragment } from "react";
import { UserProvider } from "./contexts/AuthContext";
import AuthRouter from "./routers/AuthRouter";

import "./assets/styles/reset.scss";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Fragment>
          <AuthRouter></AuthRouter>
          <ReactQueryDevtools initialIsOpen={false}></ReactQueryDevtools>
        </Fragment>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
