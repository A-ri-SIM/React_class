import { Menus } from "./Menus";
import { WeekMenu } from "./WeekMenu";

const menus = [
    {
        week:"월요일",
        breakfast:"시리얼",
        lunch:"연어포케",
        dinner:"마라 치즈 타코야끼"
    },
    {
        week:"화요일",
        breakfast:"국밥",
        lunch:"치킨타코",
        dinner:"토마토파스타"
    },
    {
        week:"수요일",
        breakfast:"샌드위치",
        lunch:"햄버거",
        dinner:"프렌치토스트"
    }
];

export const FoodMenu = () => {
    return (
        <div>
            {/* <Menus breakfast="시리얼" lunch="연어포케" dinner="마라치즈타코야끼" /> */}
            <WeekMenu menuList={menus} />
        </div>
    );
};