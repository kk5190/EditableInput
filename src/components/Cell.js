import { useState } from "react";
import alertIcon from "../bell-regular.svg";
import InlineEdit from "./InlineEdit";
import { CSSTransition } from "react-transition-group";

export default function Cell(props) {
  const [modal, showModal] = useState(false)
  const onCLickHandler = () => showModal(!modal)
  const onBlurHandler = () => showModal(false)
  return (
    <button className={`${props.canEdit || props.hint ? "cell-container highlight" : "cell-container"}`} onClick={onCLickHandler} onBlur={onBlurHandler}>
      
      { props.icon && <div className="cell" style={{width:'auto'}}><img width="15px" height="15px" src={alertIcon} alt="hint-icon" /></div> }
      
      <div class="cell">
      <InlineEdit
          value={props.value}
          canEdit={props.canEdit}
        />
        <CSSTransition in={props.hint && modal} timeout={300} classNames="hint" unmountOnExit>
        <div class="hint highlight">{props.hint}</div>
      </CSSTransition>
        </div>      
    </button>
  );
}
