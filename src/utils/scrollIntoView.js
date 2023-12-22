export default function ScrollToDiv(id) {
    const element = document.getElementById(id);
    if (element !== null){
        element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    }
}