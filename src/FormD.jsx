import React, { useState } from 'react'
import styles from "../src/Form.module.css"

const FormD = ({handleChange}) => {
    const initialstate={
        name: "",
        age: "",
        height: 0,
        weight: 0,
        goal: "",
        regular: "",
    
    }
    const [formData, setformData] = useState({initialstate})
    let handleSubmit =(event)=>{
        event.preventDefault();

        const  updatedformData= {
        name: event.target.name.value,
         age: parseInt(event.target. age.value),
        height: parseInt(event.target.height.value),
        weight:  parseFloat(event.target. weight.value),
        goal:   event.target.goal.value,
        regular: event.target.regular.value
        }
        setformData(updatedformData)

        localStorage.setItem("name", updatedformData.name)
        localStorage.setItem("height", updatedformData.height)
        localStorage.setItem("age", updatedformData.age)
        localStorage.setItem("weight", updatedformData.weight)
        localStorage.setItem("goal", updatedformData.goal)
        localStorage.setItem("regular", updatedformData.regular)
        

        console.log("submited data", updatedformData );

    }

  return (
    <>
    <form onSubmit={handleSubmit} className={styles.main}>
        <label htmlFor='name' className={styles.name}>
        Name:
        </label>
        <br/>
        <input
         type='text'
         id='name'
         name='name'
        //  value={formData.name}
         onChange={handleChange}
         className={styles.input}
         />    
         <br />

         <label className={styles.name}>
         Height (cm):
         </label>
         <br/>
         <input type='text'
         id='height'
         name='height'
        //  value={formData.height}
         onChange={handleChange}
         className={styles.input}
         />
        <br />

        <label htmlFor="age" className={styles.name}>
        Age:
        </label>
        <br/>
        <input type='text'
         id='age'
        //  value={formData.age}
         name='age'
         onChange={handleChange}
         className={styles.input}
         />
         <br/>

         <label htmlFor="weight" className={styles.name}>
        Weight:
        </label>
        <br/>
        <input type='text'
         id='weight'
         name='weight'
         onChange={handleChange}
        //  value={formData.weight}
         className={styles.input}
         />
         <br/>

         <label htmlFor="goal" className={styles.name}>
        Goal:
        </label>
        <br/>
        <input type='text'
         id='goal'
         name='goal'
         onChange={handleChange}
        //  value={formData.goal}
         className={styles.input}
         />
         <br />

         <label htmlFor="regular" className={styles.name}>
         Your regular physical activity level <br/>
         (Beginner, Intermediate, Advanced):
        </label>
        <br/>
        <input type='text'
         id='regular'
         name='regular'
         onChange={handleChange}
        //  value={formData.regular}
         className={styles.input}
         />
         <br />
         <input type="submit" value="Submit" className={styles.submit} />

    </form>
    </>
  )
}



export default FormD