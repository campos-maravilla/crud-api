import React, { useEffect, useState } from 'react'
import { helpHttp } from '../helpers/helphttp';
import Loader from './Loader';
import { SongDetails } from './SongDetails';
import { SongForm } from './SongForm';
import './SongSearch.css';

const SongSearch = () => {
    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (search === null) return;
        helpHttp();
        const fetchData = async () => {
            const { artist, song } = search;

            let artistUrl = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

            //console.log(artistUrl, songUrl);

            setLoading(true);

            const [artisRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl),
                helpHttp().get(songUrl),
            ]);

            //console.log(artisRes, songRes);

            setBio(artisRes);
            setLyric(songRes);
            setLoading(false);

        };

        fetchData();
    }, [search]);

    const handleSearch = (data) => {
        //console.log(data);
        setSearch(data);
    }

    return (
        <div>
            <h2>SongSearch</h2>
            <article className="">

                <SongForm handleSearch={handleSearch} />
                {loading && <Loader />}
                {search && !loading && (

                    <SongDetails search={search} lyric={lyric} bio={bio} />
                )}
            </article>
        </div>
    )
}

export default SongSearch
