import { Separator } from "radix-ui";
import styles from "./page.module.css";
import "@fontsource/material-symbols-rounded";
import {ProjectPreview} from "@/components/Project";

export default function Home() {
    return (
        <div>
            <main>
                <nav>
                    <div>
                        <span className={"material-symbols-rounded"}>menu</span>
                        <h3>by <strong>Marcus Mauricio</strong></h3>
                    </div>

                    <Separator.Root
                        className="SeparatorRoot"
                        decorative
                        style={{margin: "0"}}
                    />
                </nav>
                <div className={styles.hero}>
                    <h1>Hero section</h1>
                </div>
                <div className={styles.belowHeroSectionsContainer}>
                    <div className={styles.projectsSection}>
                        <div className={styles.projectsSectionHeader}>
                            <h2>Projects</h2>
                            <a className={"doubleFlex"}>
                                View all
                                <span className={"material-symbols-rounded"}>arrow_circle_right</span>
                            </a>
                        </div>
                        <div className={styles.projectsSectionContainer}>
                            <ProjectPreview name={"test"} />
                            <ProjectPreview name={"test"} />
                            <ProjectPreview name={"test"} />
                            <ProjectPreview name={"test"} />
                            <ProjectPreview name={"test"} />
                            <ProjectPreview name={"test"} />
                        </div>
                    </div>
                    <Separator.Root
                        className="SeparatorRoot"
                        decorative
                    />
                </div>
            </main>
        </div>
    );
}
