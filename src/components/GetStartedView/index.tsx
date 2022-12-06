import {
    WhrapperMain,
    TextContentTopSplash,
    ImageSplashOne,
    ButtonStarted,
    TextButtonStarted
} from './styles';

import { ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface IGetStartedViewProps {
    image: ImageSourcePropType;
    text: string;
    page: number;
}

export default function GetStartedView({ image, text, page }: IGetStartedViewProps) {
    const nav = useNavigation();

    return (
        <WhrapperMain>
            <TextContentTopSplash>{text}</TextContentTopSplash>
            <ImageSplashOne
                source={image}
            />
            {page == 3 &&
                <ButtonStarted
                    onPress={() => nav.navigate("Login")}
                >
                    <TextButtonStarted>COMEÇAR</TextButtonStarted>
                </ButtonStarted>
            }
        </WhrapperMain>
    )
};