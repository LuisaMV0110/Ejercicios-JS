//1
console.log('--------1--------');
function filterNivelEtilico(list,nivelEtilico){
    let array = []
    for(let element of list){
        if(element.abv <= nivelEtilico){
            array.push(element);
        }
    }
    return array; 
}
function propiedadesFilter(list){
    let array = []
        list.forEach(element => {
            array.push({name: element.name,
                abv: element.abv,
                ibu: element.ibu})})
return array
}
console.log(propiedadesFilter(filterNivelEtilico(beers , 5)));
//2
console.log('--------2--------');
function cervezasConMasAlcohol(list){
    let array = []
    array = list.sort((x,y) => y.abv - x.abv)
    const arrayNuevo = array.slice(0,10)
    return arrayNuevo
}
console.log(cervezasConMasAlcohol(beers));
//3
console.log('--------3--------');
function cervezasMenosAmargas(list){
    let array = []
    array = list.filter(element => element.ibu !== null)
    array = array.sort((x,y) => x.ibu - y.ibu)
    const arrayNuevo = array.slice(0,10)
    return arrayNuevo
}
console.log(cervezasMenosAmargas(beers));
//4
console.log('--------4--------');
function arrayModificable(list,properties,boolean){
    let array = []
    array = list.filter(element => element[properties] !== null)
    array = array.sort((x,y) => {
        if(boolean){
            return x[properties] - y[properties]
        }
        else{
            return y[properties] - x[properties]
        }
    });
    return array.slice(0,10);
}
console.log(arrayModificable(beers,'ibu', true));
//5
const $table = document.getElementById('table');

function createRow(list){
    const cervezasTable = list.reduce((acumulador,cerveza) => acumulador += `
    <tr>
    <td>${cerveza.name}</td>
    <td>${cerveza.abv}</td>
    <td>${cerveza.ibu?cerveza.ibu:'N/A'}</td>
    </tr>`,' ')

$table.innerHTML += cervezasTable
}
createRow(beers)
