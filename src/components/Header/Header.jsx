import { Localisation } from "../Localisation";
import { Logo } from "../Logo/Logo";
import { UserNav } from "../UserNav";
import { FilterNav } from "../FilterNav";
import { SearchPanel } from "../SearchPanel";
import { HeaderWrap, HeaderBlockUser, HeaderNavApp } from "./Header.styled";

export const Header = ({}) => {
  return (
    <HeaderWrap>
      <HeaderBlockUser>
        <Localisation />
        <Logo />
        <UserNav />
      </HeaderBlockUser>
      <HeaderNavApp>
        <FilterNav />
        <SearchPanel />
      </HeaderNavApp>
    </HeaderWrap>
  );
};
