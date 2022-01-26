import React, { useState } from "react"

interface UncontrolledOnboardingFlowProps {
  children: React.ReactNode;
  onFinish: (data: object) => void;
}

export const UncontrolledOnboardingFlow: React.FC<UncontrolledOnboardingFlowProps> = ({children, onFinish}) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const _children = React.Children.toArray(children);

  const goToNext = (stepData: object) => {
    const updatedData = {
      ...onboardingData,
      ...stepData,
    }
    
    if(currentIndex < _children.length){
      setCurrentIndex(currentIndex + 1);
      onFinish(updatedData);
    }
    setOnboardingData(updatedData);
  }

  const currentChild = _children[currentIndex];
  if(React.isValidElement(currentChild)){
    return <>{React.cloneElement(currentChild, {goToNext})}</>
  }

  return <>{currentChild}</>;
}

interface StepProps{
  goToNext?: (data: object) => void;
}

const StepOne = ({ goToNext }: StepProps) => (
  <>
  <h1>Step 1</h1>
  <button onClick={() => goToNext && goToNext({name: 'Aco Ezzati'})}>Next</button>
  </>
);

const StepTwo = ({ goToNext }: StepProps) => (
  <>
  <h1>Step 2</h1>
  <button onClick={() => goToNext && goToNext({age: 36})}>Next</button>
  </>
);

const StepThree = ({ goToNext }: StepProps) => (
  <>
  <h1>Step 3</h1>
  <button onClick={() => goToNext && goToNext({hairColor: 'brown'})}>Next</button>
  </>
);

export const Steps: React.FC = () => {
  return (
    <UncontrolledOnboardingFlow onFinish={function onFinishSteps(data){
        console.trace(data)
      }}>
      <StepOne />
      <StepTwo />
      <StepThree />
    </UncontrolledOnboardingFlow>
  )
}