const units:string[] = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
   
function niceBytes(x:number):string {

  let l = 0, n = x || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]) 
}

const results = niceBytes(1000000)

console.log(results)
