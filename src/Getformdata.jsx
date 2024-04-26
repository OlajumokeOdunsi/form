import React from 'react'
import { useEffect, useState } from 'react'
import styles from "./Form.module.css"
//Getting the data from local storage

const Getformdata = () => {
    const [formData, setformData] = useState({})
    useEffect(()=>{
        const storedName = localStorage.getItem("name")
        const storedHeight = localStorage.getItem("height")
        const storedWeight = localStorage.getItem("weight")
        const storedRegular = localStorage.getItem("regular")
        const storedAge = localStorage.getItem("age")
        const storedGoal = localStorage.getItem("goal")




        setformData({
            name:  storedName,
            height: storedHeight,
            weight: storedWeight,
             regular: storedRegular,
             age: storedAge,
             goal:storedGoal
          })
      
    },[])

  return (
    <>
    <div className={styles.holder}>
    <p>Name:{formData.name}</p>
    <p>Height:{formData.height}</p>
    <p>Weight:{formData.weight}</p>
    <p>Goal:{formData.goal}</p>
    <p>Activity Level:{formData.regular}</p>
    </div>


    </>
  )
}

export default Getformdata