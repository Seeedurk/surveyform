function Input(props) {
    const onChange = (event) => {
        props.setInput(event.target.value);

    };
    return (
        <>
            Type your {props.inputType}
            <input className="Input" type="text" value={props.input} onChange={onChange} />
        </>
  );
}

export default Input;