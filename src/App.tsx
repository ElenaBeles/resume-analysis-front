import React from 'react';
import {Route, Routes} from "react-router";
import {QueryClient, QueryClientProvider} from "react-query";

import {Layout} from "./components/Layout";
import {Main} from "./pages/Main";

import './App.sass';

const queryClient = new QueryClient();
function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
            <Route index element={<Main />} />
          </Routes>
        </Layout>
      </QueryClientProvider>
  );
}

export default App;
