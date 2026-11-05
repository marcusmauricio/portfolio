import {Separator} from "radix-ui";
import styles from "./page.module.css";
import "@fontsource/material-symbols-rounded";
import {HomeProjectPreviewContainer} from "@/components/project/HomeProjectPreviewContainer";
import projectStyles from "@/components/project/Project.module.css"


export default function Home() {
    return (
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
                        <a id={"projectsHeaderViewAllButton"}
                           className={`${projectStyles.projectsHeaderViewAllButton} doubleFlex`}>
                            View all
                            <span className={"material-symbols-rounded"}>arrow_circle_right</span>
                        </a>
                    </div>

                    <HomeProjectPreviewContainer/>
                </div>
                <Separator.Root
                    className="SeparatorRoot"
                    decorative
                />
            </div>
        </main>
    );
}
