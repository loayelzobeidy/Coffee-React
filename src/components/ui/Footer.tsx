import React from "react";
import { FooterProps } from "../../types/FooterProps";

const Footer: React.FC<FooterProps> = ({
  companyName = "My Company",
  year = new Date().getFullYear(),
  contactEmail,
  text,
}) => {
  return (
    <footer className="footer bg-gray-100 py-36">
      <div className="footer-content container mx-auto text-center">
        <p className="text-sm text-gray-500">
          &copy; {year} {companyName}. All rights reserved.
        </p>
        {contactEmail && (
          <p className="text-sm text-gray-500 mt-2">
            Contact:
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-500 hover:underline"
            >
              {contactEmail}
            </a>
          </p>
        )}
        {text && <p className="text-sm text-gray-500 mt-2">{text}</p>}
      </div>
    </footer>
  );
};

export default Footer;
