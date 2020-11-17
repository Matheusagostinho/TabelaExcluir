var nomeContato = document.querySelector('input[name="nome"]');
var telefoneContato = document.querySelector('input[name="telefone"]');
var botaoAdicionar = document.querySelector('#btnAdicionar button');

var botaoModificar = document.querySelector("#editar");
var botaoExcluir = document.querySelector("#excluir");

var tabelaContatos = document.querySelector('#itensTabela');

var nomeContatoEditar = document.querySelector('input[name="nomeEditar"]');
var telefoneContatoEditar = document.querySelector('input[name="telefoneEditar"]');
var botaoEditar = document.querySelector('#btnEditar');

var listaContatos = JSON.parse(localStorage.getItem('contatos')  ) || []




function monstrarContatos(){
    tabelaContatos.innerHTML=''
    listaContatos.forEach(function(item, pos){
  
    var tr = document.createElement('tr')
    var td1 = document.createElement('td')
    var td2 = document.createElement('td')
    var td3 = document.createElement('td')

    var button1 = document.createElement('button')
    var button2 = document.createElement('button')
    var img1 =  document.createElement('i')
    var div1 =document.createElement('div')
    var img2 =  document.createElement('i')
    var div2 =document.createElement('div')
    for (var i = 1; i <= 3; i++) 
    {
      
        if(i==1)
        {
            td1.setAttribute('class', 'column'+i)
       
            td1.appendChild(document.createTextNode(item.nomes));
           

        }
        if(i==2)
        {
            td2.setAttribute('class', 'column'+i)
            td2.appendChild(document.createTextNode(item.telefones));
            
          
        }
       if(i==3)
       {
            button1.setAttribute('class', 'btn btn-sm btn-primary')
            button2.setAttribute('class', 'btn btn-sm btn-primary')
            img1.setAttribute('class', 'material-icons')
            div1.setAttribute('class', 'ripple-container')
            img2.setAttribute('class', 'material-icons')
            div2.setAttribute('class', 'ripple-container')
            td3.setAttribute('class', 'column'+i)

            // Não conseguir incrementar o botal de editar, npo primiero da certo mais depoiis rodsa mais de um
               
                    // button1.setAttribute('id', 'editar')
                    // button1.setAttribute('data-toggle', 'modal')
                    // button1.setAttribute('data-target', 'modalEditar')
                    // img1.appendChild(document.createTextNode('create'))
                    // button1.appendChild(document.createTextNode('Editar'))
                    // button1.appendChild(img1)
                    // button1.appendChild(div1) 
                    // button1.addEventListener('click', function(e){
                    //     $('#modalEditar').modal('show')
                    //     console.log(pos);
                    //     modificarContato(pos)
                    // })
                    // td3.appendChild(button1)
    
                
                    button2.setAttribute('id', 'excluir')
                    img2.innerHTML='delete'
                    button2.appendChild(img2)
                    button2.appendChild(document.createTextNode('Excluir'))
                    button2.appendChild(div2)
                    button2.addEventListener('click', function(e){
                        e.preventDefault()
                        removerContato(pos)
                    })
                    td3.appendChild(button2)
                
                
                //Não conseguir usar a condicional ternaria, pois dava um erro
                //var simg=''
                // var resul = (y==1) ? button.setAttribute('id', 'editar'): button.setAttribute('id', 'excluir')
                // console.log(button);
                // resul= (y==1) ? simg = 'create':  simg = 'delete'
                // console.log(simg);
                // img.appendChild(simg)
                // resul = (y==1) ? button.appendChild(img+'Editar'+div): button.appendChild(img+'Excluir'+div)
            
        }
    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tabelaContatos.appendChild(tr)

    }
    })

    
}

function removerContato(pos){
    listaContatos.splice(pos, 1)
    salvarNoArmazenamentoLocal()
    monstrarContatos();
   
}

// function modificarContato(pos){
//     botaoEditar.addEventListener('click', function(e){
//     var nome = nomeContatoEditar.value
//     var tel = telefoneContatoEditar.value
//     listaContatos[pos].nomes = nome
//     listaContatos[pos].telefones = tel
//     console.log( listaContatos[pos].nomes)
//     console.log( listaContatos[pos].telefones)
//     salvarNoArmazenamentoLocal()
//     $('#modalEditar').modal('hide')
//     monstrarContatos();
//     nomeContatoEditar.value = ''
//     telefoneContatoEditar.value =''
//     })
//     botaoEditar.removeEventListener('click', function(e){})
// }

function salvarNoArmazenamentoLocal(){
    localStorage.setItem('contatos', JSON.stringify(listaContatos))
    
}

monstrarContatos()

botaoAdicionar.addEventListener('click', function(){
    var n = nomeContato.value
    var t = telefoneContato.value
    var objContatos ={
        nomes: n,
        telefones : t
    }
    listaContatos.push(objContatos)

    nomeContato.value =''
    telefoneContato.value = ''
    salvarNoArmazenamentoLocal()
    monstrarContatos()
   
})

//Modal
