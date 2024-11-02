import { ChangeEvent } from "react";

interface Props {
  label: string;
  type?: "" | "password" | "checkbox" | "email" | "text";
  placeHolder: string;
  id: string;
  onChangeFun: (e: ChangeEvent<HTMLInputElement>) => void;
}

function TextBox({
  label,
  type = "text",
  placeHolder,
  id,
  onChangeFun,
}: Props) {
  return (
    <div className="form-group  mb-2">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        placeholder={placeHolder}
        onChange={onChangeFun}
      />
    </div>
  );
}
export default TextBox;
