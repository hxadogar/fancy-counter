export default function Button({ children, onclick }) {
  return (
    <button
      className="count-btn count-btn-icon"
      onClick={onclick}
    >
      {children}
    </button>
  )
};