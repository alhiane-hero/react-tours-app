import styled from 'styled-components';

export const MainEl = styled.main`
    width: 60vw;
    margin: 5rem auto;
    @media (max-width: 576px) {
        width: 100%;
        padding: 0 15px;
    }
`;

export const ErrorMsg = styled.div`
    text-align: center;
`;

export const ErrorMsgHeading = styled.h2`
    font-size: 2.5rem;
    line-height: 1;
    text-align: center;
    color: #102a42;
    margin-bottom: 2rem;
`;

export const RefreshBtn = styled.button`
    display: block;
    padding: .40rem .75rem;
    margin: 0 auto;
    background-color: #49a6e9;
    border: none;
    border-radius: .5rem;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    cursor: pointer;
`;

export const ToursHeading = styled.div`
    position: relative;
    margin-bottom: 4rem;
`;

export const ToursHeadingH2 = styled.h2`
    font-size: 2.5rem;
    line-height: 1;
    text-align: center;
    color: #102a42;
    margin-bottom: .75rem;
`;

export const ToursHeadingLine = styled.div`
    width: 6rem;
    height: .25rem;
    background-color: #49a6e9;
    margin: 0 auto;
`;

export const TourEl = styled.div`
    background-color: #fff;
    margin: 2rem 0;
    border-radius: .5rem;
    overflow: hidden;
`;

export const ImgFluid = styled.img`
    width: 100%;
    height: 20rem;
    object-fit: cover;
`;

export const TourBody = styled.div`
    padding: 1.5rem 2rem;
`;

export const TourInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.7rem;
`;

export const TourInfoName = styled.h4`
    color: #102a42;
`;

export const TourInfoPrice = styled.span`
    display: block;
    padding: .25rem .5rem;
    background-color: #ebf7ff;
    border-radius: .25rem;
    font-weight: 700;
    color: #49a6e9;
`;

export const TourDesc = styled.p`
    margin-bottom: 1.7rem;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7rem;
    color: #617d98;
`;

export const Btn = styled.button`
    display: block;
    background-color: transparent;
    font-size: 16px;
    cursor: pointer;
`;

export const ReadMoreBtn = styled(Btn)`
    padding: 0 !important;
    border: none;
    color: #49a6e9;
`;

export const RemoveTourBtn = styled(Btn)`
    padding: .40rem .75rem;
    margin: 0 auto;
    border: 1px solid #bb2525;
    border-radius: .5rem;
    color: #bb2525;
`;

export const LoadingEl = styled.div`
    text-align: center;
`;

export const LoadingHeading = styled.div`
    font-size: 4rem;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    color: #102a42;
`;