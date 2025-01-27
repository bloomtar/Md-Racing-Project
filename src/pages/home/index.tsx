import styled from "styled-components";
import GreenButton from "../../components/button/GreenButton";
import MadDg from "../../components/text/MadDog";
import Cardano from "../../components/text/Cardano";
import Ourfocus from "../../components/text/Ourfocus";
import Sales from "../../components/text/Sales";
import FlowImgs from "./FlowImgs";
import { useState } from "react";
import * as S from './index.styled';

// TypeScript interface for props

interface HomePageProps {

}

// Functional component
const HomePage: React.FC<HomePageProps> = () => {

    const [isMenu, setMenu] = useState(false);

    return (
        <S.HomeDiv>
            <S.AboutDiv>
                {/* <S.MdRaceImgDiv></S.MdRaceImgDiv> */}
                <S.MdRaceImg src="./src/assets/img/MDCC_RacingLogo1.png"></S.MdRaceImg>
                <S.DownButtonDiv>
                    <GreenButton text="DOWNLOAD GAME"></GreenButton>
                    <S.DownBtnText>**Windows Compatible Only**</S.DownBtnText>
                </S.DownButtonDiv>
            </S.AboutDiv>
            <S.VideoDiv>
                <S.VideoText>
                    MD Racing is our UE5 developed racing game which utilizes all of our NFT collections and brings mass utility to each and every individual asset.
                </S.VideoText>
                {/* <S.Hyper_Video></S.Hyper_Video> */}
                <S.HyperVideoImg src="./src/assets/img/HypeVideo.png"></S.HyperVideoImg>
            </S.VideoDiv>
            <S.GameModeDiv>
                <S.GarageText>GAME MODES</S.GarageText>
                <S.TextPanel>
                    <S.TextItem>
                        <S.PracticeText>PRACTICE</S.PracticeText>
                        <S.PracticeText_explain>
                            This game mode will allow users to play solo and build their skills when it comes to racing. Users will be able to get familiar with the cars they own and the tracks that they race on.
                        </S.PracticeText_explain>
                    </S.TextItem>
                    <S.TextItem>
                        <S.PracticeText>UNRANKED</S.PracticeText>
                        <S.PracticeText_explain>
                            This multiplayer game mode will be for users to play against others for fun and earn achievements for their MD Racers profiles. Unranked mode will include 4, 6, and 8 player races.
                        </S.PracticeText_explain>
                    </S.TextItem>
                    <S.TextItem>
                        <S.PracticeText>RANKED</S.PracticeText>
                        <S.PracticeText_explain>
                            This multiplayer game mode will be for the skilled users who want to earn big. Players will be able to use their MD Tokens to stake into races against other players. There will be different tiers depending on the skill of the player. We will be having a monthly leaderboard which will display the players who have won the most races in ranked mode (top players for the month will be rewarded).Ranked mode will include 4,6 and 8 players races.
                        </S.PracticeText_explain>
                    </S.TextItem>
                </S.TextPanel>
                <S.MDCCImg src = "./src/assets/img/MDCC_Website_Roadmap1.png"></S.MDCCImg>
            
            </S.GameModeDiv>

            <S.GameModeDiv>
                <S.GarageText>GARAGE</S.GarageText>
                <S.GrageExplainP>
                    The garage will be a showroom to display and customize your assets.
                    It will feature 12 spaces where you will have slots (A1-A12).
                    Each slot will have 3 categories for customizing assets for racing in game (Mad Dog, Car, Car Skin).
                    The main purpose of the garage is to customize the statistics and looks of your car.
                    Each Car Model from our NFT collection is based on a scale of Speed, Acceleration, Handling, and Braking.
                    To improve your cars stock statistics you will need a Mad Dog and Car Skin NFT.
                    Combining all three assets together in a slot will give you your best statistics to start racing!
                </S.GrageExplainP>
                <S.TextPanel>
                    <S.TextItem>
                        <S.PracticeText>CATEGORY 1: MAD DOG</S.PracticeText>
                        <S.PracticeText_explain>
                            Mad Dog Category will display all of your Mad Dog assets you own. Depending on the rank of your Mad Dog (#1-9999) it will improve your car statistics (Speed, Acceleration, Handling, Braking). The higher ranked Mad Dog you have the better it will be for improving your cars.
                        </S.PracticeText_explain>
                    </S.TextItem>
                    <S.TextItem>
                        <S.PracticeText>CATEGORY 2: CAR </S.PracticeText>
                        <S.PracticeText_explain>
                            This multiplayer game mode will be for users to play against others for fun and earn achievements for their MD Racers profiles. Unranked mode will include 4, 6, and 8 player races.
                        </S.PracticeText_explain>
                    </S.TextItem>
                    <S.TextItem>
                        <S.PracticeText>CATEGORY 3: CAR SKIN</S.PracticeText>
                        <S.PracticeText_explain>
                            This multiplayer game mode will be for the skilled users who want to earn big. Players will be able to use their MD Tokens to stake into races against other players. There will be different tiers depending on the skill of the player. We will be having a monthly leaderboard which will display the players who have won the most races in ranked mode (top players for the month will be rewarded). Ranked mode will include 4, 6, and 8 player races.
                        </S.PracticeText_explain>
                    </S.TextItem>
                </S.TextPanel>
                <S.GarageImg src="./src/assets/img/MDCC_Garage-012.png"></S.GarageImg>
            </S.GameModeDiv>
            <S.RacerProfileDiv>
                <S.GarageText>RACER PROFILE</S.GarageText>
                <S.GrageExplainP>
                    Racer Profile will be your player card to showcase to other players in the community. It will display all the NFTs you own, your racing statistics with wins, earnings, achievements, your MD Racer which will be your 3D avatar identity in game, and all your friends. You will also have a customizable biography with a Mad Dog profile picture.
                </S.GrageExplainP>
                <S.ImgsDiv>
                    <S.Ellipse1ImgDiv></S.Ellipse1ImgDiv>
                    <S.Ellipse2ImgDiv></S.Ellipse2ImgDiv>
                    <S.Ellipse3ImgDiv></S.Ellipse3ImgDiv>
                </S.ImgsDiv>
            </S.RacerProfileDiv>

            <S.AchievementsDiv>
                <S.GarageText>ACHIEVEMENTS</S.GarageText>
                <S.GrageExplainP>
                    We will have a variety of achievements for players to earn wether it’s a Mad Dog you own, or in-game quests. Earning achievements will grant users MD Tokens, NFT airdrops, and special badges to display on your Racer Profile.
                    (More Details to be released as future updates come)
                </S.GrageExplainP>
                <S.StarImgsDiv>
                    <S.StarImg src="./src/assets/img/Star1.png"></S.StarImg>
                    <S.StarImg src="./src/assets/img/Star1.png"></S.StarImg>
                    <S.StarImg src="./src/assets/img/Star1.png"></S.StarImg>
                    <S.StarImg src="./src/assets/img/Star1.png"></S.StarImg>
                    <S.StarImg src="./src/assets/img/Star1.png"></S.StarImg>
                </S.StarImgsDiv>
            </S.AchievementsDiv>

            <S.AchievementsDiv>
                <S.GarageText>UPCOMING RELEASE OF MD RACING</S.GarageText>
                <S.VersionTextP>Version 1.01</S.VersionTextP>
                <S.VersionExplainP>
                    Our first version of MD Racing will be released to our community on November 28th, 2022.
                    Users will be able to download MD Racing to their desktop, create their own account and connect their wallet.
                    Users will have access to the garage to customize their cars and utilize all assets they own such as Fully Assembled Cars, Mad Dogs, and Car Skins.
                    Users will also have access to practice mode to play solo to learn car controls/physics and learn 3 tracks that have been made for racing when we release Unranked and Ranked mode in future versions.
                    More tracks to be released in future updates.
                </S.VersionExplainP>
                <S.Version2TextP>Version 1.02</S.Version2TextP>
                <S.VersionExplainP>
                    Our second version of MD Racing will be released in Q1 2022, we will introduce multiplayer for our community to race each other in Unranked Mode.
                    The first version of Racer Profile will be released in this version as well.
                    More details to be announced after V1.01 releases November 28th.
                </S.VersionExplainP>
                <S.Version2TextP>Version 1.03</S.Version2TextP>
                <S.VersionExplainP>
                    Our third version of MD Racing will be released in Q2 2022, we will introduce ranked mode and integration of MD Tokens.
                    Users will be able to use their MD Tokens to race against others in ranked races.
                    There will also be achievements to earn through Racer Profiles to receive MD Tokens, NFT Airdrops, and Special Badges.
                    More information to be released in Q1 2022.
                </S.VersionExplainP>

            </S.AchievementsDiv>

            <S.ImportDiv>
                <S.GarageText>IMPORTANT FACTS TO KNOW</S.GarageText>
                <S.MDModificationDiv>
                    <S.MDModficationP>
                        MD Modification Packs will be an important way of earning car accessories such as Car Skins which help improve your car.
                        In the future we plan to release more car accessories such as wheels, spoilers, engines, and more! Each car accessory will be based on 4 Tiers, Diamond, Gold, Silver, Bronze.
                        To earn MD Modification Packs you must be holding MD Racers.
                        Every 3 months each MD Racer held will receive 1 MD Modification Package.
                    </S.MDModficationP>
                    <S.MDModficationP>
                        We also plan on releasing a Rent-a-Car feature for those who hold many cars that are not in use.
                        Holders can put their car up for rent and give opportunity to other users who don’t own cars or want to try a new car to test and play.
                        We plan on releasing this update in Q3 of 2023.
                    </S.MDModficationP>
                    <S.MDModficationP>
                        As of right now the only way to upgrade your car statistics is through owning Mad Dogs or Car Skin NFTs.
                    </S.MDModficationP>
                    <S.ButtonDiv>
                        <GreenButton text="SEE PREVIEW OF GAME"></GreenButton>
                    </S.ButtonDiv>
                </S.MDModificationDiv>
            </S.ImportDiv>


            <S.FooterDiv>
                <S.FrequentlyDiv>
                    <S.FrequentlyP>
                        FREQUENTLY ASKED QUESTIONS
                    </S.FrequentlyP>
                </S.FrequentlyDiv>
                <S.QuestionsDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>WHAT IS MD RACING?</S.ReleaseP>
                        <S.FirstP>
                            MD Racing is a game built on Unreal Engine 5 with the utilizations of Mad Dog Car Club Assets.
                        </S.FirstP>
                    </S.FirstQuestionDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>What modes are available in the game?</S.ReleaseP>
                        <S.FirstP>
                            We will have ranked mode, un-ranked mode, and practice.
                        </S.FirstP>
                    </S.FirstQuestionDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>What are the functionalities of the game?</S.ReleaseP>
                        <S.FirstP>You can connect your wallet, and play the game if you have the assets of MDCC that are needed.</S.FirstP>
                    </S.FirstQuestionDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>How can I control when playing the game?</S.ReleaseP>
                        <S.FirstP>
                            We will be making controller integrations but you can use the basic functionalities of the arrows on your laptop in order to accelerate, steer, and brake.
                        </S.FirstP>
                    </S.FirstQuestionDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>What software will I have to download in order to play the game?</S.ReleaseP>
                        <S.FirstP>
                            ou will not need to download software in order to play.
                        </S.FirstP>
                    </S.FirstQuestionDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>When will the first version be released?</S.ReleaseP>
                        <S.FirstP>
                            V1.01 will be released November 28th, 2022. Users will be able to download MD RACING, connect their wallet, view all their NFT assets, customize their car, and race in practice mode on any of the 3 tracks playable.
                        </S.FirstP>
                    </S.FirstQuestionDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>When will Multiplayer be accessible to be played?</S.ReleaseP>
                        <S.FirstP>
                            Multiplayer will be introduced in V1.02 coming out in Q1 2022.
                            Unranked mode will be the first multiplayer mode we release where players can race against others in 4, 6, 8 player races.
                        </S.FirstP>
                    </S.FirstQuestionDiv>
                    <S.FirstQuestionDiv>
                        <S.ReleaseP>Will MD Racers be incorporated into the game?</S.ReleaseP>
                        <S.FirstP>
                            MD Racers will be incorporated in Q2 2022, this will be your 3D Identity in game to display in racer profile, as well as having your Mad Dog as your PFP.
                        </S.FirstP>
                    </S.FirstQuestionDiv>
                </S.QuestionsDiv>

                <S.LastFooterDiv>
                    <S.LastFooterP>© MAD DOG CAR CLUB<br></br>
                        ALL RIGHTS RESERVED<br></br>
                        TERMS & POLICY
                    </S.LastFooterP>
                </S.LastFooterDiv>

            </S.FooterDiv>

        </S.HomeDiv>
    );
};

export default HomePage;