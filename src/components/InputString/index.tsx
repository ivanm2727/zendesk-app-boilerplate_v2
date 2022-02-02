import React, {ChangeEvent, useState} from 'react';
import { Field, Label, Input } from '@zendeskgarden/react-forms';

interface IInputProps{
    title: string,
    currentValue: string,
    handleOnInputValueString: any
}
const InputString = (props:IInputProps) => {
    const {title,currentValue}=props;

    const handleOnStringChange = (event: ChangeEvent<HTMLInputElement>)=>{
        const clientdata = event.target.value
        props.handleOnInputValueString(clientdata)
    }
    return(
            <Field>
                <Label style={{fontSize:12}}>{title}</Label>
                <Input value={currentValue}
                onChange={(event)=>handleOnStringChange(event)}
                />
            </Field>
    );
}
export default InputString;