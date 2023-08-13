import { useRef, useState } from "react"

type Props = {}

const Accordion = (props: Props) => {

    const [spinning, setSpinning] = useState('animate-none');
    const [spinBool, setSpinBool] = useState(false);

    const imageref = useRef();

    const Spin = (ref) => {
        setSpinBool(!spinBool);
        spinBool? setSpinning('animate-spin') : setSpinning('animate-none')
    }

    


  return (
    
    <div className="bg-white text-[#181028] p-8 space-y-6 shadow-[20px_19px_25px_2px_rgba(0,0,0,0.1)] rounded-xl max-w-md md:max-w-lg text-left">

        <h1 className="text-xl font-medium">The Accordion</h1>
        <p className="text-xs">The accordion is a graphical control element comprising a vertically stacked list of items such as labels or thumbnails. Each item can be "expanded" or "collapsed" to reveal the content associated with that item.</p>
        <ul className="text-xs font-semibold pb-7 list-none grid grid-cols-[1fr_8fr] text-left">
           
            <button className='col-start-1 col-end-1 border-b' onClick={() => Spin(imageref)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className={spinning} ref={imageref}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <li className="col-start-2 col-end-2 border-b"> When and how should it be used?</li>
            
            <button className='col-start-1 col-end-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <li className="border-b pt-6 pb-3">What's an accordion?</li>
        
                <ul className="flex flex-col gap-10 pt-10 pb-3 col-start-2 col-end-2">
                    <li>Show/Hide Operation</li>
                    <li>Tabbed Interface</li>
                    <button className="bg-slate-300 rounded-xl px-3 py-1 w-1/3">Read More</button>
                </ul>
                <button className='col-start-1 col-end-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <li className="border-b pt-6 pb-3">What if a user clicks on a collapsed card while another card is open?</li>
            <button className='col-start-1 col-end-1'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <li className="border-b pt-6 pb-3">How to choose an icon to indicate expansion?</li>
        </ul>
    
    </div>


  )
}

export default Accordion