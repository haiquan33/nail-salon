export const matchScreen = (mediaQuery: `(${ string })`): boolean => {
    const media = window?.matchMedia(mediaQuery);

    return media.matches;
}
