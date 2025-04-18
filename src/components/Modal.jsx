import React from 'react';

const Modal = ({ onClose, children, title }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="relative bg-white w-full max-w-lg p-6 rounded-xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>

        {/* Modal Title */}
        {title && (
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{title}</h2>
        )}

        {/* Modal Content */}
        <div className="text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
