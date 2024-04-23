import React, { useState } from 'react';
import './Child.css'
const Child = ({ name, isParentHighlighted, handleMouseEnter, handleMouseLeave, setIsParentHighlighted }) => {
  const [isChildHighlighted, setIsChildHighlighted] = useState(false);

  const handleChildMouseEnter = () => {
    setIsChildHighlighted(true);
    setIsParentHighlighted(false);
    // Only call the parent's mouse enter handler if the child itself is not highlighted
    if (!isChildHighlighted) {
      handleMouseEnter();
    }
  };

  const handleChildMouseLeave = () => {
    setIsChildHighlighted(false);
    setIsParentHighlighted(true);
    // Only call the parent's mouse leave handler if the child itself is not highlighted
    if (!isChildHighlighted) {
      handleMouseLeave();
    }
  };

  return (
    <div
      onMouseEnter={handleChildMouseEnter}
      onMouseLeave={handleChildMouseLeave}
      style={{ border: isParentHighlighted || isChildHighlighted ? '3px solid #ff7300' : '3px solid  #979797', padding: '10px' }}
      className='child_box'
    >
      {name}
    </div>
  );
};

export default Child;
