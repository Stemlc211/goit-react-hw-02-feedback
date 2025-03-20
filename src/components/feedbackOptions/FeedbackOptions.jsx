import './FeedbackOptions.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className="buttons">
      {options.map((option) => (
        <button key={option} onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
