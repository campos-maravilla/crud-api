import Message from "./Message"
import { SongArtist } from "./SongArtist"
import { SongLyric } from "./SongLyric"

export const SongDetails = ({ search, lyric, bio }) => {
    if (!lyric || !bio) return null;

    return (

        <article className="grid-1-3">


            {lyric.error || lyric.err || lyric.name === "AbortError" ? (<Message
                msg={`Error: no existe la canción '${search.song}'`}
                bgColor="#dc3545"
            />
            ) : (
                <SongLyric title={search.song} lirycs={lyric.lyrics} />
            )}
            {bio.artists ? <SongArtist artist={bio.artists[0]} /> : <Message msg={`Error: no existe el intérprete '${search.artist}'`}
                bgColor="#dc3545" />}

        </article>
    )
}
