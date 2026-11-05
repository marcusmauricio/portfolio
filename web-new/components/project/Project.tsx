import styles from "./Project.module.css";
import {CSSProperties} from "react";

export function ProjectPreview({
    name,
    icon,
    style,
    textStyle
                               }: {
    name: string,
    icon?: string,
    style?: CSSProperties,
    textStyle?: CSSProperties,
}) {
    return (
        <div className={styles.preview} style={style}>
            {icon ? <span className={"material-symbols-rounded"}>{icon}</span> : <></>}
            <h3 style={textStyle}>{name}</h3>
        </div>
    )
}