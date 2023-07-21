import React from 'react';
import { StyledFooterSocial,StyledFooterSocialText,StyledFooterSocialIcons,StyledFooterSocialMenu,StyledFooterIconsSocial  } from "./SocialList.styled";
import { ReactComponent as FaceIcon } from "../../assets/svg/face.svg";
import { ReactComponent as InstaIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as TwittIcon } from "../../assets/svg/twitter.svg";
import { ReactComponent as YouIcon } from "../../assets/svg/youtube.svg";

export const SocialList = () => {
    return (
        <>
            <StyledFooterSocial>
                <StyledFooterSocialText>МИ У СОЦМЕРЕЖАХ</StyledFooterSocialText>
                <StyledFooterSocialIcons>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <FaceIcon />
                        </a>
                    </StyledFooterSocialMenu>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <InstaIcon />
                        </a>
                    </StyledFooterSocialMenu>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <TwittIcon />
                        </a>
                    </StyledFooterSocialMenu>
                    <StyledFooterSocialMenu>
                        <a href="#" target="_blank" rel="icon">
                        <YouIcon />
                        </a>
                    </StyledFooterSocialMenu>
                </StyledFooterSocialIcons>
            </StyledFooterSocial>
        </>
  );
};