export function afterLast({
    value = "", 
    delimiter
} : {
    value?: string,
    delimiter: string
}) {
    return delimiter === "" ? value : value.split(delimiter).pop();
}