const key1Button = document.getElementById('key1');  // 钥匙 1
const key2Button = document.getElementById('key2'); // 钥匙 2
const spell1 = document.getElementById('spell1'); // 咒语 1
const spell2 = document.getElementById('spell2'); //咒语 2

// TODO：新增或者修改以下代码

key1Button.addEventListener('click', async () => {
    // 从后台请求钥匙1的咒语部分
    key1Button.disabled = true;
    let {data} =  await axios.get('/spellone')
    spell1.innerHTML = data;
    tryOpenTreasureBox();
});

key2Button.addEventListener('click', async () => {
    // 从后台请求钥匙2的咒语部分
    key2Button.disabled = true;
    let {data} =  await axios.get('/spelltwo')
    spell2.innerHTML = data;
    tryOpenTreasureBox();
});

function tryOpenTreasureBox() {
       if(spell1.innerHTML=='星辰闪耀'&&spell2.innerHTML=='众星归位'){
        const box = document.getElementById('treasureBox');
        const suceessmessage = document.getElementById('suceess-message');
        box.classList.add('opened');
        suceessmessage.style.display='block'
    }
}
