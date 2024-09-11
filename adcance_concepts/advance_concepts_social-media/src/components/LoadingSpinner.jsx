import style from './LoadingSpinner.module.css'

const LoadingSpinner = () => {

   return (
        <>
            <div className={`${style.spinner} d-flex justify-content-center`} style={{width: "3rem", height: "3rem"}}>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}

export default LoadingSpinner;