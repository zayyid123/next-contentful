const CovertAltFormat = (text) => {
    const convertedText = text.toLowerCase().replace(/\s+/g, '-');
    return convertedText;
}

export default CovertAltFormat