import styles from "./styles.module.css";

export function Profile({ name, steps }) {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <img src="https://api.dicebear.com/9.x/adventurer-neutral/svg?seed=Sheba" alt="Avatar" />
        <strong>{name}</strong>
      </div>
      <span className={styles.steps}>{steps}</span>
    </div>
  );
}
