import {connect} from 'react-redux';
import {Component} from 'react';

import {AppStateType} from '../../../store/store.types';
import {getDialogs} from '../../../store/dialogs/dialogs.actions';

import {Dialogs} from './Dialogs';
import {DialogsContainerPropsType} from './dialogs.types';

class DialogsContainer extends Component<DialogsContainerPropsType> {
    componentDidMount() {
        const {getDialogs} = this.props;

        getDialogs();
    }

    render() {
        const {dialogs} = this.props;

        return (
            <Dialogs dialogs={dialogs}/>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogs.dialogs,
    };
};

export default connect(mapStateToProps, {getDialogs})(DialogsContainer);