export const createOption = (text,value) => {
    const el = document.createElement("option")
    el.textContent = text
    el.value = value
    return el
}

export const createButton = (id, classNames, text, clickHandler = null) => {
    const btn = createHTMLElement("button",id,classNames)
    btn.textContent = text
    if(clickHandler)
        btn.onclick = clickHandler
    return btn
}

export const createDiv = (id = "",classNames = "",  text = "") => {
    const el = createHTMLElement("div", id, classNames)
    if(text !== undefined)
        el.textContent = text
    return el
}

export const createTextArea = (id = "",classNames = "", changeHandler) => {
    const el = createHTMLElement("textArea",id,classNames)
    el.onchange = changeHandler
    return el
}

export const createDivWithBackdrop = (id, imageUrl, classNames) => {
    const el = createHTMLElement("div",id,classNames)
    if(imageUrl !== null){
        el.style.background = `url('${imageUrl}')`
        el.style.backgroundSize = "cover"
    }
    return el
}

export const createParagraph = (text,id,classNames) => {
    const el = createHTMLElement("p",id,classNames)
    el.textContent = text
    return el
}

export const createImageElement = (id,imageUrl) => {
    const el = createHTMLElement("img",id)
    el.src = imageUrl
    return el
}

const createHTMLElement = (tagName, id, classNames = "") => {
    const el = document.createElement(tagName)
    el.id = id ? id : el.id
    el.className = classNames
    return el
}