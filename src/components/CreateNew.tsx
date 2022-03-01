import styled from '@emotion/styled';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type CreateNewProps = {
  onClick: () => void;
};

const CreateNew: React.VFC<CreateNewProps> = ({ onClick }) => {
  return (
    <CreateNewWrapper onClick={onClick}>
      <PlusIcon icon={faPlus} />
    </CreateNewWrapper>
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
