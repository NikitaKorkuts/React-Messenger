import {connect} from 'react-redux';
import {Component} from 'react';

import {AppStateType} from '../../../store/store.types';
import {getDialogs, getNewMessagesCount} from '../../../store/dialogs/dialogs.actions';

import {Dialogs} from './Dialogs';
import {DialogsContainerPropsType} from './dialogs.types';

class DialogsContainer extends Component<DialogsContainerPropsType> {
    newMessagesCountRequestTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
    });
    componentDidMount() {
        const {getDialogs, getNewMessagesCount} = this.props;

        getDialogs();

        this.newMessagesCountRequestTimer = setInterval(
            () => {
                getNewMessagesCount();
            }, 2000,
        );

    }

    componentWillUnmount() {
        clearInterval(this.newMessagesCountRequestTimer);
    }

    componentDidUpdate(prevProps: DialogsContainerPropsType) {
        const {getDialogs, newMessagesCount} = this.props;

        if (prevProps.newMessagesCount !== newMessagesCount) {
            getDialogs();
        }
    }

    render() {
        const {dialogs} = this.props;

        return (
            <Dialogs
                dialogs={dialogs}
            />
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogs.dialogs,
        newMessagesCount: state.dialogs.newMessagesCount,
    };
};

export default connect(mapStateToProps, {getDialogs, getNewMessagesCount})(DialogsContainer);