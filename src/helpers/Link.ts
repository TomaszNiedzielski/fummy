export const isLinkExternal = (value: string) => {
    if (value.slice(0, 8) === 'https://') {
        return true;
    }

    return false;
}