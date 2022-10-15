const MONTHS = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Setiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

const CONVERT_DATE_CARD = (strDate:string) => {
  const date = new Date(strDate);
  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

const CONVERT_DATE_EDIT = (strDate:string) => {
  const date = new Date(strDate);
  return `${date.getFullYear()}-${ (date.getMonth()+1) > 9 ? date.getMonth()+1 : "0"+(date.getMonth()+1)}`
}

const BACK_HOST = "http://192.168.100.17:3200";

export {BACK_HOST, MONTHS, CONVERT_DATE_CARD, CONVERT_DATE_EDIT}