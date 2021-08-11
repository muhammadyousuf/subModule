import React from "react";
import { Button, TextField, Typography } from '@material-ui/core';



interface component {
  title?: string,
  onPress?: () => void,
  type?: any,
  formName?: string
}
const SayHello: React.FC<component> = ({ formName, title, onPress, type }) => {
  return (
    <div style={{
      marginLeft: "-100px",
      marginTop: "-100px",
      top: "50%",
      left: "50%",
      position: "fixed"

    }} >
      <Typography variant="h4" component="h4" >
        {formName}
      </Typography>
      <form noValidate autoComplete="off">
        <TextField id="name" label="username" />
        <br />
        <TextField id="email" label="email" type="email" />
        <br />
        <TextField id="password" label="password" type="password" />
        <br /><br /><br />
        <Button variant="contained" color={type} onClick={onPress} >
          {title}
        </Button>
      </form>

    </div >
  )
};
export default SayHello
