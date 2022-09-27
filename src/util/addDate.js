export const addDays=(n)=>{
    let today = new Date();
    today.setDate(today.getDate() + n); 
    let month = "0"+(today.getMonth()+1);
    let date = "0"+today.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
     date = date +"/"+month +"/"+today.getFullYear();
    return date
  } 

  export const getToday=(y)=>{
    let today = y;
    let month = "0" + (today.getMonth() + 1);
    let date = "0" + today.getDate();
    month = month.slice(-2);
    date = date.slice(-2);
    return date + "/" + month + "/" + today.getFullYear();
  }