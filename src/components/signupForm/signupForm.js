import { MdEmail, MdLock, MdAccountBox } from "react-icons/md";
import s from "./signupForm.module.css";

export default function SingUpForm() {
  return (
    <form
      className={"signupForm"}
      // onSubmit={handleSubmit}
    >
      <label htmlFor={"email"} className={s.field}>
        <MdEmail className={s.icon} />
        <input
          id={"email"}
          type={"email"}
          name={"email"}
          placeholder={"E-mail"}
          className={s.input}
          // value={values.email}
          // onChange={handleChange}
          // onBlur={handleBlur}
        ></input>
      </label>
      {/* {touched.email && errors.email && <p>{errors.email}</p>} */}
      <label htmlFor={"password"} className={s.field}>
        <MdLock className={s.icon} />
        <input
          id={"password"}
          type={"password"}
          name={"password"}
          placeholder={"Пароль"}
          className={s.input}
          // value={values.password}
          // onChange={handleChange}
          // onBlur={handleBlur}
        ></input>
      </label>
      {/* {touched.password && errors.password && <p>{errors.password}</p>} */}
      <label htmlFor={"confirmPassword"} className={s.field}>
        <MdLock className={s.icon} />
        <input
          id={"confirmPassword"}
          type={"password"}
          name={"confirmPassword"}
          placeholder={"Подтвердите пароль"}
          className={s.input}
          // value={values.confirmPassword}
          // onChange={handleChange}
          // onBlur={handleBlur}
        ></input>
      </label>
      {/* {touched.confirmPassword && errors.confirmPassword && (
          <p>{errors.confirmPassword}</p>
        )} */}
      <label htmlFor={"name"} className={s.field}>
        <MdAccountBox className={s.icon} />
        <input
          id={"name"}
          type={"text"}
          name={"name"}
          placeholder={"Ваше имя"}
          className={s.input}
          // value={values.name}
          // onChange={handleChange}
          // onBlur={handleBlur}
        ></input>
      </label>
      {/* {touched.name && errors.name && <p>{errors.name}</p>} */}

      <button
        type={"submit"}
        className={s.signUpBtn + " " + s.btn}
        // disable={!isValid && !dirty}
      >
        Регистрация
      </button>

      <button
        type={"submit"}
        className={[s.logInBtn, s.btn].join(" ")}
        // disable={!isValid && !dirty}
      >
        Вход
      </button>
    </form>
  );
}
