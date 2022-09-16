import React from "react";
import styles from './calculator.module.css'

const Calculator = () => {

    const [input, setInput] = React.useState({
        amount: '',
        interest: '',
        days: '',
    })
    const [result, setResult] = React.useState()

    const handleInputChange = (e) => {
        console.log(input.amount)
        setInput({
          ...input,
          [e.target.name]: e.target.value
        });
      }
    const calculate = (e) => {
        setResult((input.amount * (input.interest/36000) * input.days).toFixed(4))
    }
  return (
    <>
      <div> </div>
      <div>
        <section className={styles.section}>
          <div className={styles.container}>
            <h1 className={styles.title}> Crypto Staking Calculator </h1>
            <form className={styles.calculatorContainer}>
              <div className={styles.inputContainer}>
                <div className={styles.labelContainer}>
                  <label>Token's amount</label>
                  <input type="number" placeholder="1" name="amount" value={input.amount} onChange={handleInputChange}></input>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.labelContainer}>
                  <label>Interest(APY)</label>
                  <input type="number" placeholder="13.62" name="interest" value={input.interest} onChange={handleInputChange}></input>
                </div>
              </div>
              <div className={styles.inputContainer}>
                <div className={styles.labelContainer}>
                  <label>Days</label>
                  <input type="number" placeholder="30" name="days" value={input.days} onChange={handleInputChange}></input>
                </div>
              </div>
              <div className={styles.buttonContainer}>
                <button type="button" className={styles.button} onClick={calculate}>Calculate</button>
              </div>
              <div className={styles.results}>
                Interest gained: {result} <br/>
                in {input.days} days.
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Calculator;
