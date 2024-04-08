import P from "prop-types";
import { Component } from "react";
import './styles.css';
export class Button extends Component {
    render() {
        const { text, onclick, disabled = false} = this.props;
        return <button disabled={disabled} className="button" onClick={onclick}>{text}</button>;
    }
}

Button.defaulProps = {
  disabled: false,
}


Button.propTypes = {
  text: P.string.isRequired,
  onclick: P.func.isRequired,
  disabled: P.bool,
}