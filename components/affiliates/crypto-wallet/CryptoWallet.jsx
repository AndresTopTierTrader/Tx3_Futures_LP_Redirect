'use client'

import React, { useState } from 'react';
import { FaCircleCheck } from "react-icons/fa6";

const CryptoWallet = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    wallet: '',
    verifyWallet: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const validateInputs = () => {
    const newErrors = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formState.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formState.wallet.trim()) {
      newErrors.wallet = 'Wallet address is required';
    }
    
    if (!formState.verifyWallet.trim()) {
      newErrors.verifyWallet = 'Please verify your wallet address';
    } else if (formState.wallet !== formState.verifyWallet) {
      newErrors.verifyWallet = 'Wallet addresses do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xldjydkr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formState)
      });
      
      if (response.ok) {
        setSubmitSuccess(true);
        setFormState({
          name: '',
          email: '',
          wallet: '',
          verifyWallet: '',
        });
      } else {
        console.error('Form submission failed');
        setErrors({ form: 'Form submission failed. Please try again.' });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ form: 'An error occurred. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="flex flex-col items-center w-full max-w-[800px] pt-36  mx-auto bg-gradient-to-br from-[#014AA4]/20 to-[#012450]/40 rounded-lg border border-[#717892]/30 p-6 md:p-8">
      <h3 className="text-2xl md:text-3xl font-light text-white mb-6">Crypto Payout Affiliates </h3>
      
      {submitSuccess ? (
        <div className="flex flex-col items-center text-center p-6 bg-black/20 rounded-lg border border-[#45D1FF]/30 w-full">
          <FaCircleCheck className="text-green w-12 h-12 mb-4" />
          <h4 className="text-xl text-white mb-2">Registration Successful!</h4>
          <p className="text-[#A2ACCF] mb-4">Your data has been stored successfully. We will contact you in case we need it for next steps.</p>
         
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#A2ACCF] mb-2">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.name ? 'border-red-500' : 'border-[#717892]/50'} rounded-md p-3 text-white focus:outline-none focus:border-[#45D1FF]`}
              placeholder="Enter your full name"
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-[#A2ACCF] mb-2">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.email ? 'border-red-500' : 'border-[#717892]/50'} rounded-md p-3 text-white focus:outline-none focus:border-[#45D1FF]`}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            <p className="text-xs text-[#FF9A01] mt-1">
              ⚠️ Please ensure this is your registered affiliate email. Incorrect email may prevent payouts.
            </p>
          </div>
          
          <div className="mb-6">
            <label htmlFor="wallet" className="block text-[#A2ACCF] mb-2">USDT Wallet Address (TRC20)</label>
            <input
              type="text"
              id="wallet"
              name="wallet"
              value={formState.wallet}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.wallet ? 'border-red-500' : 'border-[#717892]/50'} rounded-md p-3 text-white focus:outline-none focus:border-[#45D1FF]`}
              placeholder="Enter your TRC20 wallet address"
            />
            {errors.wallet && <p className="text-red-500 text-xs mt-1">{errors.wallet}</p>}
            <p className="text-xs text-[#A2ACCF] mt-1">
              Please provide a valid TRC20 network wallet address for USDT payments.
            </p>
          </div>
          
          <div className="mb-8">
            <label htmlFor="verifyWallet" className="block text-[#A2ACCF] mb-2">Verify Wallet Address</label>
            <input
              type="text"
              id="verifyWallet"
              name="verifyWallet"
              value={formState.verifyWallet}
              onChange={handleChange}
              className={`w-full bg-black/20 border ${errors.verifyWallet ? 'border-red-500' : 'border-[#717892]/50'} rounded-md p-3 text-white focus:outline-none focus:border-[#45D1FF]`}
              placeholder="Re-enter your wallet address"
            />
            {errors.verifyWallet && <p className="text-red-500 text-xs mt-1">{errors.verifyWallet}</p>}
          </div>
          
          {errors.form && <p className="text-red-500 text-center mb-4">{errors.form}</p>}
          
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-green text-background font-semibold rounded-md hover:opacity-90 transition-opacity flex items-center justify-center min-w-[180px]"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-background" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit Crypto Payout Information"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CryptoWallet;