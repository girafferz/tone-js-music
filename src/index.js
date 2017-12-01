//create a synth and connect it to the master output (your speakers)
var synth = new Tone.Synth().toMaster();
//play a middle 'C' for the duration of an 8th note

const sleep = msec => new Promise(resolve => setTimeout(resolve, msec));

const fuga = async () => {
    synth.triggerAttackRelease("C4", "8n");
};

const hoge = async () => {
    synth.triggerAttackRelease('C5', '16n');
    };

const beep = async (key, num) => {
    synth.triggerAttackRelease(key, num.toString() + 'n');
    };


const coin = async () => {
    for(var i=1; i<10;i++) {
        await beep('C'+(i % 10).toString(), i);
        await sleep(10 + Math.random() * 100);
        console.log(10 + Math.random() * 100);
    }
}

const coin2 = async () => {
    let rec = [];
    let rnd = 30;
    for(var i=1; i<10;i++) {
        let hoge = 'C'+(Math.floor(Math.random()*20) % 7).toString();
        await beep(hoge, i);
        var sleepVal = 1 + Math.random() * rnd
        await sleep(sleepVal);
        rec.push({key:hoge, val:sleepVal});
    }
    console.log(rec)
}


const init = async () => {
    //await fuga();
    //await sleep(1000);
    //await hoge();
    //await sleep(1000);
    //await coin();
    for(var i=0; i<1000;i++) {
      await coin2();
      await sleep(150);
    }
};

init();

