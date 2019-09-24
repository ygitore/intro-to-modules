
const printToDom= (divId, toPrint)=>{
    const selectDiv = document.getElementById(divId);
    selectDiv.innerHTML = toPrint;
}
const makeStore = ()=>{
    const domString = 'hi new store';
    printToDom('store-container', domString);
}


export default {makeStore};