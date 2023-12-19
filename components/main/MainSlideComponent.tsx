import { FC } from "react";


interface PropsMainSlideComponent {
    mainSlideInfo: mainSlideInfoTypes[];
}

type mainSlideInfoTypes = {
    img: string;
    title: string;
    desc?: string;
}

export const MainSlideComponent: FC<PropsMainSlideComponent> = ({ mainSlideInfo }) => {
    return (
        <main>
            {/* usar swiper para el slide */}
            hi
        </main>
    )
}