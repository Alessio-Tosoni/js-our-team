
//preparo i dati in un array 
let team = [
    {
        nome:"Wayne Barnett",
        ruolo:"Founder & CEO",
        foto:"wayne-barnett-founder-ceo.jpg"
    }, {
        nome:"Angela Caroll",
        ruolo:"Chief Editor",
        foto:"angela-caroll-chief-editor.jpg"
    }, {
        nome:"Walter Gordon",
        ruolo:"Office Manager",
        foto:"walter-gordon-office-manager.jpg"
    }, {
        nome:"Angela Lopez",
        ruolo:"social Media Manager",
        foto:"angela-lopez-social-media-manager.jpg"
    }, {
        nome:"Scott Estrada",
        ruolo:"Developer",
        foto:"scott-estrada-developer.jpg"    	   
    }, {        
        nome:"Barbara Ramos",
        ruolo:"Graphic Designer",
        foto:"barbara-ramos-graphic-designer.jpg"
    }
];
//preparo il container per inserire in pagina i dati
let container = document.getElementById("container")

//preparo il ciclo for 
 for (let i = 0; i < team.length; i++) {
    const membro = team[i];
//inserisco i dati in pagina
    let card = `
    <div class="card">
        <p class="nome">${membro.nome}</p>
        <p class="ruolo">${membro.ruolo}</p>
        <img class="foto" src="./img/${membro.foto}">
    </div>`;   

    container.innerHTML += card
    
//esempio del ciclo for in
    // for (let key in membro) {
    //     console.log(membro[key])
    // }
}
