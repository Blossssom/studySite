import ContentList from "./components/ContentList";
import StudyList from "./components/StudyList";

export default [
    {
        path: '/',
        element: ContentList
    },

    {
        path: '/:path',
        element: StudyList
    }

];