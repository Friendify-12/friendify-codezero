import React from 'react';

const InputWithIcon = ({ icon, placeholder }) => {
    return (
        <div className="flex items-center border rounded-md p-2 mb-4">
            <div className="mr-2">{icon}</div>
            <input
                type="text"
                className="w-full focus:outline-none"
                placeholder={placeholder}
            />
        </div>
    );
};

export default InputWithIcon;
