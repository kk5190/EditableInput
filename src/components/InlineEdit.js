import { useState } from "react";


export default function InlineEdit({value, canEdit}) {
  const [currentValue, setCurrentValue] = useState(value);
  const [editable, setEditable] = useState(false);

  const onChangeHandler = (e) => setCurrentValue(e.target.value);

  const onKeyDownHandler = (e) => {
    if (e.key === "Enter" || e.key === "Escape") {
      e.target.blur();
    }
  };

  const onBlurHandler = (e) => {
    if (e.target.value.trim() === "") {
      setCurrentValue(value);
    } else {
      setCurrentValue(e.target.value);
    }
    setEditable(false);
  };

  const handleDoubleClick = () => {
    if (canEdit) setEditable(true);
  };

  return (
    <>
      {editable ? (
        <input
          type="text"
          aria-label="Field name"
          value={currentValue}
          onChange={onChangeHandler}
          onKeyDown={onKeyDownHandler}
          onBlur={onBlurHandler}
          autoFocus
        />
      ) : (
        <h4 className="title" onDoubleClick={handleDoubleClick}>{currentValue}</h4>
      )}
    </>
  );
}
