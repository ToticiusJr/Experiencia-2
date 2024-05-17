
//-----------------------------------Registrate----------------------------------------

function mostrarDatos(){
    let url='http://localhost:3000/ramstore'
    fetch(url)
    .then(response => response.json())
    .then(data => BuscarData(data))
    .catch(error => console.log(error))

    const BuscarData=(data)=>{
        console.log(data);
        let texto="";

        for(i=0; i<data.length; i++){
            texto+=`<tr>
                <td>${data[i].nombre}</td>
                <td>${data[i].email}</td>
                <td>${data[i].fechaNacimiento}</td>
                <td>${data[i].direccion}</td>
                </tr>`
        }
        document.getElementById('clientes').innerHTML=texto;
    }
    
}

function buscarTipo(){
    let url='http://localhost:3000/ramstore';
    fetch(url)
    .then(response => response.json())
    .then(data => BuscarData(data))
    .catch(error => console.log(error))

    const BuscarData=(data)=>{
        console.log(data);
        let texto="";
        let tipo=document.getElementById('tipo').value;

        if(document.getElementById('tipo').selectedIndex==0)
        {
            mostrarDatos();

        }
        else{
            for(i=0; i<data.length; i++){

                if(tipo==data[i].tipo)
                {
                texto+=`<tr>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].email}</td>
                    <td>${data[i].fechaNacimiento}</td>
                    <td>${data[i].direccion}</td>
                    </tr>`
                }
            }
            document.getElementById('clientes').innerHTML=texto;
        }//else
    }
}

//-----------------------------------Contactanos--------------------------------------------------------


function mostrarRetro(){
    let url='http://localhost:3000/ramstore'
    fetch(url)
    .then(response => response.json())
    .then(data => BuscarData(data))
    .catch(error => console.log(error))

    const BuscarData=(data)=>{
        console.log(data);
        let texto="";

        for(i=0; i<data.length; i++){
            texto+=`<tr>
                <td>${data[i].nombre}</td>
                <td>${data[i].mail}</td>
                <td>${data[i].num}</td>
                <td>${data[i].retro}</td>
                </tr>`
        }
        document.getElementById('clientes').innerHTML=texto;
    }
    
}

function buscarRetro(){
    let url='http://localhost:3000/ramstore';
    fetch(url)
    .then(response => response.json())
    .then(data => BuscarData(data))
    .catch(error => console.log(error))

    const BuscarData=(data)=>{
        console.log(data);
        let texto="";
        let tipo=document.getElementById('tipo').value;

        if(document.getElementById('tipo').selectedIndex==0)
        {
            mostrarRetro();

        }
        else{
            for(i=0; i<data.length; i++){

                if(tipo==data[i].tipo)
                {
                texto+=`<tr>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].mail}</td>
                    <td>${data[i].num}</td>
                    <td>${data[i].retro}</td>
                    </tr>`
                }
            }
            document.getElementById('clientes').innerHTML=texto;
        }//else
    }
}