import styles from'./Heading.modules.css';
type HeadingProps = {
    children: React.ReactNode;  
};


export function Heading({ children }: HeadingProps){
    return <h1 className={styles.heading}>{props.children}</h1>;
};