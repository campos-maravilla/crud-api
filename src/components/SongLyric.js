export const SongLyric = ({ title, lirycs }) => {
    return (
        <section>
            <h3>{title}</h3>
            <blockquote style={{ whiteSpace: "pre-wrap" }}>{lirycs}</blockquote>
        </section>
    )
}
