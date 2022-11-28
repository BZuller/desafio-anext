import Select from 'react-select';
import IGenders from '../../../../interfaces/IGenders';

type props = {
  placeholder?: string;
  options?: IGenders[];
  onClick?: () => void;
  onChange: (option: IGenders) => void;
};

export default function SelectGender({ placeholder, options, onChange, onClick }: props): React.ReactElement {
  return (
    <Select
      placeholder={placeholder}
      options={options}
      onChange={(option) => !!onChange && onChange(option as IGenders)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? 'grey' : '#2388EC',
          width: 168,
          color: 'red',
        }),

        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: '#6E7E9D',
        }),
        indicatorSeparator: (baseStyle) => ({
          backgroundcolor: '#007DFA',
        }),
        dropdownIndicator: (baseStyle) => ({
          ...baseStyle,
          color: '#007DFA',
        }),
      }}
    />
  );
}
