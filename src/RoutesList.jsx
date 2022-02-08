import ContentList from "./components/ContentList";
import HeadTag from "./components/htmlPart/HeadTag";
import HtmlPartMain from "./components/htmlPart/HtmlPartMain";

export default [
    {
        path: '/',
        element: ContentList
    },

    {
        path: '/htmlpart_main',
        element: HtmlPartMain
    },

    {
        path: '/htmlpart_main/headtag',
        element: HeadTag
    }
];