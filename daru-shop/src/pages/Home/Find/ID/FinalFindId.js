import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';



const MainLink = styled(Link)`
    display:flex;
    padding: 0;
    margin-bottom: 100px;
    align-items: center;
    justify-content: center;
    width:380px;
    height:48px;
    font-size: 20px;
    color:white;
    background-color:#4DAF9A;
    border: 1px solid $GRAY-6;
    border-radius: 2px;
    text-decoration: none;
    cursor: pointer;
`


const FinalFindId = () => {
    return (
        <div>
            <article className="find-article">
                <span className="find-input-container-text">가입하신 이메일을</span>
                <span className="find-input-container-text">
                    휴대폰 문자로 발송하였습니다.
                </span>
            </article>
            <MainLink to="/">
                메인으로 돌아가기
            </MainLink>
        </div>
    );
};

export default FinalFindId;