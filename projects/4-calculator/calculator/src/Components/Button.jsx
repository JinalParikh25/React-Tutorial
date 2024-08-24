import styles from './Button.module.css'

const Button = () => {

    let buttonName = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']

    return (
        <>
            {buttonName.map((item,index) => (
                <button key={index} className={styles.button}>{item}</button>
            ))}
           
        </>

    )

}

export default Button;