import { TabProps } from './tab.interface';
import * as S from './tab.styles';

export const Tabs = (Props: TabProps) => {
    return (
        <S.StyledTabsContainer
            value={Props.isActive ? 0 : false}
            onChange={(_, value) => {
                if (Props.onClick) {
                    Props.onClick();
                }
            }}
            variant="scrollable"
            scrollButtons="auto"
        >
            <S.TabsWrapper>
                <S.StyledTab
                    label={<S.TabLabel>{Props.label}</S.TabLabel>}
                    disableRipple
                    value={0}
                />
            </S.TabsWrapper>
        </S.StyledTabsContainer>
    );
}


export default Tabs;
