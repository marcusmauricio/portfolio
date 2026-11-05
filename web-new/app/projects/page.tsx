import {Separator} from "radix-ui";
import styles from "@/app/page.module.css";
import projectStyles from "@/components/project/Project.module.css";
import {HomeProjectPreviewContainer} from "@/components/project/HomeProjectPreviewContainer";

export default function Projects() {
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
            <div className={styles.belowHeroSectionsContainer}>
                <div className={styles.projectsSection}>
                    <div className={styles.projectsSectionHeader}>
                        <h2>View by year</h2>
                    </div>

                    <HomeProjectPreviewContainer />
                </div>
                <Separator.Root
                    className="SeparatorRoot"
                    decorative
                />
            </div>
        </main>
    )
}