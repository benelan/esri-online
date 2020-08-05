import React from 'react';

interface BrowserButtonsProps {
  nextEnabled?: boolean;
  previousEnabled?: boolean;
  nextItem: () => void;
  previousItem: () => void;
}

const BrowserButtons = ({
  nextItem,
  previousItem,
  nextEnabled = true,
  previousEnabled = true,
}: BrowserButtonsProps) => {
  return (
    <div>
      <button
        className="btn btn-info"
        disabled={!previousEnabled}
        onClick={previousItem}
      >
        Previous
      </button>
      &nbsp;
      <button
        className="btn btn-info"
        disabled={!nextEnabled}
        onClick={nextItem}
      >
        Next
      </button>
    </div>
  );
};

export default BrowserButtons;
