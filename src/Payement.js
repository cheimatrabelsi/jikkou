import React from 'react';
import { useState } from "react";
import "./payement.css"
import PayementInput from './PayementInput';
const Payement = () => {
    const [values, setValues] = useState({
        cardNumber: '',
        cardHolder: '',
        cardExpirationMonth: '',
        cardExpirationYear: '',
        cardCvv: '',
      });
    
      const inputs = [

       
        {id: 1,
        name: "cardNumber",
        type: "number",
        placeholder: "0000111100001111",
        label: "cardNumber",
        errorMessage:
            "cardNumber should be 3-16 characters and shouldn't include any special character!",
        required: true,
        },
        {id: 2,
            name: "cardHolder",
            type: "text",
            placeholder: "cardHolder",
            label: "cardHolder",
            errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
          pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
           },
        {
            id: 3,
            name: "cardExpirationMonth",
            type: "select",
            placeholder: "00",
            label: "cardExpirationMonth",
            required: true,
            option :{values :["01", "02" ,"03", "04", "05", "06", "07", "08" ,"09", "10" ,"11", "12"] } ,
   
  
          },
          {id: 4,
            name: "cardExpirationYear",
            type: "number",
            placeholder: "cardExpirationYear",
            label: "cardExpirationYear",
            required: true,
           },
           {id: 5,
            name: "cardCvv",
            type: "number",
            placeholder: "123",
            label: "cardCvv",
            required: true,
           },
           
       
      ];
    
      const handleSubmit = (e) => {
        e.preventDefault();
      };
    
      const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
    
      return (
        <div className="payement">
          <payement className="register-payement" onSubmit={handleSubmit}>
            <h1>Payement</h1>
            <register-payement className='payment-radio'>
            <input
        name='gateway' 
        type='radio'
        value='visa'
              />
             <label htmlFor="visa">visa</label>
             <img src="visa" alt="visa" width="500" height="600"></img>
    <input
         name='gateway' 
        type='radio'
        value='MasterCard'
    />
    <label htmlFor="masterCard">MasterCard</label>
    <img src="mastercard" alt="mastercard" width="500" height="600"></img>
    <input
         name='gateway' 
        type='radio'
        value='PayPal'
    />
    <label htmlFor="PayPal">PayPal</label>
    <img src="paypal" alt="paypal" width="500" height="600"></img>
            
            {inputs.map((input) => (
              <PayementInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
            <button><a href="#!" className="text-muted">
                  Go back
                </a></button>
            <button>Pay</button>
            </register-payement>
          </payement>
        </div>
      );
    };

export default Payement;




