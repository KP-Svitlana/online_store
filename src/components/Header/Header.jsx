import {Localisation} from "../Localisation/Localisation";
import {Logo} from "../Logo/Logo";
import { UserNav } from "../UserNav/UserNav";
import { FilterNav } from "../FilterNav/FilterNav";
import { SearchPanel } from "../SearcPanel/SearcPanel";
import { 
  HeaderWrap, 
  HeaderBlockUser,
  HeaderNavApp 
} from "./Header.styled";

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
