import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import award from './assets/1.png'
import person from './assets/2.png'
import tool from './assets/3.png'

function App() {
  return (
    <div className="bg-gradient-to-t from-yellow-300 to-yellow-20 pb-2">
      <Header />
      <section className='flex flex-col md:flex-row'>
        <div className='m-5 md:mx-[70px]'> 
          <img src={award} alt="" className='h-[800px] w-[800px] '/>
        </div>
        <div>
        <h3 className='font-bold m-5 '>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h3>
        <ul className='list-disc mx-2 md:mx-[60px] '>
          <li>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
          <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with loT enabled control panel.</li>
        </ul>
        <img src={person} alt="" className=' mr-2 md: h-[500px] md:m-5'/>
        <p className='mx-9'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
          </div>
      </section>
      <div className='text-center m-8 md: mx-[30px]'>
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
      </div>
      <div className=' m-5 md:mx-[200px]'>
      <img src={tool} alt="" />
      <p className='md:text-center mt-5'>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>
      <div className='border-b-4 mt-5 mx-3 border-red-500'>
      </div>
      <div className='my-7 text-center mx-9'>
        <h3 className='font-bold '>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h3>
         <h3 className='mt-5'>CHEMICALS & PROCESS <span className='text-red-600'>|</span> POWER <span className='text-red-600'>|</span> WATER & WASTE WATER <span className='text-red-600'>|</span> OILS & GAS <span className='text-red-600'>|</span> PHARMA <span className='text-red-600'>|</span> SUGARS & DISTILLERIES <span className='text-red-600'>|</span> PAPER & PULP <span className='text-red-600'>|</span> MARINE & DEFENCE <span className='text-red-600'>|</span> METAL & MINING <span className='text-red-600'>|</span> FOOD & BEVERAGE
        <span className='text-red-600'>|</span> PETROCHEMICAL & REFINERIES <span className='text-red-600'>|</span> SOLAR <span className='text-red-600'>|</span> BUILDING <span className='text-red-600'>|</span> HVAC <span className='text-red-600'>|</span> FIRE FIGHTING <span className='text-red-600'>|</span> AGRICULTURE & RESIDENTIAL</h3>
      </div>

      <Footer />
    </div>
  );
}

export default App;
