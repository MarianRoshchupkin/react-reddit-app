import React, { useEffect, useState } from 'react';
import './main.global.css';
import { useToken } from "./hooks/useToken";
import { hot } from 'react-hot-loader/root';
import { Content } from "./shared/Content";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout";
import { CardsList } from "./shared/CardsList";
import { Sprite } from "./shared/Icons/Sprite";
import { PostContainer } from "./shared/PostContainer";
import { NotFound } from "./shared/NotFound";
import { Provider } from 'react-redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer} from "./store/reducer";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  const [mounted, setUnmounted] = useState(false);

  useEffect(() => {
    setUnmounted(true);
  }, []);

  useToken();

  return (
    <div>
      {mounted && (
        <BrowserRouter>
          <Layout>
            <Header />
            <Content>
              <Sprite />
              <Routes>
                <Route path='/posts/:id' element={<PostContainer />} />
                <Route path='/auth' element={<Navigate replace to='/posts' />} />
                <Route path='/' element={<Navigate replace to='/posts' />} />
                <Route path='/posts' element={<CardsList />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            </Content>
          </Layout>
        </BrowserRouter>
      )}
    </div>
  );
}

export const App = hot(() =>
  <Provider store={store}>
    <AppComponent/>
  </Provider>
);
