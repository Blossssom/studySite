import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import '../css/main.css';
import ContentDetail from './htmlPart/ContentDetail';
import Loading from './Loading';

function StudyList() {

    const [study, setStudy] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const {path} = useParams();

    useEffect(() => {
        axios.get('http://localhost:3001/detailstudy')
            .then((res) => {
                setStudy(res.data);
                setIsLoading(false);              
            })
    }, []);

    const dataList = study.filter((data) => {
        return data.id === path;
    });

    return(
        <>
            {isLoading ? <Loading /> :
                <ContentDetail dataList={dataList} />
            }
        </>
    );
}

export default StudyList;