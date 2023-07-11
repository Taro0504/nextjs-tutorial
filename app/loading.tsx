import { Box, Spinner } from "./common/components";

function Loading() {
    return (
        <Box justifyContent="center" display="flex">
            <Spinner color="orange.400" size="xl" />
        </Box>
    );
}

export default Loading;