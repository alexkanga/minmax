function min(tab){
//tester que tab est un tableau
const isNumber = el => typeof el === 'number';

if(Array.isArray(tab) && tab.every(isNumber) && tab.length!== 0 ){
    let minimum = tab[0];

    for (const el of tab){
        if(minimum>el){
            minimum = el;
        }
    }

    return minimum;
 }
  
 
}

function max(tab){
    //tester que tab est un tableau
    const isNumber = el => typeof el === 'number';
    
    if(Array.isArray(tab) && tab.every(isNumber) && tab.length!== 0 ){
        let maximum = tab[0];
    
        for (const el of tab){
            if(maximum<el){
                maximum = el;
            }
        }
    
        return maximum;
     }
      
     
    }


function min_max(tab){
return [min(tab),max(tab)];
}

const tableau = [0,1,2,-5,4,5,6,7,8,9];

console.log(min(tableau));
console.log(max(tableau));
console.log(min_max(tableau));