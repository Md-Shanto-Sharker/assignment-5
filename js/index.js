
// 1st card
document.getElementById('btn-donate').addEventListener('click',function(){
    const  inputMoney=parseFloat(document.getElementById('donate-amount').value);
    console.log( typeof inputMoney);

    const oldMoney =parseFloat(document.getElementById('old-money').innerText)
    console.log( typeof oldMoney);

    let newBalance = oldMoney + inputMoney;
    console.log(newBalance);

    document.getElementById('old-money').innerText=newBalance


    const totalMoney=document.getElementById('total-money').innerText;
    const newTotalBalance = parseFloat(totalMoney) + newBalance
    document.getElementById('total-money').innerText =newTotalBalance;
})





// 2nd card
document.getElementById('btn-donate-2').addEventListener('click',function(){
    const  inputMoney2=parseFloat(document.getElementById('donate-amount-2').value);
    console.log( typeof inputMoney2);

    const oldMoney2 =parseFloat(document.getElementById('old-money-2').innerText)
    console.log( typeof oldMoney2);

    let newBalance2 = oldMoney2 + inputMoney2;
    console.log(newBalance2);

    document.getElementById('old-money-2').innerText=newBalance2


    const totalMoney=document.getElementById('total-money').innerText;
    const newTotalBalance = parseFloat(totalMoney) + newBalance2
    document.getElementById('total-money').innerText =newTotalBalance;
})






document.getElementById('btn-donate-3').addEventListener('click',function(){
    const  inputMoney3=parseFloat(document.getElementById('donate-amount-3').value);
    console.log( typeof inputMoney3);

    const oldMoney3 =parseFloat(document.getElementById('old-money-3').innerText)
    console.log( typeof oldMoney3);

    let newBalance3 = oldMoney3 + inputMoney3;
    console.log(newBalance3);

    document.getElementById('old-money-3').innerText=newBalance3


    const totalMoney=document.getElementById('total-money').innerText;
    const newTotalBalance = parseFloat(totalMoney) + newBalance3
    document.getElementById('total-money').innerText =newTotalBalance;
})



document.getElementById('history-btn').addEventListener('click',function(){
    window.location.href='./history.html'
})


