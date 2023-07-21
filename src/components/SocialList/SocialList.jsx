import React from 'react';
import { StyledFooterSocial,StyledFooterSocialText,StyledFooterSocialIcons,StyledFooterSocialMenu,StyledFooterIconsSocial  } from "./SocialList.styled";
import facebookIcon from "../../assets/img/facebook.png";
import instagramIcon from "../../assets/img/instagram.png";
import twitterIcon from "../../assets/img/twitter.png";
import youtubeIcon from "../../assets/img/youtube.png";

export const SocialList = () => {
    return (
        <>
            <StyledFooterSocial>
                <StyledFooterSocialText>МИ У СОЦМЕРЕЖАХ</StyledFooterSocialText>
                <StyledFooterSocialIcons>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <StyledFooterIconsSocial src={facebookIcon} alt="Facebook Icon" />
                        </a>
                    </StyledFooterSocialMenu>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <StyledFooterIconsSocial src={instagramIcon} alt="Instagram Icon" />
                        </a>
                    </StyledFooterSocialMenu>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <StyledFooterIconsSocial src={twitterIcon} alt="Twitter Icon" />
                        </a>
                    </StyledFooterSocialMenu>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <StyledFooterIconsSocial src={youtubeIcon} alt="Youtube Icon" />
                        </a>
                    </StyledFooterSocialMenu>
                </StyledFooterSocialIcons>
            </StyledFooterSocial>
        </>
  );
};
