import Score from './Score'

export default function Student({ student }) {
    return (
        <>
            <p>{student.name}</p>
            <p>{student.bio}</p>
            {student.scores && student.scores.map(function(score, idx) {
                return <Score score={score} key={idx}/>
            })}
        </>
    )
}