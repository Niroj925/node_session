import React from 'react';
import {useField} from "formik";

const Textfield = (props) => {
//useFiled hook gives three datas in array ie field,meta and helper
const [field,meta]=useField(props.name);
//in field data we get data like onChange,values ,onBlur,etc and other basic inputs filed attributes are here
//in meta extra information like error touch etc are found in this field
console.log(field);

  return (
    <div>
        {/* ..field gives all basic attributes like onChange,values,onBlur etc and props values are also destructuring*/}
      <input type="text" {...field} {...props}/>
      <span style={{color:'red'}}>{meta.error}</span>
    </div>
  )
}

export default Textfield
