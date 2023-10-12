export default function Score({ score }) {
    return (
        <>
            <p>Date: {score.date}</p>
            <p>Score: {score.score}</p>
        </>
    )
}