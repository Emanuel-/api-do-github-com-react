import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    
`;

export const WrapperImage = styled.img`
    border-radius:50%;
    width: 200px;
    margin: 8px;
    
`;

export const WrapperInfoUser = styled.div`
    display: flex;
    flex-direction:column;
    align-items: flex-start;
    justify-content: space-between;
    height: 160px;
    margin-left: 8px;
    h1{
        font-size: 32px;
        font-weight: bold;
    }

    h3{
        font-size: 18px;
        font-weight: bold;
    }

    h4{
        font-size: 16px;
        font-weight: bold;
    }
`;


export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div{
        margin-right:8px;
        margin-top:8px;
        text-align: center;
        //background-color: red;
    }
    //background-color: red;
    
`;

export const WrapperUserGeneric = styled.div`
    display: flex;
    align-items: center;
    margin-top:8px;
    h3{
        
        margin-right:8px;
    }
    a{
        font-size: 18px;
        color: blue;
        font-weight: bold;
    }
    a:hover{
        text-decoration: underline overline;
    }
    //background-color: red;
    
`;