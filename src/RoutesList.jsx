import ContentList from "./components/ContentList";
import DescStudy from "./components/DescStudy";
import ContentDetail from "./components/htmlPart/ContentDetail";
import StudyList from "./components/StudyList";

export default [
    {
        path: '/',
        element: ContentList
    },

    {
        path: '/study_:path',
        element: StudyList
    },

    {
        path: '/study_:path/:detail',
        element: DescStudy
    }

];