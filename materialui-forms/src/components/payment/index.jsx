import React from 'react';
 import { Formik, Field, Form, ErrorMessage } from 'formik';
 import * as Yup from 'yup';
 
 export const Payment = ({submit,setFormValues,prevValues}) => {
   return (
     <Formik
        initialValues={prevValues}
        validationSchema={Yup.object({
        cardName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('Required'),
           cardNumber: Yup.number()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
       })}
       onSubmit={(values) => {
        submit(2)
        setFormValues({...values,...prevValues})
       }}
     >
       <Form>
         <label htmlFor="cardName">Card Name</label>
         <Field name="cardName" type="text" />
         <ErrorMessage name="cardName" />
         <label htmlFor="cardNumber">Card Number</label>
         <Field name="cardNumber" type="number" />
         <ErrorMessage name="cardNumber" />
         <button type="submit">Submit</button>
         <button onClick={()=>submit(0)}>Back</button>
       </Form>
     </Formik>
   );
 };