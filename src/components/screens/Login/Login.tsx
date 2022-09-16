import React, {FC} from 'react';
import {Navigate} from 'react-router-dom';
import {Formik} from 'formik';
import * as yup from 'yup';

import {Input} from '../../ui/Input/Input';

import {LoginFormType, LoginPropsType, SubmitPropsType} from './login.types';
import s from './login.module.scss';

export const Login: FC<LoginPropsType> = ({isAuth, captchaUrl, login}) => {
    if (isAuth) {
        return (
            <Navigate to={'/profile'}/>
        );
    }



    const submit = (values: LoginFormType, {setSubmitting, setStatus}: SubmitPropsType) => {
        const loginFormData = {
            email: values.email,
            password: values.password,
            rememberMe: values.rememberMe,
            captcha: values.verifyCode,
        };
        login(loginFormData, setStatus);
        setSubmitting(false);
    };

    const validationSchema = yup.object().shape({
        email: yup
            .string()
            .email('Введен некорректный email адресс')
            .max(50, 'Вы ввели слишком длинный email адресс')
            .required('Введите email адресс'),
        password: yup
            .string()
            .max(50, 'Вы ввели слишком длинный пароль')
            .required('Введите пароль'),
        verifyCode: yup
            .string()
            .max(15, 'Вы ввели слишком длинный код подтверждения'),
    });

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                verifyCode: '',
            }}
            validateOnBlur
            onSubmit={submit}
            validationSchema={validationSchema}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isValid,
                handleSubmit,
                dirty,
                isSubmitting,
                status,
            }) => (
                <form className={s.formLogin} onSubmit={handleSubmit}>

                    <div className={s.formLogInWithEmail}>

                        <div className={s.formTitleRow}>
                            <h1>Войти</h1>
                        </div>

                        <div className={s.formRow}>
                            <label>
                                <p>Email</p>
                                <Input
                                    name={'email'}
                                    hasError={touched.email && errors.email}
                                    error={errors.email}
                                    props={{
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        value: values.email,
                                    }}
                                />
                            </label>
                        </div>

                        <div className={s.formRow}>
                            <label>
                                <p>Пароль</p>
                                <Input
                                    name={'password'}
                                    hasError={touched.password && errors.password}
                                    error={errors.password}
                                    props={{
                                        onChange: handleChange,
                                        onBlur: handleBlur,
                                        value: values.password,
                                    }}
                                />
                            </label>
                        </div>

                        <div className={s.formRow}>
                            <label className={s.formCheckbox}>
                                <div className={s.formCheckboxField}>
                                    <Input
                                        type={'checkbox'}
                                        name={'rememberMe'}
                                        props={{
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values.rememberMe,
                                        }}
                                    />
                                </div>

                                <span>Запомнить меня</span>
                            </label>
                        </div>
                        {captchaUrl && <>
                            <img className={s.captchaImg} src={captchaUrl}/>
                            <div className={s.formRow}>
                                <label>
                                    <p>Текст выше</p>
                                    <Input
                                        name={'verifyCode'}
                                        hasError={touched.verifyCode && errors.verifyCode}
                                        error={errors.verifyCode}
                                        props={{
                                            onChange: handleChange,
                                            onBlur: handleBlur,
                                            value: values.verifyCode,
                                        }}
                                    />
                                </label>
                            </div>
                        </>}
                        <div className={s.formRow}>
                            <label>
                                {status?.error && <span className={s.formErrorText}>{status.error}</span>}
                            </label>
                        </div>

                        <div className={s.formRow}>
                            <button
                                type="submit"
                                disabled={!isValid && !dirty && isSubmitting}
                            >
                                Войти
                            </button>
                        </div>
                    </div>

                </form>
            )}
        </Formik>
    )
};