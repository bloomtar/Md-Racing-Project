import styled from "styled-components";

export const HomeDiv = styled.div`
    text-align: center;
    background-color: black;
    padding-bottom: 70px;
    margin-left: auto;
    margin-right: auto;
`;

export const AboutDiv = styled.div`
    background : url(./src/assets/img/About1.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 0 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
    padding-top: 50px;
`;
export const MdRaceImgDiv = styled.div`
    background: url(./src/assets/img/MDCC_RacingLogo1.png);
    height: 286px;
    max-width: 1440px;
    width: 100%;
    background-size: 100% 100%;
`;
export const MdRaceImg = styled.img`
    height: auto;
    max-width: 1070px;
    width: 100%;
`;
export const DownButtonDiv = styled.div`
    /* height: 96px; */
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
export const DownBtnText = styled.p`
    font-family: Barlow Condensed;
    font-size: 18px;
    font-style: italic;
    font-weight: 500;
    line-height: 19.2px;
    text-align: center;
    /* height: 19px; */
    color: white;
`;
export const VideoDiv =styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    margin-top: 70px;
    align-items: center;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
`;
export const Hyper_Video = styled.div`
    background: url(./src/assets/img/HypeVideo.png);
    width: 100%;
    display: flex;
    height: 681px;
    background-size: 100% 100%;
`;
export const HyperVideoImg = styled.img`
    height: auto;
    max-width: 1440px;
    width: 100%;
`;
export const VideoText = styled.p`
    font-family: Barlow Condensed;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
    color: white;
    
`;
export const GameModeDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    padding: 0px 20px;
    margin-top: 80px;
`;
export const GarageText = styled.p`
    font-family: Barlow Condensed;
    font-size: 65px;
    font-weight: 700;
    line-height: 78px;
    text-align: center;
    color: white;
    max-width: 1440px;
    width: 100%;
`;
export const TextPanel = styled.div`
    display: flex;
    max-width: 1440px;
    width: 100%;
    margin-top: 30px;
    @media screen and (max-width: 950px) {
        flex-direction: column;
        align-items: center;
        max-width: 950px;
        width: 100%;
    }
`;
export const TextItem = styled.div`
    padding: 50px 50px ;
    border-right: solid;
    border-width: 1px;
    border-color: white;
    width: 33.3333333%;
    display: flex;
    flex-direction: column;
    &:last-child{
        border-right: none;
    }
    @media screen and (max-width: 950px) {
        border-right: none;
        border-bottom: solid;
        border-color: white;
        border-bottom-width: 1px;
        max-width: 950px;
        width: 100%;
    }
`;
export const PracticeText = styled.p`
    font-family: Barlow Condensed;
    font-size: 30px;
    font-weight: 600;
    line-height: 36px;
    text-align: left;
    color: white;
`;
export const PracticeText_explain = styled.p`
    font-family: Barlow Condensed;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: left;
    color: white;
`;
export const MDCCImg = styled.img`
    height: auto;
    max-width: 1440px;
    width: 100%;
    margin-top: -144px;
    @media screen and (max-width: 950px) {
        margin-top: -20px;
    }
`;

export const GrageExplainP = styled.p`
    font-family: Barlow Condensed;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: center;
    color: white;
    max-width: 1034px;
    margin-top: 100%;
    margin-top: 30px;
`;
export const GarageImgDiv = styled.div`
    background: url(./src/assets/img/MDCC_Garage-012.png);
    background-size: 100% 100%;
    height: 874px;
    max-width: 1440px;
    width: 100%;
    margin-top: -146px;
    display: flex;
    @media screen and (max-width: 950px) {
        margin-top: -50px;
    }
`;
export const GarageImg = styled.img`
    max-width: 874px;
    width: 100%;
    height: auto;
    margin-top: -160px;
    @media screen and (max-width: 950px) {
        margin-top: 0px;
    }
`;
export const RacerProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 1440px; */
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    padding: 0 20px;
`;
export const ImgsDiv = styled.div`
    display: flex;
    height: 263px;
    align-items: center;
    justify-content: space-between;
    max-width: 1040px;
    width: 100%;
    margin-top: 70px;
    @media screen and (max-width: 829px) {
        flex-direction: column;
        height: auto;
        gap: 50px;
    }
`;
export const Ellipse1ImgDiv = styled.div`
    background: url(./src/assets/img/Ellipse1.png);
    width: 263px;
    height: 263px;
`;
export const Ellipse2ImgDiv = styled.div`
    background: url(./src/assets/img/Ellipse2.png);
    width: 263px;
    height: 263px;
`;
export const Ellipse3ImgDiv = styled.div`
    background: url(./src/assets/img/Ellipse3.png);
    width: 263px;
    height: 263px;
`;
export const AchievementsDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 1440px; */
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-top: 40px;
    padding: 0 20px;
`;
export const StarImgsDiv = styled.div`
    display: flex;
    height: 72px;
    align-items: center;
    justify-content: space-between;
    max-width: 468px;
    width: 100%;
    margin-top: 70px;
`;

export const StarImg = styled.img`
    height: auto;
    width: auto;
    @media screen and (max-width: 511px) {
        width: 50px;
        height: 50px;
    }
`;
export const VersionTextP = styled.p`
    font-family: Barlow Condensed;
    font-size: 21px;
    font-weight: 700;
    line-height: 25.2px;
    text-align: center;
    color: white;
    margin-top: 50px;
`;
export const VersionExplainP = styled.p`
    font-family: Barlow Condensed;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: center;
    color: white;
    max-width: 1034px;
    width: 100%;
