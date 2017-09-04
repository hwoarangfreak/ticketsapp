import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { email, required} from 'Global/FormCheck'
import { FormInput } from 'Global/Components'

const RegistrationForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form className='registration__form' onSubmit={handleSubmit}>
            <Field name='username' type='text'
                   component={FormInput} label='User name'
                   validate={ required }
                   userclass='registration__form'
            />
            <Field name='password' type='text'
                   component={FormInput} label='Password'
                   validate={ required }
                   userclass='registration__form'
            />
            <Field name='firstname' type='text'
                   component={FormInput} label='First name'
                   validate={ required }
                   userclass='registration__form'
            />
            <Field name='secondname' type='text'
                   component={FormInput} label='Second name'
                   validate={ required }
                   userclass='registration__form'
            />
            <Field name='email' type='email'
                   component={FormInput} label='Email'
                   validate={[required, email]}
                   userclass='registration__form'
            />
            <div className='registration__form__buttons-box'>
                <button className='registration__form__buttons-box__button submit' type='submit' disabled={submitting}>Submit</button>
                <button className='registration__form__buttons-box__button clear'  type='button' disabled={pristine || submitting} onClick={reset}>Clear</button>
            </div>
        </form>
    )
}

export default reduxForm({
    form: 'registrationForm'
})(RegistrationForm)
