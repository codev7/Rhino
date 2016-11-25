import * as React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import FormProps from '../common/FormProps';
const reduxForm = require('redux-form');
const Field = reduxForm.Field;

export default reduxForm.reduxForm({
    form: 'PhishingDomainAdd'
})(
(props: FormProps) =>
    <form 
        onSubmit={ props.handleSubmit(props.submit) }>
            <div>
                <Field
                    label="Domain Name"
                    name="domainName"
                    component={ Input } />
            </div>
           
            <Button type="submit">Submit</Button>
    </form>
);