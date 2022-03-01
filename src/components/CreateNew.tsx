import styled from '@emotion/styled';
import React from 'react';

type CreateNewProps = {
  onClick: () => void;
};

const CreateNew: React.VFC<CreateNewProps> = ({ onClick }) => {
  return (
    <CreateNewWrapper onClick={onClick}>
      <div>Create new</div>
    </CreateNewWrapper>
  );
};

const CreateNewWrapper = styled.div`
  border: 2px solid #3a3a3c;
  width: 15rem;
  height: 10rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

export default CreateNew;
