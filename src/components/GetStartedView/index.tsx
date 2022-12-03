import {
    WhrapperMain,
    TextContentTopSplash,
    ImageSplashOne,
    ButtonStarted,
    TextButtonStarted
} from './styles';

import { ImageSourcePropType } from "react-native";

interface IGetStartedViewProps {
    image: ImageSourcePropType;
    text: string;
    page: number;
}

export default function GetStartedView({ image, text, page }: IGetStartedViewProps) {
    return (
        <WhrapperMain>
            <TextContentTopSplash>{text}</TextContentTopSplash>
            <ImageSplashOne
                source={image}
            />
            {page == 3 &&
                <ButtonStarted>
                    <TextButtonStarted>COMEÇAR</TextButtonStarted>
                </ButtonStarted>
            }
        </WhrapperMain>
    )
};