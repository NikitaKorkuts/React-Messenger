import React, {FC, Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {compose} from 'redux';

import {Layout} from './components/layout/Layout';
import {store} from './store/store';
import {withRouter} from './hocs/withRouter';
import {Preloader} from './components/shared/Preloader/Preloader';
import {ProfilePage, routes} from './constants/routes/routes';


export const App = () => {
    return (
        <div className="App">
            <Layout>
                <Suspense fallback={<Preloader/>}>
                    <Routes>
                        <Route path="/profile" element={<ProfilePage/>}>
                            <Route path={':id'} element={<ProfilePage/>}/>
                        </Route>
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
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    );
};
