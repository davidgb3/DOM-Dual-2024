// trae la data y la retorna

export const getDataPrice = async (url) => {
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error(`Error al obtener la data -> ${response.status}`);
        };
        return response.json();
    } catch (error) {
        console.log(error);
    }
};