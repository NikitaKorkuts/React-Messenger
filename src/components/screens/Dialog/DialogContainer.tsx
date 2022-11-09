import React, {Component, RefObject} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Navigate} from 'react-router-dom';

import {withRouter} from '../../../hocs/withRouter';
import {AppStateType} from '../../../store/store.types';
import {
    dialogsActions,
    getChattingUserProfile,
    getMessages,
    getTotalPagesCount, sendMessage,
} from '../../../store/dialogs/dialogs.actions';
import {RouterType} from '../../../types/types';
import {Preloader} from '../../shared/Preloader/Preloader';
import {compareDates} from '../../../utils/dates/compareDate';
import {getFormattedDateWithFullMonth} from '../../../utils/dates/getFormattedDateWithFullMonth';
import {getFormattedDateHMM} from '../../../utils/dates/getFormattedDateHMM';

import s from './dialog.module.scss';
import {DialogContainerPropsType} from './dialog.types';
import {Dialog} from './Dialog';

class DialogContainer extends Component<RouterType & DialogContainerPropsType> {
    dialogEndRef: RefObject<HTMLDivElement> = React.createRef();
    messagesRequestTimer: ReturnType<typeof setTimeout> = setTimeout(() => {
    });
    chosenDialogId = this.props.router.params.id;

    componentDidMount() {
        const {getMessages, getChattingUserProfile, pageCount, getTotalPagesCount} = this.props;

        if (this.chosenDialogId) {
            getTotalPagesCount(this.chosenDialogId);
            getMessages(this.chosenDialogId, 1, pageCount);
            getMessages(this.chosenDialogId, 2, pageCount);
            getChattingUserProfile(this.chosenDialogId);

            this.dialogEndRef.current?.scrollIntoView({behavior: 'smooth'});
        }
    }

    componentWillUnmount() {
        const {resetMessages} = this.props;

        if (this.messagesRequestTimer) clearTimeout(this.messagesRequestTimer);
        resetMessages();
    }


    UNSAFE_componentWillUpdate(nextProps: RouterType & DialogContainerPropsType) {
        const {updatingMessages, getMessages, pageCount, router, resetMessages} = this.props;

        if (nextProps.updatingMessages !== updatingMessages) {
            if (this.messagesRequestTimer) clearTimeout(this.messagesRequestTimer);
            if (this.chosenDialogId) {
                this.messagesRequestTimer = setTimeout(() => {
                    getMessages(this.chosenDialogId, 1, pageCount);
                }, 2000);
            }
        }

        if (router.params.id !== nextProps.router.params.id) {
            resetMessages();
            this.chosenDialogId = router.params.id;
        }
    }

    fetchNotUpdatingMessages = () => {
        const {setCurrentPage, getMessages, currentPage, pageCount} = this.props;

        setCurrentPage(currentPage + 1);
        getMessages(this.chosenDialogId, currentPage + 1, pageCount);
    };

    sendMessage = (msgBody: string) => {
        const {sendMessage} = this.props;

        sendMessage(this.chosenDialogId, msgBody);
    };

    render() {
        const {
            updatingMessages,
            notUpdatingMessages,
            chattingUserProfile,
            authUserProfile,
            currentPage,
            totalPagesCount,
            isMessageSending,
        } = this.props;

        if (!this.chosenDialogId) {
            return <Navigate to={'/dialogs'}/>;
        }
        return (
            <div className={s.dialog}>
                <Dialog
                    authUserProfile={authUserProfile}
                    chattingUserProfile={chattingUserProfile}
                    updatingMessages={updatingMessages}
                    notUpdatingMessages={notUpdatingMessages}
                    fetchNotUpdatingMessages={this.fetchNotUpdatingMessages}
                    currentPage={currentPage}
                    totalPagesCount={totalPagesCount}
                    sendMessage={this.sendMessage}
                    compareDates={compareDates}
                    getFormattedDateWithFullMonth={getFormattedDateWithFullMonth}
                    getFormattedDateHMM={getFormattedDateHMM}
                />
                <div ref={this.dialogEndRef}/>
                {isMessageSending && <Preloader />}
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    updatingMessages: state.dialogs.updatingMessages,
    notUpdatingMessages: state.dialogs.notUpdatingMessages,
    chattingUserProfile: state.dialogs.chattingUserProfile,
    authUserProfile: state.auth.authUserProfile,
    areMessagesFetching: state.dialogs.areMessagesFetching,
    currentPage: state.dialogs.currentPage,
    pageCount: state.dialogs.pageCount,
    totalPagesCount: state.dialogs.totalPagesCount,
    isMessageSending: state.dialogs.isMessageSending,
});


export default compose<React.ComponentType>(withRouter, connect(mapStateToProps, {
    getMessages,
    getTotalPagesCount,
    getChattingUserProfile,
    setCurrentPage: dialogsActions.setCurrentPage,
    resetMessages: dialogsActions.resetMessages,
    sendMessage,
}))(DialogContainer)