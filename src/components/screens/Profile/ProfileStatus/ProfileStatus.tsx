import React, {ChangeEvent} from 'react';

import {ProfileStatusPropsType, ProfileStatusStateType} from '../profile.types';
import s from '../profile.module.scss';

export class ProfileStatus extends React.Component<ProfileStatusPropsType, ProfileStatusStateType> {
    state = {
        editMode: false,
        status: this.props.status,
    };
    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    };
    deactivateEditMode = () => {
        const {updateStatus} = this.props;

        this.setState({
            editMode: false,
        });
        updateStatus(this.state.status);
    };
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value,
        });
    };

    componentDidUpdate(prevProps: ProfileStatusPropsType, prevState: ProfileStatusStateType) {
        const {status} = this.props;
        if (prevProps.status !== status) {
            this.setState({status: status});
        }
    }

    render() {
        const {status, isOwner} = this.props;

        if (isOwner) {
            return (
                <>
                    {!this.state.editMode && (
                        <div>
                            <p
                                className={s.aboutMeText}
                                onClick={this.activateEditMode}
                            >
                                {status || 'no status'}
                            </p>
                        </div>
                    )}
                    {this.state.editMode && (
                        <div>
                            <input
                                type="text"
                                onChange={this.onStatusChange}
                                autoFocus={true}
                                onBlur={this.deactivateEditMode}
                                value={this.state.status}
                            />
                        </div>
                    )}
                </>
            );
        }
        return (
            <div>
                <p className={s.aboutMeText}>
                    {status || 'no status'}
                </p>
            </div>
        );
    }
}