import React from 'react';
import { StyledFooterSocial,StyledFooterSocialText, StyledFooterSocialLink, StyledFooterSocialIcons, StyledFooterSocialMenu  } from "./SocialList.styled";
import { ReactComponent as FaceIcon } from "../../assets/svg/face.svg";
import { ReactComponent as InstaIcon } from "../../assets/svg/instagram.svg";
import { ReactComponent as TwittIcon } from "../../assets/svg/twitter.svg";
import { ReactComponent as YouIcon } from "../../assets/svg/youtube.svg";

export const SocialList = () => {
    return (
        <>
            <StyledFooterSocial>
                <StyledFooterSocialText>Ми у соцмережах</StyledFooterSocialText>
                <StyledFooterSocialIcons>
                        <StyledFooterSocialLink href="#">
                            <FaceIcon styles={{ width: "24px", height: "24px" }} />
                        </StyledFooterSocialLink>
                        <StyledFooterSocialMenu>
                            <StyledFooterSocialLink href="#">
                                <InstaIcon styles={{ width: "24px", height: "24px" }} />
                            </StyledFooterSocialLink>
                        </StyledFooterSocialMenu>
                        <StyledFooterSocialMenu>
                            <StyledFooterSocialLink href="#">
                                <TwittIcon styles={{ width: "24px", height: "24px" }} />
                            </StyledFooterSocialLink>
                        </StyledFooterSocialMenu>
                        <StyledFooterSocialMenu>
                            <StyledFooterSocialLink href="#">
                                <YouIcon styles={{ width: "24px", height: "24px" }} />
                            </StyledFooterSocialLink>
                        </StyledFooterSocialMenu>
                </StyledFooterSocialIcons>
            </StyledFooterSocial>
        </>
  );
};
