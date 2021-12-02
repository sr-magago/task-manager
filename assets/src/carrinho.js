export const carrinho = () => {

    const modeloItem = (item) => {
        return /*html*/`
        <li data-id="${item.id}">
            <span>${item.titulo}</span>
            <input type="text">
            <button>+</button>
            <button>-</button>
            <b>100</b>
        </li>   
        `
    }

    const modeloLista = (itensDaLista, modeloDeItem) => {
       return itensDaLista.map( (item) => {
            return modeloItem(item)
        } ).join("")
        // return /*html*/`
        // <ul>${itensDaLista}</ul>
        // `
    }

    return{
        modeloItem,
        modeloLista
    }

}

