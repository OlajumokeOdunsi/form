import React,{useState} from 'react';
import styles from "./Form.module.css"

const Form = () => {
  const [height, setHeight] = useState(0);
  const [age, setAge] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'height' || name === 'age') {
      // Handle numerical input (height and age)
      const parsedValue = parseInt(value, 10); // Specify radix (base 10) for clarity
      if (!isNaN(parsedValue)) { // Check for valid number
        setHeight(parsedValue);
        setAge(parsedValue);
      } else {
        // Handle invalid numerical input (optional)
        console.warn('Please enter a valid number for height and age');
      }
    } else {
      // Handle text input (name)
      setName(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to server)
    console.log('Submitted data:', name, height, age);
    setName('');
    setHeight(0);
    setAge(0);
  };


  return (
    <form onSubmit={handleSubmit} className={styles.main}>
      <label htmlFor="name" className={styles.name}>Name:</label> <br/>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <label htmlFor="height" className={styles.name}>Height (cm):</label>  <br/>
      <input
        type="number"
        id="height"
        name="height"
        value={height}
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <label htmlFor="age" className={styles.name}>Age:</label>  <br/>
      <input
        type="number"
        id="age"
        name="age"
        value={age}
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <label htmlFor="weight"className={styles.name} >Weight (kg):</label>  <br/>
      <input
        type="number"
        id="weight"
        name="weight"
        value={weight}
        onChange={handleChange}
        className={styles.input}
        
      />
      <br />
      <label htmlFor="goal"className={styles.name} >What's your Goal?</label>  <br/>
      <input
        type="text"  
        id="goal"
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <label htmlFor="regular" className={styles.name}>Your regular physical activity level:</label>  <br/>
      <input
        type="text" 
        id="regular"
        name="regular"
        onChange={handleChange}
        className={styles.input}
      />
      <br />
      <input type="submit" value="Submit"  className={styles.submit}/>
    </form>  
  );
};

export default Form;
