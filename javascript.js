var score,roundscore,activeplayer,playing;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){

    if(playing)
    {
        //random
    var dice=Math.floor(Math.random()*6)+1;
    
    //display
    var select=document.querySelector('.dice');
    select.style.display='block';
    select.src='dice-'+dice+'.png';

    //update
    if(dice!==1)
    {
        roundscore+=dice;
        document.querySelector('#current-'+activeplayer).textContent=roundscore;

    }
    else{
        nextPlayer();

    }
    }



    
});
document.querySelector('.btn-hold').addEventListener('click',function()
{
    if(playing)
    {
        //update
    score[activeplayer]+=roundscore;
    //dom
    document.querySelector('#score-' + activeplayer).textContent = score[activeplayer];

    //winner
    if(score[activeplayer]>=100)
    {
        document.querySelector('#name-'+activeplayer).textContent='WINNER!';
        document.querySelector('.dice').style.display='none';
        document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
        document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
        playing=false;
       
        
    }
    else
    {
        nextPlayer();
    }
    }

});
function nextPlayer()
{
    activeplayer===0?activeplayer=1:activeplayer=0;
    roundscore=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('current-1').textContent=0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';



}
function init()
{
    score=[0,0];
roundscore=0;
activeplayer=0;
playing=true;



document.querySelector('.dice').style.display='none';

document.getElementById('score-0').textContent=0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.getElementById('name-0').textContent='PLAYER 1';
document.getElementById('name-1').textContent='PLAYER 2';


}

document.querySelector('.btn-new').addEventListener('click',init);

