import React from 'react';
import TextInput from './TextInput';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('should render the label properly', () => {
  const testLabel = 'testLabel',
    id = 'foo';
  const { queryByLabelText } = render(
    <TextInput label={testLabel} id={id} emitValue={() => {}} />,
  );
  // const renderResult = render(<TextInput label={testLabel} id={id} />);

  const element = queryByLabelText(testLabel);
  // const element = renderResult.queryByLabelText(testLabel);
  expect(element).toBeInTheDocument();
});

describe('Testing emitValue', () => {
  it('should fire emitValue when the value changes', () => {
    const mockHandler = jest.fn((value) => {
      console.log('Received value: ', value);
    });
    const testLabel = 'testLabel',
      testId = 'testId';
    const { container, getByLabelText } = render(
      <TextInput label={testLabel} id={testId} emitValue={mockHandler} />,
    );

    // expect(container.querySelector('#' + testId)).toBeDefined();
    expect(container.querySelector(`#${testId}`)).toBeDefined();
    expect(mockHandler).not.toHaveBeenCalled();
    const inputField = getByLabelText(testLabel);
    fireEvent.change(inputField, { target: { value: 'foo' } });
    expect(mockHandler).toHaveBeenCalled();
    expect(mockHandler).toHaveBeenCalledTimes(1);
    expect(mockHandler).toHaveBeenLastCalledWith('foo');

  });
});
