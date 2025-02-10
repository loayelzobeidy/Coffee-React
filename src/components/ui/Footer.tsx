import React from 'react';

interface FooterProps {
  companyName?: string;
  year?: number;
  contactEmail?: string;
  // Add any other props you need
  text?: string; // a general text prop
}

const Footer: React.FC<FooterProps> = ({
  companyName = 'My Company',
  year = new Date().getFullYear(),
  contactEmail,
  text,
}) => {
  return (
<footer className="footer bg-gray-100 py-24">
  <div className="footer-content container mx-auto text-center"> {/* Center content */}
    <p className="text-sm text-gray-500">&copy; {year} {companyName}. All rights reserved.</p>
    {contactEmail && (
      <p className="text-sm text-gray-500 mt-2"> {/* Add margin top */}
        Contact: <a href={`mailto:${contactEmail}`} className="text-blue-500 hover:underline">{contactEmail}</a>
      </p>
    )}
    {text && <p className="text-sm text-gray-500 mt-2">{text}</p>} {/* Add margin top */}
  </div>
</footer>
  );
};

export default Footer;
