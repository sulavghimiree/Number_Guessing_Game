const hidden_number = Math.ceil(Math.random()*100)+1;
let chancesRemaining = 5;
document.querySelector('.chance_rem').textContent = chancesRemaining;
const replay = document.querySelector(".replay_btn")
document.querySelector('.check_btn').addEventListener('click',(e)=>
{
    e.preventDefault();
    const num = parseInt(document.querySelector('.guess_num').value)
    if(chancesRemaining === 0)
    {
        document.querySelector('.check').textContent = 'All Chances Finished Game Over!';
        document.querySelector('.high_low').textContent = 'The answer is ' +hidden_number.toString();
        return;
    }
    else if(num === hidden_number)
    {
        document.querySelector('.check').textContent = 'You guessed it right. Congratulations...';
        document.querySelector('.high_low').textContent = 'Your Score is ' + (5 - chancesRemaining);
    }
    else if(!num)
    {
        document.querySelector('.check').textContent = 'Box Empty, Please Enter a number!';
    }
    else if(num !== hidden_number)
    {
        chancesRemaining -= 1;
        document.querySelector('.chance_rem').textContent = chancesRemaining;
        document.querySelector('.check').textContent = 'Guess Incorrect, Please Try Again!';
        if(num > hidden_number)
        {
            document.querySelector('.high_low').textContent = 'Too high, Guess a bit Low!';
        }
        else
        {
            document.querySelector('.high_low').textContent = 'Too low, Guess a bit High!';
        }
    }
})

replay.addEventListener("click",()=>{
    window.location.reload()
})