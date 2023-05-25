import React from 'react';
import {Route, Routes} from "react-router";
import {QueryClient, QueryClientProvider} from "react-query";

import {Layout} from "./components/Layout";
import {Main} from "./pages/Main";
import {Form} from "./pages/Form";

import './App.sass';
import {Result} from "./pages/Result";

const queryClient = new QueryClient();
function App() {
  return (
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Routes>
              <Route index element={<Main/>}/>
              <Route path='form' element={<Form/>}/>
              <Route path='result' element={<Result/>}/>
          </Routes>
        </Layout>
      </QueryClientProvider>
  );
}

export default App;
