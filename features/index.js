function copyText(htmlElement)
{
    if (!htmlElement) {
        return;
    }
    let elementText = htmlElement.innerText;
    let inputElement = document.create('input');
    inputElement.setATTRBUTE('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
    document.execCommand('copy');
    inputElement.parentNode.removeChild(inputElement);
}

document.querySelector('#comment-content').onclick
function()
{
    copyText(document.querySelector('#text'));
}