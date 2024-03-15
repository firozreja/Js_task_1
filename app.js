const btn = document.getElementById('btn')
const secretMessage = document.getElementById('secretMessage')

const msg ="Will you marry me?💖 I am a freelancer...."

// btn.addEventListener("click",(e)=>{
//     secretMessage.textContent=msg;
// })

btn.onclick = (e) => {
    secretMessage.textContent=msg;
}