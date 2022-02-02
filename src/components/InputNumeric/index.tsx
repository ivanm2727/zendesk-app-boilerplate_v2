import React, {ChangeEvent, useState} from 'react';
import { Field, Label, Input,Message } from '@zendeskgarden/react-forms';
import { Row, Col } from '@zendeskgarden/react-grid';

interface IInputProps{
    title: string,
    currentValue: number|string,
    handleOnInputValue: any,
    validationWarning: any,
    validationMessage: any
}

const InputNumeric = (props:IInputProps) => {
    const {title,currentValue,validationWarning,validationMessage}=props;
    const [inputNumericValue, setInputNumericValue] = useState<number|string>(currentValue);

    const handleOnNumericChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const zipcode = event.target.value
        setInputNumericValue(zipcode.toString())
        props.handleOnInputValue(zipcode)
    }
    return(
            <Field>
                <Label style={{fontSize:12}}>{title}</Label>
                <Input value={inputNumericValue}
                    //validation='warning'
                    onChange={(event)=>handleOnNumericChange(event)}
                />
                {validationWarning && 
                    <Message validation='error'>
                        {validationMessage}
                    </Message>
                }
            </Field>
    );
}
export default InputNumeric;