import {FC} from 'react';
import {Field, Form, Formik} from 'formik';

import {FilterType} from '../../../../store/users/users.types';

import s from './usersSearchForm.module.scss';
import {FormType, UsersSearchFormPropsType} from './usersSearchForm.types';

export const UsersSearchForm: FC<UsersSearchFormPropsType> = ({onFilterChanged, filter}) => {

    const submit = (values: FormType, {setSubmitting}: {setSubmitting: (isSubmitting: boolean) => void} ) => {
        let friend;
        switch (values.friend) {
        case 'null':
            friend = null;
            break;
        case 'false':
            friend = false;
            break;
        case 'true':
            friend = true;
            break;
        }

        const filter: FilterType = {
            term: values.term,
            friend: friend,
        };

        onFilterChanged(filter);
        setSubmitting(false);
    };


    return (
        <div className={s.usersSearchForm}>
            <Formik
                enableReinitialize={true}
                initialValues={{term: filter.term, friend: String(filter.friend) as 'null' | 'true' | 'false' }}
                onSubmit={submit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field type="" name="term"/>
                        <Field name="friend" as="select">
                            <option value="null">All Users</option>
                            <option value="true">Only Followed</option>
                            <option value="false">Only Unfollowed</option>
                        </Field>
                        <button type="submit" disabled={isSubmitting}>
                            Search
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}