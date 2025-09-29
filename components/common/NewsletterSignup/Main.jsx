'use client'

import React, { useState } from 'react';

export default function NewsletterSignup() {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+00');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Phone validation regex for (123) 123 1234 format
    const phoneRegex = /^\(\d{3}\)\s\d{3}\s\d{4}$/;

    const validateForm = () => {
        const newErrors = {};

        // Email validation
        if (!email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Invalid email format';
        }

        // Phone validation - now optional
        if (phone.trim()) {
            // Only validate if phone is provided
            if (!phoneRegex.test(phone)) {
                newErrors.phone = 'Phone number must be in (123) 123 1234 format';
            }
            
            // Country code validation only if phone is provided
            if (!countryCode.trim()) {
                newErrors.countryCode = 'Country code is required when phone is provided';
            } else if (!/^\+\d+$/.test(countryCode)) {
                newErrors.countryCode = 'Country code must start with + and contain only numbers';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const formatPhoneInput = (input) => {
        // Remove all non-digit characters
        const digitsOnly = input.replace(/\D/g, '');

        // Format to (123) 123 1234
        if (digitsOnly.length >= 10) {
            return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)} ${digitsOnly.slice(6, 10)}`;
        } else if (digitsOnly.length > 0) {
            // Partial formatting
            if (digitsOnly.length <= 3) {
                return `(${digitsOnly}`;
            } else if (digitsOnly.length <= 6) {
                return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3)}`;
            } else {
                return `(${digitsOnly.slice(0, 3)}) ${digitsOnly.slice(3, 6)} ${digitsOnly.slice(6)}`;
            }
        }
        return input;
    };

    const handleCountryCodeChange = (e) => {
        // Only prevent non-numeric and non-+ characters
        const input = e.target.value;
        const cleanedInput = input.replace(/[^\d+]/g, '');
        
        // Ensure + is at the start
        const formattedInput = cleanedInput.startsWith('+') 
            ? cleanedInput 
            : '+' + cleanedInput.replace(/\+/g, '');
        
        setCountryCode(formattedInput);
    };

    const handlePhoneChange = (e) => {
        const formattedPhone = formatPhoneInput(e.target.value);
        setPhone(formattedPhone);
    };

    const handleSubmit = async () => {
        // Validate form
        if (!validateForm()) return;

        // Start submission process
        setIsSubmitting(true);
        setErrors({});

        try {
            const formData = {
                email: email
            };
            
            // Only include phone if provided
            if (phone.trim()) {
                formData.phone = `${countryCode} ${phone}`;
            }

            const response = await fetch("https://formspree.io/f/xkgrdonr", {
                method: "POST",
                body: JSON.stringify(formData),
                headers: { 
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                setSubmitSuccess(true);
                // Reset form after 3 seconds
                setTimeout(() => {
                    setSubmitSuccess(false);
                    setEmail('');
                    setPhone('');
                    setCountryCode('+00');
                }, 3000);
            } else {
                // Handle error
                const errorData = await response.json();
                setErrors({ submit: errorData.message || 'Submission failed' });
            }
        } catch (error) {
            setErrors({ submit: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (submitSuccess) {
        return (
            <div className=" p-12 max-w-6xl mx-auto flex justify-between items-center">
                <div className="max-w-2xl">
                    <h2 className="text-4xl font-normal mb-4 text-white">Thank You!</h2>
                    <p className="text-gray-600 text-lg">Your submission has been received successfully.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="px-2 md:px-12 max-w-6xl pt-16 md:pt-24 mx-auto">
            <div className="flex flex-col md:flex-row px-4 md:px-0 justify-between items-start">
                <div className="max-w-2xl pr-8 mr-10">
                    <h2 className="text-4xl font-normal mb-4 text-white">Stay in the Loop</h2>
                    <p className='text-green text-xl font-semibold'>Sign up and Get 20% OFF </p>
                    <p className="text-slate-300 text-lg mb-2">Stay alert for all of the latest news, updates and releases.</p>
                </div>

                <div className="flex-1 max-w-2xl">
                    <h3 className="text-xl  font-normal mb-6 text-green">Join our newsletter</h3>
                    
                    <div className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <input 
                                type="email" 
                                placeholder="Email *" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className={`w-full px-0 py-3 bg-transparent border-b text-white placeholder-gray-500 outline-none transition-colors
                                    ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-gray-600'}`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone Fields */}
                        <div>
                            <div className="flex items-center space-x-4">
                                <input 
                                    type="text" 
                                    placeholder="+00"
                                    value={countryCode}
                                    onChange={handleCountryCodeChange}
                                    className={`w-20 px-0 py-3 bg-transparent border-b text-white placeholder-gray-500 outline-none transition-colors
                                        ${errors.countryCode ? 'border-red-500' : 'border-gray-300 focus:border-gray-600'}`}
                                />
                                <input 
                                    type="tel" 
                                    placeholder="Phone (optional)" 
                                    value={phone}
                                    onChange={handlePhoneChange}
                                    className={`flex-1 px-0 py-3 bg-transparent border-b text-white placeholder-gray-500 outline-none transition-colors
                                        ${errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-gray-600'}`}
                                />
                                
                                {/* Submit Button */}
                                <button 
                                    onClick={handleSubmit}
                                    disabled={isSubmitting}
                                    className="p-3 rounded-full bg-green hover:bg-lime-700 transition-colors 
                                        disabled:opacity-50 disabled:cursor-not-allowed"
                                    aria-label="Submit newsletter signup"
                                >
                                    <svg 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="text-black"
                                    >
                                        <path 
                                            d="M7 17L17 7M17 7H7M17 7V17" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                            {errors.countryCode && <p className="text-red-500 text-sm mt-1">{errors.countryCode}</p>}
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        {errors.submit && (
                            <p className="text-red-500 text-sm">{errors.submit}</p>
                        )}
                    </div>

                    <p className="text-gray-500 text-sm mt-6">
                        Managed in accordance with the Privacy policy. You can unsubscribe at any time.
                    </p>
                </div>
            </div>
        </div>
    );
}