export default function CardHeading({ count }) {
  return (
    <h1 className="title">
      {count < 5 ? 'Fancy Counter' : <LimitHeading />}
    </h1>
  )
};


function LimitHeading() {
  return (
    <span>LIMIT! BUT <b>PRO</b> FOR&gt;5</span>
  )
};