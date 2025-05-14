import styles from "./styles.module.scss";

function DropdownItem({ item }: { item: string }) {
  return <li className={styles.dropdownItem}>{item}</li>;
}

export default DropdownItem;
