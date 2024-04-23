import React, { useState } from 'react';
import './Parent.css'
const Parent = ({ name, children, isSuperParentHighlighted, handleMouseEnter, handleMouseLeave }) => {
  const [isParentHighlighted, setIsParentHighlighted] = useState(false);

  const handleParentMouseEnter = () => {
    setIsParentHighlighted(true);
    handleMouseEnter();
  };

  const handleParentMouseLeave = () => {
    setIsParentHighlighted(false);
    handleMouseLeave();
  };

  return (
    <div
      onMouseEnter={handleParentMouseEnter}
      onMouseLeave={handleParentMouseLeave}
      style={{ border: isSuperParentHighlighted || isParentHighlighted ? '3px solid #ff7300' : '3px solid #979797', padding: '10px' }}
      className='parent_box'
    >
      <div>{name}</div>
      <div style={{ marginLeft: '20px' }}>
        {React.Children.map(children, child => {
          return React.cloneElement(child, {
            isParentHighlighted: isSuperParentHighlighted || isParentHighlighted,
            handleMouseEnter,
            handleMouseLeave,
            setIsParentHighlighted
          });
        })}
      </div>
    </div>
  );
};

export default Parent;

