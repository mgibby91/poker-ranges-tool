import styled from '@emotion/styled';
import React, { useState } from 'react';
import CreateNew from './CreateNew';
import Modal from 'react-modal';

const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '80%',
    height: '80%',
    maxWidth: '80%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#121213',
    color: '#d7dadc',
    border: 'none',
    borderRadius: '0.5rem',
  },
  overlay: {
    backgroundColor: '#ffffff3e',
  },
};

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCreateNew = () => {
    setIsModalOpen(true);
    console.log('create new');
  };

  return (
    <MainWrapper>
      <CreateNew onClick={onCreateNew} />
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
      >
        <div>Modal content</div>
      </Modal>
    </MainWrapper>
  );
};

const MainWrapper = styled.div`
  width: 90%;
  display: flex;
  margin: 2rem 0;
`;

export default Main;
