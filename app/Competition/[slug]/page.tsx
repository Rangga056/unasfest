type DetailCompetitionProps = { params: { slug: string } };
import { competitionsData } from "@/constants/competitionsData";
import Image from "next/image";


export default function DetailCompetition(props: DetailCompetitionProps) {
    const { params } = props;
    const competition = competitionsData.find(comp => comp.path === params.slug);

    if (!competition) {
        return <div>Competition not found</div>;
    }

    return (
        <div>
            <h1>Detail Competition</h1>
            <h2>{params.slug}</h2>
            <Image src={competition.coverImage} alt={params.slug} />
            <p>{competition.description}</p>
        </div>
    );
}
