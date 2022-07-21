const aspect = document.getElementById('aspect')

const USERS = [
    {name: 'erika', password:'coco', balance:222250},
    {name: 'lucy', password:'lucy', balance:5000000}
]

function showLogin(){
    const loginTemplate = `
           <h2>Sign in</h2>  
           <form action="">
             Username
             <input id="user" type="text" placeholder="user" />
             Password
             <input id="password" type="password" placeholder="password" />
             <button id="btn_login" class:"btn"> Get in</a></button>
           </form>
    ` 
           
    aspect.innerHTML = loginTemplate
    const usuario = document.getElementById('user')
    const password = document.getElementById('password')
    const btnloging = document.getElementById('btn_login')
            
        btnloging.addEventListener('click',(evento)=>{
            evento.preventDefault()
                let userFound
                USERS.forEach(user =>{
                    if(user.name === usuario.value){
                        userFound = user;
                    }
                })
                if(userFound && userFound.password === password.value){
                    showMenu(userFound)
                }else{
                    alert('User or Password wrong, try again with nothing odd')
                }
            })
               /* aspect.innerHTML = menu */  
}
 
function showMenu(usuario){
    let menu = `
      <h2>Welcome ${usuario.name}</h2>
      <h3 id="balance" placeholder="balance">Your balance is ${usuario.balance}</h3>
        <div>
            <button id="withdraw">Withdraw</button>
            <button id="checkBalance">Check Blance</button>
            <button id="toDeposit">To Deposit</button>
            <button id="btn_cancel">Exit from Application</button>
        </div>
    `
    aspect.innerHTML = menu
    const withdraw = document.getElementById('withdraw')
    withdraw.addEventListener('click',(evento)=>{
        evento.preventDefault()
        showFormAmount(usuario)

    })
    const toDeposit = document.getElementById('toDeposit')
    toDeposit.addEventListener('click',(evento)=>{
        evento.preventDefault()
        showFormDeposit(usuario)
    })

    const checkBalance = document.getElementById('checkBalance')
    checkBalance.addEventListener('click',(evento)=>{
        evento.preventDefault()
        showBalance(usuario)
    })
    const btnCancel = document.getElementById('btn_cancel')
    btnCancel.addEventListener('click',(evento)=>{
    evento.preventDefault()
    showLogin()
})

}

function showFormAmount(usuario){
    let withdraw = `
    <h2>Withdraw some of your cash</h2>
    <form action="">
    <input id="amount" type="number" placeholder="amount" />
    <button id="btn_withdraw">Withdraw</button>
    <button id="btn_cancel">cancel</button>
    </form>
    `
    aspect.innerHTML = withdraw
    const btnWithdraw = document.getElementById('btn_withdraw')
    btnWithdraw.addEventListener('click',(evento)=>{
        evento.preventDefault()
        let amount = document.getElementById('amount')
        if(amount.value >= usuario.balance){
            alert('You dont have enough money')
        }else{
            usuario.balance -= parseFloat(amount.value)
        }
        showMenu(usuario)
    })
    const btnCancel = document.getElementById('btn_cancel')
    btnCancel.addEventListener('click',(evento)=>{
    evento.preventDefault()
    showLogin()
})
}


function showFormDeposit(usuario){
    let deposit = `
    <h2>Deposit</h2>
    <form action="">
    <input id="amount" type="number" placeholder="amount" />
    <button id="btn_deposit">Deposit</button>
    <button id="btn_cancel">cancel</button>
    </form>
    `
    aspect.innerHTML = deposit
    const btnDeposit = document.getElementById('btn_deposit')
    btnDeposit.addEventListener('click',(evento)=>{
        evento.preventDefault()
        let amount = document.getElementById('amount')
        if(amount.value <= 0){
            alert('You cant deposit negative numbers')
        }else{
            usuario.balance += parseFloat(amount.value)
        }
        showMenu(usuario)
    }
    )
    const btnCancel = document.getElementById('btn_cancel')
    btnCancel.addEventListener('click',(evento)=>{
    evento.preventDefault()
    showLogin()
})
}

function showBalance(usuario){
    alert('Your balance now is ' + usuario.balance)
    /* showMenu(usuario) */
    /* let newBalance = menu.replace('Your balance is ' + usuario.balance, 'Your balance is ' + usuario.balance) */
}

showLogin()



























