import axios from "axios";
import { useEffect, useState } from "react";

import FrontStudy from "./FrontStudy";

function ContentList() {

    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/studylists')
            .then((res) => {
                setContentList(res.data);
            });
    }, []);


    return( 
        <>
            <main>
                <FrontStudy datalist={contentList} />
            </main>
        </>
    );
}

export default ContentList;