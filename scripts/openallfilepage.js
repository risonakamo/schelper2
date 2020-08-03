(()=>{
    var result=Array.from(document.querySelectorAll("#tbody a")).map((x)=>{
        return x.href;
    }).sort((a,b)=>{
        return a.localeCompare(b,undefined,{
            numeric:true,
            sensitivity:"base"
        });
    });

    return result;
})()