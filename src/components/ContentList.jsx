import { Link } from "react-router-dom";

function ContentList() {
    return( 
        <>
            <div className="wrap-main__content">
                <Link to='/htmlpart_main' className="content-list__box">
                    html
                </Link>
                <div className="content-list__box">
                </div>
                <div className="content-list__box">
                </div>
                <div className="content-list__box">
                </div>
            </div>
        </>
    );
}

export default ContentList;