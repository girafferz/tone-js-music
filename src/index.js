//create a synth and connect it to the master output (your speakers)
console.log('-----------------')
var synth = new Tone.Synth().toMaster();
console.log('-----------------')

console.log('-----------------')
//play a middle 'C' for the duration of an 8th note
console.log('-----------------')
console.log('-----------------')

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const fuga = async () => {
    console.log('---a---');
    synth.triggerAttackRelease("C4", "8n");
};

const hoge = async () => {
    console.log('---b---');
    synth.triggerAttackRelease('C5', '16n');
    };

const beep = async (key, num) => {
    console.log('---b---');
    synth.triggerAttackRelease(key, num.toString() + 'n');
    };


const init = async () => {
    await fuga();
    await sleep(1000);
    await hoge();
    await sleep(1000);
    for(var i=1; i<10;i++) {
        await beep('C'+(i % 10).toString(), i);
        await sleep(10 + Math.random() * 100);
        console.log(10 + Math.random() * 100);
    }
};

init();