`;
export const Version2TextP = styled.p`
    font-family: Barlow Condensed;
    font-size: 21px;
    font-weight: 700;
    line-height: 25.2px;
    text-align: center;
    color: white;
    margin-top: 30px;
`;
export const ImportDiv = styled.div`
    display: flex;
    flex-direction: column;
    /* max-width: 1440px; */
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-top: 120px;
    padding: 0 20px;
    
`;
export const MDModificationDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    gap: 30px;
    align-items: center;
`;
export const MDModficationP = styled.p`
    font-family: Barlow Condensed;
    font-size: 24px;
    font-weight: 400;
    line-height: 28.8px;
    text-align: center;
    color: white;
    max-width: 1440px;
    width: 100%;
`;
export const ButtonDiv = styled.div`
    max-width: 185px;
    width: 100%;
`;

export const MdTokenDiv = styled.div`
    @media screen and (max-width: 693px) {
        margin-top: 0px;
    }
`;

export const FooterDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: 100%;
    margin-top: 50px;
    @media screen and (max-width: 1245px) {
        padding: 0 10px 0 10px;
        max-width: 1245px;
        width: auto;
    }
`;
export const FrequentlyDiv = styled.div`
    height: 79px;
    @media only screen and (max-width: 602px) {
        height: 135px;
    } 
`;
export const FrequentlyP = styled.p`
    font-family: Barlow Condensed;
    font-size: 65px;
    font-weight: 700;
    line-height: 78px;
    color: white;

    @media screen and (max-width: 478px) {
        max-width: 478px;
        width: 100%;
    }
`;
export const QuestionsDiv = styled.div`
    /* height: 555px; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1200px) {
        max-width: 1200px;
        width: 100%;
    }

    @media screen and (max-width: 747px) {
        margin-top: 65px;
    }
    @media screen and (max-width: 602px) {
        margin-top: 95px;
    }
`;
export const FirstQuestionDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-color: white;
    /* height: 33.333%; */
    width: 1193px;
    padding-bottom: 40px;
    @media screen and (max-width: 1200px) {
        max-width: 1200px;
        width: 100%;
    }
`;
export const ReleaseP = styled.p`
    font-family: Barlow Condensed;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: left;
    color: white;
    width: 758px;
    /* height: 54px; */
    margin-bottom: 25px;
    margin-top: 40px;
    margin-left: 39px;

    @media screen and (max-width: 805px) {
        max-width: 805px;
        width: auto;
    }

    @media screen and (max-width: 600px) {
        font-size: 35px;
    }
    @media screen and (max-width: 532px) {
        font-size: 28px;
    }
    @media screen and (max-width: 437px) {
        font-size: 20px;
    }
`;
export const FirstP = styled.p`
    font-family: Barlow Condensed;
    font-size: 21px;
    font-weight: 400;
    line-height: 25.2px;
    text-align: left;
    color: white;
    margin-top: 0px;
    margin-left: 39px;

    @media screen and (max-width: 600px) {
        font-size: 18px;
    }
    @media screen and (max-width: 532px) {
        font-size: 15px;
    }
    @media screen and (max-width: 437px) {
        font-size: 13px;
    }
`;
export const MainDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    border-bottom: solid;
    border-bottom-width: 1px;
    border-color: white;
    height: 200px;
    width: 1193px;
    @media screen and (max-width: 1200px) {
        max-width: 1200px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
    }
    @media screen and (max-width: 793px) {
        height: 250px;
    }

    @media screen and (max-width: 763px) {
        height: 250px;
    }

    @media only screen and (max-width: 602px) {
        height: 337px;
    }

    @media screen and (max-width: 600px) {
        height: 285px;
    }
    @media screen and (max-width: 532px) {
        height: 250px;
    }
    @media screen and (max-width: 498px) {
        height: 275px;
    }
    @media screen and (max-width: 385px) {
        height: 280px;
    }
`;
export const MainP = styled.p`
    font-family: Barlow Condensed;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: left;
    color: white;
    width: 758px;
    height: 54px;
    margin-bottom: 25px;
    margin-top: 40px;
    margin-left: 39px;

    @media screen and (max-width: 805px) {
        max-width: 805px;
        width: auto;
    }

    @media screen and (max-width: 600px) {
        font-size: 35px;
    }
    @media screen and (max-width: 532px) {
        font-size: 28px;
    }
    @media screen and (max-width: 437px) {
        font-size: 20px;
    }
    
`;
export const LastMainP = styled.p`
    font-family: Barlow Condensed;
    font-size: 21px;
    font-weight: 400;
    line-height: 25.2px;
    text-align: left;
    color: white;
    margin-top: 0px;
    width: 1114px;
    padding: 0 39px 0 30px;
    @media screen and (max-width: 1200px) {
        max-width: 1000px;
        width: 100%;
        
    }
    @media screen and (max-width: 1047px) {
        max-width: 1047px;
        width: auto;
    }
    @media only screen and (max-width: 602px) {
        margin-top: 80px;
    }

    @media screen and (max-width: 600px) {
        font-size: 18px;
        margin-top: 40px;
    }
    @media screen and (max-width: 532px) {
        font-size: 15px;
    }
    @media screen and (max-width: 437px) {
        font-size: 13px;
        margin-top: 20px;
    }
`;
export const LastFooterDiv = styled.div`
    width: 474px;
    height: 57px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 79px;
    
    @media screen and (max-width: 485px) {
        max-width: 485px;
        width: auto;
    }
`;
export const LastFooterP = styled.p`
    font-family: Barlow Condensed;
    font-size: 16px;
    font-weight: 500;
    line-height: 19.2px;
    text-align: center;
    color: white;
`;