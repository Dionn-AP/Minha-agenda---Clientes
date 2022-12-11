

export const upperCaseName = (text: string) => {
    let upperText: string;
    upperText = text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toUpperCase()
    return upperText;
}