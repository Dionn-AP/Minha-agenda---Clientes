import {
    TextContentTopSplash,
    ImageSplashOne,
    WhrapperView,
    ButtonStarted,
    ContainerButton,
    TextButtonStarted
} from './styles';

import { ImageSourcePropType } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface IGetStartedViewProps {
    image: ImageSourcePropType;
    text: string;
}

export default function GetStartedView({ image, text }: IGetStartedViewProps) {
    const nav = useNavigation();

    return (
        <WhrapperView>
            <TextContentTopSplash>{text}</TextContentTopSplash>
            <ImageSplashOne
                source={image}
            />
            {text == "Aproveite!"
                && <ContainerButton>
                    <ButtonStarted
                        onPress={() => nav.navigate("Login")}
                    >
                        <TextButtonStarted>COMEÇAR</TextButtonStarted>
                    </ButtonStarted>
                </ContainerButton>
            }
        </WhrapperView>
    )
};