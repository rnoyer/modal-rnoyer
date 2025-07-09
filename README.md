# modal-rnoyer
modal-rnoyer is a React component intended to provide a modal component ready to use.

It uses the HTML dialog element which makes it accessible.

## How to use modal-rnoyer
This modal has the following props to consider : 
### <i>open</i> and <i>setOpen</i> (state variable)
These props will keep track of wether it should open or close itself.

### content (string)
This is some text the modal will display.

## Prerequisites
- Node version : 20
- NPM version : >=10.8.2 

## Install package

```bash
npm i modal-rnoyer
```

## Import Modal compornent
```jsx
import Modal from "modal-rnoyer";
```

## Code example
Here is a code snippet to show you how to use the modal and its props.

```jsx
import Modal from "modal-rnoyer";
import { useState } from "react";

export default function TestPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);

  return (
    <div>
      <Modal open={isModalOpen} setOpen={setIsModalOpen} content="Opened !" />
      <button onClick={handleOpenModal}>
        Open Modal !
      </button>
    </div>
  );
}

```