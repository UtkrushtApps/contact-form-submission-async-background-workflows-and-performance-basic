import React from 'react';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div>
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
      </div>
    </main>
  );
}
