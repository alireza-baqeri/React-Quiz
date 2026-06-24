function StartScreen({ numQuestions }) {
  return (
    <div>
      <h2>Welcome to The REACT Quiz!</h2>
      <h3>{numQuestions} questions to test your React mastery</h3>
      <button className="btn btn-ui">Let's Begin</button>
    </div>
  );
}

export default StartScreen
