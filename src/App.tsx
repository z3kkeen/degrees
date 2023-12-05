import { useState, ChangeEvent } from 'react'
import './index.css'

function App() {
  const [inputF, setInputF] = useState('');
  const [inputC, setInputC] = useState('');

  const switchToC = (e:ChangeEvent<HTMLInputElement>) => {
    setInputC(e.target.value);
    const convertedFahrenheit = (Number(e.target.value) * 1.8) + 32;
    setInputF(convertedFahrenheit.toFixed(2));
  };

  const switchToF = (e:ChangeEvent<HTMLInputElement>) => {
    setInputF(e.target.value);
    const convertedCelsius = (Number(e.target.value) - 32) * 5/9;
    setInputC(convertedCelsius.toFixed(2))
  };

  return (
    <>
      <div className="bg-gray-800 h-screen w-1/1 flex justify-center items-center gap-10">

        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-white text-4xl">Celsius</h1>
          <div className="text-white h-10 text-2xl">{inputC}</div>
          <input className="text-xl p-2" onChange={switchToC} type="number" placeholder="input C" value={inputC} />
        </div>

        <div className="flex justify-center items-center flex-col gap-3">
          <h1 className="text-white text-4xl">Fahrenheit</h1>
          <div className="text-white h-10 text-2xl">{inputF}</div>
          <input className="text-xl p-2" onChange={switchToF} type="number" placeholder="input F" value={inputF} />
        </div>

      </div>
    </>
  )
}

export default App
