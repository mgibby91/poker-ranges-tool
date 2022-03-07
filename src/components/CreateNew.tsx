import styled from '@emotion/styled';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import RangesToolCreate from './RangesToolCreate';

type CreateNewProps = {};

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

const CreateNew: React.VFC<CreateNewProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onCreateNew = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <CreateNewWrapper onClick={onCreateNew}>
        <PlusIcon icon={faPlus} />
      </CreateNewWrapper>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        style={modalStyles}
      >
        <RangesToolCreate />
      </Modal>
    </>
  );
};

const CreateNewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #d7dadc;
  width: 15rem;
  height: 10rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
    background-color: #3a3a3c;
  }
`;

const PlusIcon = styled(FontAwesomeIcon)`
  font-size: 3rem;
  color: #d7dadc;
`;

export default CreateNew;
