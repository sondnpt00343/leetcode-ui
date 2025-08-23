import Button from "../Button";
import UserDropdown from "../UserDropdown";
import Icon from "../Icon";
import { useTheme } from "../../hooks/useTheme";
import styles from "./Header.module.scss";

const Header = () => {
    const { setTheme } = useTheme();

    const handleThemeChange = (theme) => {
        setTheme(theme);
    };

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <button className={styles.backBtn}>
                        <Icon name="arrow-left" size="sm" />
                    </button>
                    <nav className={styles.nav}>
                        <a href="#" className={styles.navItem}>
                            Explore
                        </a>
                        <a
                            href="#"
                            className={`${styles.navItem} ${styles.active}`}
                        >
                            Problems
                        </a>
                        <a href="#" className={styles.navItem}>
                            Contest
                        </a>
                        <a href="#" className={styles.navItem}>
                            Discuss
                        </a>
                        <a href="#" className={styles.navItem}>
                            Interview{" "}
                            <Icon
                                name="chevron-down"
                                size="sm"
                                className={styles.dropdown}
                            />
                        </a>
                        <a href="#" className={styles.navItem}>
                            Store{" "}
                            <Icon
                                name="chevron-down"
                                size="sm"
                                className={styles.dropdown}
                            />
                        </a>
                    </nav>
                </div>
                <div className={styles.right}>
                    <div className={styles.notifications}>
                        <Icon name="bell" size="sm" />
                    </div>
                    <div className={styles.streak}>
                        <Icon name="fire" size="sm" /> 0
                    </div>
                    <UserDropdown
                        userAvatar="/user-profile-avatar.png"
                        userName="LeetCode User"
                        onThemeChange={handleThemeChange}
                    />
                    <Button variant="premium">Premium</Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
