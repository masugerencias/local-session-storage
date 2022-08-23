function repetido(){
    let elemento1=document.getElementById('palabra').value

localStorage.setItem(`nombres ${contador++}`, JSON.stringify(elemento1));

}

 
function retrieve(){
    var retrieve = localStorage.getItem('nombres');
    var elemento1 = JSON.parse(retrieve);

    console.log(typeof elemento1); 
    console.log(elemento1);
}

const allStorage = ( ) => {


    var values = []
    var keys = Object.keys(localStorage);
    var i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
    }

    return values;

}
console.log(allStorage());


const verRepes = (a) => {

    let arr = a// es la unica 
//esta constante de la funcion flecha tiene que declararse en una variable para manipular.a
console.log(a);
    let ordenado=arr.sort(); //ordenar el array de nombres

    let contador=0;
    let palabrasRepetidas=[]

     for (let i=0;i<ordenado.length;i++)  {
         if(ordenado[i]==ordenado[i+1]){
             palabrasRepetidas.push(ordenado[i])
         }
        
         

     }
    console.log(palabrasRepetidas);
    
}

verRepes(allStorage);