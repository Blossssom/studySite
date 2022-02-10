import { Link } from 'react-router-dom';
import '../css/main.css';

function FrontStudy({datalist}) {

    return(
        <>
            <section className="wrap-main__content">
                <div className="contents-header">
                    <h2>Front End Study</h2>
                    <p>프론트엔드 개발 공부 목록이에염</p>
                </div>
                <article className="wrap-contents">
                    {
                        datalist.map((res) => {
                            return(
                                <Link to={res.path}  key={res.id} className="content-list__box">
                                    <p>{res.title}</p>
                                </Link>
                            );
                        })
                    }
                </article>
            </section>
        </>
    );
}

export default FrontStudy;