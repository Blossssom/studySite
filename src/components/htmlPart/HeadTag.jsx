function HeadTag() {
    return(
        <>
            <div>
                <p>
                    Title : 브라우저 상단의(favicon 옆) 페이지 이름으로 사용될 수 있으며 SEO에 영향을 준다. 
                </p>
                <p>
                    meta : 문서에 관한 정보(표시방식, 제작자(소유자), 내용, 키워드 등)를 검색엔진과 브라우저에 전달한다.
                    <br />
                    - charset : 문자의 인코딩 방식 표기(현재는 utf-8이 대표적이지만 과거 euc-kr을 종종 볼 수 있음)
                    <br />
                    - name : 정보의 종류를 의미 (author, description 등 사이트의 설명을 전달)
                    <br />
                    - content : name에서 명시한 정보에 대한 값
                </p>
                <p>
                    Link : css 혹은 favicon 등을 불러올 때 사용하는 태그이며 외부 자료들을 현재 html에 가져와 사용한다.
                    <br />
                    - rel : 현재 페이지와 링크파일의 관계이며 필수요소
                    <br />
                    - href : 링크파일의 경로표시
                    
                </p>
            </div>
        </>
    );
}

export default HeadTag;