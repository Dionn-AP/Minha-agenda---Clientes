

export function getHeaders(iToken?: string) {
    const headers = {
      headers: {
        Authorization: `Bearer ${iToken}`
      }
    };
    return headers;
  }

export const upperCaseName = (text: string) => {
    let upperText: string;
    upperText = text.substring(0, 1).toUpperCase() + text.substring(1, text.length).toUpperCase()
    return upperText;
}

export const regexValidationEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/