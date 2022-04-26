const gene=document.querySelector('.gene');
const colonne=document.getElementById('colonne');
const note=document.getElementById('note');
const container=document.getElementById('container');
const modal=document.querySelector('.modal')
const btnx=document.getElementById('btnx')
const formulaire=document.getElementById('vrai-formulaire');
const ajouter=document.querySelector('.btn');
const corbeille=document.getElementById('corbeille');
const btn_corbeille=document.getElementById('btn-corbeille');
var plus=1;
var k=1;

note.disabled=true;

const header=document.getElementById('header')
const show=document.querySelector('.show')



// console.log(formulaire);
////////////////////////////////////////////////////////////////////////////////////////////////////////
var i=0;
couleur=['blue','blueviolet','orangered','chocolate','mediumseagreen'];

var j=0
var entetecouleur=['aqua','violet','orange','goldenrod','mediumspringgreen'];


///////////////////////////////////gère les couleurs/////////////////////////////////////////////////// 




////////////////////////////////////////fonctions//////////////////////////////////////////////////////////


function creer(){
   var span=document.createElement('span');
    span.className='span';
    span.textContent='Colonne'+k;
    span.style.background=entetecouleur[j];
    j++;
    k++;

    span.addEventListener('click',function(){
        span.contentEditable=true;
    })

    var corps=document.createElement('div');
    corps.className='entete-texte';

    corps.style.background=couleur[i];
    i++;

    corps.appendChild(span);

    var supprime=document.createElement('button');
    supprime.className='supprime';
    supprime.innerHTML='X';

    var faynote=document.querySelectorAll('.entete-texte');
    supprime.addEventListener('click',function(){
        if(faynote.length<1){
            note.disabled=true;
            // console.log(faynote);
        }
    })
    
    var lecorps=document.createElement('div');
    lecorps.className='lecorps';
    
    lecorps.appendChild(supprime)

    corps.appendChild(lecorps);

    gene.appendChild(corps);

    supprime.addEventListener('click',function(e){
        if(e.target.parentElement.parentElement.id=='c1'){
            if(plus<=1){
                corps.remove();
                plus--;
                j--;
                i--;
                refresh();
            }else{
                alert('il faut supprimer la premiere colonne en dernier');
                note.disabled=false;
            }

        }else{
            corps.remove();
            plus--;
            j--;
            i--;
            refresh();
        }
        
        //  j--;
        //  i--;
        //  refresh();
    })
       
}

function tache(){
var divtache=document.querySelector('.lecorps');//recuperer un elément crée ici possible en js
var block=document.createElement('div');
block.className='block';

var une_tache=document.createElement('div');
une_tache.className='une-tache';

var divarea=document.createElement('div');
divarea.className='divarea';
var spanarea=document.createElement('span');
spanarea.innerHTML=formulaire[0].value;

une_tache.appendChild(spanarea);

var div2=document.createElement('div');
div2.className='div2';

var date=document.createElement('span');
date.innerHTML=formulaire[1].value;

var début=document.createElement('span');
début.innerHTML=formulaire[2].value;

var fin=document.createElement('span');
fin.innerHTML=formulaire[3].value;

une_tache.append(date,début,fin);

une_tache.append(divarea,div2);

const btn_droite=document.createElement('button');
btn_droite.innerHTML='>>';
btn_droite.className='button-tache';

const btn_gauche=document.createElement('button');
btn_gauche.innerHTML='<<';

btn_gauche.className='button-tache';

const delete_task=document.createElement('button');

delete_task.className='delete-task';
delete_task.innerHTML='X';

const restore_task=document.createElement('button');
restore_task.className='restore-task';
restore_task.innerHTML='restore';

delete_task.addEventListener('click',function(){
    corbeille.appendChild(block)
    delete_task.style.display='none'
    restore_task.style.display='block';
})


restore_task.addEventListener('click',function(){
    restore_task.style.display='none';
    delete_task.style.display='block'
    divtache.appendChild(block);
    block.appendChild(delete_task);
    
    
})



block.append(btn_gauche,une_tache,btn_droite,delete_task,restore_task);
restore_task.style.display='none';
divtache.appendChild(block)

une_tache.contentEditable=true

btn_droite.addEventListener('click',function(){
btn_droite.parentElement.parentElement.parentElement.nextElementSibling.lastChild.appendChild(block)
})

btn_gauche.addEventListener('click',function(){
    btn_gauche.parentElement.parentElement.parentElement.previousElementSibling.lastChild.appendChild(block)
    })
}

// var supprime=document.querySelector('.supprime')

// supprime.addEventListener('click',function(){
//     var faynote=document.querySelectorAll('.entete-texte');
//     if(faynote.length<1){
//         note.disabled=true;
//     }
// })


    
    




function refresh(){
    var corps=document.querySelectorAll('.entete-texte');
    corps.forEach((element,i) => {
        element.firstElementChild.innerHTML=`colonne${i+1}`
        //i+1 parce que j'ai initialisé i a 0 en haut et une colonne commence par 1
    });
    


}







///////////////////////////////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////Evenements//////////////////////////////////////////////////

colonne.addEventListener('click',function(){
    corps1=document.querySelector('.entete-texte')
    if(gene.childElementCount<=5){
        creer();
        note.disabled=false;
        if(plus==1){
            corps1.id='c1'
            // console.log(corps1)
        }
        
        refresh();
        plus++;

    }
})

note.addEventListener('click',function(){
    modal.style.visibility='visible';
    
})

btnx.addEventListener('click',function(){
    modal.style.visibility='hidden';
})


ajouter.addEventListener('click',function(){
tache()
modal.style.visibility='hidden';
formulaire.reset()
})



show.addEventListener('click',function(){
    header.classList.toggle('togle');

});

btn_corbeille.addEventListener('click',function(){
    corbeille.classList.toggle('show-corbeille');
})




    

/////////////////////////////////////////////////////////////////////////////////////////////////////////

