import styled from "styled-components";
import Heading from "./Heading";


const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete() {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Delete </Heading>
      <p>
        Are you sure you want to delete this  permanently? This
        action cannot be undone.
      </p>

      <div>
        <button
         
          onClick={()=>{}}
        >
          Cancel
        </button>
        <button >
          Delete
        </button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
