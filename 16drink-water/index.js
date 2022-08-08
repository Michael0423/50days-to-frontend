const totalVal = 2000;
const cupVal = 250;
const totalHeight = document.getElementById('total_cup').offsetHeight;

const cupDivs = document.getElementsByClassName('cup');
Array.from(cupDivs).forEach((e, i) => {

    e.addEventListener('click', function(evt){ 
        if(!evt.target.classList.contains('selected')){
            Array.from(cupDivs).map((v, j)=> {
                if(j <= i){
                    v.classList.add('selected');
                }
            })
        }else{
            Array.from(cupDivs).map((v, j)=> {
                if(j >= i){
                    v.classList.remove('selected');
                }
            });
        }      
        
        calculate();
    });
});


function calculate() {
    const selectCup = document.getElementsByClassName('selected');
    
    const drankVal = selectCup.length * cupVal;
    const remainedVal = totalVal - drankVal;
    const percent = drankVal / totalVal * 100;
    
    const rDiv = document.getElementById('remained');
    const dDiv = document.getElementById('drank');
    dDiv.style.visibility = 'visible';
    if(selectCup.length === 0){
        dDiv.style.height = 0;
        dDiv.style.visibility = 'hidden';
    }else if(selectCup.length === 8){
        rDiv.style.height = 0;
        dDiv.style.height = `${totalHeight}px`;
    }else{
        dDiv.style.height = `${totalHeight * percent / 100}px`;
    }

    const remainedDiv = document.getElementById('remained_value');
    remainedDiv.textContent = remainedVal / 1000;
    const drankDiv = document.getElementById('drank_percent');
    drankDiv.textContent = percent;

}