"use client";

import styles from "./Project.module.css";
import {element} from "@/tools/tools";
import {ProjectPreview} from "@/components/project/Project";
import {useEffect} from "react";

export function HomeProjectPreviewContainer({

                                            }: {}) {

    useEffect(() => {
        //fetch the projects from the backend
    }, [])

    return (
        <div className={styles.projectsSectionContainer} onScroll={(e) => {
            if (e.currentTarget.scrollLeft + (e.currentTarget.clientWidth + 180) >= e.currentTarget.scrollWidth) {
                console.log("scrolling")
                element("projectsHeaderViewAllButton").classList.add(styles.projectsHeaderViewAllButtonHidden)
            } else {
                element("projectsHeaderViewAllButton").classList.remove(styles.projectsHeaderViewAllButtonHidden);
            }
            console.log(
                e.currentTarget.scrollLeft + e.currentTarget.clientWidth,
                e.currentTarget.scrollWidth
            )
        }}>
            <ProjectPreview name={"test"} />
            <ProjectPreview name={"test"} />
            <ProjectPreview name={"test"} />
            <ProjectPreview name={"test"} />
            <ProjectPreview name={"test"} />
            <ProjectPreview name={"View all"} style={{border: "1px dashed var(--border-color)", backgroundColor: "transparent"}} textStyle={{color: "black"}}></ProjectPreview>
        </div>
    )
}