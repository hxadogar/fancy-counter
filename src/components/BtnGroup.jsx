import Button from "./Button";

export default function BtnGroup({ handleAdd, HandleSub }) {
  return (
    <div className="button-container">
      <Button onclick={HandleSub}>-</Button>
      <Button onclick={handleAdd}>+</Button>
    </div>
  )
};