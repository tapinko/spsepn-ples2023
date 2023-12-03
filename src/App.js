import { useState } from 'react';
import './App.css';

const App = () => {
    const [ rangeFrom, rangeFromSet ] = useState(1);
    const [ rangeTo, rangeToSet ] = useState(100);
    const [ usedNumbers, usedNumbersSet ] = useState([]);
    const [ rndNumberOutput, rndNumberOutputSet ] = useState('-')
    const [ optionsVisibility, optionsVisibilitySet ] = useState(false);
    const [ activeOptionsMenuCSS, activeOptionsMenuCSSSet ] = useState({});
    const [ outputFlashCSS, outputFlashCSSSet ] = useState({});
    const [ titleText, titleTextSet ] = useState('Ples 2023');
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const handleStartBtn = async () => {
        if (usedNumbers.length === rangeTo) {
            alert('Všetky čísla boli vyčerpané, losovanie bude resetované!');
            usedNumbersSet([]);
            rndNumberOutputSet('-');
            return;
        }

        let time = 70
        for (let i = 0; i<= 23; i++) {
            rndNumberOutputSet(Math.floor(rangeFrom + Math.random() * (rangeTo - rangeFrom + 1)));
                await sleep(time);
                time = time+15;
                if (i < 10) time = 70;
        }

        let numberRepeat = true;
        let numberOutput;
        while (numberRepeat === true) {
            const rndNumber = Math.floor(rangeFrom + Math.random() * (rangeTo - rangeFrom + 1));
            if (!usedNumbers.includes(rndNumber)) {
                numberRepeat = false;
                numberOutput = rndNumber;
            }
        }

        usedNumbersSet([...usedNumbers ,numberOutput]);
        rndNumberOutputSet(numberOutput);

        const timeout = 250;
        await sleep(timeout*2);
        for (let i = 0; i < 3; i++) {
            await sleep(timeout);
            outputFlashCSSSet({ background: 'rgba(137, 185, 173, 0.461)' });
            await sleep(timeout);
            outputFlashCSSSet({});
        }
    }

    const handleOptionsVisibility = () => {
        optionsVisibilitySet(!optionsVisibility);
        activeOptionsMenuCSSSet({ background: '#89B9AD' });
        if (optionsVisibility) activeOptionsMenuCSSSet({});
    }

    const handleNumberReset = () => {
        usedNumbersSet([]);
        rndNumberOutputSet('-');
        alert('Resetované!');
    }

    return(
        <>
            <div className='background' />
            <div className='generator'>
                <h1>{titleText}</h1>
                <h2 style={outputFlashCSS}>{rndNumberOutput}</h2>
                <div className='startBtnWrapper'><button onClick={handleStartBtn}>Štart</button></div>
                
                <div className='bottomBar'>
                    <svg onClick={handleNumberReset} data-name="Layer 1" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M64 256H34a222 222 0 0 1 396-137.85V85h30v105H355v-30h67.27A192.21 192.21 0 0 0 256 64C150.13 64 64 150.13 64 256Zm384 0c0 105.87-86.13 192-192 192a192.21 192.21 0 0 1-166.27-96H157v-30H52v105h30v-33.15A222 222 0 0 0 478 256Z" fill="#ffebd8" class="fill-000000"></path></svg>
                    <svg className='optionsSvg' style={activeOptionsMenuCSS} onClick={handleOptionsVisibility} data-name="Livello 1" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path d="M64 39a25 25 0 1 0 25 25 25 25 0 0 0-25-25Zm0 44a19 19 0 1 1 19-19 19 19 0 0 1-19 19Z" fill="#FFEBD8" class="fill-000000"></path><path d="M121 48h-8.93a1 1 0 0 1-.94-.68 49.9 49.9 0 0 0-2-4.85 1 1 0 0 1 .18-1.15l6.31-6.32a7 7 0 0 0 0-9.9l-12.73-12.72a7 7 0 0 0-9.9 0l-6.31 6.31a1 1 0 0 1-1.15.18 49.76 49.76 0 0 0-4.85-2 1 1 0 0 1-.68-.94V7a7 7 0 0 0-7-7H55a7 7 0 0 0-7 7v8.93a1 1 0 0 1-.68.94 49.9 49.9 0 0 0-4.85 2 1 1 0 0 1-1.15-.18L35 12.38a7 7 0 0 0-9.9 0L12.38 25.11a7 7 0 0 0 0 9.9l6.31 6.31a1 1 0 0 1 .18 1.15 49.76 49.76 0 0 0-2 4.85 1 1 0 0 1-.94.68H7a7 7 0 0 0-7 7v18a7 7 0 0 0 7 7h8.93a1 1 0 0 1 .94.68 49.9 49.9 0 0 0 2 4.85 1 1 0 0 1-.18 1.15L12.38 93a7 7 0 0 0 0 9.9l12.73 12.73a7 7 0 0 0 9.9 0l6.31-6.31a1 1 0 0 1 1.15-.18 49.76 49.76 0 0 0 4.85 2 1 1 0 0 1 .68.94V121a7 7 0 0 0 7 7h18a7 7 0 0 0 7-7v-8.93a1 1 0 0 1 .68-.94 49.9 49.9 0 0 0 4.85-2 1 1 0 0 1 1.15.18l6.32 6.31a7 7 0 0 0 9.9 0l12.73-12.73a7 7 0 0 0 0-9.9l-6.31-6.31a1 1 0 0 1-.18-1.15 49.76 49.76 0 0 0 2-4.85 1 1 0 0 1 .94-.68H121a7 7 0 0 0 7-7V55a7 7 0 0 0-7-7Zm1 25a1 1 0 0 1-1 1h-8.93a7 7 0 0 0-6.6 4.69 43.9 43.9 0 0 1-1.76 4.26 7 7 0 0 0 1.35 8l6.31 6.31a1 1 0 0 1 0 1.41l-12.72 12.71a1 1 0 0 1-1.41 0l-6.31-6.31a7 7 0 0 0-8-1.35 43.88 43.88 0 0 1-4.27 1.76 7 7 0 0 0-4.68 6.6V121a1 1 0 0 1-1 1H55a1 1 0 0 1-1-1v-8.93a7 7 0 0 0-4.69-6.6 43.9 43.9 0 0 1-4.26-1.76 7 7 0 0 0-8 1.35l-6.31 6.31a1 1 0 0 1-1.41 0L16.62 98.65a1 1 0 0 1 0-1.41l6.31-6.31a7 7 0 0 0 1.35-8 43.88 43.88 0 0 1-1.76-4.27A7 7 0 0 0 15.93 74H7a1 1 0 0 1-1-1V55a1 1 0 0 1 1-1h8.93a7 7 0 0 0 6.6-4.69 43.9 43.9 0 0 1 1.76-4.26 7 7 0 0 0-1.35-8l-6.31-6.31a1 1 0 0 1 0-1.41l12.72-12.71a1 1 0 0 1 1.41 0l6.31 6.31a7 7 0 0 0 8 1.35 43.88 43.88 0 0 1 4.27-1.76A7 7 0 0 0 54 15.93V7a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v8.93a7 7 0 0 0 4.69 6.6 43.9 43.9 0 0 1 4.26 1.76 7 7 0 0 0 8-1.35l6.31-6.31a1 1 0 0 1 1.41 0l12.73 12.73a1 1 0 0 1 0 1.41l-6.31 6.31a7 7 0 0 0-1.35 8 43.88 43.88 0 0 1 1.76 4.27 7 7 0 0 0 6.6 4.68h8.9a1 1 0 0 1 1 1Z" fill="#ffebd8" class="fill-000000"></path></svg>
                </div>

                {optionsVisibility && 
                    <div className='options'>
                        <div className='inputCont'>
                            <label htmlFor='title'>Názov</label>
                            <input id='title' type='text' placeholder='Ples 2023' onChange={(e) => titleTextSet(e.target.value)} />
                        </div>

                        <div className='inputCont'>
                            <label htmlFor='title'>Generovať od</label>
                            <input id='title' type='number' placeholder='1' onChange={(e) => rangeFromSet(parseInt(e.target.value))} />
                        </div>
                        
                        <div className='inputCont'>
                            <label htmlFor='title'>Generovať po</label>
                            <input id='title' type='number' placeholder='100' onChange={(e) => rangeToSet(parseInt(e.target.value))} />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default App;