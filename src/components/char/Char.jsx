import Link from "next/link";
import styles from "./index.module.scss";

const Char = ({ char }) => {
  return (
    <li className={styles.Char} id={char.id}>
      <Link href={`character/${char.id}`}>
        <img
          className={styles["img-hover"]}
          src="https://s3-alpha-sig.figma.com/img/4c43/5cb4/0bc8651b3ce459aa28f6548a7f06b49a?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FcGu8Q96zbTWdbVp9sThfhHX4RHbEZPi22tU3QxSdL~02jqFUV-qxyd0nieO1XHhqcfu4tDII9ZRLxMSf~I9VVj46413p4KXykdGo~H-U3hVNGEC9bprGgdbAiev4ikLB8-BITq41A60QGZg0VJ0FBxO5AqXpS0XLXdWND-w8aoQUSBX4A8V-23bmDge97XUJGECTOLmIY~JuTje42RY0BmIRIk3KLKdFlzO9Vv6Fn8iQXKGpL2LxlhBYiZfMJ1GwZMFIdabKlNW9C3peDrjy9EunFgT6zxJzzomFRwILT4i-nA6iTQWAascILmAXWrVUfi9tMNIkRXagxbr-O03rA__"
        />
        <img className={styles["Char-img"]} src={char.image} alt={char.name} />
        <p className={styles.name}>{char.name}</p>
      </Link>
    </li>
  );
};

export default Char;
