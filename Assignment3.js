const fetch_data=async()=>{
    const response= await fetch("https://api.nobelprize.org/v1/prize.json")
    .then((response)=>response.json())
    .then((data)=>{
       const prizes=data.prizes;
    prizes.map((ele)=>{
       if(ele.year>=2000 && ele.year<=2019 && ele.category=='chemistry'){
           ele.laureates.map((n)=>{
               console.log(n.firstname+" "+n.surname);
               document.querySelector('.content').innerHTML=document.querySelector('.content').innerHTML+" "+n.firstname+" "+n.surname+'<br>'
           })
       }
    })
    }).catch(error=>console.log("error found"))
    
   
}
const btn=document.querySelector('#fetch')
btn.addEventListener('click',fetch_data)