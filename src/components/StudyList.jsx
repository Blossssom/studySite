import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../css/main.css';

function StudyList() {

    const [study, setStudy] = useState([]);
    const location = useLocation();

    useEffect(() => {
        axios.get('http://localhost:3001/detailstudy')
            .then((res) => {
                setStudy(res.data);
            })
    }, []);

    const dataList = study.filter((data) => {
        return data.path === location.state;
    });

    return(
        <>
            <div className="wrap-htmlpart">
                <div className="htmlpart-content">
                    {
                        dataList.map((res) => {
                            console.log(res)
                            return <p>{res.title}</p>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default StudyList;