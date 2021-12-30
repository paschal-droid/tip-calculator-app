import React, {useState} from 'react';
import Input from "./Input"
import Button  from "./Button"
import Tiptext from "./Tiptext"
import Amount from "./Amount"
import { AiOutlineUser } from "react-icons/ai";
import {CgDollar} from "react-icons/cg";



function Card(props) {
    // for the score dashboard
    const buttons = [
    {text: "5%", value: 0.4}, 
    {text: "10%", value: 0.1}, 
    {text: "15%", value: 0.15}, 
    {text: "25%", value: 0.25},
    {text: "Custom", value: 0.2},
]
    const [tip, setTip] = useState(null)
    const [person, setPerson] = useState(null);
    const [bill, setBill] = useState(null);
    const [amount, setAmount] = useState("$0.00")
    const [total, setTotal] = useState("$0.00")


    const handlePerson = (e) => {
        const filteredPerson = e.target.value
            setPerson(parseInt(filteredPerson)|| null)
        
    }
    const handleBill = (e) => {
        const filteredBill = e.target.value
            setBill(parseInt(filteredBill)|| null)
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(bill&&person) {
            setAmount(`$ ${(Math.floor(bill*tip)/person)}`)
            setTotal(`${Math.floor(tip+ (bill/person))}`)
        }   
    }

    const handleReset = (e) => {
        setAmount("$0.00")
        setTotal("$0.00")
        setBill(null)
        setPerson(null)
        window.location.reload()
    }

    return (
        <div className="calculator">
            <div className="contain">
                <form className="tip-contain" onSubmit={handleSubmit}>
                    <section className="entry">
                        <span style={{color: "#301934"}}>Bill</span>
                        <div>
                            <CgDollar className="icon" />
                            <Input holder="Input an amount" handleChange={handleBill} id="bill" />
                        </div>
                        
                    </section>
                    {!bill && <span className='error-tip'>Enter a Number</span>}
                    <section>
                        <span style={{color: "#301934"}}>Select Tip %</span>
                        <div className="options">
                            {buttons.map((button, i) => (
                                <Button key={i} text={button.text} className="btn count-btn" handleClick={(e) => setTip(button.value)} />
                                ))}
                        </div>
                    </section>
                    {!tip ? <span className='error-tip'>Choose a Tip</span> : null}
                    <section className="entry">
                        <span style={{color: "#301934"}}>Number of People</span>
                        <div>
                            <AiOutlineUser className="icon"/>
                            <Input holder="No. of persons" id="person" handleChange={handlePerson} style={{border: "4px yellow"}}  />  
                        </div>
                    </section>

                    
                    {!person && <span role="alert" className='error-tip' aria-hidden="true">
                        Enter a number
                    </span>}
                </form>
                        
                <div className="dashboard">
            <section>
                <div className="board">
                    <div className="dash">
                    <div className="details">
                        <Tiptext className="tip" text="Tip Amount"/>
                        <Tiptext className="tips" text="/ person"/>
                    </div>

                    
                        <Amount className="amount" text={amount} />
                    
                    </div>

                    <div className="dash">
                    <span>
                        <Tiptext className="tip" text="total"/>
                        <Tiptext className="tips" text="/ person"/>
                    </span>

                    <div>
                        <Amount className="amount" text={total} />
                    </div>
                    </div>
                    <div style={{textAlign: "center"}}>
                        <Button handleClick={handleReset} className="reset-btn" text="reset" />
                    </div>
                
                </div>
            </section>
        </div>
    </div>
    </div> 

    
        // for the score dashboard
        
    )
}

export default Card;

