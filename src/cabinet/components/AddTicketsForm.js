import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { FormInput } from 'Global/Components'
import { numbers, required} from 'Global/FormCheck'

const AddTicketsForm = ({ handleSubmit, pristine, reset, submitting, message }) => {
    return (
        <form className='cabinet__body__right__form' onSubmit={handleSubmit}>
            <Field name='name'
                   type='text' component={FormInput}
                   label='Film name'
                   validate={ required }
                   userclass='cabinet__body__right__form'
            />
            <Field name='title'
                   type='text' component={FormInput}
                   label='Title'
                   validate={ required }
                   userclass='cabinet__body__right__form'
            />
            <Field name='price'
                   type='text' component={FormInput}
                   label='Price'
                   validate={ [required, numbers] }
                   userclass='cabinet__body__right__form'
            />
            <Field name='count'
                   type='text' component={FormInput}
                   label='Number of tickets'
                   validate={ [required, numbers] }
                   userclass='cabinet__body__right__form'
            />
            <Field name='eventTime'
                   type='text' component={FormInput}
                   label='Event time'
                   validate={ required }
                   userclass='cabinet__body__right__form'
            />
            <Field name='url'
                   type='text' component={FormInput}
                   label='URL'
                   validate={ required }
                   userclass='cabinet__body__right__form'
            />
            <div className='cabinet__body__right__form__buttons-box'>
                <button className='cabinet__body__right__form__buttons-box__button submit' type='submit' disabled={submitting}>Submit</button>
                <button className='cabinet__body__right__form__buttons-box__button clear' type='button' disabled={pristine || submitting} onClick={reset}>Clear</button>
            </div>
            <div className='cabinet__body__right__form__message'>{ message }</div>
        </form>
    )
};

export default reduxForm({
    form: 'addTicketsForm'
})(AddTicketsForm)
