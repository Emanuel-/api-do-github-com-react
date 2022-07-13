import React from "react";
import * as S from "./styled";

const RepositoryItem = ({ name, linkToRepo, fullName }) => {
  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>full name:</S.WrapperFullName>
      <S.WrapperLink href={linkToRepo} target="_blank" rel="noreferrer">
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
};

export default RepositoryItem;


/*import React from 'react';

const RepositoryItem = ( { name, linkToRepo, fullName } ) => {
    return(
        <div>
        <h2>{name}</h2>
        <h4>full name</h4>
        <a href ={linkToRepo} target="_blank" rel="noreferrer">
            {fullName}
        </a>
               
    </div>
    );
};

export default RepositoryItem;*/