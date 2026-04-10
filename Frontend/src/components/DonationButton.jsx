import { useState, useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/DonationButton.css';
import "../media-query/don-res.css";
import donate from '../Images/Boys/boys (34).jpg'
import { LanguageContext } from '../context/LanguageContext';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);



const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3001';

const DonationButton = () => {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [donationType, setDonationType] = useState('one-time');
  
  const { translations } = useContext(LanguageContext);
  const t = translations.donation;

  const predefinedAmounts = [10, 25, 50, 100, 250];

const handleDonation = async () => {
  const donationAmount = Number(amount || customAmount);

  if (!donationAmount || donationAmount < 1) {
    alert(t.validationMessage || "Please enter a valid donation amount.");
    return;
  }

  setIsLoading(true);

  try {
    // Add this console log to debug
    console.log('Backend URL:', BACKEND_URL);
    console.log('Full URL:', `${BACKEND_URL}/create-checkout-session`);
    
    const response = await fetch(`${BACKEND_URL}/create-checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: donationAmount,
        currency: "usd",
        success_url: `${window.location.origin}/success`,
        cancel_url: `${window.location.origin}/DonationButton`,
      }),
    });

    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response data:', data);

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.id });

  } catch (err) {
    console.error("Donation error:", err);
    alert(t.errorMessage || "Something went wrong. Please try again.");
  }

  setIsLoading(false);
};

  // Helper function to get donate button text
  const getDonateButtonText = () => {
    if (isLoading) {
      return t.processing || "Processing...";
    }
    
    const donationAmount = amount || customAmount || '0';
    
    if (t.donateButton) {
      return t.donateButton.replace('${amount}', `$${donationAmount}`);
    }
    
    return `Donate $${donationAmount}`;
  };

  return (
    <div className="donation-container">
      {/* Left Side - Big Image */}
      <div className="donation-image">
        <img 
          src={donate}
          alt={t.imageTitle || "Making a difference through donations"} 
        />
        <div className="image-overlay">
          <h2>{t.imageTitle || "Your Support Changes Lives"}</h2>
          <p>{t.imageDescription || "Every donation helps us create lasting impact in our community and beyond."}</p>
          {/* Uncomment if you want to use stats */}
          {/* <div className="impact-stats">
            <div className="stat">
              <span className="stat-number">5,000+</span>
              <span className="stat-label">{t.livesImpacted || "Lives Impacted"}</span>
            </div>
            <div className="stat">
              <span className="stat-number">250+</span>
              <span className="stat-label">{t.projectsCompleted || "Projects Completed"}</span>
            </div>
          </div> */}
        </div>
      </div>

      {/* Right Side - Donation Form */}
      <div className="donation-widget">
        <h3>{t.supportTitle || "Support Our Cause"}</h3>
        <p>{t.supportDescription || "Your donation helps create real impact. Thank you!"}</p>

        {/* Donation Type Toggle */}
        <div className="donation-type-toggle">
          <button 
            className={`toggle-btn ${donationType === 'one-time' ? 'active' : ''}`}
            onClick={() => setDonationType('one-time')}
          >
            {t.oneTime || "One-Time"}
          </button>
          <button 
            className={`toggle-btn ${donationType === 'monthly' ? 'active' : ''}`}
            onClick={() => setDonationType('monthly')}
          >
            {t.monthly || "Monthly"}
          </button>
        </div>

        {/* Predefined Amounts */}
        <div className="amount-buttons">
          {predefinedAmounts.map((amt) => (
            <button
              key={amt}
              className={`amount-btn ${amount === amt ? 'selected' : ''}`}
              onClick={() => {
                setAmount(amt);
                setCustomAmount("");
              }}
            >
              ${amt}
            </button>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="custom-amount">
          <div className="input-group">
            <span className="currency-symbol">$</span>
            <input
              type="number"
              placeholder={t.customAmount || "Custom amount"}
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setAmount("");
              }}
              min="1"
              step="0.01"
              dir="ltr"
            />
          </div>
        </div>

        {/* Donate Button */}
        <button
          className="donate-btnn"
          onClick={handleDonation}
          disabled={isLoading || (!amount && !customAmount)}
        >
          {getDonateButtonText()}
        </button>

        {/* Security Badge */}
        <div className="security-badge">
          <span>{t.securityBadge || "🔒 Secure payment powered by Stripe"}</span>
        </div>
      </div>
    </div>
  );
};

export default DonationButton;