import { Link, useLocation } from 'react-router-dom';
import '../../css/main.css';

function ContentDetail({dataList}) {

    const location = useLocation();
    console.log(dataList)

    return(
        <>
            <section className="wrap-studypart">
                    <div className="contents-header">
                        <h3>{dataList[0].title}</h3>
                    </div>
                    <article className="studypart-content">
                        {
                            dataList[0].list.map((res) => {
                                return( 
                                    <Link to={`${location.pathname}/${res.title}`} key={res.title} className='study-list__box'>
                                        {res.title}
                                    </Link>
                                )
                            })
                        }
                    </article>
            </section>
        </>
    );
}

export default ContentDetail;