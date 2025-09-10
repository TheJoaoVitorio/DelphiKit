import { itemService } from "@/src/services/itemServices";
import styles from "../[id]/page.module.css";
import Image from 'next/image';
import Link from 'next/link';
import { extractRepoGitHubUrl } from '../../../utils/urlUtils';
import GitHubIcon from '@mui/icons-material/GitHub';
import { itemRepository } from "@/src/repositories/itemRepository";


export type BaseType = {
    id: number;
    name: string;
    img: string;
    link: string;
    creator: string;
    avatar: string;
    tags: string[];
    description: string;
}

export default async function DetailsPage({ params, searchParams }: {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ type: string }>;
}) {
    const { id } = await params;
    const { type } = await searchParams;

    const item = await itemRepository.getItemByIdAndType(parseInt(id), type);


    if (!item) {
        return <div className="p-4">Item not found</div>;
    }

    return (
        <div className={styles.pageContainer}>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.cardSectionLeft}>
                        {item.img ? (
                            <Image src={item.img} alt={item.name} width={250} height={250} className={styles.profileImage} />
                        ) : (
                            <div className={`${styles.profileLetter} ${styles.profileImage}`} style={{ width: 250, height: 250 }}> {item.name.charAt(0)} </div>
                        )}

                        <div className={styles.creatorInfo}>
                            {item.avatar ? (
                                <Image src={item.avatar} alt={`${item.creator} avatar`} width={30} height={30} className={styles.avatar} />
                            )  : (
                                <span className={` ${styles.avatarProfileLetter}`} >{item.creator.charAt(0)}</span>
                            )}
                            <span>{item.creator}</span>
                        </div>
                    </div>
                    <div className={styles.cardSectionRight}>
                        <div className={styles.titleContainer} >
                            <h1 className={styles.name}>{item.name}</h1>
                            <Link href={item.link} target="_blank" className={styles.companyLink}>
                                {extractRepoGitHubUrl(item.link) ? (
                                    <>
                                        <GitHubIcon />
                                        {extractRepoGitHubUrl(item.link)}
                                    </>
                                ) : (
                                    item.link
                                )}
                            </Link>
                        </div>
                        
                        <p className={styles.description}>{item.description}</p>

                        <div className={styles.tagsContainer}>
                            {item.tags.map((tag, index) => (
                                <div key={index} className={styles.tag}>
                                    <span>{tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}