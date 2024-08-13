// pages/_app.js
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// Make sure to replace 'your-publishable-key-here' with your actual Stripe publishable key
const stripePromise = loadStripe('your-publishable-key-here');

function MyApp({ Component, pageProps }) {
  return (
    <Elements stripe={stripePromise}>
      <Component {...pageProps} />
    </Elements>
  );
}

export default MyApp;
