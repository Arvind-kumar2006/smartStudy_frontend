import PropTypes from 'prop-types';

function SummarySection({ summary }) {
  if (!summary?.length) {
    return null;
  }

  return (
    <section className="card">
      <h2>Summary</h2>
      <ul>
        {summary.map((bullet, index) => (
          <li key={`summary-${index}`}>{bullet}</li>
        ))}
      </ul>
    </section>
  );
}

SummarySection.propTypes = {
  summary: PropTypes.arrayOf(PropTypes.string),
};

SummarySection.defaultProps = {
  summary: [],
};

function QuizSection({ quiz }) {
  if (!quiz?.length) {
    return null;
  }

  return (
    <section className="card">
      <h2>Quiz</h2>
      <ol className="quiz-list">
        {quiz.map((item) => (
          <li key={item.id} className="quiz-item">
            <h3>{item.question}</h3>
            <ul>
              {item.choices.map((choice, index) => (
                <li key={`${item.id}-${index}`}>
                  <span className="choice-index">{String.fromCharCode(65 + index)}.</span> {choice}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

QuizSection.propTypes = {
  quiz: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      question: PropTypes.string.isRequired,
      choices: PropTypes.arrayOf(PropTypes.string).isRequired,
      answerIndex: PropTypes.number.isRequired,
    }),
  ),
};

QuizSection.defaultProps = {
  quiz: [],
};

function StudyTipSection({ studyTip }) {
  if (!studyTip) {
    return null;
  }

  return (
    <section className="card">
      <h2>Study Tip</h2>
      <p>{studyTip}</p>
    </section>
  );
}

StudyTipSection.propTypes = {
  studyTip: PropTypes.string,
};

StudyTipSection.defaultProps = {
  studyTip: '',
};

function MathQuestionSection({ mathQuestion }) {
  if (!mathQuestion) {
    return null;
  }

  return (
    <section className="card">
      <h2>Math Challenge</h2>
      <p className="math-question"><strong>Question:</strong> {mathQuestion.question}</p>
      <p><strong>Answer:</strong> {mathQuestion.answer}</p>
      <p><strong>Explanation:</strong> {mathQuestion.explanation}</p>
    </section>
  );
}

MathQuestionSection.propTypes = {
  mathQuestion: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string,
    explanation: PropTypes.string,
  }),
};

MathQuestionSection.defaultProps = {
  mathQuestion: null,
};

export default function ResultDisplay({ result }) {
  if (!result) {
    return null;
  }

  return (
    <div className="results">
      <MathQuestionSection mathQuestion={result.mathQuestion} />
      <SummarySection summary={result.summary} />
      <QuizSection quiz={result.quiz} />
      <StudyTipSection studyTip={result.studyTip} />
    </div>
  );
}

ResultDisplay.propTypes = {
  result: PropTypes.shape({
    summary: PropTypes.arrayOf(PropTypes.string),
    quiz: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        question: PropTypes.string,
        choices: PropTypes.arrayOf(PropTypes.string),
        answerIndex: PropTypes.number,
      }),
    ),
    studyTip: PropTypes.string,
    mathQuestion: PropTypes.shape({
      question: PropTypes.string,
      answer: PropTypes.string,
      explanation: PropTypes.string,
    }),
  }),
};

ResultDisplay.defaultProps = {
  result: null,
};
