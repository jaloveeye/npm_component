import * as React from 'react';


interface IProps {
    size: number;
}

const Test = (props: IProps) => {

    const { size } = props;

    
    const createDiv = () => {

        let DIVS: any = []

        for (let i = 0; i < size; i ++) {
            DIVS.push(<div key={i}> {i + 1}</div>);
        }

        return DIVS
    }

    return (
      <>
        { createDiv() }
      </>
    );
  }
  
export default Test;
  