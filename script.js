const url = 'https://api.adviceslip.com/advice';
let msg=document.querySelector("#msg");
let btn=document.querySelector("button")

btn.addEventListener("click",(evt)=>{
    advice();
})
const advice=async() =>{
    const response = await fetch(url);
	const result = await response.json();
    let data=result.slip.advice;
    msg.innerText=`${data}`;
}

