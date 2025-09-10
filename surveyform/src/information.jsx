function Information(props) {
  return (
      <div className="information-div">
          I have your info, you are {props.Name}, you said you were a {props.Occupation},
          <p>but I know you don't have a j*b'.</p>
          Based on the results, you are 75% homosexual.
      </div>
  );
}

export default Information;