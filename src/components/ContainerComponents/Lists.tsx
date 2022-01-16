import React from 'react';
import DataSource from './DataSource';


export default function Lists() {
  return (
  <>
    <div>The lists:</div>
    <DataSource 
      getDataFunc={getLocalStorageData('username')}
      component={User}
      componentProps={{color: 'gray'}}
     />
    <hr />
    Car list:
    <DataSource getDataFunc={getCars('Toyota')} component={Car} />
    <DataSource getDataFunc={getCars('BMW')} component={Car} />
    <DataSource getDataFunc={getCars('Benz')} component={Car} />
  </>
  )
}

interface IUser {
  firstName: string,
  lastName: string,
  age: number;
  color: string;
}

function User({firstName, lastName, age, color}: IUser){
  return (
    <>
      <div>Full name: {`${firstName} ${lastName}`}</div>
      <div>Age: {age}</div>
      <div>Color: {color}</div>
    </>
  )
}

interface CarProps {
  name: string
}

const Car: React.FC<CarProps> = ({name}) => (<>
  <div>Name: {name}</div>
</>)

function getCars(name: string) {
  return () => ({name})
}

function getLocalStorageData(key: string){
  return function itemValue(){
    return JSON.parse(localStorage.getItem(key) as string);
  }
}
