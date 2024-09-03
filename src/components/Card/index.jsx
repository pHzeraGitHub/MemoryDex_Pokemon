/* eslint-disable react/prop-types */
import classNames from "classnames";

import cardBackImg from "../../assets/card-back.svg";

import styles from "./styles.module.css";

export function Card({ image, flipped, memorized, handleClick }) {
  return (
    <div
      className={classNames(styles.scene, { [styles.memorized]: memorized })}
    >
      <div
        onClick={handleClick}
        className={classNames(styles.card, {
          [styles.flipped]: flipped,
          [styles.memorized]: memorized,
        })}
      >
        <div className={classNames(styles.cardFace, styles.front)}>
          <img src={image} />
        </div>
        <div className={classNames(styles.cardFace, styles.back)}>
          <img src={cardBackImg} />
        </div>
      </div>
    </div>
  );
}
