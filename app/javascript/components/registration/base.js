import React from 'react';
import { blueA400, redA400 } from 'material-ui/styles/colors';

export class Base extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      canSubmit: true,
      email: '',
      password: '',
      passwordConfirmation: '',
      error: ''
    };
  }

  enableSubmitBtn(){
    this.setState({
      canSubmit: true
    });
  }

  reload(){
    window.location.href = window.location.href;
  }

  disableSubmitBtn(){
    this.setState({
      canSubmit: false
    });
  }

  syncField(ev,fieldName){
    let element = ev.target;
    let value = element.value;

    let jsonState = {};
    jsonState[fieldName] = value;
    this.setState(jsonState)
  }
}

export const styles = {
  buttonTop:{
    marginTop: '1em'
  },
  underlineStyle:{
    borderColor: blueA400,
  },
  floatingLabelFocusStyle: {
    color: blueA400,
  },
  leftSpace:{
    marginLeft: '1em',
  },
  red: redA400,
}
