import Media from "react-media";

import SingUpForm from "../../components/signupForm/signupForm";
import sprite from "../../icons/sprite.svg";
import { ReactComponent as MainIcon } from "../../icons/signupMainIcon.svg";

import s from "./signupView.module.css";

export default function SingUpView() {
  return (
    <Media query={{ maxWidth: 767 }}>
      {(matches) =>
        matches ? (
          <div className={s.formWrapper}>
            <svg className={s.logo}>
              <use href={sprite + "#icon-wallet"}></use>
            </svg>

            <SingUpForm />
          </div>
        ) : (
          <div className={s.signupPage}>
            <div className={s.ellipseOrange}></div>

            <div className={s.ellipseViolet}></div>

            <div className={s.mainWrapper}>
              <div className={s.titleWrapper}>
                <MainIcon className={s.mainIcon} />

                <h1 className={s.title}>Finance App</h1>
              </div>

              <div className={s.parentFormWrapper}>
                <div className={s.formWrapper}>
                  <svg className={s.logo}>
                    <use href={sprite + "#icon-wallet"}></use>
                  </svg>

                  <SingUpForm />
                </div>
              </div>
            </div>
          </div>
        )
      }
    </Media>
  );
}
