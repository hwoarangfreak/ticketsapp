import React from 'react'

export const Title = ({ title }) => {
    return (
        <div className='title'>
            {title}
        </div>
    )
};


export const FormInput = ({ userclass, input, label, type, meta: { touched, error, warning } }) => {
    return (
        <div className={`${userclass}__input`}>
            <label className={`${userclass}__input__label`}>{label}</label>
            <div className={`${userclass}__input__label__body`}>
                <input className={`${userclass}__input__label__body__input`} {...input} placeholder={label} type={type}/>
                {touched && ((error && <span className={`${userclass}__input__label__body__input__message`}>{error}</span>) || (warning && <span className={`${userclass}__input__label__body__input__message`}>{warning}</span>))}
            </div>
        </div>
    )
};