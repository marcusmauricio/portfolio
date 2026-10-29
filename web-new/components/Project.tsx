import styles from "./Project.module.css";

export function ProjectPreview({
    name
                               }: {
    name: string
}) {
    return (
        <div className={styles.preview}>
            <h3>{name}</h3>
        </div>
    )
}