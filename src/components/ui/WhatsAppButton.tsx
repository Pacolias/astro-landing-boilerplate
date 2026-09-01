import React from 'react';
import { SITE_CONFIG } from '../../config.ts';
import * as Lucide from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  // Do not render the button if no phone number is provided in config
  if (!SITE_CONFIG.contactPhone) return null;

  // Remove non-numeric characters (e.g., '+', ' ', '-') for the API
  const formattedPhone = SITE_CONFIG.contactPhone.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${formattedPhone}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      <Lucide.MessageCircle className="w-7 h-7" />
    </a>
  );
};