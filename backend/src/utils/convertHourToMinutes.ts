//criando uma funçao para converter horas em minutos
export default function convertHourToMinutes(time:string){
    const [hour, minutes] = time.split(":").map(Number);
    const timeInMinutes = (hour * 60) + minutes;
    return timeInMinutes
}