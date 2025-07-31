import React, { useState } from 'react';

interface ContactFormProps {
  // Add any props if required in expanded use cases
}

// Add interfaces/types for form state, submission payload and response

const ContactForm = ({}: ContactFormProps) => {
  // State for form fields, loading, error, etc.

  // Submit handler that triggers POST request to /api/contact (pending implementation)

  return (
    <form className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" className="border p-2 w-full" />
      </div>
      <div className="mt-4">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" className="border p-2 w-full" />
      </div>
      <div className="mt-4">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" className="border p-2 w-full"></textarea>
      </div>
      {/* Insert loading, error, and success states here */}
      <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
