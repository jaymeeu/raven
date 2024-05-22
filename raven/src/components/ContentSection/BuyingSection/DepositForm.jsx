import CustomLabel from '@/components/CustomInput/CustomLabel'
import React from 'react'

const DepositForm = () => {
    return (
        <div className='form__container'>
            <CustomLabel
                label={"Total account value"}
                amount={'0.00'}
            />
            <div className="flex__form">
                <CustomLabel
                    label={"Open Orders"}
                    amount={'0.00'}
                />
                <CustomLabel
                    label={"Available"}
                    amount={'0.00'}
                />
            </div>

            <button className="btn__primary">
                Deposit
            </button>



        </div>
    )
}

export default DepositForm
