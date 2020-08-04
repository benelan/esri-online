import React from 'react';

interface TextInputProps {
  id: string;
  label: string;
  emitValue: (value: string) => void;
}

function TextInput({ id, label, emitValue }: TextInputProps) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        data-testid="text-input-field"
        type="text"
        id={id}
        className="form-control"
        onChange={(e) => {
          console.log('TextInput.value: ', e.currentTarget.value);
          emitValue(e.currentTarget.value);
        }}
      />
    </div>
  );
}

export default TextInput;
