import {useNavigate} from "react-router-dom";
import "./Deposit.css";
import { useState } from "react";

const Deposit = () => {
    const nav = useNavigate();
    const [bitcoin, setBitcoin] = useState(false)
    const [amount, setAmount] = useState("0.00")
    const [amountError, setAmountError] = useState("")
    const [eth, setEth] = useState(false)
    const [eth2, setEth2] = useState(false)
    const [eth3, setEth3] = useState(false)
    const [doge, setDoge] = useState(false)
    const [bnb, setbnb] = useState(false)
    const [usdt, setusdt] = useState(false)
    const [isButtonDisabled, setButtonDisabled] = useState(true);

    const handleAmount = (e) => {
        const newAmount = e.target.value;
        setAmount(newAmount);
        // Validate the email
        if(newAmount.trim() === '') {
            setAmountError('Amount is required');
        }else {
            setAmountError('');
        }
      };

   const submitPayment = () =>{
    if(amount === "0.00"){
        setAmountError('You can not leave this field empty');
    }else{
        localStorage.setItem('amount', JSON.stringify(amount));
        if(bitcoin === true){
            setDoge(false)
            setEth(false)
            setbnb(false)
            setEth2(false)
            setEth3(false)
            nav(`payment/BTC PAYMENT`)
        } else if(eth === true) {
            setDoge(false)
            setBitcoin(false)
            setbnb(false)
            setEth2(false)
            setEth3(false)
            nav(`payment/ETH PAYMENT`)
        } else if(doge === true) {
            setEth(false)
            setBitcoin(false)
            setbnb(false)
            setEth2(false)
            setEth3(false)
            nav(`payment/DOGECOIN PAYMENT`)
        } else if(bnb === true) {
            setDoge(false)
            setBitcoin(false)
            setEth(false)
            setEth2(false)
            setEth3(false)
            nav(`payment/BNB PAYMENT`)
        }  else if(eth2 === true) {
            setDoge(false)
            setBitcoin(false)
            setEth(false)
            setEth3(false)
            nav(`payment/TETHER BNB PAYMENT`)
        } else if(eth3 === true) {
            setDoge(false)
            setBitcoin(false)
            setEth(false)
            setEth2(false)
            nav(`payment/TETHER ETH PAYMENT`)
        }  else if(usdt === true) {
            setDoge(false)
            setBitcoin(false)
            setEth(false)
            setEth2(false)
            nav(`payment/USDT TRC20 PAYMENT`)
        }  
    }
   
   }

    return (
        <>
            <div className="DepositBody">
                <h1>Fund your account balance</h1>
                <div className="DepositContent">
                    <div className="DepositContentLeft">
                        <div className="DepositContentLeftTop">
                            <h3>Enter Amount</h3>
                            <input type="text" placeholder="Enter Amount"  onChange={handleAmount}/>
                             <p style={{marginTop: "-3%", marginLeft: "2%", color: "red", fontSize: "12px"}}>{amountError}</p>
                        </div>
                        <div className="DepositContentLeftDown">
                            <h3>Choose Payment Method from the list below</h3>
                            <div className="DepositContentLeftDownInput">
                                <span>BITCOIN PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(true),
                                        setDoge(false),
                                        setEth(false),
                                        setbnb(false)
                                        setEth2(false)
                                        setEth3(false)
                                        setusdt(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>ETHEREUM PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false),
                                        setDoge(false),
                                        setEth(true),
                                        setbnb(false)
                                        setEth2(false)
                                        setEth3(false)
                                        setusdt(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>TETHER ETH PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false),
                                        setDoge(false),
                                        setEth(false),
                                        setbnb(false)
                                        setEth2(true)
                                        setEth3(false)
                                        setusdt(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>TETHER BNB PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false),
                                        setDoge(false),
                                        setEth(false),
                                        setbnb(false)
                                        setEth2(false)
                                        setEth3(true)
                                        setusdt(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>DOGECOIN PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false),
                                        setDoge(false),
                                        setEth(false),
                                        setbnb(true)
                                        setEth2(false)
                                        setEth3(false)
                                        setusdt(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>BNB PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false),
                                        setDoge(false),
                                        setEth(false),
                                        setbnb(true)
                                        setEth2(false)
                                        setusdt(true)
                                        setusdt(false)
                                        setEth3(false)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                            <div className="DepositContentLeftDownInput">
                                <span>USDT TRC20 PAYMENT</span>
                                <input type="radio"  name="b"
                                    onChange={()=>{
                                        setBitcoin(false),
                                        setDoge(false),
                                        setEth(false),
                                        setbnb(false)
                                        setEth2(false)
                                        setEth3(false)
                                        setusdt(true)
                                        setButtonDisabled(false)
                                    }}
                                />
                            </div>
                                <button 
                                     disabled={isButtonDisabled}
                                     style={{background: `${isButtonDisabled ? "#E0E0E5" : "#0E4152"}`}}
                                onClick={submitPayment}>Proceed to payment</button>
                        </div>
                    </div>
                    <div className="DepositContentRight">
                        <div className="DepositContentRightA">
                            <h4>Total Deposit</h4>
                            <h4 className="DepositContentRightABreak">
                                ${amount} <span>Amount</span>
                            </h4>
                        </div>
                        <div className="DepositContentRightB">
                            <p>View deposit history</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Deposit;
