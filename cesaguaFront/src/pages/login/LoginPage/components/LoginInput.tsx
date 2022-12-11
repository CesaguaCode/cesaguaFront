import { ChangeEventHandler, memo, MouseEventHandler, useId } from "react";

interface props {
  isInvalid: boolean
  label: string;
  name?: string
  type: string;
  icon: string;
  state: string;
  handler: ChangeEventHandler;
}

const LoginInput = ({isInvalid, name, state, label, type, icon, handler }: props) => {
  let id = useId();

  return (
    <div className="input-group input-group__login">
      <i className={`ico ${icon}`}></i>
      <input
        value={state}
        onChange={handler}
        className="login-input"
        type={type}
        id={id}
        name={name ? name : type}
        placeholder=" "
        autoComplete="off"
      />
      <label className="login-label" htmlFor={id}>
        {label}
      </label>
      <span className={`${"login-error"} ${isInvalid && "active"}`}>Formato no válido</span>
    </div>
  );
};

export default memo(LoginInput);