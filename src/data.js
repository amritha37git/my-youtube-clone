// export const API_KEY='AIzaSyDI7podXxUMowaT4Pbx8skX-cp744E-wac';

// export const value_converter=(value)=>{
//     if(value>=1000000)
//     {
//         return Math.floor(value/1000000)+"M";
//     }
//     else if(value>=1000)
//     {
//        return Math.floor(value/1000)+"K"; 
//     }
//     else{
//         return value;
//     }    
// }

// API key for YouTube Data API
export const API_KEY = 'AIzaSyDI7podXxUMowaT4Pbx8skX-cp744E-wac';

// Function to convert view count into human-readable format
export const value_converter = (value) => {
  const num = parseInt(value); // Convert string to number
  if (!num || isNaN(num)) return "0";

  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + "M"; // e.g. 2.3M
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + "K"; // e.g. 450K
  } else {
    return num.toString(); // e.g. 543
  }
};
