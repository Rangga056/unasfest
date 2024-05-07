type DetailCompetitionProps = {params: {slug: string}}

export default function DetailCompetition(props: DetailCompetitionProps){
    const {params} = props;
    return(
        <div>
            <h1>Detail Competition</h1>
            <h2>{params.slug}</h2>
        </div>
    )
}