import React, {FC, StrictMode, Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {compose} from 'redux';

import {Layout} from './components/layout/Layout';
import {store} from './store/store';
import {withRouter} from './hocs/withRouter/withRouter';
import {Preloader} from './components/shared/Preloader/Preloader';
import {routes} from './constants/routes/routes';


export const App = () => {

    return (
        <div className="App">
            <Layout>
                <Suspense fallback={<Preloader/>}>
                    <Routes>
                        {routes.map(({path, component}) => {
                            return <Route key={path} path={path} element={component}/>;
                        })}
                    </Routes>
                </Suspense>
            </Layout>
        </div>
    );
};

const AppContainer = compose<React.ComponentType>(
    withRouter,
)(App);

export const MessangerApp: FC = () => {
    return (
        <StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppContainer/>
                </Provider>
            </BrowserRouter>
        </StrictMode>
    );
};
