import React from 'react';

interface LinkProps {
    link : string,
    text : string
}

const LinkButton = ({link, text} : LinkProps) => {
    return (
        
    <a href={link} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">{text}</a>

    );
};

export default LinkButton;