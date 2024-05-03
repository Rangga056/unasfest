import { useRouter } from 'next/router';
import { competitionsData } from '@/constants/competitionsData'; // Adjust the path to your competitionsData file
import { StaticImageData } from 'next/image'; // Import StaticImageData from next/image

// Define the type for competition data
type Competition = {
    path: string;
    coverImage: StaticImageData; // Use StaticImageData for coverImage type
    description: string;
    timeline: any[]; // Adjust the type for timeline data
    guideBook: string;
    requirements: { no: string; provision: string }[];
};

const CompetitionPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // Use the id value to find competition data from competitionsData
    const competition = competitionsData.find((comp: Competition) => comp.path === id);

    // Render competition data here
    return (
        <div>
            <h1>{competition?.description}</h1>
            {/* Add rendering for cover image, timeline, requirements, etc. */}
        </div>
    );
};

export default CompetitionPage;
