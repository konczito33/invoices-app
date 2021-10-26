import { StyledStatus } from './Status.styles';
const Status = ({ status }) => {
  return (
    <StyledStatus status={status} className="status">
      <span />
      {status}
    </StyledStatus>
  );
};

export default Status;
