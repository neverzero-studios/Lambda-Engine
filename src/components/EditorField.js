import React from "react";

class EditorField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <textarea className={this.props.className}
      id={this.props.id}
       />
    );
  }
}

export default EditorField;
