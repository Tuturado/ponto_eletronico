let registerButton = document.getElementById("generate");
let finishDay = document.getElementById("finish-day");
let clearAllHistory = document.getElementById("clear-all");
let launcHour = document.getElementById("launch-hour");
let finishLaunchHour = document.getElementById("return-launch");

if(!localStorage.getItem("jorney")){
    document.getElementById("not-register").innerHTML = "Ainda não existem pontos registrados, faça registro abaixo:"
}

//Função para limpar o local storage
clearAllHistory.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    document.getElementById("clean-registers").innerHTML = "Todos os registros foram limpos!"    
});

//Total de horas trabalhas durante o dia
const totalHour = () =>{
    let data = localStorage.getItem("atualDate").slice(11,16);
    let hourForData = parseInt(data.slice(0, 2));
    let minutesForData = data.slice(3, 5);
    let finishDayDate = localStorage.getItem("finishDayHour").slice(11,16);
    let hourForFinish = parseInt(finishDayDate.slice(0, 2));
    let minutesForFinish = finishDayDate.slice(3, 5);
    
    
    let totalHourWork = hourForFinish - hourForData;
    console.log("TOTAL: ", totalHourWork);
    document.getElementById("total-hour").innerHTML = `Você trabalhou ${totalHourWork} horas`;
    
};

const launchTotalHour = () => {
    let finishLaunch = localStorage.getItem("finishLaunchHour").slice(11,16);
    let launchData = localStorage.getItem("launchHour").slice(11,16);
    let hourLaunchInit = parseInt(launchData.slice(0, 2));
    let minuteLaunchInit = parseInt(launchData.slice(3, 5));
    let hourLaunchFinish = parseInt(finishLaunch.slice(0, 2));
    let minuteLaunchFinish = parseInt(finishLaunch.slice(3, 5));

    let hourResult = hourLaunchFinish - hourLaunchInit;
    let minuteResult = minuteLaunchFinish - minuteLaunchInit;

    
};

//Função chamada quando o botão de finalizar dia é clicado
finishDay.addEventListener("click", function(event){
    event.preventDefault();
    let finishDay = document.getElementById("entry_date");
    localStorage.setItem("finishDayHour", finishDay.value);
    launchTotalHour();
    totalHour();
});

//Função chamada quando Volta do Almoço é clicada
finishLaunchHour.addEventListener("click", function(event){
    event.preventDefault();
    let finishLaunchDate = document.getElementById("entry_date");
    localStorage.setItem("finishLaunchHour", finishLaunchDate.value);
    finishLaunchHour.style.display="none";
    finishDay.style.display="inline";

})


//Função chamando quando o botão de Hora do almoço é chamada
launcHour.addEventListener("click", function(event){
    event.preventDefault();
    let dateLaunch = document.getElementById("entry_date");
    localStorage.setItem("launchHour", dateLaunch.value);
    launcHour.style.display="none";
    finishLaunchHour.style.display="inline";
});

//Função chamando ao cliclar em registrar
registerButton.addEventListener("click", function(event){
    event.preventDefault();
    let atualDate = document.getElementById("entry_date");
    localStorage.setItem("atualDate", atualDate.value);
    launcHour.style.display="inline";
    registerButton.style.display="none";
});

