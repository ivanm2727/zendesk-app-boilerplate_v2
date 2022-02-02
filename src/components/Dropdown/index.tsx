import React, { useRef, useState, useEffect } from 'react';
import debounce from 'lodash.debounce';
import { Item, Menu, Label, Field, Dropdown, Autocomplete } from '@zendeskgarden/react-dropdowns';

interface IDropdownProps {
  title: string,
  options: string[],
  currentValue: string,
  handleOnSelectItem: any
}

const DropdownField = (props: IDropdownProps) => {
  const { title, options,currentValue } = props;
  const [inputValue, setInputValue] = useState('');
  const [matchingOptions, setMatchingOptions] = useState(options);


  /**
   * Debounce filtering
   */
  const filterMatchingOptionsRef = useRef(
    debounce((value: string) => {
      const matchedOptions = options.filter(
        option => option.trim().toLowerCase().indexOf(value.trim().toLowerCase()) !== -1
      );

      setMatchingOptions(matchedOptions);
    }, 300)
  );
  
  useEffect(() => {
    filterMatchingOptionsRef.current(inputValue);
  }, [inputValue]);

  return (
    //<Row justifyContent="end">
      //<Col size={3}>
        <Dropdown
          inputValue={inputValue}
          selectedItem={currentValue}
          onSelect={(item: string) => {
            props.handleOnSelectItem(item)
          }}
          onInputValueChange={value => setInputValue(value)}
          downshiftProps={{ defaultHighlightedIndex: 0 }}
        >
          <Field>
            <Label style={{fontSize:12}}>{title}</Label>
            <Autocomplete>{currentValue}</Autocomplete>
          </Field>
          <Menu>
            {options.length ? (
              options.map((option,index) => (
                <Item key={`${option}-${index}`} value={option}>
                {/* <Item key={`${option}-${index}`} value={`${option}-${index}`}> */}
                  <span>{option}</span>
                </Item>
              ))
            ) : (
              <Item disabled>No matches found</Item>
            )}
          </Menu>
        </Dropdown>
      //</Col>
    //</Row>
  );
};

export default DropdownField;