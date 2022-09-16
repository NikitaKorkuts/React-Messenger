import {connect} from 'react-redux';

import {AppStateType} from '../../../store/store.types';

import {Header} from './Header';

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    userId: state.auth.userId,
    authUserProfile: state.auth.authUserProfile,
});

export default connect(mapStateToProps, {})(Header);