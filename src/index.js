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
    synth.triggerAttackRelease('C5', '8n');
    };


const init = async () => {
    await fuga();
    await sleep(1000);
    await hoge();
};

init();

