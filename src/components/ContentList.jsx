import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
                <section className="wrap-main__content">
                    <div className="contents-header">
                        <h2>Front End Study</h2>
                        <p>프론트엔드 개발 공부 목록이에염</p>
                    </div>
                    <article className="wrap-contents">
                        {
                            contentList.map((res) => {
                                return(
                                    <Link to={res.path} state={res.path} key={res.id} className="content-list__box">
                                        <p>{res.title}</p>
                                    </Link>
                                );
                            })
                        }
                    </article>
                </section>
            </main>
        </>
    );
}

export default ContentList;