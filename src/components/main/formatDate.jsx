export const FormatDate = (isoDate) => {
    const dateObj = new Date(isoDate);
    const month = (dateObj.getMonth() + 1).toString().padStart(2, '0' ); 
    const day = dateObj.getDate().toString().padStart(2, '0'); 
    return `${month} / ${day}`;
  };