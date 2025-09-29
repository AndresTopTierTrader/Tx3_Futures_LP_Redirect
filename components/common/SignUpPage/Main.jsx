'use client'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FaCheck, FaTimes, FaCopy, FaArrowRight } from 'react-icons/fa'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { BiLoaderAlt } from 'react-icons/bi'

export default function CouponForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phoneNumber: '',
    agreeToTerms: false
  })
  
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)
  const [copied, setCopied] = useState(false)

  const bgImageStyle = {
    backgroundColor: '#0B111D',
    backgroundImage: `
      radial-gradient(at 44% 100%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 71% 100%, hsla(217,43%,7%,1) 0px, transparent 50%),
      radial-gradient(at 100% 100%, hsla(218,44%,7%,1) 0px, transparent 50%),
      radial-gradient(at 100% 41%, hsla(217,100%,43%,0.13) 0px, transparent 50%),
      radial-gradient(at 100% 72%, hsla(189,100%,56%,0.17) 0px, transparent 50%)
    `
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const formVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }
    }
  }

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value) => {
    // Remove all non-numeric characters
    const phoneNumber = value.replace(/\D/g, '')
    
    // Limit to 10 digits
    const limitedPhoneNumber = phoneNumber.slice(0, 10)
    
    // Return empty string if no digits
    if (limitedPhoneNumber.length === 0) {
      return ''
    }
    
    // Format based on length
    if (limitedPhoneNumber.length >= 6) {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(3, 6)}-${limitedPhoneNumber.slice(6)}`
    } else if (limitedPhoneNumber.length >= 3) {
      return `(${limitedPhoneNumber.slice(0, 3)}) ${limitedPhoneNumber.slice(3)}`
    } else {
      return limitedPhoneNumber
    }
  }

  // Get raw phone number (digits only) for submission
  const getRawPhoneNumber = (formattedPhone) => {
    return formattedPhone.replace(/\D/g, '')
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    
    if (formData.countryCode && formData.countryCode.length > 4) {
      newErrors.countryCode = 'Country code must be max 3 digits'
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the Terms and Conditions and Privacy Policy'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const rawPhoneNumber = getRawPhoneNumber(formData.phoneNumber)
      const response = await fetch('https://formspree.io/f/xnnvvkba', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: rawPhoneNumber ? `${formData.countryCode}${rawPhoneNumber}` : undefined
        })
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setShowSuccessPopup(true)
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          countryCode: '+1',
          phoneNumber: '',
          agreeToTerms: false
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'countryCode') {
      // Ensure it starts with + and limit to 4 characters total (+XXX)
      let newValue = value
      if (!newValue.startsWith('+')) {
        newValue = '+' + newValue.replace('+', '')
      }
      newValue = newValue.replace(/[^\d+]/g, '').slice(0, 4)
      setFormData(prev => ({ ...prev, [name]: newValue }))
    } else if (name === 'phoneNumber') {
      // Format phone number and allow deletion
      const formattedPhone = formatPhoneNumber(value)
      setFormData(prev => ({ ...prev, [name]: formattedPhone }))
    } else if (name === 'agreeToTerms') {
      setFormData(prev => ({ ...prev, [name]: !prev.agreeToTerms }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText('NEW20')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inputClass = (fieldName) => `
    w-full px-4 py-3 rounded-lg bg-white/5 border transition-all duration-200
    text-white placeholder-[#717892] focus:outline-none focus:ring-2
    ${errors[fieldName] 
      ? 'border-red-500 focus:ring-red-500/20' 
      : 'border-[#717892] focus:border-[#45D1FF] focus:ring-[#45D1FF]/20'
    }
  `

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-16" style={bgImageStyle}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={formVariants}
        className="max-w-md w-full"
      >
        <motion.div
          variants={titleVariants}
          className="text-center mb-8"
        >
          <h1 className="text-white font-light text-3xl sm:text-4xl mb-4">
            Get Your 20% OFF Coupon
          </h1>
          <p className="text-[#717892] text-sm sm:text-base">
            Fill in your details to receive a special discount code
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-gradient-to-br from-white/5 to-[#0B111D] border border-[#717892] rounded-xl p-6 sm:p-8"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="space-y-4">
            {/* First Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label className="block text-white text-sm mb-2">First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className={inputClass('firstName')}
                placeholder="John"
              />
              {errors.firstName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1 flex items-center"
                >
                  <HiOutlineExclamationCircle className="mr-1" />
                  {errors.firstName}
                </motion.p>
              )}
            </motion.div>

            {/* Last Name */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-white text-sm mb-2">Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className={inputClass('lastName')}
                placeholder="Doe"
              />
              {errors.lastName && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1 flex items-center"
                >
                  <HiOutlineExclamationCircle className="mr-1" />
                  {errors.lastName}
                </motion.p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-white text-sm mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={inputClass('email')}
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1 flex items-center"
                >
                  <HiOutlineExclamationCircle className="mr-1" />
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Phone Number */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-white text-sm mb-2">Phone Number (Optional)</label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="w-20 px-4 py-3 rounded-lg bg-white/5 border border-[#717892] transition-all duration-200 text-white placeholder-[#717892] focus:outline-none focus:ring-2 focus:border-[#45D1FF] focus:ring-[#45D1FF]/20"
                  placeholder="+1"
                  maxLength="4"
                />
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className={inputClass('phoneNumber')}
                  placeholder="(234) 567-8900"
                  maxLength="14"
                />
              </div>
              {errors.countryCode && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-1 flex items-center"
                >
                  <HiOutlineExclamationCircle className="mr-1" />
                  {errors.countryCode}
                </motion.p>
              )}
            </motion.div>

            {/* Click Wrap Agreement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-start space-x-3">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-[#45D1FF] bg-white/5 border-[#717892] rounded focus:ring-[#45D1FF] focus:ring-2"
                  />
                </div>
                <label htmlFor="agreeToTerms" className="text-sm text-[#717892] leading-5">
                  I agree to the{' '}
                  <a
                    href="https://www.tx3funding.com/en/terms-and-conditions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#45D1FF] hover:text-white underline transition-colors duration-200"
                  >
                    Terms and Conditions
                  </a>
                  {' '}and{' '}
                  <a
                    href="https://www.tx3funding.com/en/privacy-policy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#45D1FF] hover:text-white underline transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-xs mt-2 flex items-center"
                >
                  <HiOutlineExclamationCircle className="mr-1" />
                  {errors.agreeToTerms}
                </motion.p>
              )}
            </motion.div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting || !formData.agreeToTerms}
            className={`mt-6 w-full font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 ${
              isSubmitting || !formData.agreeToTerms
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-[#0B111D] hover:shadow-lg hover:shadow-[#45D1FF]/20'
            }`}
            whileHover={{ scale: (isSubmitting || !formData.agreeToTerms) ? 1 : 1.02 }}
            whileTap={{ scale: (isSubmitting || !formData.agreeToTerms) ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <BiLoaderAlt className="animate-spin" size={20} />
            ) : (
              <>
                <span>Get My Coupon</span>
                <FaArrowRight />
              </>
            )}
          </motion.button>

          {/* Error/Success Messages */}
          <AnimatePresence>
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm flex items-center"
              >
                <HiOutlineExclamationCircle className="mr-2" size={20} />
                Something went wrong. Please try again later.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showSuccessPopup && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setShowSuccessPopup(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
            >
              <div className="bg-gradient-to-br from-[#0B111D] to-[#1a2332] border border-[#717892] rounded-2xl p-8 max-w-sm w-full relative">
                <motion.button
                  onClick={() => setShowSuccessPopup(false)}
                  className="absolute top-4 right-4 text-[#717892] hover:text-white transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes size={20} />
                </motion.button>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-gradient-to-r from-[#45D1FF] to-[#167BCC] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <FaCheck className="text-[#0B111D]" size={28} />
                </motion.div>

                <h2 className="text-white text-2xl font-semibold text-center mb-4">
                  Success! Here's Your Coupon
                </h2>

                <div className="bg-white/5 border border-[#717892] rounded-lg p-4 mb-6">
                  <p className="text-[#717892] text-sm mb-2 text-center">Your 20% OFF discount code:</p>
                  <div className="flex items-center justify-center space-x-3">
                    <span className="text-white text-2xl font-bold">NEW20</span>
                    <motion.button
                      onClick={copyToClipboard}
                      className="bg-gradient-to-r from-[#45D1FF] to-[#167BCC] p-2 rounded-lg hover:shadow-lg hover:shadow-[#45D1FF]/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {copied ? (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <FaCheck className="text-[#0B111D]" size={16} />
                        </motion.div>
                      ) : (
                        <FaCopy className="text-[#0B111D]" size={16} />
                      )}
                    </motion.button>
                  </div>
                  {copied && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-[#45D1FF] text-xs text-center mt-2"
                    >
                      Copied to clipboard!
                    </motion.p>
                  )}
                </div>

                <motion.a
                  href="https://futures.tx3markets.com/checkout/?add-to-cart=1469&el=NewSignUpTx3June2025&hcategory=June2025&htrafficsource=Website"
                  className="w-full bg-gradient-to-r from-[#45D1FF] to-[#167BCC] text-[#0B111D] font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 hover:shadow-lg hover:shadow-[#45D1FF]/20 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Use Coupon Now</span>
                  <FaArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}