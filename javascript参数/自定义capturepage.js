function fileName(){
	var lzwTime= new Date(Date.now());
    var  fileName=(1900+lzwTime.getYear())+'-'+
     (1+lzwTime.getMonth())+'-'+
     lzwTime.getDate()+'-'+
     lzwTime.getHours()+'-'+
     lzwTime.getMinutes()+'-'+
     lzwTime.getSeconds()+'.png';
     return fileName
}
