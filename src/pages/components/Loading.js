import styled from "@emotion/styled";
import { CircularProgress } from '@mui/material';

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 170px);
`;

const Loading = () => {
    return <LoadingContainer>
        <CircularProgress size={50} />
    </LoadingContainer>
}

export default Loading;